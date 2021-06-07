import bannerTestimonial from "./banner_testimonial";

const bannerTestimonials = {
    label: "Banner Testimonials",
    name: "testimonials",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Testimonial",
            name: "bannerTestimonial",
            widget: "list",
            types: [
                bannerTestimonial
            ]
        }
    ]
};

export default bannerTestimonials;