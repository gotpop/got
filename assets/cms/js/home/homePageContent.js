import bannerCards from "../partials/sections/banner_cards";
import bannerGallery from "../partials/sections/banner_gallery";
import baannerImageTitleText from "../partials/sections/banner_image_title_text";
import bannerPage from "../partials/sections/banner_page";
import bannerTestimonials from "../partials/sections/banner_testimonials";

const homePageContent = {
    file: "data/home_content.json",
    label: "Home page content",
    name: "homeContent",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
            label: "Home content",
            name: "homeContentList",
            widget: "list",
            summary: "{{fields.type}}",
            types: [
                bannerCards,
                bannerGallery,
                baannerImageTitleText,
                bannerPage,
                bannerTestimonials
            ]
        }
    ]
};

export default homePageContent;
