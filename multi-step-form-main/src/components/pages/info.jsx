import SideBar from "../layouts/SideBar";
import MainCard from "../layouts/MainCard";
import InputPersonal from "../fragments/InputPersonal";

const InfoPage = () => (
    <main className="flex max-w-4xl w-full h-[34rem] p-3 rounded-lg shadow-lg bg-white">
        <SideBar />
        <MainCard 
            title='Personal Info' 
            body='Please provide your name, email address, and phone number.'
            nextPath='/plan'
        >
            <form>
                <InputPersonal type='text' placeholder='e.g. Stephen King' name='Name' />
                <InputPersonal type='email' placeholder='e.g. stephenking@lorem.com' name='Email Address' />
                <InputPersonal type='number' placeholder='e.g. +1 234 567 890' name='Phone Number' />
            </form>
        </MainCard>
    </main>
);

export default InfoPage;