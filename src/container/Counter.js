import React from 'react';
import CounterDisplay from '../component/counter/CounterDisplay';
import CounterControlPanel from '../component/counter/CounterControlPanel';
import { connect } from 'react-redux';
import { actionTypes } from '../store/actionTypees';
import CounterList from '../component/counter/CounterList';
import ButtonRecord from '../component/counter/ButtonRecord';

function Counter(props) {
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
    </div>
  );
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    ctr: state.counter,
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
