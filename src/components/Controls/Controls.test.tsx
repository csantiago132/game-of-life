import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, render } from 'enzyme';
import Controls from './Controls';
import { createClickEventObject } from '../../utils/tests/eventHelpers';

configure({ adapter: new Adapter() });

const props = {
  startGame: () => {},
  stopGame: () => {},
  randomizeArtboard: () => {},
  clearArtboard: () => {},
  currentValue: '1000',
  handleInputFieldChange: () => {},
  isRunning: true,
}

const renderedComponent = shallow(<Controls {...props}/>);
const renderedComponentInstance = renderedComponent.instance()

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
    expect(wrapper.props().currentValue).toEqual(props.currentValue);
    expect(wrapper.props().handleInputFieldChange).toEqual(props.handleInputFieldChange);
    expect(wrapper.props().isRunning).toEqual(props.isRunning);
    wrapper.unmount();
  });

  it('should render 3 buttons', () => {
    expect(renderedComponent.find('.button')).toHaveLength(3);
  });

  it('should conditionally render start/stop game buttons', () => {
    const button = renderedComponent.find('.button').at(1);

    expect(renderedComponent.find('.button').at(0).text()).toBe('Stop Game');
    button.simulate('click');
    expect(renderedComponent.find('.button').at(2).text()).toBe('Start Over');
  });

  it('should be able to update its input value', () => {
    const wrapper = mount(<Controls {...props}/>)
    const input = wrapper.find('[data-testid="setInterval"]')
    input.simulate('change', {
        currentTarget: {value: '1000'}
    });

    expect(wrapper.props().currentValue).toBe('1000')
    wrapper.unmount();
  });
})