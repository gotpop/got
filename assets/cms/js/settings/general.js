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
        }, {
            label: "Menu Icon",
            name: "logoIcon",
            widget: "select",
            options: [{
                    label: "Academic cap",
                    value: "academic-cap.svg"
                },
                {
                    label: "Adjustments",
                    value: "adjustments.svg"
                },
                {
                    label: "Rich",
                    value: "adjustments.svg"
                },
                {
                    label: "Annotation",
                    value: "annotation.svg"
                }
            ]
        }
    ],
}

export default general