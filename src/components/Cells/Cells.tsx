/**
 * Cells component
 * 
 * the component that makes the cells appear and disappear
 *  
 * @prop { cell_size } number 
 * @prop { x } number 
 * @prop { y } number
 *  
 */

import * as React from 'react';
import './Cells.css';

interface ICellsProps {
  cell_size: number;
  x: number;
  y: number;
}

const Cells: React.SFC<ICellsProps> = (props) => {
  const { cell_size, x, y } = props;
  return(
    <div className="game_cells" style={{
        left: `${cell_size * x + 1}px`,
        top: `${cell_size * y + 1}px`,
        width: `${cell_size - 1}px`,
        height: `${cell_size - 1}px`,
      }} 
    />
  );
}

export default Cells;