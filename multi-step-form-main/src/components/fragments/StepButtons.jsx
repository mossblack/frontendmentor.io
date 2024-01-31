import ButtonStep from "../elements/input/ButtonStep";
import { useLocation } from "react-router-dom";

const StepButtons = ({ nextPath, prevPath }) => {
  const location = useLocation();

  return (
    <div className="flex justify-between">
      {location.pathname === "/info" ? (
        <ButtonStep className="invisible" />
      ) : (
        <ButtonStep
          step="Go Back"
          path={prevPath}
          className="bg-white text-slate-500"
        />
      )}
      <ButtonStep step="Next Step" path={nextPath} />
    </div>
  );
};

export default StepButtons;
