module.exports = function (grunt) {

    require("time-grunt")(grunt);
    require("load-grunt-tasks")(grunt);

    var configPath = require('./config/config');

    var config = {
        yo : configPath,
        sprite : require('./config/sprite'),
        imagemin : require('./config/imagemin')(),
        copy : require('./config/copy'),
        clean : require('./config/clean'),
        processhtml : require('./config/processhtml'),
        less : require('./config/less'),
        watch : require('./config/watch'),
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'src/styles/page/**/**.css',
                        'devHtml/**.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir : './'
                    },
                    // host : '192.168.253.1:3000',
                    directory: true,
                    injectChanges : true,
                    online : true,
                    startPath : './devHtml'
                }
            }
        }
    };

    grunt.initConfig(config);






    grunt.registerTask('spt',   ['sprite']);

    grunt.registerTask('dev',   [
        'less',
        'processhtml:dev',
        'browserSync',
        'watch'
    ]);


    grunt.registerTask('build',   [
        'clean:bin',
        'copy:main',
        'clean:build',
        'processhtml:build'
        // 'imagemin:dynamic'
    ]);
    
};