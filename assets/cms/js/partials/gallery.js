import alt from "../fields/alt";
import image from "../fields/image";
import title from "../fields/title";

const gallery = {
    label: "Gallery item",
    name: "gallery",
    widget: "list",
    fields: [
        {
            label: "Gallery image",
            name: "galleryImage",
            widget: "list",
            fields: [
                image,
                title,
                alt
            ]
        }
    ]
};

export default gallery;
