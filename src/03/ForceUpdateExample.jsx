import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);

    //state정의
    this.loading = true;
    this.formData = 'no data';
    //이후 콜백함수를 다룰때 bind를 선언하는 부분에 대해 다릅니다.

    this.handleData = this.handleData.bind(this);

    //4초후에 handleData 수행한다.
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data ';
    //state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <span>로딩중 :{String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
