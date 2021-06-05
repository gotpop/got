import bodyMarkdown from "../../fields/body_markdown";
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
        blockImage
    ]
};

export default smallHero;
