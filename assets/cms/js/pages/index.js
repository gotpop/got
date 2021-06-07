import id from "../fields/id";
import title from "../fields/title";
import button from "../partials/blocks/button";
import gallery from "../partials/blocks/gallery";
import image from "../partials/blocks/block_image";
import smallHero from "../partials/blocks/small_hero";
import testimonials from "../partials/blocks/testimonials";
import textTitle from "../partials/blocks/text_title";

const pages = {
    create: true,
    folder: "content",
    label: "Pages",
    name: "pages",
    description: "Build top level site pages here!",
    summary: "{{title}}",
    filter: {
        field: "visible",
        value: true
    },
    fields: [
        title,
        {
            label: "Display page hero",
            name: "displayPageHero",
            widget: "boolean",
            default: true
        },
        {
            name: "visible",
            widget: "hidden",
            default: true
        },
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
