import React, { Component } from 'react';

class TodayPlanApp extends Component {
    render() {
        const {onButtonClick,hasPlan} = this.props;
        return (
            <div>
                <div className ="body">
                    {hasPlan ? <TodayPlan /> : nulll}
                    <button onClick ={onButtonClick}>계획없음</button>
                </div>
            </div>
        );
    }
}

export default TodayPlanApp;
