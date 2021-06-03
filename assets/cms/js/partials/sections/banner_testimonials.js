import linkPage from "../../fields/link_page";
import title from "../../fields/title";

const bannerTestimonials = {
    label: "Banner Testimonials",
    name: "banner_testimonials",
    widget: "object",
    collapsed: false,
    fields: [
        title,
        
        linkPage
    ]
};

export default bannerTestimonials;