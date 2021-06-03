import body from "../fields/body";
import image from "../fields/image";
import title from "../fields/title";

const baannerImageTitleText = {
    label: "Image Title Text",
    name: "imageTitleText",
    widget: "object",
    collapsed: false,
    fields: [
        body,
        image,
        title
    ]
};

export default baannerImageTitleText;