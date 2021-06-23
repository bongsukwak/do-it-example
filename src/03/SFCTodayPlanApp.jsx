import React, { Component } from 'react';

function SFCTodayPlanApp(props)
{
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
export default SFCTodayPlanApp;