import React from "react";

const CalcInputValue = ({ day, month, year, onDayChangeHandler, onMonthChangeHandler, onYearChangeHandler }) => (
    <form className="grid grid-cols-3 gap-3 lg:w-3/4">
        <h2>DAY</h2>
        <h2>MONTH</h2>
        <h2>YEAR</h2>
        <input type="number" name="input-day" placeholder="DD" min="0" value={day} onChange={onDayChangeHandler} className="calc-input" />
        <input type="number" name="input-month" placeholder="MM" min="0" value={month} onChange={onMonthChangeHandler} className="calc-input" />
        <input type="number" name="input-year" placeholder="YYYY" min="0" value={year} onChange={onYearChangeHandler} className="calc-input" />
    </form>
);

export default CalcInputValue;