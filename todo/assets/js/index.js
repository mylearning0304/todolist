$("ul").on("click", "li", function(){
    
   $(this).addClass("completed");
   
});
$("ul").on("click","span", function(e){
    
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    
    });
    e.stopPropagation();
 });
 $("input[type='text']").keypress(function(e){
    
    if(e.which===13){
        var todotext = $(this).val();
        console.log(todotext);
        $("ul").append("<li><span>L </span> "+todotext+"</li>");
        $(this).val(" ")

    }
 });