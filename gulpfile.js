const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require('sass'));


const paths = {
    scss: 'src/scss/**/*.scss',
    imagenes: 'src/img/**/*'
}

function css(done){
    src("src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("build/css"))

        done();
}



function dev(done){
    watch("src/scss/app.scss", css),


    done()
}
function watchArchivos() {
    watch(paths.scss, css);
    
}
exports.css = css;
exports.dev = dev;
exports.watchArchivos = watchArchivos;
exports.default = parallel(css, watchArchivos); 