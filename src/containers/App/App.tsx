import * as React from 'react';
import GameBoard from '../GameBoard/GameBoard';

interface IAppState {
  cell_size: number;
  game_height: number;
  game_width: number;
  isGameRunning: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: object){
    super(props);
    this.state = {
      cell_size: 20,
      game_height: 600,
      game_width: 800,
      isGameRunning: false,
    };
  }

  render(){
    const {
      cell_size,
      game_height,
      game_width,
      isGameRunning,
    } = this.state;

    return (
      <main>
        <GameBoard
          game_height={game_height}
          game_width={game_width}
          isGameRunning={isGameRunning}
          set_cell_size={cell_size}
        />
      </main>
    )
  }
};

export default App;