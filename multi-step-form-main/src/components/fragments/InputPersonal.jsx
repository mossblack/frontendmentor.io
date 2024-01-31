import Input from "../elements/input/input";

const InputPersonal = ({ type, placeholder, name }) => (
    <>
        <label htmlFor={name} className="font-medium text-sm text-main-marine-blue">{name}</label>
        <Input type={type} placeholder={placeholder} name={name}/>
    </>
);

export default InputPersonal;