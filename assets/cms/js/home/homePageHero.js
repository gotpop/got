import bodyText from "../fields/body_text";
import title from "../fields/title";

const homePage = {
    file: "data/home_hero.json",
    label: "Home page hero content",
    name: "homeHero",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
            label: "Display home page hero",
            name: "displayHomeHero",
            widget: "boolean",
            hint: "Choose whether to display the hero on the homepage",
            default: true
        },
        title,
        bodyText
    ]
};

export default homePage;
