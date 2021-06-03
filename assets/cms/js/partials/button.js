import linkPage from "../fields/link_page";
import title from "../fields/title";

const button = {
    label: "Button",
    name: "button",
    widget: "object",
    collapsed: false,
    fields: [
        title,
        linkPage
    ]
};

export default button;