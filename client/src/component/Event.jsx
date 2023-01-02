import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { FaCalendarPlus, FaCheckSquare } from 'react-icons/fa';
import { completeToDo, deleteToDo } from '../redux/actions/EventAction';
import EditEvent from './EditEvent';

const Event = ({ el, i }) => {
  const dispatch = useDispatch();

  return (
    <div className='todo-row'>
      <div style={{ display: 'flex' }}>
        {/* Icon: Calendar OR Check */}
        {el.isCompleted ? (
          <FaCheckSquare
            onClick={() => dispatch(completeToDo(el.id))}
            key={i}
            style={{
              marginRight: '20px',
              fontSize: '1.5rem',
              alignSelf: 'center',
              cursor: 'pointer',
            }}
          />
        ) : (
          <FaCalendarPlus
            onClick={() => dispatch(completeToDo(el.id))}
            key={i}
            style={{
              marginRight: '20px',
              fontSize: '1.5rem',
              alignSelf: 'center',
              cursor: 'pointer',
            }}
          />
        )}
        <p
          className={el.isCompleted ? 'complete' : 'notComplete'}
          style={{ fontSize: '20px', alignSelf: 'center' }}
        >
          {el.text} -
        </p>
        <p
          className={el.isCompleted ? 'complete' : 'notComplete'}
          style={{ fontSize: '20px', paddingLeft: 10 }}
        >
          {el.desc} -
        </p>
        <p
          className={el.isCompleted ? 'complete' : 'notComplete'}
          style={{ fontSize: '20px', paddingLeft: 10 }}
        >
          Date: {el.eventDate}
        </p>
      </div>

      <div className='icons'>
        {/* ------------------------- component edit ------------------- */}
        <EditEvent el={el} />
      </div>
    </div>
  );
};

export default connect()(Event);
