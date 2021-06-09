const colour = {
    file: "data/style/colour.json",
    label: "Colours",
    name: "colour",
    delete: false,
    editor: {
        preview: false
    },
    fields: [
        {
            label: "Color Primary",
            name: "colorPrimary",
            widget: "color",
            enableAlpha: true,
            allowInput: true
        },
        {
            label: "Color Secondary",
            name: "colorSecondary",
            widget: "color",
            enableAlpha: true,
            allowInput: true
        }
    ]
};

export default colour;
