module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "css/main.css": "less/design.less"
            }
          }
        },
        concat: {
            /* concat css*/
            css: {
                src: [
                    "css/main.css"
                ],
                dest: 'css/main.min.css'
            },

            /*concat main app dev*/
            concatAppDev: {
                options: {
                    separator: ';',
                },
                src: [
                    'js/libs/*.js',
                    'js/scripts/*.js',
                ],
                dest: 'js/app.min.js'
            }
        },
        cssmin: {
            dist: {
                files: {
                    'css/main.min.css': 'css/main.min.css'
                }
            }
        },
        watch: {
            default: {
                files: [
                    'js/libs/*.js',
                    'js/scripts/*.js',
                    "css/*.css",
                    "less/design.less",
                    "!css/main.min.css"
                ],
                tasks: ['build'],
                options: {
                    event: ['all']
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /*build dev + prod*/
    grunt.registerTask('build', [
        'less',
        'concat',
        'cssmin'
    ]);
};