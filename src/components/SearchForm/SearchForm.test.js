import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  it('should correctly match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should call searchNews when button is clicked', () => {
    const mockSearchNews = jest.fn();
    const wrapper = shallow(<SearchForm searchNews = {mockSearchNews} />);
    const document = {
      id: 'search-input',
      value: 'search query'
    };

    wrapper.find('button').simulate('click');
    expect(mockSearchNews).toHaveBeenCalled();
  })
});
