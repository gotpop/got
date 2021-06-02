const bannerTestimonials = {
    label: "Banner Testimonials",
    name: "banner_testimonials",
    widget: "object",
    collapsed: false,
    fields: [
        {
            label: "Banner testimonials title",
            name: "title",
            widget: "string",
            required: false
        },
        {
            label: "Pages",
            required: false,
            name: "banner_testimonialsrel",
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

export default bannerTestimonials;