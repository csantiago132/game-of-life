/**
 * Controls tests
 * 
 */ 

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import Controls from './Controls';

configure({ adapter: new Adapter() });

const props = {
  startGame: () => {},
  stopGame: () => {},
  randomizeArtboard: () => {},
  clearArtboard: () => {},
  isRunning: true,
}

const renderedComponent = shallow(<Controls {...props}/>);

describe('<Controls />', () => {
  it('should render without crashing', () => {
    expect(renderedComponent).toBeDefined();
  });

  it('should render all component\'s props', () => {
    const wrapper = mount(<Controls {...props}/>)
    expect(wrapper.props().startGame).toEqual(props.startGame);
    expect(wrapper.props().stopGame).toEqual(props.stopGame);
    expect(wrapper.props().randomizeArtboard).toEqual(props.randomizeArtboard);
    expect(wrapper.props().clearArtboard).toEqual(props.clearArtboard);
    expect(wrapper.props().isRunning).toEqual(props.isRunning);
    wrapper.unmount();
  });

})