const bannerGallery = {
    label: "Banner Gallery",
    name: "bannerGallery",
    widget: "object",
    collapsed: false,
    fields: [
        {
            label: "Banner Gallery title",
            name: "title",
            widget: "string",
            required: false
        },
        {
            label: "Pages",
            required: false,
            name: "bannerGalleryRel",
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

export default bannerGallery;