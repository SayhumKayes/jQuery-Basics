var heading1 = $("#heading1");
var heading2 = $("#heading2");
var button1 = $("#btn1");
var button2 = $("#btn2");
var button3 = $("#btn3");

button1.click(function() {
    var value = this.innerHTML;
    heading1.text(value + ". You clicked the button 1");
});
button2.click(function() {
    var value = this.innerHTML;
    heading2.text(value + ". You clicked the button 2");
});
button3.click(function() {
    heading1.toggleClass("style1");
    heading2.toggleClass("style1");
});