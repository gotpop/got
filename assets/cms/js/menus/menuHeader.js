import linkAdmin from "../partials/blocks/link_admin";
import linkExternal from "../partials/blocks/link_external";
import linkHome from "../partials/blocks/link_home";
import linkInternal from "../partials/blocks/link_internal";

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