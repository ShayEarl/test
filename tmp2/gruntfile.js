module.exports= function(grunt){
    'use strict'

    grunt.initConfig({
       /* sass:{
            dist:{
                files:{
                    "app/css/index.css": "html/sass/index.scss"
                },
                options:{
                    style:'expanded'
                }
            }
        },*/
        connect:{
            server: {
                options: {
                    port: 8080,
                    hostname: '127.0.0.1',
                    base: '',
                    open: {
                        target: 'http://localhost:8080/html/areneid_home.html', // target url to open, Ŀ��·��
                        appName: 'chrome', // name of the app that opens, ie: open, start, xdg-open���Զ�������Ӧ������, ��������������chrome
                        callback: function () {
                            //console.log('the server has started...');
                        } // called when the app has opened
                    },
                    livereload: true
                }
            }
        },
        watch:{
            options:{
                livereload:true
            }/*,
            compilesass:{
                files:['app/sass/index.scss'],
                tasks:['sass']
            }*/
        }   
    })
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    //grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-connect');
/*    grunt.registerTask('default',["sass",'watch'])*/
    grunt.registerTask("severs",["connect"])
}