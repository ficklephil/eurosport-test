import React from 'react';
import {shallow} from 'enzyme';

import Players from '../index';

describe('<Players />', () => {

  const players = [
    {
      'shortname': 'S.WAW'
    }, {
      'shortname': 'R.NAD'
    }
  ];

  const renderedComponent = shallow(<Players players={players}/>);

  it('should render a <Players> tag for each player.', () => {

    expect(renderedComponent.find('Player').length).toEqual(players.length);
  });
});
