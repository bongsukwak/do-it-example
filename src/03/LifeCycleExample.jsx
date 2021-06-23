import React, { Component } from 'react';

class LifeCycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
  }

  constructor(props) {
    super(props);
    //getDerivedStateFromProps() 함수를 사용하므로 경고메시지를 건너뛰기위해 state 초기값을 설정합니다
    this.state = {};
    console.log('constructor 호출');
  }

  componentDidMount() {
    console.log('componentDidMount호출');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    this.setState({updated:true});
  }

  componentWillUnmount() {
    console.log('componenttWillUnmount');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return {};
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return false;
  }

  render() {
    console.log('render 호출');
    return null;
  }
}

export default LifeCycleExample;
