import React from 'react';
import {shallow} from 'enzyme';

import Player from '../index';

describe('<Player />', () => {

  const player = {
    'firstname': 'Stan',
    'lastname': 'Wawrinka',
    'shortname': 'S.WAW',
    'sex': 'M',
    'country': {
      'picture': 'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
      'code': 'SUI'
    },
    'picture': 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg',
    'data': {
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
    }
  };

  const renderedComponent = shallow(<Player player={player}/>);

  const playerName = `${player.firstname} ${player.lastname}`;

  it('should render an <Img> tag, with the picture as the src.', () => {

    expect(renderedComponent.find('Img').prop('src')).toEqual(player.picture);
  });

  it('should render an <Img> tag, with an alt attribute.', () => {

    expect(renderedComponent.find('Img').prop('alt')).toEqual(playerName);
  });

  it('should render a <PlayerName> tag with the player name as firstName lastName.', () => {

    expect(renderedComponent.find('PlayerName').children().text()).toEqual(playerName);
  });

  it('should render a <PlayerCountry> tag.', () => {

    expect(renderedComponent.find('PlayerCountry').length).toBeDefined();
  });

  it('should render a <PlayerStatistics> tag.', () => {

    expect(renderedComponent.find('PlayerStatistics').length).toBeDefined();
  });
});
