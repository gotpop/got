import CMS from "netlify-cms";
import {Widget as IdWidget} from "@ncwidgets/id";
import pages from "./pages";
import home from "./home";
import settings from "./settings/index";
import envObject from "./partials/envObject";

// use 'ncw-id' in config.yml
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
            settings
        ]
    }
});
