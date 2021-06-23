import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, nodeValue, funcValue } = this.props;
    return (
      <div>
        <span>불리언값 :{boolValue}</span> <br />
        <span>숫자값 :{numValue}</span> <br />
        <span>배열값 :{arrayValue}</span> <br />
        <br />
        <span>노드값 :{nodeValue}</span> <br />
        <span>함수값 :{String(funcValue)}</span>
        <br />
      </div>
    );
  }
}

//자료형을 선언하는 예제
ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  nodeValue: PropTypes.node,
  funValue: PropTypes.func,
};

export default ChildComponent;
