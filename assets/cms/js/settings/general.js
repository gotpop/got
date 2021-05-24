import menuIcon from "../fields/select.icon"

const general = {
    file: 'data/settings.general.json',
    label: 'General Settings',
    description: 'General Site Settings',
    name: 'general',
    delete: false,
    editor: {
        preview: false
    },
    fields: [{
            label: 'Global title',
            name: 'site_title',
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
    ],
}

export default general