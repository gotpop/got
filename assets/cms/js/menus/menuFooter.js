import linkExternal from "../fields/link_external";
import linkInternal from "../fields/link_internal";

const menuFooter = {
    file: "data/menuFooter.json",
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
                linkExternal
            ]
        }
    ]
};

export default menuFooter;