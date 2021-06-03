import iconSelect from "../../fields/select_icon";

const linkHome = {
    label: "Link home",
    name: "linkHome",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Link title",
            name: "name",
            widget: "string",
            default: "Home",
            required: false
        },
        iconSelect
    ]
};

export default linkHome;
