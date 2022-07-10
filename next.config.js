module.exports = {
    reactStrictMode: true,
    images: {
        loader: 'imgix',
        path: '',
    },
}

const withTM = require('next-transpile-modules') // pass the modules you would like to see transpiled

module.exports = withTM(['react-d3-speedometer', 'lodash-es'], {
    resolveSymlinks: false,
})
