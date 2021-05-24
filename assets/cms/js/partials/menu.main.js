import selectIcon from "../fields/select.icon"

const menuMain = {
    "label": "Menu",
    "name": "menu",
    "widget": "object",
    "fields": [
        {
            "label": "mainmenu",
            "name": "mainmenu",
            "widget": "object",
            "fields": [
                {
                    "label": "params",
                    "name": "params",
                    "widget": "object",
                    "fields": [selectIcon]
                }
            ]
        }
    ]
}

export default menuMain