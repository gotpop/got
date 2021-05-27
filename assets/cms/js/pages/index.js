import gallery from "../partials/gallery";
import image from "../partials/image";
import menuMain from "../partials/menuMain";
import smallHero from "../partials/smallHero";
import testimonials from "../partials/testimonials";
import textTitle from "../partials/textTitle";

const pages = {
    label: "Pages",
    name: "pages",
    create: true,
    folder: "content/pages",
    fields: [
        {
            label: "Title",
            name: "title",
            widget: "string",
            default: "",
            required: true
        },
        menuMain,
        {
            label: "Sections",
            name: "sections",
            widget: "list",
            types: [
                smallHero,
                gallery,
                image,
                testimonials,
                textTitle
            ]
        }
    ]
};

export default pages;