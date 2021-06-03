import bannerCard from "./banner_card";

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
            types: [
                bannerCard
            ]
        }
    ]
};

export default bannerCards;
