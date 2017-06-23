$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){
    	$(this).remove();
    });
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which=== 13){
		var newTodo=$(this).val();
		$(this).val(""); 
		var str="<li>"+"<span>"+"<i class='fa fa-trash' aria-hidden='true'></i>"+"</span>"+" "+newTodo+"</li>";
		$("ul").append(str);
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});	