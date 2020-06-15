import React from 'react';
import { STRING, NUMERIC, DATE, TIMESTAMP } from './components';

const components = {
  STRING,
  NUMERIC,
  DATE,
  TIMESTAMP,
};

interface V {
  type: 'STRING' | 'NUMERIC' | 'DATE' | 'TIMESTAMP'
  renderVal: string
}
// @ts-ignore
const renderValue = ({ type, renderVal }: V) => React.createElement(components[type], { renderVal });

export default renderValue;
