import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PlayerCountry from '../index';

describe('<PlayerCountry />', () => {

  const country = {
    'picture': 'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
    'code': 'SUI',
  };

  const renderedComponent = render(<PlayerCountry country={country}/>);

  it('should render an <img> tag.', () => {

    expect(renderedComponent.find('img').length).toEqual(1);
  });

  it('should render an <img> tag, with the picture as the src.', () => {

    expect(renderedComponent.find('img').prop('src')).toEqual(country.picture);
  });
});
