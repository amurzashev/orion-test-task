import React, { FC, useState } from 'react';
import DatePicker from 'react-date-picker';

interface DateProps {
  disabled: boolean
  renderVal: string
}

const DateValue: FC<DateProps> = ({ renderVal, disabled }) => {
  const [date, setDate] = useState<Date | Date[]>(new Date(renderVal));
  return (
    <DatePicker
      value={date}
      disabled={disabled}
      onChange={setDate}
    />
  );
};

export default DateValue;
