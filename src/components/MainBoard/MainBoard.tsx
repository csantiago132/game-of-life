/**
 * MainBoard component
 * 
 * Main game board of the application
 * 
 * @prop { children } any
 * @prop { onClick } function
 * @prop { reference } function
 * @prop { style } object
 * 
 */

import * as React from 'react';
import './MainBoard.css';

interface IMainBoard {
  children: any;
  onClick: (arg: React.MouseEvent<any>) => void;
  reference: (args: React.ReactNode) => void;
  style: {
    backgroundSize: number;
    height: number;
    width : number; 
  }
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