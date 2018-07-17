import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PlayerLastMatch from '../index';

describe('<PlayerLastMatch />', () => {

  const lastMatchScores = [
    1, 1, 1, 0, 1
  ];

  const renderedComponent = shallow(<PlayerLastMatch lastMatchScores={lastMatchScores}/>);

  it('should render a <LastMatchScoreTableCell> tag for each score.', () => {

    expect(renderedComponent.find('LastMatchScoreTableCell').length).toEqual(lastMatchScores.length);
  });

});
