const baannerImageTitleText = {
    label: "Image Title Text",
    name: "imageTitleText",
    widget: "object",
    collapsed: false,
    fields: [
        {
            label: "Image Title Text",
            name: "title",
            widget: "string",
            required: false
        },
        {
            label: "Pages",
            required: false,
            name: "imageTitleTextrel",
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

export default baannerImageTitleText;