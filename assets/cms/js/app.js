import CMS from "netlify-cms";
import { Widget as IdWidget } from "@ncwidgets/id";
import envObject from "./partials/utils/env_object";
import pages from "./pages";
import home from "./home";
import settings from "./settings";
import menus from "./menus";
import social from "./social";
import sidebars from "./sidebars";
import style from "./style";

// // Register unique ID widget. Use 'ncw-id' in config.yml
CMS.registerWidget(IdWidget);

CMS.init({
    config: {
        load_config_file: false,
        local_backend: true,
        backend: envObject,
        media_folder: "/static/images/uploads",
        public_folder: "/images/uploads",
        collections: [
            home,
            pages,
            settings,
            menus,
            social,
            sidebars,
            style
        ]
    }
});
