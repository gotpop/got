import alt from "../../fields/alt";
import image from "../../fields/image";
import title from "../../fields/title";
import id from "../../fields/id";

const blockImage = {
    label: "Image",
    name: "blockImage",
    widget: "object",
    collapsed: false,
    fields: [
        image,
        title,
        alt,
        id
    ]
};

export default blockImage;
