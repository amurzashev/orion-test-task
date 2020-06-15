import React, { FC, useState } from 'react';
import { ValueProps } from './types';

const StringValue: FC<ValueProps> = ({ renderVal }) => {
  const [val, setVal] = useState(renderVal);
  return (
    <input type='text' value={val} onChange={e => setVal(e.target.value)} style={{ width: '100%' }} />
  );
};

export default StringValue;
