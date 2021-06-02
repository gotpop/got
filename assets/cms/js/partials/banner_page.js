const bannerPage = {
    label: "Banner Page",
    name: "bannerPage",
    widget: "object",
    collapsed: false,
    fields: [
        {
            label: "Banner Page title",
            name: "title",
            widget: "string",
            required: false
        },
        {
            label: "Pages",
            required: false,
            name: "bannerPagerel",
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

export default bannerPage;