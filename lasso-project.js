var PROJECT_NAME = 'cobrowse-docs';


module.exports = require('lasso-tools')
    .project({
        projectDir: __dirname,
        name: PROJECT_NAME
    }, function(config, callback) {
        callback(null, {
            routes: [
                {
                    template: require.resolve('pages/index.marko'),
                    path: '/'
                },
                {
                    template: require.resolve('pages/tech-talks/micro-services/index.marko'),
                    path: '/tech-talks/micro-services/'
                }
            ]
        });
    })

    // Parse the command-line (parsing will happen when server or build starts but before configuration)
    .parseCommandLine();
