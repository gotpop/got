import iconSelect from "../../fields/select_icon";
import title from "../../fields/title";

const linkAdmin = {
    label: "Link admin",
    name: "linkAdmin",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        iconSelect
    ]
};

export default linkAdmin;
