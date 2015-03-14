module.exports = function(grunt) {

    grunt.initConfig({


        hologram: {

            generate: {
                options: {
                    config: "hologram_config.yml"
                }
            }
        },



        browserSync: {
            bsFiles: {
                src: 'docs/*.html'
            },
            options: {
                watchTask: true,
                proxy: "www.reallycreativemedia.dev"
            }
        },



        watch: {
            hologram: {
                files: [
                    "style.css"
                ],
                tasks: ["clean", "hologram"]

            }
        },



        clean: {
            build: {
                src: ['docs']
            }
        },



    })

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-hologram');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browser-sync');
    // Default task.
    grunt.registerTask('default', ['browserSync', 'hologram', 'watch']);

};
