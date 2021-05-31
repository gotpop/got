// import button from "../partials/button";

import iconSelect from "../fields/selectIcon";

const menus = {
    file: "config/_default/menus.json",
    label: "Footer menu",
    description: "menus Site Settings",
    name: "menus",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
  
            label: "Footer menu",
            name: "footer",
            widget: "list",
            types: [
                {
                    label: "Link",
                    name: "link",
                    widget: "object",
                    collapsed: false,
                    fields: [
                        {
                            label: "Link title",
                            name: "name",
                            widget: "string",
                            required: false
                        },
                        {
                            label: "Page link",
                            required: false,
                            name: "buttonrel",
                            widget: "relation",
                            collection: "pages",
                            search_fields: [
                                "title"
                            ],
                            value_field: "id",
                            display_fields: [
                                "title"
                            ]
                        },
                        {
                            label: "Params",
                            name: "Params",
                            widget: "object",
                            collapsed: false,
                            fields: [
                                iconSelect
                            ]
                        }
                    ]
                }
            ]
            
        }
    ]
};

export default menus;