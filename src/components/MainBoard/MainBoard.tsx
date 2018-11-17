/**
 * MainBoard
 * 
 * Main game board of the application
 * 
 */
import * as React from 'react';
import './MainBoard.css';

interface IMainBoard {
  onClick: (arg: React.MouseEvent<any>) => void;
  reference: (args: React.ReactNode) => void;
  style: {
    backgroundSize: number;
    height: number;
    width : number; 
  }
  children: any;
}

const MainBoard: React.SFC<IMainBoard> = (props) => {
  const { onClick, reference, style, children} = props;
  return (
    <section className="game_board"
      onClick={onClick}
      ref={reference}
      role='button'
      style={{ 
        backgroundSize: `${style.backgroundSize}px ${style.backgroundSize}px`,
        height: `${style.height}px`, 
        width: `${style.width}px`,
        minWidth: `${style.width}px`,
        maxWidth: `${style.width}px`  
      }}
    >
      {children}
    </section>
  )
}

export default MainBoard;