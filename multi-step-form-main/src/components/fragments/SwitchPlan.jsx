import Switch from "../elements/input/Switch";

const SwitchPlan = ({ isChecked, handleCheckboxChange }) => (
  <div className="flex gap-4 py-2 items-center justify-center bg-main-magnolia">
    <label htmlFor="checkbox" className="text-main-marine-blue">
      Monthly
    </label>
    <Switch isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
    <label htmlFor="checkbox" className="text-main-marine-blue">
      Yearly
    </label>
  </div>
);

export default SwitchPlan;
