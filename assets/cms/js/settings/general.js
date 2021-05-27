const general = {
    file: "data/general.json",
    label: "General Settings",
    description: "General Site Settings",
    name: "general",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
            label: "Global title",
            name: "site_title",
            widget: "string"
        }
    ]
};

export default general;