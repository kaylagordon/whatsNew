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
});
