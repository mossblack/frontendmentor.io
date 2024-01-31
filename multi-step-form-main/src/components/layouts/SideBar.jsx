import StepOrder from "../fragments/StepOrder";
import { vaultSideBar } from "../../utils";

const SideBar = () => (
    <div className="flex flex-col gap-5 p-7 pr-20 min-w-max bg-cover rounded-lg bg-sidebar-pattern">
        {
            vaultSideBar.map((e, i) => (
                <StepOrder number={i + 1} desc={e} key={i + 1} />
            ))
        }
    </div>
)

export default SideBar;