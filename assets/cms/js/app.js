import CMS from 'netlify-cms'
import pages from './pages/index'
// import posts from './collections/posts'


window.CMS_MANUAL_INIT = true

CMS.init({
    config: {
        load_config_file: false,
        local_backend: true,
        backend: {
            // name: 'git-gateway',
            name: 'proxy',
            proxy_url: 'http://localhost:8081/api/v1',
            branch: 'master'
        },
        media_folder: '/static/images/uploads',
        public_folder: '/images/uploads',
        collections: [pages]
    },
})