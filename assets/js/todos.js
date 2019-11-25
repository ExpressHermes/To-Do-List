// check off a specific todo by clicking on it
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//delete a todo by clickin on delete button
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //stop triggering other click function
    event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        // grab the input todo
        var newTodo = $(this).val();
        //delete the text from input
        $(this).val("");
        //add todo to ul
        $("ul").append("<li><span> <i class='fa fa-trash'></i></span> " + newTodo + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})