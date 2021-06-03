import iconSelect from "../fields/selectIcon";

const linkExternal = {
    label: "Link external",
    name: "linkExternal",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Link title",
            name: "name",
            widget: "string",
            required: false
        },
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