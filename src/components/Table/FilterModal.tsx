import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import { Input, Box, Button } from 'src/ui/components';
import { connect } from 'react-redux';
import { RootState } from 'src/duck';
import { Item } from 'src/duck/types/items';
import DatePicker from 'react-date-picker';

interface FilterModalProps {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  items: Item[],
}

const FilterModal: FC<FilterModalProps> = ({ isModalOpen, setIsModalOpen, items }) => {
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [client, setClient] = useState('');
  const [Val3, setVal3] = useState('');
  const [date, setDate] = useState<Date | Date[] | null>(null);

  const sourceValues = [...new Set(items.map(item => item.SOURCE_NM))];
  const clientValues = [...new Set(items.map(item => item.CLIENT_NM))];

  const applyFilter = () => {
    console.log('do magic');
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
          onChange={setDate}
          value={date}
          format='yyyy-MM'
          maxDetail='year'
        />
      </Box>
      <Box mb={10}>
        <Input type='number' value={Val3} onChange={e => setVal3(e.target.value)} placeholder='Min value of Max Range' />
      </Box>
      <Button onClick={applyFilter}>Apply filters</Button>
    </Modal>
  );
};

const mapState = (state: RootState) => ({
  items: state.items.data,
});
export default connect(mapState)(FilterModal);
