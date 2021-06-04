import bodyText from "../../fields/body_text";
import image from "../../fields/image";
import title from "../../fields/title";

const baannerImageTitleText = {
    label: "Image Title Text",
    name: "imageTitleText",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        bodyText,
        image
    ]
};

export default baannerImageTitleText;