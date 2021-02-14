var button1 = $("#btn1");
var button2 = $("#btn2");
var button3 = $("#btn3");
var button4 = $("#btn4");
var text1 = $(".text1");
var text2 = $(".text2");
var text3 = $(".text3");
var text4 = $(".text4");

button1.click(function () {
    text1.toggle(1000);
});
button2.click(function () {
    text2.fadeToggle(1000);
});
button3.click(function () {
    text3.slideToggle(1000);
});
button4.click(function () {
    text4.animate({
        marginLeft: "100px",
        fontSize : "4rem",
        paddingTop : "10px",
        paddingLeft : "10px",
    }, 1000);
});