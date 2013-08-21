$(document).ready(function() {
    var win = $(window);
    var wrapper = $('.wrapper');
    var body = $(document.body);
    var currentUser = {};



    /*
     ===============================================
     ========================= APPLICATION FUNCTIONS
     */

//    var loadApp= function(){
//        $.get('templates/app.html', function(htmlArg){
//            var headerApp= $(htmlArg).find('#app_header').html();
//            $.template('headertemplate', headerApp);
//            var headerapp= $.render('', 'headertemplate');
//            wrapper.append(headerapp);
//        });
//
//        $.get('templates/app.html', function(htmlArg){
//            var contentApp= $(htmlArg).find('#app_content').html();
//            $.template('contenttemplate', contentApp);
//            var contentapp= $.render('', 'contenttemplate');
//            wrapper.append(contentapp);
//        });
//
//
//
//    };

    var loadLanding = function(){
        // For loadApp() delete html inside of wrapper
        // send response as first argument for render()
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

//    var checkLoginState = function(){
//        $.ajax({
//            url: 'xhr/check_login.php',
//            type: 'get',
////            data:{
////                username: 'student',
////                password: 'password
////            },
//            dataType: 'json',
//            success: function(response){
//                // if user, loadApp()
//                // if error, loadLanding()
//            }
//        });
//    };

    // 	============================================
    //	SETUP FOR INIT

    var init = function(){
          loadLanding();
//        loadApp();
    };

    init();



    /*
     ===============================================
     ======================================== EVENTS
     */

//    var login2 = function(){
//        // Set Data to input values
//        var user = $('.username').val();
//        var pass = $('.password').val();
//        $.ajax({
//            url: 'xhr/login.php',
//            type: 'post',
//            data:{
//                username: 'student',
//                password: 'password'
//            },
//            dataType: 'json',
//            success: function(response){
//                // if error, loadLanding()
//                if(response.error){
//                    //showLoginError();
//                    // if user, loadApp()
//                }else{
//                    loadApp();
////                    console.log(response);
//                }
//
//                return false;
//            }
//        });
//    };

    win.on('submit', '#loginForm', function(e){
        console.log('start');
        var user = $('#login-usr').val();
        var pass = $('#login-pss').val();

//        $.ajax({
//            url: 'xhr/login.php',
//            data:{
//                username: user,
//                password: pass
//            },
//            type: 'post',
//            dataType: 'json',
//            success: function(response){
//                console.log(response);
//
////                if(response.error){
////
////                }else{
////                    loadApp();
////                }
//            }
//        });

        return false;
    });


//   win.on('click', '.logout', function(e){
//
//        $.get('xhr/logout.php', function(){
//            loadLanding();
//        });
//        return false
//    });




//    win.on('submit', '#user-reg-form', function(){
//
//        return false;
//    });

});

// for version 1.8
// $('.login').live(function(e){
//      e.preventDefault();
//      login();
//
// })