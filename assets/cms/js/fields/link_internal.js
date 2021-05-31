import iconSelect from "./selectIcon";

const linkInternal =  {
    label: "Link",
    name: "link",
    widget: "object",
    collapsed: false,
    fields: [
        {
            label: "Link title",
            name: "title",
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
};

export default linkInternal;