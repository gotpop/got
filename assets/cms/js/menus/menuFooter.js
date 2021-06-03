import linkAdmin from "../partials/link_admin";
import linkExternal from "../partials/link_external";
import linkHome from "../partials/link_home";
import linkInternal from "../partials/link_internal";

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