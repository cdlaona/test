module.exports = {
    watch: {
        files: [
            'src/styles/**/**/**/**/**/*.less',
            'views/*/**.html'
        ],
        tasks: [
            'less:development',
            'processhtml:dev'
        ]
    }
};
