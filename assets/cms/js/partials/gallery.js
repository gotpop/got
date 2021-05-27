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
                {
                    label: "Featured Image",
                    name: "thumbnail",
                    widget: "image",
                    default: "/uploads/code.jpg",
                    media_library: {
                        config: {
                            multiple: true
                        }
                    }
                },
                {
                    label: "Title",
                    name: "title",
                    widget: "string",
                    required: false
                },
                {
                    label: "Alt text",
                    name: "header",
                    widget: "string",
                    required: false
                }
            ]
        }
    ]
};

export default gallery;
