import React from 'react';
import { actionTypes } from '../../store/actionTypes';
import { connect } from 'react-redux';
function ButtonRecord(props) {
  // console.log(props);
  return (
    <div
      style={{
        height: '150px',
        width: '200px',
        margin: 'auto',
        cursor: 'pointer',
      }}
      onClick={() => props.submit(props.ctr)}
    >
      Records
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return { ctr: state.ctr.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (value) =>
      dispatch({ type: actionTypes.RECORD_COUNTER, number: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRecord);
