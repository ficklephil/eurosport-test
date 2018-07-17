import { getCountryName} from '../countryUtils';

describe('countries', () => {

  const countries = [
    {
      code: 'SUI',
      name: 'Switzerland',
    },
    {
      code: 'ESP',
      name: 'Spain',
    }
  ];

  it('Should take in the country code, and return human readable country name.', () => {

    const countryCode = 'SUI';
    const country = countries.filter(country => country.code === countryCode)[0];

    expect(getCountryName(countryCode)).toEqual(country.name);
  });
});
