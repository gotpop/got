import body from "../fields/body";
import image from "../fields/image";
import linkPage from "../fields/link_page";
import title from "../fields/title";

const bannerCards = {
    label: "Banner Cards",
    name: "bannerCards",
    widget: "list",
    collapsed: true,
    fields: [
        {
            label: "Banner card",
            name: "bannerCard",
            widget: "list",
            fields: [
                title,
                body,
                image,
                linkPage
            ]
        }
    ]
};

export default bannerCards;
