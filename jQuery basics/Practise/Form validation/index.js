$(function () {
    // hide all errors
    $("#userErrorMessage").hide();
    $("#emailErrorMessage").hide();
    $("#pass1ErrorMessage").hide();
    $("#pass2ErrorMessage").hide();

    // global variables declarations
    var error_username = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    // username check function
    function check_username() {
        var username = $("#username").val().length;

        if (username < 5 || username > 20) {
            $("#userErrorMessage").html("Username must be between 5-20 character.").css({ 'color': 'red' });
            $("#userErrorMessage").show();
            $("#username").css({ 'border': '1px solid red' });
            error_username = true;
        }
        else {
            $("#userErrorMessage").hide();
            $("#username").css({ 'border': 'none' });
        }
    }
    
    // email address check function
    function check_email() {
        var pattern = (/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

        if (pattern.test($("#email").val())) {
            $("#emailErrorMessage").hide();
            $("#email").css({ 'border': 'none' });
            error_email = true;
        }
        else {
            $("#emailErrorMessage").html("Please type a valid Emali address.").css({ 'color': 'red' });
            $("#emailErrorMessage").show();
            $("#email").css({ 'border': '1px solid red' });
        }
    }
    
    // password check function
    function check_password() {
        var password1 = $("#pass1").val().length;

        if (password1 < 8) {
            $("#pass1ErrorMessage").html("Password must be at least 8 characters.").css({ 'color': 'red' });
            $("#pass1ErrorMessage").show();
            $("#pass1").css({ 'border': '1px solid red' });
            error_password = true;
        }
        else {
            $("#pass1ErrorMessage").hide();
            $("#pass1").css({ 'border': 'none' });
        }
    }
    
    // re-type password check function
    function check_retype_password() {
        var password1 = $("#pass1").val();
        var password2 = $("#pass2").val();

        if (password1 != password2) {
            $("#pass2ErrorMessage").html("Passwords don't match.").css({ 'color': 'red' });
            $("#pass2ErrorMessage").show();
            $("#pass2").css({ 'border': '1px solid red' });
            error_retype_password = true;
        }
        else {
            $("#pass2ErrorMessage").hide();
            $("#pass2").css({ 'border': 'none' });
        }
    }

    // add event focusout on username
    $("#username").focusout(function () {
        check_username();
    })

    // add event focusout on email
    $("#email").focusout(function () {
        check_email();
    })

    // add event focusout on password
    $("#pass1").focusout(function () {
        check_password();
    })

    // add event focusout on re-type password
    $("#pass2").focusout(function () {
        check_retype_password();
    })

    // show or hide password function
    $("#passCheck").click(function () {
        var passwordField = $('#pass1, #pass2');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType == 'password') {
            passwordField.attr('type', 'text');
            $(this).text("Hide password");
        }
        else {
            passwordField.attr('type', 'password');
            $(this).text("Show password");
        }
    })

    // form submitting function
    $("#form").submit(function () {
        var error_username = false;
        var error_email = false;
        var error_password = false;
        var error_retype_password = false;

        check_username();
        check_email();
        check_password();
        check_retype_password();

        if (error_username == false && error_email == false && error_password == false && error_retype_password == false) {
            return true;
        }
        else {
            return false;
        }
    })
})