import React from 'react';
import CounterDisplay from '../component/counter/CounterDisplay';
import CounterControlPanel from '../component/counter/CounterControlPanel';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterControlPanel text='Increase' change={props.increase} />
      <CounterControlPanel text='Decrease' change={props.decrease} />
      <CounterControlPanel text='Plus' change={props.plus} />
      <CounterControlPanel text='Minus' change={props.minus} />
      <CounterControlPanel text='Reset' change={props.reset} />
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
    increase: () => dispatch({ type: 'INCREASE' }),
    decrease: () => dispatch({ type: 'DECREASE' }),
    plus: () => dispatch({ type: 'PLUS' }),
    minus: () => dispatch({ type: 'MINUS' }),
    reset: () => dispatch({ type: 'RESET' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
