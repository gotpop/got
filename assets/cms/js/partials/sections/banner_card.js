import bodyText from "../../fields/body_text";
import linkPage from "../../fields/link_page";
import title from "../../fields/title";
import blockImage from "../blocks/block_image";


const bannerCard = {
    label: "Add a card",
    name: "card",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        bodyText,
        blockImage,
        linkPage
    ]
};

export default bannerCard;
