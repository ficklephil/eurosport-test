import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Player from '../../components/Player';

const PlayersWrapper = styled.div`
`;

const Players = ({players}) => {

  return (
    <PlayersWrapper>
      {
        players.map((player) => (
          <Player player={player} key={player.shortname}></Player>
        ))
      }
    </PlayersWrapper>
  );
};

Players.propTypes = {
  players: PropTypes.array,
};

export default Players;
