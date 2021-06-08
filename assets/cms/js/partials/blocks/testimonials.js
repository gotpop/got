import testimonial from "./testimonial";

const testimonials = {
    label: "Testimonials",
    name: "testimonials",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Testimonial",
            name: "testimonial",
            widget: "list",
            types: [
                testimonial
            ]
        }
    ]
};

export default testimonials;

