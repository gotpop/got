import textTitle from "../partials/blocks/text_title";

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
                textTitle
            ]
        }
    ]
};

export default primarySidebar;