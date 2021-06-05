import bodyText from "../../fields/body_text";
import title from "../../fields/title";
import blockImage from "../blocks/block_image";

const baannerImageTitleText = {
    label: "Image Title Text",
    name: "imageTitleText",
    widget: "object",
    collapsed: true,
    fields: [
        title,
        bodyText,
        blockImage
    ]
};

export default baannerImageTitleText;