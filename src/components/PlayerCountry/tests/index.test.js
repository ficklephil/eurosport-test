import React from 'react';
import {shallow} from 'enzyme';

import PlayerCountry from '../index';

describe('<PlayerCountry />', () => {

  const country = {
    'picture': 'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
    'code': 'SUI',
  };

  const renderedComponent = shallow(<PlayerCountry country={country}/>);

  it('should render an <Img> tag.', () => {

    expect(renderedComponent.find('Img').length).toEqual(1);
  });

  it('should render an <Img> tag, with the picture as the src.', () => {

    expect(renderedComponent.find('Img').prop('src')).toEqual(country.picture);
  });

  it('should render an <CountyName> tag.', () => {

    expect(renderedComponent.find('CountyName').length).toBeDefined();
  });
});
