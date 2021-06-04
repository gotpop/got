import bodyMarkdown from "../../fields/body_markdown";
import title from "../../fields/title";

const smallHero = {
    label: "Small Hero",
    name: "hero",
    widget: "object",
    collapsed: false,
    fields: [
        title,
        bodyMarkdown
    ]
};

export default smallHero;
