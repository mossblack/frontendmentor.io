import ButtonPlan from "../elements/input/ButtonPlan";
import { getPlanDetails } from "../../utils";
console.log(getPlanDetails().map(e => e));

const ButtonPlans = () => (
    <form className="flex gap-4">
        {
            getPlanDetails().map(plan => (
                <ButtonPlan
                    key={plan.id}
                    img={plan.img}
                    name={plan.name}
                    price={plan.price}
                />
            ))
        }
    </form>
);

export default ButtonPlans;