import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { connect } from 'react-redux';
import { editToDo } from '../redux/actions/EventAction';

const EditEvent = ({ el, editToDo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editInput, setEditInput] = useState(el.text);

  // function edit to do
  const edit = (e) => {
    e.preventDefault();
    editToDo({
      id: el.id,
      text: editInput,
    });
    handleClose();
  };

  return (
    <>
      {/* ------------------------- icon edit ------------------- */}
      <FiEdit onClick={handleShow} />
      {/* ------------------------- modal ------------------- */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
          <Modal.Title style={{ color: 'white' }}>
            Give this event a nickname...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'black' }}>
          {/* ------------------------- input edit ------------------- */}
          <input
            type='text'
            placeholder='edit event'
            value={editInput}
            required
            className='todo-input'
            onChange={(e) => setEditInput(e.target.value)}
          />
          {/* ------------------------- button edit ------------------- */}
          <button
            className='todo-button'
            onClick={editInput.trim() !== '' ? edit : editInput}
          >
            Save
          </button>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'black' }}>
          {/* ------------------------- button back ------------------- */}
          <button
            className='todo-button'
            style={{ borderRadius: '4px', padding: '10px ' }}
            onClick={handleClose}
          >
            Back
          </button>
          <button
            className='remove-button'
            style={{ borderRadius: '4px', padding: '10px ' }}
            onClick={() => dispatch(deleteToDo(el.id))}
          >
            Remove From Feed
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editToDo: (x) => dispatch(editToDo(x)),
  };
};
export default connect(null, mapDispatchToProps)(EditEvent);
