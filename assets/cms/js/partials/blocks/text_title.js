import id from "../../fields/id";

const textTitle = {
    label: "Text with sub heading",
    name: "textTitle",
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
            label: "Content",
            name: "content",
            widget: "markdown",
            required: false
        },
        id
    ]
};

export default textTitle;