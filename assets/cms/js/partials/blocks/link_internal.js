import iconSelect from "../../fields/select_icon";
import linkPage from "../../fields/link_page";
import title from "../../fields/title";

const linkInternal = {
    label: "Link internal",
    name: "linkInternal",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        iconSelect,
        linkPage
    ]
};

export default linkInternal;
