import React, { useState } from 'react';
import { actionTypes } from '../../store/actionTypes';
import { connect } from 'react-redux';
function InputRecord(props) {
  const [text, setText] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.setCounter(text);
        setText('');
      }}
    >
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCounter: (value) => dispatch({ value, type: actionTypes.SET_COUNTER }),
  };
};

export default connect(null, mapDispatchToProps)(InputRecord);
