// Gruntfile.js
module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy: {
          css: {
            src: 'sass/*',
            dest: 'dest/',
          },
        },
    });

    // grunt.registerTask('build', ['svgmin:icons',
    //                              'svgstore:icons',
    //                              'clean:iconTemp',
    //                             ]);
    // grunt.registerTask('default', []);
};
