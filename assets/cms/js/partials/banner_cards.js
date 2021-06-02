const bannerCards = {
    label: "Banner Cards",
    name: "bannerCards",
    widget: "object",
    collapsed: false,
    fields: [
        {
            label: "Banner Cards title",
            name: "title",
            widget: "string",
            required: false
        },
        {
            label: "Pages",
            required: false,
            name: "bannerCardsRel",
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

export default bannerCards;