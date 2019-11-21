import React from 'react';
import ReactDOM from 'react-dom';
import NewsContainer from './NewsContainer';
import { shallow } from 'enzyme';

describe('NewsContainer', () => {
  it('should correctly match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow(<NewsContainer
      news = {[{
        id: 2,
        headline: 'Headline',
        description: 'This is the description',
        link: 'This is a link url.',
        image: 'This is the image url.'
      },
      {
        id: 1,
        headline: 'Headline2',
        description: 'This is the other description',
        link: 'This is anoth link url.',
        image: 'This is the other image url.'
      }
    ]}
    />);
    expect(wrapper).toMatchSnapshot();
  })
});
