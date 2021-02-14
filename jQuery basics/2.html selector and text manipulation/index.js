var p1 = $("#p1");

$(".my_Div h1").text("World is beautiful");
$(".heading1").text("Goodbye");
p1.html("<b>This is changed paragraph</b>");

var heading3 = $("<h2></h2>").text("This is h3 heading");
p1.after(heading3);