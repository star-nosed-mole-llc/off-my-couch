import React, { useState } from 'react';
import { connect } from 'react-redux';
import Event from './Event';

const EventList = ({ toDoList }) => {
  const [done, setDone] = useState(false);
  const [undone, setUndone] = useState(false);
  const [reset, setReset] = useState(false);
  const handleDone = () => {
    setDone(!done);
    setUndone(false);
  };
  const handleUnDone = () => {
    setUndone(!undone);
    setDone(false);
  };
  const handleReset = () => {
    setReset(true);
    setUndone(false);
    setDone(false);
  };
  return (
    <div>
      <h1 style={{ fontSize: '3rem', paddingBottom: 10 }}>
        Events In Your Area...
      </h1>

      {/* TABS */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
        <button className='show-button' onClick={handleReset}>
          All Events
        </button>
        <button className='show-button' onClick={handleDone}>
          I'm Attending
        </button>
      </div>

      {/* TAB LOGIC */}
      {done
        ? toDoList
            .filter((elem) => elem.isCompleted === true)
            .map((el, i) => {
              return <Event el={el} key={i} />;
            })
        : undone
        ? toDoList
            .filter((elem) => elem.isCompleted === false)
            .map((el, i) => {
              return <Event el={el} key={i} />;
            })
        : reset
        ? toDoList.map((el, i) => {
            return <Event el={el} key={i} />;
          })
        : toDoList.map((el, i) => {
            return <Event el={el} key={i} />;
          })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    toDoList: state.toDo,
  };
};

export default connect(mapStateToProps)(EventList);
