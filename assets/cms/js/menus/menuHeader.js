import linkAdmin from "../fields/link_admin";
import linkExternal from "../fields/link_external";
import linkHome from "../fields/link_home";
import linkInternal from "../fields/link_internal";

const menuHeader = {
    file: "data/menus/header.json",
    label: "Header menu",
    name: "menuHeader",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
            label: "Header menu",
            name: "header",
            widget: "list",
            summary: "{{fields.name}}",
            types: [
                linkInternal,
                linkExternal,
                linkAdmin,
                linkHome
            ]
        }
    ]
};

export default menuHeader;