import React from "react";
import CalcInputValue from "./CalcInputValue";
import CalcInputSubmit from "./CalcInputSubmit";

const CalcInput = ({ dates, onDayChangeHandler, onMonthChangeHandler, onYearChangeHandler, onSubmitEventHandler }) => (
    <div>
        <CalcInputValue 
            {...dates} 
            onDayChangeHandler={onDayChangeHandler} 
            onMonthChangeHandler={onMonthChangeHandler} 
            onYearChangeHandler={onYearChangeHandler}
        />
        <CalcInputSubmit onSubmitEventHandler={onSubmitEventHandler}/>
    </div>
);

export default CalcInput;