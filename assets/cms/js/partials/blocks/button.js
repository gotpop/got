import { lorumIpsumMedium } from "../data/loremIpsum";
import linkPage from "../../fields/link_page";
import title from "../../fields/title";
import id from "../../fields/id";

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
        linkPage,
        id
    ]
};

export default button;
