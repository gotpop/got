import menuMain from "../partials/menu.main"
import testimonials from "../partials/testimonials"

const page = {
    file: 'content/work/_index.md',
    label: 'Work Page',
    name: 'work',
    fields: [{
            label: 'Title',
            name: 'title',
            widget: 'string',
            default: '',
            required: false,
        },
        {
            label: "Body",
            name: "body",
            widget: "markdown"
        },
        menuMain,
        testimonials
    ],
}

export default page