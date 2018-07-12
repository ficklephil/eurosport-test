import mockAxios from 'axios';

import {PLAYER_STATS_JSON} from '../utils/constants';

import requestPlayerStats from './requestPlayerStats';

describe('requestPlayerStats', () => {

  beforeEach(() => {

    /**
     * Note : I like to keep reference to the structure of the data within the tests, so that it's easier
     * to re-write unit tests in the future.
     */
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        'players': [
          {
            'firstname': 'Stan',
            'lastname': 'Wawrinka',
            'shortname': 'S.WAW',
            'sex': 'M',
            'country': {
              'picture': 'https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png',
              'code': 'SUI'
            },
            'picture': 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg',
            'data': {
              'rank': 21,
              'points': 1784,
              'weight': 81000,
              'height': 183,
              'age': 33,
              'last': [
                1,
                1,
                1,
                0,
                1
              ]
            }
          },
        ]
      }
    }));
  });

  it('Should use the player stats path to make the async call.', async () => {

    await requestPlayerStats();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it('Should make an async call to request the player stats.', async () => {

    await requestPlayerStats();
    expect(mockAxios.get).toHaveBeenCalledWith(PLAYER_STATS_JSON);
  });
});
