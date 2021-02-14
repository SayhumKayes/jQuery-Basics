$(function () {

    $("#userErrorMessage").hide();
    $("#emailErrorMessage").hide();
    $("#pass1ErrorMessage").hide();
    $("#pass2ErrorMessage").hide();

    var error_username = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    // Check username
    $("#username").focusout(function () {

        check_username();

    });

    // check Email
    $("#email").focusout(function () {

        check_email();

    });

    // Check password
    $("#pass1").focusout(function () {

        check_password();

    });

    // Check Re-type password
    $("#pass2").focusout(function () {

        check_retype_password();

    });

    // username check function
    function check_username() {

        var username_length = $("#username").val().length;

        if (username_length < 5 || username_length > 20) {
            $("#userErrorMessage").html("Should be between 5-20 characters").css({ 'color': 'red' });
            $("#userErrorMessage").show();
            error_username = true;
        } else {
            $("#userErrorMessage").hide();
        }

    };

    // email check function
    function check_email() {

        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

        if (pattern.test($("#email").val())) {
            $("#emailErrorMessage").hide();
            error_email = true;
        } else {
            $("#emailErrorMessage").html("Invalid email address").css({ 'color': 'red' });
            $("#emailErrorMessage").show();
        }

    };

    // password check function
    function check_password() {

        var password_length = $("#pass1").val().length;

        if (password_length < 8) {
            $("#pass1ErrorMessage").html("At least 8 characters").css({ 'color': 'red' });
            $("#pass1ErrorMessage").show();
            error_password = true;
        } else {
            $("#pass1ErrorMessage").hide();
        }

    };

    // Re-type password check function
    function check_retype_password() {

        var password = $("#pass1").val();
        var retype_password = $("#pass2").val();

        if (password != retype_password) {
            $("#pass2ErrorMessage").html("Passwords don't match").css({ 'color': 'red' });
            $("#pass2ErrorMessage").show();
            error_retype_password = true;
        } else {
            $("#pass2ErrorMessage").hide();
        }

    };

    // form submit function
    $("#form").submit(function () {

        var error_username = false;
        var error_email = false;
        var error_password = false;
        var error_retype_password = false;

        check_username();
        check_password();
        check_retype_password();
        check_email();

        if(error_username == false && error_password == false && error_retype_password == false && error_email == false) {
			return true;
		} else {
			return false;	
		}

    });

});