import React, { FC, useState } from 'react';
import { ValueProps } from './types';
import { Input } from './shared';

const NumericValue: FC<ValueProps> = ({ renderVal, disabled }) => {
  const [val, setVal] = useState(renderVal);
  return (
    <Input type='number' value={val} onChange={e => setVal(e.target.value)} disabled={disabled} />
  );
};

export default NumericValue;
