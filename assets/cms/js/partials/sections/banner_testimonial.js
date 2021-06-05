import bodyText from "../../fields/body_text";
import title from "../../fields/title";

const bannerTestimonial = {
    label: "Add a testimonial",
    name: "bannerTestimonial",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        bodyText
    ]
};

export default bannerTestimonial;
