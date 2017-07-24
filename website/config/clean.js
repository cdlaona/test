module.exports = {
    bin: ["dist/"],
    build: [
        "dist/styles/diavel/core/",
        "dist/styles/diavel/*.less",
        "dist/styles/page/*.less",
        "dist/styles/page/*/*.less"
    ]
};