import CMS from 'netlify-cms';
import pages from './pages/index';
import settings from './settings/index';
import envObject from './partials/envObject';
import items from './items';

console.log(envObject);

CMS.init({
    config: {
        load_config_file: false,
        local_backend: true,
        backend: envObject,
        media_folder: '/static/images/uploads',
        public_folder: '/images/uploads',
        collections: [pages, settings, items]
    }
});