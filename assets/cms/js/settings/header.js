import menuIcon from "../fields/select.icon";

const header = {
    file: 'data/header.json',
    label: 'Header Settings',
    description: 'Header Settings',
    name: 'header',
    delete: false,
    editor: {
        preview: false
    },
    fields: [{
            label: 'Logo text',
            name: 'logo_text',
            widget: 'string'
        },
        {
            label: 'Display site title',
            name: 'display_site_title',
            widget: "boolean",
            default: true
        },
        {
            label: 'Display site icon',
            name: 'display_site_icon',
            widget: "boolean",
            default: true
        }, 
        menuIcon
    ]
}

export default header