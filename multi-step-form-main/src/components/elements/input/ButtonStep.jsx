import { Link } from "react-router-dom";

const ButtonStep = ({ step, className, path }) => (
    <Link to={path} className={`px-5 py-3 mt-12 rounded-lg text-sm tracking-wider hover:brightness-125 bg-main-marine-blue text-white ${className}`}>{step}</Link>
);

export default ButtonStep;