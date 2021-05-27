const gallery = {
    label: 'Gallery item',
    name: 'gallery',
    widget: "list",
    fields: [{
        label: 'Gallery image',
        name: 'galleryImage',
        widget: "list",
        fields: [{
            label: "Featured Image",
            name: "thumbnail",
            widget: "image",
            default: "/uploads/code.jpg",
            media_library: {
                config: {
                    multiple: true
                }
            }
        }]
    }]
}

export default gallery
