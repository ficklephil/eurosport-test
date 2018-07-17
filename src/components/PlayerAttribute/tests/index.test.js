import React from 'react';
import {shallow} from 'enzyme';

import PlayerAttribute from '../index';

describe('<PlayerAttribute />', () => {

  const playerAttribute = {
    rank: 'Rank',
    value: 42,
  };

  const renderedComponent = shallow(<PlayerAttribute name={playerAttribute.rank} value={playerAttribute.value}/>);

  it('should render a <Attribute> tag.', () => {

    expect(renderedComponent.find('Attribute').length).toBeDefined();
  });

  it('should render a <Value> tag with the attribute value.', () => {

    expect(renderedComponent.find('Value').children().text()).toEqual(`${playerAttribute.value}`);
  });
});
