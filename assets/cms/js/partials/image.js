import alt from "../fields/alt";
import image from "../fields/image";
import title from "../fields/title";

const imageoOne = {
    label: "Image",
    name: "imageoOne",
    widget: "object",
    collapsed: false,
    fields: [
        image,
        title,
        alt
    ]
};

export default imageoOne;
