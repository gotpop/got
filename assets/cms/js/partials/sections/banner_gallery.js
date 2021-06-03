import alt from "../../fields/alt";
import image from "../../fields/image";
import title from "../../fields/title";

const bannerGallery = {
    label: "Banner Gallery",
    name: "bannerGallery",
    widget: "list",
    collapsed: true,
    fields: [
        {
            label: "Gallery image",
            name: "galleryImage",
            widget: "object",
            fields: [
                image,
                title,
                alt
            ]
        }
    ]
};

export default bannerGallery;


