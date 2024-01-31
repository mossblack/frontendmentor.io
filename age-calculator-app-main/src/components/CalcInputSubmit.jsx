import React from "react";

const CalcInputSubmit = ({ onSubmitEventHandler }) => (
    <form className="relative my-10" >
        <div className="h-[0.075rem] bg-[#dbdbdb]"></div>
        <button type="button" onClick={onSubmitEventHandler} className="w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center rounded-full absolute left-1/2 lg:left-full top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#844ff6] hover:bg-[#141414] active:bg-black">
            <img src="./icon-arrow.svg" alt="arrow" className="w-5 h-5 lg:w-8 lg:h-8"/>
        </button>
    </form>
);

export default CalcInputSubmit;