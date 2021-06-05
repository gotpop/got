import id from "../../fields/id";

const testimonials = {
    label: "Testimonials",
    name: "testimonials",
    widget: "list",
    fields: [
        {
            label: "Quotes",
            name: "quote",
            widget: "string",
            default: "Everything is awesome!"
        },
        {
            label: "Author",
            name: "author",
            widget: "object",
            fields: [
                {
                    label: "Name",
                    name: "name",
                    widget: "string",
                    default: "Emmet"
                }
            ]
        },
        id
    ]
};

export default testimonials;