console.log('The environment is:', process.env.NODE_ENV);

let envObject = {
    branch: 'master'
}

if (process.env.NODE_ENV == 'development') {
    envObject.name = 'proxy'
    envObject.proxy_url = 'http://localhost:8081/api/v1'
} else {
    envObject.name = 'git-gateway'
}

export default envObject