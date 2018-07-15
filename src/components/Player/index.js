import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PlayerCountry from "../PlayerCountry";
import PlayerStatistics from "../PlayerStatistics";

const PlayerWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  display: -webkit-flex;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 5px;
  min-width: 400px;
`;

const ColumnOneWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 150px;
  max-width: 100px;
  padding: 8px;
`;

const ColumnTwoWrapper = styled.div`
`;

const PlayerName = styled.div`
  font-size: 1.2rem;
  padding: 11px 0 4px 6px;
`;

const Player = ({player}) => {

  return (
    <PlayerWrapper>
      <ColumnOneWrapper>
        <Img src={player.picture} alt='hello'/>
      </ColumnOneWrapper>
      <ColumnTwoWrapper>
        <PlayerName>{`${player.firstname} ${player.lastname}`}</PlayerName>
        <PlayerCountry country={player.country}/>
        <PlayerStatistics statistics={player.data}/>
      </ColumnTwoWrapper>
    </PlayerWrapper>
  );
};

Player.propTypes = {
  player: PropTypes.object,
};

export default Player;
