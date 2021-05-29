const button = {
    label: "Button",
    name: "button",
    widget: "object",
    collapsed: false,
    fields: [
        {
            label: "Button title",
            name: "title",
            widget: "string",
            required: false
        },
        {
            label: "Pages",
            required: false,
            name: "buttonrel",
            widget: "relation",
            collection: "pages",
            search_fields: [
                "title"
            ],
            value_field: "title",
            display_fields: [
                "title"
            ]
        }
    ]
};

export default button;