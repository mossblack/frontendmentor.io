import TitleHeader from "../elements/header-card/TitleHeader";
import BodyHeader from "../elements/header-card/BodyHeader";

const HeaderCard = ({ title, body }) => (
    <div className="mt-5">
        <TitleHeader title={title}/>
        <BodyHeader body={body} />
    </div>
);

export default HeaderCard;