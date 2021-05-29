import button from "../partials/button";
import gallery from "../partials/gallery";
import image from "../partials/image";
import menuMain from "../partials/menuMain";
import smallHero from "../partials/smallHero";
import testimonials from "../partials/testimonials";
import textTitle from "../partials/textTitle";

const homePage = {
    file: "content/_index.md",
    label: "Home page",
    name: "homePage",
    fields: [
        {
            label: "Title",
            name: "title",
            required: true,
            widget: "string"
        },
        menuMain,
        {
            label: "Sections",
            name: "sections",
            widget: "list",
            types: [
                button,
                gallery,
                image,
                smallHero,
                testimonials,
                textTitle
            ]
        }
    ]
};

export default homePage;