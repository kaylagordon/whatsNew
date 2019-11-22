import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  it('should correctly match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow(<Menu
      changeNewsSource = {jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should call changeNewsSource on button click', () => {
    const mockChangeNewsSource = jest.fn();
    const wrapper = shallow(<Menu
      changeNewsSource = {mockChangeNewsSource}
      local = 'local'
      technology = 'tech'
      entertainment = 'entertainment'
      science = 'science'
      health = 'health'
    />)

    wrapper.find('.local-button').simulate('click');
    expect(mockChangeNewsSource).toHaveBeenCalledWith('local');

    wrapper.find('.technology-button').simulate('click');
    expect(mockChangeNewsSource).toHaveBeenCalledWith('tech');

    wrapper.find('.entertainment-button').simulate('click');
    expect(mockChangeNewsSource).toHaveBeenCalledWith('entertainment');

    wrapper.find('.science-button').simulate('click');
    expect(mockChangeNewsSource).toHaveBeenCalledWith('science');

    wrapper.find('.health-button').simulate('click');
    expect(mockChangeNewsSource).toHaveBeenCalledWith('health');
  })
});
