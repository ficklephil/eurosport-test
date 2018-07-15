import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PlayerStat from '../index';

describe('<Players />', () => {

  const player = {
    'shortname': 'S.WAW'
  };

  const renderedComponent = shallow(<PlayerStat player={player}/>);

  it('should render a <p> tag for each player.', () => {

    expect(renderedComponent.find('p').length).toEqual(3);
  });
});
