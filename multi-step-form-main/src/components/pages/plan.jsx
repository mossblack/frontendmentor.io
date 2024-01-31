import SideBar from "../layouts/SideBar";
import MainCard from "../layouts/MainCard";
import ButtonPlans from "../fragments/ButtonPlans";
import SwitchPlan from "../fragments/SwitchPlan";

const PlanPage = () => (
    <main className="flex max-w-4xl w-full h-[34rem] p-3 rounded-lg shadow-lg bg-white">
        <SideBar />
        <MainCard
            title='Select your plan'
            body='You have the option of monthly or yearly billing.'
            prevPath='/info'
            nextPath='/addons'
        >
            <ButtonPlans />
            <SwitchPlan />
        </MainCard>
    </main>
);

export default PlanPage;