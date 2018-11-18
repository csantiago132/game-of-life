/**
 * App tests
 * 
 */ 

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from './App';
import Gameboard from '../GameBoard/GameBoard';

configure({ adapter: new Adapter() });

const renderedComponent = shallow(<App />);

describe('<App/> ', () => {
  it('should render without crashing', () => {
    expect(renderedComponent).toBeDefined();
  });

  it('should render the <Gameboard /> component', () => {
    expect(renderedComponent.find(Gameboard)).toHaveLength(1);
  });

  it('should have a default state defined', () => {
    expect(renderedComponent.state('cell_size')).toBe(20);
    expect(renderedComponent.state('game_height')).toBe(600);
    expect(renderedComponent.state('game_width')).toBe(800);
  });
})
