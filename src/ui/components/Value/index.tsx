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
  disabled: boolean
}
// @ts-ignore
const renderValue = ({ type, renderVal, disabled }: FuncArgs) => React.createElement(components[type], { renderVal, disabled });

export default renderValue;
