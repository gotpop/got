import iconSelect from "../../fields/select_icon";
import title from "../../fields/title";

const linkExternal = {
    label: "Link external",
    name: "linkExternal",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        iconSelect,
        {
            label: "External URL",
            name: "url",
            widget: "string",
            hint: "Add full URL to desired location including http://www.",
            default: "http://www.google.com"
        }
    ]
};

export default linkExternal;