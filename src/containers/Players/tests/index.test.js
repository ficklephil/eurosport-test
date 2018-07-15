import React from 'react';
import {shallow, mount, render} from 'enzyme';

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
