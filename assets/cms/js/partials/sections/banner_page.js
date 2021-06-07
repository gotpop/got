import linkPage from "../../fields/link_page";
import title from "../../fields/title";

const bannerPage = {
    label: "Banner Page",
    name: "page",
    widget: "object",
    collapsed: false,
    fields: [
        title,
        linkPage
    ]
};

export default bannerPage;