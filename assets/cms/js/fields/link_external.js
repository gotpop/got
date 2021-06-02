import iconSelect from "./selectIcon";

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
        {
            label: "Link details",
            name: "Params",
            widget: "object",
            collapsed: false,
            fields: [
                iconSelect,
                {
                    label: "Layout",
                    name: "type",
                    widget: "hidden",
                    default: "linkExternal"
                },
                {
                    label: "External URL",
                    name: "url",
                    widget: "string",
                    hint: "Add full URL to desired location including http://www.",
                    default: "http://www.google.com"
                }
            ]
        }
    ]
};

export default linkExternal;