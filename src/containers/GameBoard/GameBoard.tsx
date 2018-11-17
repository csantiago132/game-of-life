import * as React from 'react';
import Cells from '../../components/Cells/Cells';
import Controls from '../../components/Controls/Controls';
import './GameBoard.css';

interface IGameBoardState {
  artboard_height: number;
  artboard_width: number;
  cells: any;
  cell_size: number;
  interval: any;
  isRunning: any;
}

interface IGameBoardProps {
  game_height: number;
  game_width: number;
  isGameRunning: boolean;
  set_cell_size: number;
}

class GameBoard extends React.Component<IGameBoardProps, IGameBoardState> {
    
    public rows: number;
    public cols: number;
    public board: Array<any>;
    public boardRef: any;
    public timeoutHandler: number | undefined | null;

    constructor(props: IGameBoardProps) {
        super(props);
        
        const { game_height, game_width, set_cell_size } = this.props;
        /**
         * main settings of the game are placed here
         */
        this.state = {
          artboard_height: game_height,
          artboard_width: game_width,
          cells: [],
          cell_size: set_cell_size,
          interval: 1000,
          isRunning: false,
        }

        /**
         * sets the amount of columns based on state settings
         */
        this.cols = this.state.artboard_width / this.state.cell_size;
        
        /**
         * sets the amount of rows based on state settings
         */
        this.rows = this.state.artboard_height / this.state.cell_size;
        
        /**
         * sets the main game board 
         * needs to stay below this.cols & this.rows to read its values
         */
        this.board = this.makeEmptyBoard();
    }

    makeEmptyBoard(){
      let board: any = [];
      for (let yAxis = 0; yAxis < this.rows; yAxis++) {
          board[yAxis] = [];
          for (let xAxis = 0; xAxis < this.cols; xAxis++) {
              board[yAxis][xAxis] = false;
          }
      }

      return board;
    }

    getElementOffset() {
        const rect: any = this.boardRef.getBoundingClientRect();
        const doc: any = document.documentElement;

        return {
            xAxis: (rect.left + window.pageXOffset) - doc.clientLeft,
            yAxis: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    makeCells() {
      /**
       * makeCells method
       * 
       * @returns { Array } number
       * 
       * nested loops; I ask myself if the operation 
       * it's performing needs to be optimized with a 
       * different algorithm. I think this is ok because 
       * data size will very rarely be big enough to make 
       * an impactful difference.
       * 
       */
      let cells: Array<any> = [];

      for (let yAxis = 0; yAxis < this.rows; yAxis++) {
        for (let xAxis = 0; xAxis < this.cols; xAxis++) {
          if (this.board[yAxis][xAxis]) {
            cells.push({ xAxis, yAxis });
          }
        }
      }

      return cells;
    }

    handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      /** 
       * handleClick method
       * 
       * listens to events of the main board 
       * when user presses one of the squares
       * 
       * @param { event } event
       * @returns { function } 
       * 
       */
      const { cell_size } = this.state;
      const elemOffset = this.getElementOffset();
      const offsetX = event.clientX - elemOffset.xAxis;
      const offsetY = event.clientY - elemOffset.yAxis;
      
      const xAxis = Math.floor(offsetX / cell_size);
      const yAxis = Math.floor(offsetY / cell_size);

      if (xAxis >= 0 && xAxis <= this.cols && yAxis >= 0 && yAxis <= this.rows) {
        this.board[yAxis][xAxis] = !this.board[yAxis][xAxis];
      }

      this.setState({ cells: this.makeCells() });
    }

    runGame = () => {
      /**
       * Starts the game
       * 
       * @returns { function } boolean
       * 
       */
      this.setState({ isRunning: true });
      this.runIteration();
    }

    stopGame = () => {
      /**
       * Stops the game
       * 
       * @returns { false }
       * 
       */
      this.setState({ isRunning: false });
      
      if (this.timeoutHandler) {
        window.clearTimeout(this.timeoutHandler);
        this.timeoutHandler = null;
      }
    }

    runIteration() {
      /**
       * Sets random pattern on the board to get the game ready
       * 
       * @returns { function } 
       * 
       */
      let newBoard = this.makeEmptyBoard();

      for (let yAxis = 0; yAxis < this.rows; yAxis++) {
        for (let xAxis = 0; xAxis < this.cols; xAxis++) {
          let neighbors = this.calculateNeighbors(this.board, xAxis, yAxis);
            if (this.board[yAxis][xAxis]) {
              if (neighbors === 2 || neighbors === 3) {
                newBoard[yAxis][xAxis] = true;
              } else {
                newBoard[yAxis][xAxis] = false;
              }
            } else {
              if (!this.board[yAxis][xAxis] && neighbors === 3) {
                newBoard[yAxis][xAxis] = true;
              }
            }
          }
        }

        this.board = newBoard;
        this.setState({ cells: this.makeCells() });

        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.interval);
    }

    calculateNeighbors(board: any, xAxis: number, yAxis: number) {
      /**
       * Calculate the number of neighbors at point (x, y)
       * 
       * @param { board } array 
       * @param { xAxis } number 
       * @param { yAxis } number
       *  
       * @returns { number }
       * 
       */
      let neighbors = 0;
      const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
      for (let i = 0; i < dirs.length; i++) {
          const dir = dirs[i];
          let y1 = yAxis + dir[0];
          let x1 = xAxis + dir[1];

          if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
              neighbors++;
          }
      }

      return neighbors;
    }

    handleIntervalChange = (event: React.FormEvent<HTMLInputElement>) => {
      /**
       * handleIntervalChange
       * 
       * @param { event }
       *  
       * @returns { function }
       * 
       */
      this.setState({ interval: event.currentTarget.value });
    }

    handleClear = () => {
      /**
       * handle Clear
       * 
       * @returns { function }
       * 
       */
      this.board = this.makeEmptyBoard();
      this.setState({ cells: this.makeCells() });
    }

    handleRandom = () => {
      /**
       * handleRandom method
       * 
       * sets a random pattern on the game board, user can
       * click and choose different patterns
       * 
       * sets an array on the sate
       * 
       * @returns { function }
       * 
       */
      for (let yAxis = 0; yAxis < this.rows; yAxis++) {
        for (let xAxis = 0; xAxis < this.cols; xAxis++) {
          this.board[yAxis][xAxis] = (Math.random() >= 0.5);
        }
      }

      this.setState({ cells: this.makeCells() });
    }

    render() {
      const { 
        artboard_height, 
        artboard_width, 
        cells, 
        cell_size,
        interval, 
        isRunning, 
      } = this.state;

      return (
        <div>
          <div className="game_board"
            onClick={this.handleClick}
            ref={(n) => { this.boardRef = n; }}
            role='button'
            style={{ 
              backgroundSize: `${cell_size}px ${cell_size}px`,
              height: artboard_height, 
              width: artboard_width, 
            }}
          >
            {cells.map((cell: { xAxis: number, yAxis: number }) => (
                <Cells 
                  key={`${cell.xAxis},${cell.yAxis}`} 
                  cell_size={this.state.cell_size} 
                  x={cell.xAxis} 
                  y={cell.yAxis} 
                />
            ))}
          </div>
          <Controls
            startGame={this.runGame}
            stopGame={this.stopGame}
            randomizeArtboard={this.handleRandom}
            clearArtboard={this.handleClear}
            currentValue={interval}
            handleInputFieldChange={this.handleIntervalChange}
            isRunning={isRunning}
          />
        </div>
      );
    }
}


export default GameBoard;