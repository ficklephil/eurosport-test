import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {getCountryName} from '../../utils/countryUtils';

const PlayerCountryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  `;

const Img = styled.img`
  height: 25px;
  margin-right:5px;
  width: 35px;
  `;

Img.displayName = 'Img';

const CountyName = styled.div`
  font-size: 1rem;
  padding: 9px 0 0 2px;
  `;

CountyName.displayName = 'CountyName';

const PlayerCountry = ({country}) => {

  return (
    <PlayerCountryWrapper>
      <Img src={country.picture} alt={country.code}/>
      <CountyName>{getCountryName(country.code)}</CountyName>
    </PlayerCountryWrapper>
  );
};

PlayerCountry.propTypes = {
  country: PropTypes.object,
};

export default PlayerCountry;
