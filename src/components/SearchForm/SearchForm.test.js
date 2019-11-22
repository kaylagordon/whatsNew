import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  let wrapper;
  let startState;
  let mockEvent;
  let mockSearchNews;

  beforeEach(() => {
    mockSearchNews = jest.fn();
    wrapper = shallow(<SearchForm
      searchNews = {mockSearchNews}
    />);
    startState = {searchQuery: 'banana'}
    wrapper.setState(startState);
    mockEvent = {
      target: {value: 'pizza'},
      preventDefault: jest.fn()
    }
  });

  it('should correctly match the snapshot with all the data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should reset state when resetSearchQuery is called', () => {
    wrapper.instance().resetSearchQuery();
    expect(wrapper.state('searchQuery')).toEqual('')
  })

  it('should update state when updateSearchQuery is called', () => {
    wrapper.instance().updateSearchQuery(mockEvent);
    expect(wrapper.state('searchQuery')).toEqual('pizza');
  });

  it('should call SearchNews when submitSearch is called with state as argument', () => {
    wrapper.instance().submitSearch(mockEvent);
    expect(mockSearchNews).toHaveBeenCalledWith('banana');
  });

});
