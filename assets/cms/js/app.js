import CMS from 'netlify-cms'
import pages from './pages/index'
import settings from './settings/index'

let liam;
console.log('The environment is: ', process.env.NODE_ENV);

if (process.env.NODE_ENV == 'development') {
    liam = {
        name: 'proxy',
        proxy_url: 'http://localhost:8081/api/v1',
        branch: 'master'
    }
} else {
    liam = {
        name: 'git-gateway',
        branch: 'master'
    }
};

CMS.init({
    config: {
        load_config_file: false,
        local_backend: true,
        backend: liam,
        media_folder: '/static/images/uploads',
        public_folder: '/images/uploads',
        collections: [pages, settings]
    },
})