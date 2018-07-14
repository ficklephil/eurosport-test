import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CountryWrapper = styled.div`
  border: 1px solid red;
  `;

const Img = styled.img`
  border: 1px solid blue;
  width: 50px;
  `;

const CountyNameWrapper = styled.div`
  `;

const Country = ({country}) => {

  return (
    <CountryWrapper>
      <div></div>
      <Img src={country.picture} alt={country.code}/>
      <CountyNameWrapper>{country.code}</CountyNameWrapper>
    </CountryWrapper>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
