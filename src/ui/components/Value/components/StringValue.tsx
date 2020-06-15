import React, { FC, useState } from 'react';
import { ValueProps } from './types';
import { Input } from './shared';

const StringValue: FC<ValueProps> = ({ renderVal, disabled }) => {
  const [val, setVal] = useState(renderVal);
  return (
    <Input type='text' value={val} onChange={e => setVal(e.target.value)} disabled={disabled} />
  );
};

export default StringValue;
