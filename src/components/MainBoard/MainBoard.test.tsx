/**
 * MainBoard tests
 * 
 */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import MainBoard from './MainBoard';

configure({ adapter: new Adapter() });

const props = {
  onClick: () => {},
  reference: () => {},
  style: {
    backgroundSize: 20,
    height: 20,
    width : 20 
  },
  children: () => {return 'test'},
}

const renderedComponent = shallow(<MainBoard {...props}/>);

describe('<MainBoard />', () => {
  it('should be defined', () => {
    expect(renderedComponent).toBeDefined();
  });

  it('should render all component\'s props', () => {
    const wrapper = mount(<MainBoard {...props}/>)

    expect(wrapper.props().onClick).toEqual(props.onClick);
    expect(wrapper.props().reference).toEqual(props.reference);
    expect(wrapper.props().style).toEqual(props.style);
    expect(wrapper.props().children).toEqual(props.children);
    wrapper.unmount();
  });
})
