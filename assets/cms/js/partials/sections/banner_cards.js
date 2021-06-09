import bannerCard from "./banner_card";

const bannerCards = {
    label: "Banner Cards",
    name: "cards",
    collapsed: true,
    fields: [
        {
            label: "Banner card",
            name: "bannerCard",
            summary: "{{fields.title}}",
            widget: "list",
            types: [
                bannerCard
            ]
        }
    ]
};

export default bannerCards;
