/**
 * Event helper util functions
 * 
 * simulates an element being clicked by a mouse
 * 
 */

const createClientXY = (x: number, y: number) => ({ 
  /**
   * Event helper util functions
   * 
   * simulates an element being clicked by a mouse
   * 
   * @param { x } number
   * @param { y } number
   * 
   * @returns { clientX: x, clientY: y }
   * 
   */
  clientX: x, clientY: y 
});

 
export const createStartTouchEventObject = ({ x = 0, y = 0 }) => ({ 
  /**
   * createStartTouchEventObject
   * @param { x } number
   * @param { y } number
   * @returns { event.touches:[createClientXY] } 
   * 
   */
  touches: [createClientXY(x, y)] 
});

export const createClickEventObject = ({ x = 0, y = 0 }) => ({ 
  /**
   * createStartTouchEventObject
   * @param { x } number
   * @param { y } number
   * @returns { event.touches:[createClientXY] } 
   * 
   */
  nativeEvent: [createClientXY(x, y)]
});


export const createMoveTouchEventObject = ({ x = 0, y = 0}) => ({ 
  /**
   * createMoveTouchEventObject
   * @param { x } number
   * @param { y } number
   * @returns { event.changedTouches:[createClientXY]} 
   * 
   */
  changedTouches: [createClientXY(x, y)] 
});