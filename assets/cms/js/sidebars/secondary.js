import linkAdmin from "../partials/blocks/link_admin";
import linkExternal from "../partials/blocks/link_external";
import linkHome from "../partials/blocks/link_home";
import linkInternal from "../partials/blocks/link_internal";

const secondarySidebar = {
    file: "data/sidebars/secondary.json",
    label: "Secondary sidebar",
    name: "secondarySidebarPage",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
            label: "Secondary sidebar",
            name: "secondarySidebar",
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

export default secondarySidebar;