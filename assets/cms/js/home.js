import gallery from "./partials/gallery";
import image from "./partials/image";
import menuMain from "./partials/menuMain";
import smallHero from "./partials/smallHero";
import testimonials from "./partials/testimonials";
import textTitle from "./partials/textTitle";

const home = {
    folder: "content/_index.md",
    label: "Home",
    name: "home",
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
                gallery,
                image,
                smallHero,
                testimonials,
                textTitle
            ]
        }
    ]
};

export default home;