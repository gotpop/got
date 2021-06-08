import linkPage from "../../fields/link_page";
import iconSelect from "../../fields/select_icon";
import title from "../../fields/title";
import { lorumIpsumMedium } from "../data/loremIpsum";

const bannerPage = {
    label: "Banner Page",
    name: "page",
    widget: "object",
    collapsed: false,
    fields: [
        title,
        {
            label: "Supporting text",
            name: "textSupporting",
            widget: "string",
            default: lorumIpsumMedium,
            required: false
        },
        linkPage,
        iconSelect
    ]
};

export default bannerPage;