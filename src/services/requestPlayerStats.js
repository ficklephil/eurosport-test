import axios from 'axios';

import {PLAYER_STATS_JSON} from '../utils/constants';

export default async requestPlayerStats => {
  const response = await axios.get(PLAYER_STATS_JSON);
  return response.data;
}

