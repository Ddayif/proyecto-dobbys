$(document).ready(function(){
	var conversacion = $(".conversacion").val();
	$(".mi-boton").click(function(){
	$(".caja-conversacion").append("<ul><li>" + conversacion + "</li></ul>")
	})
})