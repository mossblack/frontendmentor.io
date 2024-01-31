import { useState } from "react";
import HeaderCard from "../fragments/HeaderCard";
import StepButtons from "../fragments/StepButtons";

const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
};

const MainCard = ({ title, body, children, nextPath, prevPath }) => (
  <div className="flex flex-col w-full justify-between px-24 py-4">
    <div className="flex flex-col gap-8">
      <HeaderCard title={title} body={body} />
      {children}
    </div>
    <StepButtons nextPath={nextPath} prevPath={prevPath} />
  </div>
);

export default MainCard;
