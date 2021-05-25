import menuMain from "../partials/menu.main"
import testimonials from "../partials/testimonials"

const page = {
    // file: 'content/items/_index.md',
    label: 'Items Page',
    name: 'item',
    create: true,
    folder: 'content/items',
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
        // menuMain,
        // testimonials
    ]
}

export default page