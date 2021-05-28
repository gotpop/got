import CMS from "netlify-cms";
import settings from "./settings/index";
import envObject from "./partials/envObject";
import pages from "./pages";
import home from "./home";

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
