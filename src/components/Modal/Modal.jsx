import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow } from './Modal.styled';

export default function Modal({ currentImageUrl, currentImageTag, onClose }) {
  useEffect(() => {
    const handleEsc = event => event.code === 'Escape' && onClose();

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdrop}>
      <ModalWindow>
        <button
          type="button"
          onClick={onClose}
          style={{ position: 'absolute' }}
        >
          Close
        </button>
        <img src={currentImageUrl} alt={currentImageTag} loading="lazy" />
      </ModalWindow>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
}

Modal.propTypes = {
  currentImageUrl: PropTypes.string,
  currentImageTag: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
