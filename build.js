Error.stackTraceLimit = Infinity;

require('app-module-path').addPath(__dirname);

// The following line installs the Node.js require extension
// for `.marko` files. Once installed, `*.marko` files can be
// required just like any other JavaScript modules.
require('marko/node-require').install();

var fs = require('fs');
var nodePath = require('path');
var url = require('url');

require('./lasso-project').build()

    .extendConfig({
        properties: {
            cdnUrl: {
                type: String,
                description: 'CDN URL'
            }
        }
    })

    .onLoadConfig(function(config) {
        this.getLogging().configure({
            loggers: {
                //'lasso-i18n': 'DEBUG',
                'lasso-tools': 'INFO'
            }
        });

        var cdnUrl = config.getCdnUrl();
        if (cdnUrl) {
            config.setUrlPrefix(url.resolve(cdnUrl, '/' + this.getName() + '/' + this.getVersion() + '/'));
        }
    })

    .start(function(err, result) {
        if (err) {
            throw err;
        }

        var project = result.getProject();

        var indexFiles = [];

        var manifest = {
            name: project.getName(),
            version: project.getVersion(),
            indexFiles: indexFiles
        };

        result.getRoutes().forEach(function(route) {
            indexFiles.push({
                url: nodePath.join('/cobrowse/docs', route.getPath()),
                file: route.getFile()
            });
        });

        var outputDir = project.getConfig().getOutputDir();
        var manifestFile = nodePath.join(outputDir, 'manifest.json');

        fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, '    '), {encoding: 'utf8'});
    });