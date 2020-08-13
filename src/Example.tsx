import * as React from 'react';


interface CounterProps {
  message: string;
}

interface CounterState {
  count: number;
}

class Counter extends React.PureComponent<CounterProps, CounterState> {
  state: CounterState =  {
    count: 0,
  };

  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}