/**
 * Cells tests
 *  
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Cells from './Cells';

describe('Cells component', () => {
  beforeEach(() => {
    const props = {
      x: 20,
      y: 20
    };
    const div = document.createElement('div');
    const Component = () => <Cells cell_size={20} x={props.x} y={props.y}/>;
    ReactDOM.render(<Component/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    expect(Cells).toBeDefined()
  });
})
