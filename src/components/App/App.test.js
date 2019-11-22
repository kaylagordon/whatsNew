import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

let wrapper;

describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should correctly match the snapshot with all the data passed correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when changeNewsSource is called', () => {
    const mockSource = {mockSourceKey: 'value'};
    
    wrapper.instance().changeNewsSource(mockSource);
    expect(wrapper.state('news')).toEqual(mockSource);
  });

  it('should update state when searchNews is called', () => {
    const mockQuery = 'there';
    const startState = [{title: 'Article1', description: 'Hi there.'}, {title: 'Article1', description: 'Hello there.'},
    {title: 'Article1', description: 'Hi.'}
    ];
    const endState = [{title: 'Article1', description: 'Hi there.'}, {title: 'Article1', description: 'Hello there.'}
    ];

    wrapper.setState({ news: startState });
    expect(wrapper.state('news')).toEqual(startState);

    wrapper.instance().searchNews(mockQuery);
    expect(wrapper.state('news')).toEqual(endState);
  });
});
