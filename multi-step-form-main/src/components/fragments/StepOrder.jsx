import Number from "../elements/step label/number";
import Label from "../elements/step label/label";

const StepOrder = ({ number, desc }) => (
    <div className="flex gap-4 text-white">
        <Number number={number}/>
        <Label number={number} desc={desc}/>
    </div>
)

export default StepOrder;