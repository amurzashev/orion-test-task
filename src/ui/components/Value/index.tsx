import React from 'react';
import { STRING, NUMERIC, DATE, TIMESTAMP } from './components';

const components = {
  STRING,
  NUMERIC,
  DATE,
  TIMESTAMP,
};

interface FuncArgs {
  type: 'STRING' | 'NUMERIC' | 'DATE' | 'TIMESTAMP'
  renderVal: string
}
// @ts-ignore
const renderValue = ({ type, renderVal }: FuncArgs) => React.createElement(components[type], { renderVal });

export default renderValue;
