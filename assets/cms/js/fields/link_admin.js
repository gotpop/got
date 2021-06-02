import iconSelect from "./selectIcon";

const linkAdmin = {
    label: "Link admin",
    name: "linkAdmin",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Link title",
            name: "name",
            widget: "string",
            default: "Admin",
            required: false
        },
        iconSelect
    ]
};

export default linkAdmin;
