import React from 'react';
import Counter from './03/Counter2';
import ScrollSpy from './03/ScrollSpy';
import Counter3 from './03/Counter3';
import Input from './03/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return (
      //<Counter count={this.state.count} onAdd={this.increaseCount.bind(this)} />
      //<ScrollSpy />
      // <Counter3 />
      <Input  />
    );
  }
}

export default App;
