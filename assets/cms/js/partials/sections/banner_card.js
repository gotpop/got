import body from "../../fields/body_text";
import image from "../../fields/image";
import linkPage from "../../fields/link_page";
import title from "../../fields/title";


const bannerCard = {
    label: "Add a card",
    name: "bannerCard",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        body,
        image,
        linkPage
    ]
};

export default bannerCard;
