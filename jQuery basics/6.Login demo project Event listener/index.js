var btn = $("#btn");

btn.click(function () {
    var inputPass1 = $("#pass1").val();
    var inputPass2 = $("#pass2").val();

    if (inputPass1 != "" && inputPass2 != "") {
        if (inputPass1 == inputPass2) {
            alert("Successfully login");
        } else {
            alert("Login denied");
        }
    } else {
        alert("Please Enter Password");
    }

});