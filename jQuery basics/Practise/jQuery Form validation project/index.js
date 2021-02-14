$('#form').submit(function () {

    var name = $('#username').val();
    var pass = $('#password').val();
    if (name == '' && pass == '') {
        $('h1').text("All fields are required").css('color', 'red');
        $('#username').css('border', '1px solid red');
        $('#password').css('border', '1px solid red');
    }
    else if (name == '') {
        $('h1').text("Name can't be empty").css('color', 'red');
        $('#username').css('border', '1px solid red');
        $('#password').css('border', '1px solid black');
    }
    else if (pass == '') {
        $('h1').text("Password can't be empty").css('color', 'red');
        $('#username').css('border', '1px solid black');
        $('#password').css('border', '1px solid red');
    }
    else {
        $('h1').text("All Ok").css('color', 'green');
        $('#username').css('border', '1px solid black');
        $('#password').css('border', '1px solid black');
    }

    return false;
})