import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { addToDo } from '../redux/actions/EventAction';

const AddEvent = ({ addToDo }) => {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const toDo = useSelector((state) => state.toDo);
  let id = toDo.length + 1;
  // fonction add to do
  const addNewToDo = (e) => {
    e.preventDefault();
    addToDo({
      id: id,
      text: input,
      desc: description,
      eventDate: date,
      isCompleted: false,
    });
    setInput('');
    setDescription('');
    setDate('');
  };

  return (
    <div>
      {/* Add Event Form */}
      <form className='todo-form' style={{ paddingTop: 180 }}>
        <input
          type='text'
          placeholder='Title'
          value={input}
          required
          className='event-title-input'
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type='description'
          placeholder='Give your guests the details...'
          value={description}
          required
          className='todo-input'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='date'
          placeholder='1/1/23'
          value={date}
          required
          className='event-date-input'
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className='todo-button'
          onClick={input.trim() !== '' ? addNewToDo : input}
        >
          Host an Event!
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (x) => dispatch(addToDo(x)),
  };
};
export default connect(null, mapDispatchToProps)(AddEvent);
