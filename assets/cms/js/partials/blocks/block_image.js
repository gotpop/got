import alt from "../../fields/alt";
import image from "../../fields/image";
import title from "../../fields/title";

const blockImage = {
    label: "Image",
    name: "blockImage",
    widget: "object",
    collapsed: false,
    fields: [
        image,
        title,
        alt
    ]
};

export default blockImage;
