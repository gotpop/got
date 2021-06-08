import alt from "../../fields/alt";
import id from "../../fields/id";
import image from "../../fields/image";
import title from "../../fields/title";

const gallery = {
    label: "Gallery item",
    name: "gallery",
    widget: "list",
    fields: [
        title,
        {
            label: "Gallery image",
            name: "galleryImage",
            widget: "list",
            fields: [
                image,
                title,
                alt
            ]
        },
        id
    ]
};

export default gallery;
