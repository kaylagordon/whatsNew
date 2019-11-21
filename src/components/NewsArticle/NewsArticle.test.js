import React from 'react';
import ReactDOM from 'react-dom';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {
  it('should correctly match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow(<NewsArticle
      image = {'image-url'}
      headline = {'Headline Text'}
      description = {'This is the description.'}
      link = {'link-url'}
    />);
    expect(wrapper).toMatchSnapshot();
  })
});
