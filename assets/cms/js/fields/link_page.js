const linkPage = {
    label: "Page link",
    required: false,
    name: "linkrel",
    widget: "relation",
    hint: "Choose a page to link to",
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
