import React, { Component } from 'react';
import TodayPlan from './TodayPlan';
class TodayPlanApp extends Component {
  render() {
    const { onButtonClick, hasPlan } = this.props;
    return (
      <div>
        <div className="body">
          {hasPlan ? <TodayPlan /> : nulll}
          <button onClick={onButtonClick}>ęłíěě</button>
        </div>
      </div>
    );
  }
}

export default TodayPlanApp;
