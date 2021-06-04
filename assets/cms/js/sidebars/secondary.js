import textTitle from "../partials/blocks/text_title";

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
                textTitle
            ]
        }
    ]
};

export default secondarySidebar;