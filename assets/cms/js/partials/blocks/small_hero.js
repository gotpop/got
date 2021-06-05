import bodyMarkdown from "../../fields/body_markdown";
import id from "../../fields/id";
import title from "../../fields/title";
import blockImage from "./block_image";

const smallHero = {
    label: "Small Hero",
    name: "smallHero",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        bodyMarkdown,
        blockImage,
        id
    ]
};

export default smallHero;
