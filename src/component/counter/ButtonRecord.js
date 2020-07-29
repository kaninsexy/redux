import React from 'react';
import { actionTypes } from '../../store/actionTypees';
import { connect } from 'react-redux';
function ButtonRecord(props) {
  return (
    <div
      style={{
        height: '150px',
        width: '200px',
        margin: 'auto',
        cursor: 'pointer',
      }}
      onClick={props.submit}
    >
      Records
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { submit: () => dispatch({ type: actionTypes.RECORD_COUNTER }) };
};

export default connect(null, mapDispatchToProps)(ButtonRecord);
