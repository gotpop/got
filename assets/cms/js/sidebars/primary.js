import linkAdmin from "../partials/blocks/link_admin";
import linkExternal from "../partials/blocks/link_external";
import linkHome from "../partials/blocks/link_home";
import linkInternal from "../partials/blocks/link_internal";

const primarySidebar = {
    file: "data/sidebars/primary.json",
    label: "Primary sidebar",
    name: "primarySidebarPage",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
            label: "Primary sidebar",
            name: "primarySidebar",
            widget: "list",
            summary: "{{fields.title}}",
            types: [
                linkInternal,
                linkExternal,
                linkAdmin,
                linkHome
            ]
        }
    ]
};

export default primarySidebar;