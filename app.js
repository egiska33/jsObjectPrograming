$(document).ready(function(){
	$('#warning').click(function(e){
		e.preventDefault();

		var dialog = new Dialog('warning', 'Warningas');
		dialog.show();
	})
})

$(document).ready(function(){
	$('#success').click(function(e){
		e.preventDefault();
		
		var dialog = new Dialog('success', 'Success!');
		dialog.show();
	})
})

$(document).ready(function(){
	$('#error').click(function(e){
		e.preventDefault();
		
		var dialog = new Dialog('error', 'Eroras');
		dialog.show();
	})
})