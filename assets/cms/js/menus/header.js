import iconSelect from "../fields/selectIcon";

const header = {
    file: "config/_default/menus.json",
    label: "Header menu",
    name: "headerMenu",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
  
            label: "Header menu",
            name: "header",
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
                            name: "linkrel",
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

export default header;