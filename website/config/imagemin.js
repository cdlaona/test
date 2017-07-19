var path    =   require('path');
var glob    =   require('glob');

module.exports = function () {
    var files   =   getHtmlPath('dist/styles/page/**/*.index.css');
    return {
        dynamic: {
            options: {
                optimizationLevel: 3 // png图片优化水平，3是默认值，取值区间0-7
            },
            files: files
        }
    }
};

function getHtmlPath(globPath) {
    var _files = glob.sync(globPath);
    var _basePath = '';
    var _array = [];

    for (var i = 0; i < _files.length; i++) {
        _basePath = __dirname + '/../' + path.dirname(_files[i])+'/imgs/';
        var _fileJson = {
            expand: true,
            cwd: _basePath,
            src: ["*.{png,jpg,gif}"],
            dest: _basePath
        };
        _array.push(_fileJson);
    }
    return _array;
}