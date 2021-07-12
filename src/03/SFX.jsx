import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  //const {somePropValue} = props;
  const { someContextValue } = conteext;
  return <h1>Hello, {someContextValue}</h1>;
}

SFC.propTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };
export default SFX;
