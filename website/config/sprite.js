module.exports = {
    options: {
        imagepath   : 'dist/styles/page/test/imgs/',
        spritedest  : 'dist/styles/page/test/slice/',
        spritepath  : 'slice/',
        padding     : 2,
        useimageset : false,
        newsprite   : false,
        spritestamp : true,
        cssstamp    : true,
        algorithm   : 'binary-tree',
        engine      : 'pixelsmith'
    },
    autoSprite: {
        // files: []
        files : [{
            expand  : true,
            cwd     : 'dist/styles/page/test/',
            src     : '*.index.css',
            dest    : 'dist/styles/page/test/',
            ext     : '.index.sprite.css'
        }]
    }
};