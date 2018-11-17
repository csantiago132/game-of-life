import * as React from 'react';
import './Controls.css';
import logoSvg from '../../containers/App/assets/logo.svg';
interface IControls {
  clearArtboard: () => any;
  isRunning: boolean;
  randomizeArtboard: () => any;
  startGame: () => any;
  stopGame: () => any;
}

const Controls: React.SFC<IControls> = (props) => {
  const {
    startGame,
    stopGame,
    randomizeArtboard,
    clearArtboard,
    isRunning
  } = props;

  const controlCopy = {
    generate_pattern: "Generate Pattern",
    start_game: "Start Game",
    stop_game: "Stop Game",
    reset_game: "Start Over"
  }
  return (
    <header className="controls">
      <article className='controls__content'>
        <h1>Conway's Game of Life</h1>
          <p>
            The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
          </p>
          <p>
            To play the game, <b>click on "{controlCopy.generate_pattern}"</b> to choose an initial pattern.
          </p>
          <p>
            Find a pattern you like, then, <b>click "{controlCopy.start_game}"</b>.
          </p>
          <p>
            Follow the pattern and click on the cells until <b>one of three things happens:</b>
          </p>
          <ul>
            <li><b>All cells are dead.</b></li>
            <li><b>No cells change from one generation to the next.</b></li>
            <li><b>The pattern flips back and forth between two or more positions.</b></li>
          </ul>
      </article>
      <article className='controls__main-controls'>
      {isRunning ? (
        <button 
          data-testid="stopGame"
          className="controls__main-controls__button" 
          onClick={stopGame}
        >
          {controlCopy.stop_game}
        </button> 

      ) : (
        <React.Fragment>
          <button
            data-testid="randomizeArtboard"
            className="controls__main-controls__button" 
            onClick={randomizeArtboard}
          >
            {controlCopy.generate_pattern}
          </button>
          <button
            data-testid="startGame"
            className="controls__main-controls__button" 
            onClick={startGame}
          >
            {controlCopy.start_game}
          </button>
          <button 
            data-testid="clearArtboard"
            className="controls__main-controls__button" 
            onClick={clearArtboard}
          >
            {controlCopy.reset_game}
          </button>
        </React.Fragment>
      )}
      </article>
      <aside className='controls__aside'>
        <img src={logoSvg} className='react-img' alt='logoSvg'/>
        <p>
          See the code on &nbsp;
        </p>
        <a 
          href='https://github.com/csantiago132/game-of-life' 
          target='_blank'
          rel="noopener" 
        >
          github
        </a>
      </aside>
    </header>
  )
}

export default Controls;