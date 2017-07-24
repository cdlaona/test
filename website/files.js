var path                =   require('path');
var glob                =   require('glob');

module.exports = function (grunt) {
    'use strict';
    require("time-grunt")


    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        sprite: {
            options: {
                imagepath: 'styles/page/test/imgs/',
                spritedest: 'styles/page/test/slice/',
                spritepath: 'slice/',
                padding: 2,
                useimageset: false,
                newsprite: false,
                spritestamp: true,
                cssstamp: true,
                algorithm: 'binary-tree',
                engine: 'pixelsmith'
            },
            autoSprite: {
                // files: []
                files : [{
                    expand: true,
                    cwd: 'styles/page/test/',
                    src: '*.index.css',
                    dest: 'styles/page/test/',
                    ext: '.index.sprite.css'
                }]
            }
        },

        less: {
            development: {
                options : {
                    banner : '/*! <%= pkg.name %>.css v <%= pkg.version %> */',
                    compress : true
                },
                // files : {
                //     "styles/diavel/chofnUI.css": "styles/diavel/diavel.ui.less"
                // }
                files: getLess('styles/page/**/*.index.less')
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3 // png图片优化水平，3是默认值，取值区间0-7
                },
                files: [
                    {
                        expand: true,
                        cwd: "images/", // 当前工作路径
                        src: ["**/*.{png,jpg,gif}"], // 要出处理的文件格式(images下的所有png,jpg,gif)
                        dest: "images/" // 输出目录(直接覆盖原图)
                    }
                ]
            }
        },

        processhtml: {
            dev: {
                options: {
                    process: true,
                    data: {
                        title: '哇哈哈',
                        message: '../cc'
                    }
                },
                files : getHtmlPath('views/*.index.html', 'devHtml')
                // files :
                // {
                //     'dev/index.html': ['views/home.index.html']
                // }
            }
        },

        watch: {
            files: [
                'styles/**/**/**/**/**/*.less'
            ],
            tasks: ['less:development']
        }

    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-css-sprite');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('html', ['processhtml:dev']);
    grunt.registerTask('spt', ['sprite']);
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('css', ['less', 'watch']);
};
// https://github.com/dciccale/grunt-processhtml

// https://www.npmjs.com/package/grunt-combohtml

// https://github.com/moliniao/auto-grunt
function getLess(globPath, pathDir) {
    var _defineFile = {
        "styles/diavel/chofnUI.css": "styles/diavel/diavel.ui.less"
    };
    var _files = glob.sync(globPath);
    var _basePath = '';
    var _baseMulu = '';
    var _baseName = '';

    for (var i = 0; i < _files.length; i++) {
        _basePath = path.dirname(_files[i]);
        _baseMulu = _basePath.split('/');
        _baseName = path.basename(_files[i], '.less');
        _defineFile[_basePath + '/' + _baseName + '.css'] = _files[i];
    }
    return _defineFile;
}

function getHtmlPath(globPath, pathDir) {
    var _defineFile = {};
    var _files = glob.sync(globPath);
    var _basePath = '';
    var _baseMulu = '';
    var _baseName = '';

    for (var i = 0; i < _files.length; i++) {
        var _array = [];
        _basePath = path.dirname(_files[i]);
        _baseMulu = _basePath.split('/');
        _baseName = path.basename(_files[i], '.html');
        _array.push(_files[i]);
        _defineFile[pathDir + '/' + _baseName + '.html'] = _array;
    }
    return _defineFile;
}