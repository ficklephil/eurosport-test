import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayerLastMatch from "../PlayerLastMatch";
import PlayerAttribute from "../PlayerAttribute";

const PlayerStatisticsWrapper = styled.div``;

const PlayerAttributes = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding: 4px 0 0 0;
  `;

const PlayerStatistics = ({statistics}) => {

  return (
    <PlayerStatisticsWrapper>
      <PlayerAttributes>
        <PlayerAttribute name={'Rank'} value={statistics.rank} />
        <PlayerAttribute name={'Points'} value={statistics.points} />
        <PlayerAttribute name={'Weight'} value={statistics.weight} />
        <PlayerAttribute name={'Height'} value={statistics.height} />
        <PlayerAttribute name={'Age'} value={statistics.age} />
      </PlayerAttributes>
      <PlayerLastMatch lastMatchScores={statistics.last}/>
    </PlayerStatisticsWrapper>
  );
};

PlayerStatistics.propTypes = {
  statistics: PropTypes.object,
};

export default PlayerStatistics;
