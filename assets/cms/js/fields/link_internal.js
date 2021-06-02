import iconSelect from "./selectIcon";

const linkInternal = {
    label: "Link internal",
    name: "linkInternal",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Link title",
            name: "name",
            widget: "string",
            required: false
        },
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
};

export default linkInternal;
