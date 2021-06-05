import menuSub from "../partials/blocks/menu_sub";

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
                menuSub
            ]
        }
    ]
};

export default primarySidebar;