import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PlayerStatistics from '../index';

describe('<PlayerStatistics />', () => {

  const statistics = {
    'rank': 21,
    'points': 1784,
    'weight': 81000,
    'height': 183,
    'age': 33,
    'last': [
      1,
      1,
      1,
      0,
      1
    ]
  };

  const renderedComponent = shallow(<PlayerStatistics statistics={statistics}/>);

  it('should render a <div> tag.', () => {

    expect(renderedComponent.find('div').length).toEqual(3);
  });
});
