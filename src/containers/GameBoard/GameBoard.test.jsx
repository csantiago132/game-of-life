import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';
import Gameboard from './GameBoard';
import Controls from '../../components/Controls/Controls';
import { createClickEventObject } from '../../utils/tests/eventHelpers';

configure({ adapter: new Adapter() });

const props = {
  game_height: 600,
  game_width: 800,
  interval: 1000,
  isGameRunning: false,
  set_cell_size: 20,
}

const renderedComponent = shallow(<Gameboard {...props}/>);
const renderedComponentInstance = renderedComponent.instance()

describe('<Gameboard /> ', () => {
  it('should render without crashing', () => {
    expect(renderedComponent).toBeDefined();
  });

  it('should render all component\'s props', () => {
    expect(renderedComponentInstance.props.game_height).toEqual(600);
    expect(renderedComponentInstance.props.game_width).toEqual(800);
    expect(renderedComponentInstance.props.interval).toEqual(1000);
    expect(renderedComponentInstance.props.isGameRunning).toEqual(false);
    expect(renderedComponentInstance.props.set_cell_size).toEqual(20);
  });

  it('should have a makeEmptyBoard() method setting up the board', () => {
    const type = Object();
    //renderedComponent.instance().makeEmptyBoard();
    expect(renderedComponentInstance.board).toMatchObject(type);
  });

  it('should have a getElementOffset() method setting up the board', () => {
    const wrapper = mount(<Gameboard />)
    const type = Object({
      xAxis: 0,
      yAxis: 0, 
    });
    expect(wrapper.instance().getElementOffset()).toEqual(type);
  });

  it('should have a makeCells() method that returns an artboard', () => {
    const type = Object();
    renderedComponentInstance.makeCells();
    expect(renderedComponent).toMatchObject(type);
  });
  
  it('should call handleClick() when clicked', () => {
    const onClick = jest.fn(() => createClickEventObject({ x: 0, y: 0 }));
    
    expect(renderedComponentInstance.handleClick).toBeDefined();
    expect(onClick).toHaveBeenCalledTimes(0);
    renderedComponent.simulate('touchStart', onClick());
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  
  it('should start the game when runGame() is called', () => {
    const onClick = jest.fn(() => renderedComponent.runGame);
  
    expect(renderedComponentInstance.runGame).toBeDefined();
    expect(renderedComponent.state('isRunning')).toBe(false);
    renderedComponent.simulate('click', onClick());
    renderedComponent.setState({ isRunning: true });
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(renderedComponent.state('isRunning')).toBe(true);
  });

  it('should start the game when stopGame() is called', () => {
    const onClick = jest.fn(() => renderedComponent.stopGame);
  
    expect(renderedComponent.instance().stopGame).toBeDefined();
    renderedComponent.setState({ isRunning: true });
    renderedComponent.simulate('click', onClick());
    renderedComponent.setState({ isRunning: false });
    expect(renderedComponent.state('isRunning')).toBe(false);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should run an iteration when "runIteration()" is called', () => {
    const onClick = jest.fn(() => renderedComponent.instance.runIteration);
    
    expect(renderedComponentInstance.runIteration).toBeDefined();
    renderedComponent.simulate('click', onClick);
    expect(renderedComponent.state('cells')).toEqual(Array());
  });

  it('should calculate it\'s neighbors with the "calculateNeighbors()"', () => {
    const stateArray = renderedComponent.instance().board;
    
    expect(renderedComponentInstance.calculateNeighbors).toBeDefined();
    renderedComponentInstance.calculateNeighbors(stateArray, 1, 3);
  });

  it('should have an interval set by "handleIntervalChange()" method', () => {
    const controls = shallow(<Controls/>);

    expect(renderedComponentInstance.handleIntervalChange).toBeDefined();
    controls.find('[data-testid="setInterval"]').simulate('click', { currentTarget: {value: 2000}});
    renderedComponent.setState({'interval': 2000})
    expect(renderedComponent.state('interval')).toEqual(2000)
  });

  it('should clear the board with "handleClear()"', () => {
    const controls = shallow(<Controls/>);
    const onClick = jest.fn(() => controls.find('[data-testid="clearArtboard"]'));
    
    expect(renderedComponentInstance.handleClear).toBeDefined();
    expect(onClick).toHaveBeenCalledTimes(0); 
    controls.find('[data-testid="clearArtboard"]').simulate('click');  
    expect(renderedComponent.state('cells')).toEqual(Array());
  });

  it('should randomized the gameboard cells with "handleRandom()"', () => {
    const controls = shallow(<Controls/>);
    const onClick = jest.fn(() => controls.find('[data-testid="clearArtboard"]'));

    expect(renderedComponentInstance.handleRandom).toBeDefined();
    expect(onClick).toHaveBeenCalledTimes(0);
    expect(renderedComponent.state('cells')).toEqual(Array());
  });
});





