import linkAdmin from "../partials/blocks/link_admin";
import linkExternal from "../partials/blocks/link_external";
import linkHome from "../partials/blocks/link_home";
import linkInternal from "../partials/blocks/link_internal";

const menuFooter = {
    file: "data/menus/footer.json",
    label: "Footer menu",
    name: "menuFooter",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
            label: "Footer menu",
            name: "footer",
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

export default menuFooter;