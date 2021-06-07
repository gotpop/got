import linkPage from "../fields/link_page";
import title from "../fields/title";

const homePage = {
    file: "data/home.json",
    label: "Choose home page",
    name: "chooseHomePage",
    fields: [
        title,
        linkPage
    ]
};

export default homePage;
