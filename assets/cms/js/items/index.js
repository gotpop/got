import gallery from "../partials/gallery";
import image from "../partials/image";
import menuMain from "../partials/menuMain";
import smallHero from "../partials/smallHero";
import testimonials from "../partials/testimonials";
import textTitle from "../partials/textTitle";

const items = {
    label: "Items",
    name: "item",
    create: true,
    folder: "content/items",
    file: "content/items/_index.md",
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

export default items;