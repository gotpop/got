import selectIcon from "../fields/selectIcon";

const menuMain = {
    label: "Menu options",
    name: "menu",
    widget: "object",
    collapsed: true,
    fields: [
        {
            label: "Main menu",
            name: "mainmenu",
            widget: "object",
            fields: [
                {
                    label: "Choose menu options",
                    name: "params",
                    widget: "object",
                    fields: [
                        selectIcon
                    ]
                }
            ]
        }
    ]
};

export default menuMain;