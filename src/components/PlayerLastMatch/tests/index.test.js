import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PlayerLastMatch from '../index';

describe('<PlayerLastMatch />', () => {

  const lastMatchScores = [
    1, 1, 1, 0, 1
  ];

  const renderedComponent = render(<PlayerLastMatch lastMatchScores={lastMatchScores}/>);

  it('should render an <div> tag.', () => {

    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
