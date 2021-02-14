var form = $("#form");
var email = $("#email");
var emailMessage = $("#emailMessage");
var password = $("#password");
var passwordMessage = $("#passwordMessage");
var button = $("#btn");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation(){
    var emailValue = $("#email").val();
    if(emailValue.match(pattern)){
        form.addClass("valid");
        form.removeClass("invalid");
        emailMessage.text("Your email address is valid").css({'color': 'green'});
    }
    else{
        form.removeClass("valid");
        form.addClass("invalid");
        emailMessage.text("Please enter a valid email address").css({'color': 'red'});
    }
}