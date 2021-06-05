import { lorumIpsumMedium } from "../data/loremIpsum";
import linkPage from "../../fields/link_page";
import title from "../../fields/title";

const button = {
    label: "Button",
    name: "button",
    widget: "object",
    fields: [
        title,
        {
            label: "Supporting text",
            name: "textSupporting",
            widget: "string",
            default: lorumIpsumMedium,
            required: false
        },
        linkPage
    ]
};

export default button;
