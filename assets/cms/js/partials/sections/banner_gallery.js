import blockImage from "../blocks/block_image";

const bannerGallery = {
    label: "Banner Gallery",
    name: "gallery",
    collapsed: true,
    fields: [
        {
            label: "Banner Gallery",
            name: "bannerGalleryList",
            widget: "list",
            types: [
                blockImage
            ]
        }
    ]
};

export default bannerGallery;
