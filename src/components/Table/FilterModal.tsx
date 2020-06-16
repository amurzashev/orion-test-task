import React, { FC } from 'react';
import Modal from 'react-modal';

interface FilterModalProps {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterModal: FC<FilterModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={() => setIsModalOpen(!isModalOpen)}
    >
      <div>
        <p>this is a custom child</p>
      </div>
    </Modal>
  );
};

export default FilterModal;
