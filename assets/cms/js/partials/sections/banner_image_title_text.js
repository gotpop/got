import body from "../../fields/body_text";
import image from "../../fields/image";
import title from "../../fields/title";

const baannerImageTitleText = {
    label: "Image Title Text",
    name: "imageTitleText",
    widget: "object",
    collapsed: false,
    fields: [
        title,
        body,
        image
    ]
};

export default baannerImageTitleText;