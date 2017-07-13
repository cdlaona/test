var path    =   require('path');
var glob    =   require('glob');
module.exports = {
    dev: {
        options: {
            process: true,
            data: {
                diavelLinks: '../src/styles/diavel/chofnUI.css',
                commonLinks: '../src/styles/page/common/common.index.css',
                commonFix: '../src/styles/page',
                commonFixJs: '../src/scripts'
            }
        },
        files : getHtmlPath('views/*/*.index.html', 'devHtml')
        // files :
        // {
        //     'dev/index.html': ['views/home.index.html']
        // }
    },
    build : {
        options: {
            process: true,
            data: {
                diavelLinks: '../dist/styles/diavel/chofnUI.css',
                commonLinks: '../dist/styles/page/common/common.index.css',
                commonFix: '../dist/styles/page',
                commonFixJs: '../dist/scripts'
            }
        },
        files : getHtmlPath('views/*/*.index.html', 'devHtml')
    }
};

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