import { useState } from "react";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      htmlFor="checkbox"
      class="relative flex items-center w-9 h-5 p-1 rounded-full cursor-pointer bg-main-marine-blue"
    >
      <input
        id="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        class="toggle-checkbox absolute w-3 h-3 rounded-full cursor-pointer bg-white appearance-none"
      />
    </label>
  );
};

export default Switch;
