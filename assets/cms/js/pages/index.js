import id from "../fields/id";
import title from "../fields/title";
import button from "../partials/button";
import gallery from "../partials/gallery";
import image from "../partials/image";
import smallHero from "../partials/smallHero";
import testimonials from "../partials/testimonials";
import textTitle from "../partials/textTitle";

const pages = {
    create: true,
    folder: "content/pages",
    label: "Pages",
    name: "pages",
    description: "Build top level site pages here!",
    summary: "{{title}}",
    fields: [
        title,
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
        },
        id
    ]
};

export default pages;
