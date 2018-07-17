import React from 'react';
import {shallow} from 'enzyme';

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

  // TODO : Harden later on.
  it('should render five <PlayerAttribute> tags, one of each player attribute.', () => {

    expect(renderedComponent.find('PlayerAttribute').length).toEqual(5);
  });
});
