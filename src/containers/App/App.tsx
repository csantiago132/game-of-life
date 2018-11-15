import * as React from 'react';
import GameBoard from '../GameBoard/GameBoard';

interface IAppState {
  boardGameSettings: {
    cell_size: number;
    game_height: number;
    game_width: number;
    setInterval: number;
  }
  isGameRunning: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: object){
    super(props);
    this.state = {
      boardGameSettings: {
        cell_size: 20,
        setInterval: 100,
        game_height: 600,
        game_width: 800
      },
      isGameRunning: false,
    };
  }

  render(){
    const {
      boardGameSettings: {
        cell_size,
        setInterval,
        game_height,
        game_width
      },
      isGameRunning,
    } = this.state;

    return (
      <main>
        <GameBoard
          game_height={game_height}
          game_width={game_width}
          interval={setInterval}
          isGameRunning={isGameRunning}
          set_cell_size={cell_size}
        />
      </main>
    )
  }
};

export default App;