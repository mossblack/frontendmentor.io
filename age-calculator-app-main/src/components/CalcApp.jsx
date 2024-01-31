import React from "react";
import CalcInput from "./CalcInput";
import CalcPreview from "./CalcPreview";

class CalcApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempDates: {
                day: 0,
                month: 0,
                year: 0,
            },
            dates: {
                day: 0,
                month: 0,
                year: 0,
            }
        };
    };
    
    onDayChangeHandler = (event) => {
        this.setState((prevState) => ({
            tempDates: {
                ...prevState.tempDates, 
                day: event.target.value, 
            },
        }));
    };

    onMonthChangeHandler = (event) => {
        this.setState((prevState) => ({
            tempDates: {
                ...prevState.tempDates, 
                month: event.target.value, 
            },
        }));
    };

    onYearChangeHandler = (event) => {
        this.setState((prevState) => ({
            tempDates: {
                ...prevState.tempDates, 
                year: event.target.value, 
            },
        }));
    };

    onSubmitEventHandler = () => {
        const { day, month, year } = this.state.tempDates;
        const date = new Date(year, month, day);
        const dateNow = new Date();
        const diffMilSec = dateNow - date;
        const yearNow = Math.floor(diffMilSec / (1000 * 60 * 60 * 24 * 365.25));
        const remsMilSec = diffMilSec % (1000 * 60 * 60 * 24 * 365.25);
        const monthNow = Math.floor(remsMilSec / (1000 * 60 * 60 * 24 * 30.4375));
        const remsMilSec2 = remsMilSec % (1000 * 60 * 60 * 24 * 30.4375);
        const dayNow = Math.floor(remsMilSec2 / (1000 * 60 * 60 * 24));

        this.setState(() => ({
            dates: {
                day: dayNow,
                month: monthNow,
                year: yearNow,
            }
        }));
    };



    render() {
        return (
            <>
                <CalcInput 
                    dates={this.state.tempDates} 
                    onDayChangeHandler={this.onDayChangeHandler} 
                    onMonthChangeHandler={this.onMonthChangeHandler} 
                    onYearChangeHandler={this.onYearChangeHandler}
                    onSubmitEventHandler={this.onSubmitEventHandler}
                />
                <CalcPreview 
                    day={this.state.dates.day} 
                    month={this.state.dates.month} 
                    year={this.state.dates.year}
                />
            </>
        );
    };
};

export default CalcApp;