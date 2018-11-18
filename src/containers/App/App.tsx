/**
 * App container
 * 
 * Main wrapper of the app, controls main settings of the game
 * 
 */

import * as React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import './App.css';

interface IAppState {
  cell_size: number;
  game_height: number;
  game_width: number;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: object){
    super(props);
    this.state = {
      cell_size: 20,
      game_height: 600,
      game_width: 800,
    };
  }

  render(){
    const {
      cell_size,
      game_height,
      game_width,
    } = this.state;

    return (
      <section className='game_container' role='main'>
        <GameBoard
          game_height={game_height}
          game_width={game_width}
          set_cell_size={cell_size}
        />
      </section>
    )
  }
};

export default App;