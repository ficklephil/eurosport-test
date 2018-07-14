import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PlayerStat from '../../components/PlayerStat';

const PlayerStatsWrapper = styled.div`
  border: 1px solid red;
`;

const PlayerStats = ({players}) => {

  return (
    <PlayerStatsWrapper>
      {
        players.map((player) => (
          <PlayerStat player={player} key={player.shortname}></PlayerStat>
        ))
      }
    </PlayerStatsWrapper>
  );
};

/**
 * TODO : Test Component takes in stats.
 * Test Component renders PlayerStats based on how many players stats are input.
 * Should say no player stats to display if object is empty.
 * We don't need to tests the proptype is here, as Prop Type is part of react, but we should check that
 * the component renders based on input.
 * @type {{stats: *}}
 */
PlayerStats.propTypes = {
  players: PropTypes.array,
};

export default PlayerStats;
