import linkExternal from "../fields/link_external";
import linkInternal from "../fields/link_internal";

const menuPage = {
    file: "config/_default/menus.json",
    label: "Menu editor",
    name: "menuPage",
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
        },
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

export default menuPage;