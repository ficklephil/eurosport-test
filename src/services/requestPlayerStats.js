import axios from 'axios';

import {PLAYER_STATS_JSON} from '../utils/constants';

//TODO : Pass back human readable error message to UI.
export default async requestPlayerStats => {
  const response = await axios.get(PLAYER_STATS_JSON);
  return response.data;
}

