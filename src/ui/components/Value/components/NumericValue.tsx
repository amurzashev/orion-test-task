import React, { FC, useState } from 'react';
import { ValueProps } from './types';

const NumericValue: FC<ValueProps> = ({ renderVal }) => {
  const [val, setVal] = useState(renderVal);
  return (
    <input type='number' value={val} onChange={e => setVal(e.target.value)} />
  );
};

export default NumericValue;
