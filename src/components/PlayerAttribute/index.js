import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Attribute = styled.div`
  font-size: 0.8rem;
  padding: 5px;
  `;

const Value = styled.span`
  font-size: 1.1rem;
  padding: 5px;
  `;

const PlayerAttribute = ({name, value}) => {

  return (
    <Attribute>
      {name}<Value>{value}</Value>
    </Attribute>
  );
};

PlayerAttribute.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};

export default PlayerAttribute;
