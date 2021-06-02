import linkExternal from "../fields/link_external";
import linkInternal from "../fields/link_internal";

const menuHeader = {
    file: "data/menuHeader.json",
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
                linkExternal
            ]
        }
    ]
};

export default menuHeader;