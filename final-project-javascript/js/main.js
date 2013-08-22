$(document).ready(function() {
    var win = $(window);
    var wrapper = $('.wrapper');
    var body = $(document.body);
    var currentUser = {};



    /*
     ===============================================
     ========================= APPLICATION FUNCTIONS
     */

    /*Load Landing Page*/

    var loadLanding = function(){
        $.get('templates/landing.html', function(htmlArg){
            var headerLand= $(htmlArg).find('#landing_header').html();
            $.template('headertemplate', headerLand);
            var headerland = $.render('', 'headertemplate');
            wrapper.append(headerland);
        });

        $.get('templates/landing.html', function(htmlArg){
            var contentLand= $(htmlArg).find('#landing_content').html();
            $.template('contenttemplate', contentLand);
            var contentland = $.render('', 'contenttemplate');
            wrapper.append(contentland);
        });

        $.get('templates/landing.html', function(htmlArg){
            var footerLand= $(htmlArg).find('#landing_footer').html();
            $.template('footertemplate', footerLand);
            var footerland = $.render('', 'footertemplate');
            wrapper.append(footerland);
        });

    };

    /*Load App/Projects*/


    var loadApp= function(){
        wrapper.empty();
        $.get('templates/app.html', function(htmlArg){
            var headerApp= $(htmlArg).find('#app_header').html();
            $.template('headertemplate', headerApp);
            var headerapp= $.render('', 'headertemplate');
            wrapper.append(headerapp);
        });



        $.get('templates/app.html', function(htmlArg){
            var contentApp= $(htmlArg).find('#app_content').html();
            $.template('contenttemplate', contentApp);
            var contentapp= $.render('', 'contenttemplate');
            wrapper.append(contentapp);
        });

    };

    /*Load App/Projects*/


    var loadTasks= function(){
        wrapper.empty();
        $.get('templates/tasks.html', function(htmlArg){
            var headerTasks= $(htmlArg).find('#tasks_header').html();
            $.template('headertemplate', headerTasks);
            var headertasks= $.render('', 'headertemplate');
            wrapper.append(headertasks);
        });



        $.get('templates/tasks.html', function(htmlArg){
            var contentTasks= $(htmlArg).find('#tasks_content').html();
            $.template('contenttemplate', contentTasks);
            var contenttasks= $.render('', 'contenttemplate');
            wrapper.append(contenttasks);
        });

    };

    /*Check log in state*/


    var checkLoginState = function(){
        console.log('test1');
        $.ajax({
            url: 'xhr/check_login.php',
            type: 'get',
            dataType: 'json',
            success: function(response){
                if(response.error){
                    console.log('test2');

                    wrapper.empty();
                    loadLanding();
                }else{
                    console.log('test3');

                    wrapper.empty();
                    loadApp();
                }
            }
        });
    };

    // 	============================================
    //	SETUP FOR INIT

    var init = function(){
        checkLoginState();
    };

    init();



    /*
     ===============================================
     ======================================== EVENTS
     */

    /*Login event*/

    $('#submit-login').live('click', function(e){
        e.preventDefault();
        var user = $('#login-usr').val();
        var pass = $('#login-pss').val();

        $.ajax({
            url: 'xhr/login.php',
            data:{
                username: user,
                password: pass
            },
            type: 'post',
            dataType: 'json',
            success: function(response){
                if(response.error){
                }else{
                    loadApp();
                }
            }
        });

        return false;
    });


    /*Register event*/

    $('#submit-reg').live('click', function(e){
        var user = $('#reg-usr').val();
        var pass = $('#reg-pss').val();
        var email= $('#reg-email').val();
        $.ajax({
            url: 'xhr/register.php',
            data:{
                username: user,
                password: pass,
                email: email
            },
            type: 'post',
            dataType: 'json',
            success: function(response){
                if(response.error){
                }else{
                    loadApp();
                }
            }
        });

        return false;
    });

    /*Log Out event*/

    $('.logout').live('click', function(e){
        $.get('xhr/logout.php', function(){
            wrapper.empty();
            loadLanding();
        });
        return false
    });

    /*Projects Link event*/


    $('#tasks-link').live('click', function(e){
        $.get('templates/tasks.html', function(){
            wrapper.empty();
            loadTasks();
        });
        return false
    });

    /*Tasks Link event*/


    $('#projects-link').live('click', function(e){
        $.get('templates/app.html', function(){
            wrapper.empty();
            loadApp();
        });
        return false
    });

});

