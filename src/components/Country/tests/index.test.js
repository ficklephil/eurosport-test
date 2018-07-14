import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Country from '../index';

describe('<Country />', () => {

  const country = {
    'picture': 'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
    'code': 'SUI',
  };

  const renderedComponent = shallow(<Country country={country}/>);

  // it('should render a <div> tag.', () => {
  //
  //   expect(renderedComponent.find('CountyNameWrapper').length).toEqual(3);
  // });
});
