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

/**
 * TODO : Test Component takes in stats.
 * Test Component renders Players based on how many players stats are input.
 * Should say no player stats to display if object is empty.
 * We don't need to tests the proptype is here, as Prop Type is part of react, but we should check that
 * the component renders based on input.
 * @type {{stats: *}}
 */
Players.propTypes = {
  players: PropTypes.array,
};

export default Players;
