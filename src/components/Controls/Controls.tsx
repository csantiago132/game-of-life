import * as React from 'react';

interface IControls {
  clearArtboard: () => any;
  currentValue: string;
  handleInputFieldChange: any;
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
    currentValue,
    handleInputFieldChange,
    isRunning
  } = props;

  return (
    <div className="controls">
      Update every 
      <input
        data-testid='setInterval' 
        value={currentValue} 
        onChange={handleInputFieldChange} 
      /> 
      msec
      {isRunning ? (
        <button 
          className="button" 
          onClick={stopGame}
        >
          Stop Game
        </button> 
      ) : (
        <button 
          className="button" 
          onClick={startGame}
        >
          Start Game
        </button>
        )
      }
      <button 
        className="button" 
        onClick={randomizeArtboard}
      >
        Randomize Artboard
      </button>
      <button 
        data-testid="clearArtboard"
        className="button" 
        onClick={clearArtboard}
      >
        Start Over
      </button>
    </div>
  )
}

export default Controls;