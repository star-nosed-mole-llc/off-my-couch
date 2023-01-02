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
      <h1 style={{ fontSize: '3rem' }}>Events In Your Area...</h1>

      {/* ------------------------- bouton show done / show undone/ show all  ------------------- */}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='show-button' onClick={handleDone}>
          show Done
        </button>
        <button className='show-button' onClick={handleUnDone}>
          show Undone
        </button>
        <button className='show-button' onClick={handleReset}>
          show all
        </button>
      </div>

      {/* ------------------------- affichage todo ------------------- */}

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
