import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import { Input, Box, Button } from 'src/ui/components';
import { Item } from 'src/duck/types/items';
import DatePicker from 'react-date-picker';

interface FilterModalProps {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  items: Item[],
  setItems: (items: Item[]) => void
}

const FilterModal: FC<FilterModalProps> = ({ isModalOpen, setIsModalOpen, items, setItems }) => {
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [client, setClient] = useState('');
  const [datePickerDate, setDatePickerDate] = useState<Date | Date[] | null>(null);
  const [date, setDate] = useState('');
  const [Val3, setVal3] = useState('');

  const sourceValues = [...new Set(items.map(item => item.SOURCE_NM))];
  const clientValues = [...new Set(items.map(item => item.CLIENT_NM))];

  const applyFilter = () => {
    const filterValues = {
      ...description && { DESCRIPTION: description },
      ...source && { SOURCE_NM: source },
      ...client && { CLIENT_NM: client },
      ...date && { TERMINATION_DT: date },
      ...Val3 && { VALUE_3: Val3 },
    };
    const newItems = items.filter(item => {
      for (const key in filterValues) {
        //@ts-ignore
        if (item[key] !== filterValues[key])
          return false;
      }
      return true;
    });
    setItems(newItems);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={() => setIsModalOpen(!isModalOpen)}
    >
      <Box mb={10}>
        <Input placeholder='Description' type='text' value={description} onChange={e => setDescription(e.target.value)} />
      </Box>
      <Box mb={10}>
        <select onChange={e => setSource(e.target.value)}>
          <option value={''}>Select Source</option>
          {
            sourceValues.map((src, idx) => <option key={idx} value={src}>{src}</option>)
          }
        </select>
      </Box>
      <Box mb={10}>
        <select onChange={e => setClient(e.target.value)}>
          <option value={''}>Select Client</option>
          {
            clientValues.map((src, idx) => <option key={idx} value={src}>{src}</option>)
          }
        </select>
      </Box>
      <Box mb={10}>
        <DatePicker
          onChange={val => {
            // @ts-ignore
            const d = new Date(val).toDateString().split(' ');
            // @ts-ignore
            setDate(`${d[3]}-${d[2]}`);
            setDatePickerDate(val);
          }}
          value={datePickerDate}
          format='yyyy-MM'
          maxDetail='year'
        />
      </Box>
      <Box mb={10}>
        <Input type='number' min={0} value={Val3} onChange={e => setVal3(e.target.value)} placeholder='Max Range' />
      </Box>
      <Box flexDirection='row' display='flex'>
        <Button onClick={applyFilter}>Submit</Button>
        <Box ml={10}>
          <Button appearance='warning' onClick={() => setIsModalOpen(!isModalOpen)}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FilterModal;
