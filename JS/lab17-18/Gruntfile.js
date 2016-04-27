module.exports = function(grunt) {
    grunt.initConfig({
        jsDir: 'src/js/',
        jsDistDir: 'app/js/',
        cssDir: 'src/css/',
        cssDistDir: 'app/css/',
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: ['<%=jsDir%>*.js'],
                dest: '<%=jsDistDir%><%= pkg.name %>.js'
            },
            css: {
                src: ['<%=cssDir%>*.css'],
                dest: '<%=cssDistDir%><%= pkg.name %>.css'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    '<%=jsDistDir%><%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
                }
            }
        },

        cssmin: {
            add_banner: {
                options: {
                    banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    '<%=cssDistDir%><%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'concat',
        'uglify',
        'cssmin'
    ]);
};