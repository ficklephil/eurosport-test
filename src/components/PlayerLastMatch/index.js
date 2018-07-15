import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerLastMatchWrapper = styled.div`
  display: flex;
  padding: 5px;
  `;

const LastMatchScoreText = styled.div`
  font-size: 0.8rem;
  padding-top: 13px;
  margin-right: 5px;
  `;

const LastMatchScoreTable = styled.table``;
const LastMatchScoreTableRow = styled.tr``;
const LastMatchScoreTableCell = styled.td`
  border: 1px dotted #efefef;
  font-size: 1.1rem;
  padding: 5px;
`;

const PlayerLastMatch = ({lastMatchScores}) => {

  return (
    <PlayerLastMatchWrapper>
      <LastMatchScoreText>Last match scores:</LastMatchScoreText>
      <LastMatchScoreTable>
        <LastMatchScoreTableRow>
          {
            lastMatchScores.map((score, index) => (
              <LastMatchScoreTableCell key={index}>{score}</LastMatchScoreTableCell>
            ))
          }
        </LastMatchScoreTableRow>
      </LastMatchScoreTable>
    </PlayerLastMatchWrapper>
  );
};

PlayerLastMatch.propTypes = {
  lastMatchScores: PropTypes.array,
};

export default PlayerLastMatch;
