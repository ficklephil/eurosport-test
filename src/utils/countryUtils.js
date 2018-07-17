export function getCountryName(countryCode) {

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

  const country = countries.filter(country => country.code === countryCode)[0];

  return country.name;
}

export default function countryUtils() {

  return {
    getCountryName,
  };
}

