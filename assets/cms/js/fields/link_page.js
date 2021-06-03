const linkPage = {
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
};

export default linkPage;
