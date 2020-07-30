import React from 'react';
import CounterDisplay from '../component/counter/CounterDisplay';
import CounterControlPanel from '../component/counter/CounterControlPanel';
import { connect } from 'react-redux';
import { actionTypes } from '../store/actionTypes';
import CounterList from '../component/counter/CounterList';
import ButtonRecord from '../component/counter/ButtonRecord';
import InputRecord from '../component/counter/InputRecord';

function Counter(props) {
  // console.log(props);
  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterControlPanel text='Increase' change={props.increase} />
      <CounterControlPanel text='Decrease' change={props.decrease} />
      <CounterControlPanel text='Plus' change={props.plus} />
      <CounterControlPanel text='Minus' change={props.minus} />
      <CounterControlPanel text='Reset' change={props.reset} />
      <ButtonRecord></ButtonRecord>
      <CounterList></CounterList>
      <InputRecord></InputRecord>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
    decrease: () => dispatch({ type: actionTypes.DECREASE }),
    plus: () => dispatch({ type: actionTypes.PLUS }),
    minus: () => dispatch({ type: actionTypes.MINUS }),
    reset: () => dispatch({ type: actionTypes.RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
