const imageoOne = {
    label: "Image",
    name: "imageoOne",
    widget: "object",
    collapsed: false,
    fields: [
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
        },
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
        }
    ]
};

export default imageoOne;
