var path                =   require('path');
var glob                =   require('glob');
module.exports = {
    development: {
        options : {
            banner : '/*! <%= yo.version.name %>.css v <%= yo.version.beta %> */',
            compress : true
        },
        files: getLess('src/styles/page/**/*.index.less')
    }
};
// https://github.com/dciccale/grunt-processhtml

// https://www.npmjs.com/package/grunt-combohtml

// https://github.com/moliniao/auto-grunt
function getLess(globPath, pathDir) {
    var _defineFile = {
        "src/styles/diavel/chofnUI.css": "src/styles/diavel/diavel.ui.less"
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