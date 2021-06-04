import bodyMarkdown from "../../fields/body_markdown";
import title from "../../fields/title";

const smallHero = {
    label: "Small Hero",
    name: "smallHero",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        bodyMarkdown
    ]
};

export default smallHero;
