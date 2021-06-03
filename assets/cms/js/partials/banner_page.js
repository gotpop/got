import linkPage from "../fields/link_page";
import title from "../fields/title";

const bannerPage = {
    label: "Banner Page",
    name: "bannerPage",
    widget: "object",
    collapsed: false,
    fields: [
        title,
        linkPage
    ]
};

export default bannerPage;