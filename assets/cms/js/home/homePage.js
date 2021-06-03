import id from "../fields/id";
import title from "../fields/title";
import bannerCards from "../partials/banner_cards";
import bannerGallery from "../partials/banner_gallery";
import baannerImageTitleText from "../partials/banner_image_title_text";
import bannerPage from "../partials/banner_page";
import bannerTestimonials from "../partials/banner_testimonials";


const homePage = {
    file: "content/_index.md",
    label: "Home page",
    name: "homePage",
    fields: [
        title,
        {
            label: "Display Hero",
            name: "displayHero",
            widget: "boolean",
            default: true,
            hint: "The hero is the large introduction area on the homepage"
        },
        {
            label: "Sections",
            name: "sections",
            widget: "list",
            types: [
                bannerCards,
                bannerGallery,
                baannerImageTitleText,
                bannerPage,
                bannerTestimonials
            ]
        },
        id
    ]
};

export default homePage;
