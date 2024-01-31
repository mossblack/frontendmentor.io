import React from "react";

const CalcPreview = ({ day, month, year }) => (
    <div className="text-4xl lg:text-6xl font-extrabold italic">
        <h1><span>{year > 0 ? year : '__'}</span> years</h1>
        <h1><span>{month > 0 ? month : '__'}</span> months</h1>
        <h1><span>{day > 0 ? day : '__'}</span> days</h1>
    </div>
);

export default CalcPreview;