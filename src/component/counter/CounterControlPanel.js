import React from 'react';

function CounterControlPanel(props) {
  // console.log(props.change);
  return (
    <div className='counter-panel' onClick={props.change}>
      {props.text}
    </div>
  );
}

export default CounterControlPanel;
