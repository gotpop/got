import body from "../fields/body";
import image from "../fields/image";
import title from "../fields/title";

const bannerCards = {
    label: "Banner Cards",
    name: "bannerCards",
    widget: "list",
    collapsed: true,
    fields: [
        {
            label: "Banner card",
            name: "bannerCard",
            widget: "list",
            fields: [
                title,
                body,
                image,
                {
                    label: "Button link",
                    required: false,
                    name: "bannerCardsRel",
                    widget: "relation",
                    collection: "pages",
                    hint: "Choose an internal page to link to in this card",
                    search_fields: [
                        "title"
                    ],
                    value_field: "id",
                    display_fields: [
                        "title"
                    ]
                }
            ]
        }
    ]
};

export default bannerCards;
