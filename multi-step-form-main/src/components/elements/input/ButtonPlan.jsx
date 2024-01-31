const ButtonPlan = ({ img, name, price }) => (
    <button type="button" className="border-2 p-3 w-full text-left rounded-lg border-main-light-gray hover:border-main-purplish-blue focus:bg-main-magnolia focus:border-main-purplish-blue">
        <img src={img} alt="" />
        <h5 className="text-main-marine-blue tracking-normal mt-10 text-sm">{name}</h5>
        <h6>{price}</h6>
    </button>
);

export default ButtonPlan;