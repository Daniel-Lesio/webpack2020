if(process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require('autoprefixer')({
                grid : true
            }),
            require('cssnano')({}),
        ]
    }
}