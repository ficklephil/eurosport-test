import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Country from "../Country";

const PlayerStatWrapper = styled.div`
  border: 1px solid green;
  display: -webkit-flex;
  display: flex;
  flex-wrap: nowrap;
`;

const ColumnOneWrapper = styled.div`
  border: 1px solid blue;
  width: 30px;
  flex: 0.1;
`;

const ColumnTwoWrapper = styled.div`
  border: 1px solid pink;
  width: 70%;
  flex: 0.9;
`;

const PlayerStat = ({player}) => {

  return (
    <PlayerStatWrapper>
        <ColumnOneWrapper>
        <div>Col1: Image</div>
        <div>
          <img src={player.picture} alt='hello'/>
        </div>
      </ColumnOneWrapper>
      <ColumnTwoWrapper>
        <div>Col2: Information</div>
        <div>{`${player.firstname} ${player.lastname}`}</div>
        <Country country={player.country}/>
        <div>{JSON.stringify(player)}</div>
      </ColumnTwoWrapper>


      {/*<div>First Name, Second Name</div>*/}


      {/*<p>{JSON.stringify(player)}</p>*/}
    </PlayerStatWrapper>
  );
};

PlayerStat.propTypes = {
  player: PropTypes.object,
};

export default PlayerStat;
