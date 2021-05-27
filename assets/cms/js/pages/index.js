import gallery from "../partials/gallery";
import image from "../partials/image";
import menuMain from "../partials/menuMain";
import smallHero from "../partials/smallHero";
import testimonials from "../partials/testimonials";
import textTitle from "../partials/textTitle";

const pages = {
    create: true,
    folder: "content/pages",
    label: "Pages",
    name: "pages",
    fields: [
        {
            default: "",
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

export default pages;