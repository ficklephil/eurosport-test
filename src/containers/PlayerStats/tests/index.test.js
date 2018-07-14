import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PlayerStats from '../index';

describe('<PlayerStats />', () => {

  const players = [
    {
      'shortname': 'S.WAW'
    }, {
      'shortname': 'R.NAD'
    }
  ];

  const renderedComponent = shallow(<PlayerStats players={players}/>);

  it('should render a <PlayerStat> tag for each player.', () => {

    expect(renderedComponent.find('PlayerStat').length).toEqual(players.length);
  });

  // it('should render a <SelectField> with an onChange attribute', () => {
  //
  //   expect(renderedComponent.find('SelectField').prop('onChange')).toBeDefined();
  // });
  //
  // it('should render a <SelectField> with a value attribute', () => {
  //
  //   expect(renderedComponent.find('SelectField').prop('value')).toBeDefined();
  // });
  //
  // it('should render a <SelectField> with a style attribute', () => {
  //
  //   expect(renderedComponent.find('SelectField').prop('style')).toBeDefined();
  // });
});
