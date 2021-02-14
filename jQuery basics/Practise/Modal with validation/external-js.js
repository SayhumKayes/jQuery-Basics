function login(){
    $('#login_switch').click(function () {
        $('.cover').fadeIn(600);
        $('.login_area').fadeIn(600);
    });
    
    $('.cover').click(function () {
        $('.cover').fadeOut(600);
        $('.login_area').fadeOut(600);
    });
}
login();

$(function () {
    $("#usernameError").hide();
    $("#passwordError").hide();

    var error_username = false;
	var error_password = false;

    $("#username").focusout(function () {
        username_check();
    });

    $("#password").focusout(function () {
        password_check();
    });

    function username_check() {

        var username_length = $("#username").val().length;
        
        if (username_length < 5 || username_length > 20) {
            $("#usernameError").html("At least between 5-20 letters").css({ 'color': 'red'});
            $("#username").css({'border': '1px solid red'});
            $("#usernameError").show();
            $(".login_area").css({'paddingBottom':'350px'});
            error_username = true;
        }
        else {
            $("#usernameError").hide();
            $("#username").css({'border': '1px solid black'});
            $(".login_area").css({'paddingBottom':'330px'});
        }
    };

    function password_check() {

        var password_length = $("#password").val().length;
        if (password_length < 8) {
            $("#passwordError").html("At least 8 charactar").css({ 'color': 'red' });
            $("#password").css({'border': '1px solid red'});
            $("#passwordError").show();
            $(".login_area").css({'paddingBottom':'350px'});
            error_password = true;
        }
        else {
            $("#passwordError").hide();
            $("#password").css({'border': '1px solid black'});
            $(".login_area").css({'paddingBottom':'320px'});
        }
    };

    $("#form").submit(function(){
        error_username = false;
        error_password = false;

        username_check();
        password_check();

        if(error_username == false && error_password == false) {
            $(".login_area").css({'heigth':'400px'});
			return true;
		} else {
			return false;
		}
    });
});