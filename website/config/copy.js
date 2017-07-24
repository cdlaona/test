module.exports = {
    main: {
        files: [
            {
                expand: true,
                cwd: 'src/',
                src: ['**'],
                dest: 'dist/'
            }
        ]
    }
};