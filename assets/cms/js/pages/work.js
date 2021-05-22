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
        {
            label: "Menu Icon",
            name: "menu.mainmenu.params.menuIcon",
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
                    label: "Liam",
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

export default page