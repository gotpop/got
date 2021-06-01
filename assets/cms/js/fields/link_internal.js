import iconSelect from "./selectIcon";

const linkInternal =  {
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
            label: "Params",
            name: "Params",
            widget: "object",
            collapsed: false,
            fields: [
                iconSelect,
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
                }
            ]
        }
    ]
};

export default linkInternal;