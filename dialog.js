
function Dialog(type, message) {
	this.container = this.makeContainer();
	this.text = this.container.find(".panel-body");
	this.title = this.container.find(".panel-heading")
	this.button_yes = this.container.find(".btn-success");
	this.button_no = this.container.find(".btn-danger");
	
	this.config(type, message);





}

Dialog.prototype.config = function (type, message) {	
	this.text.html(message);
	this.button_yes.on('click', this.doYes.bind(this));
	this.button_no.on('click', this.doNo.bind(this));

	switch(type) {
		case 'warning' :
			this.title.html('Warning!')
			this.container.removeClass('panel-primary').addClass('panel-warning');
			break;

		case 'success' :
			this.title.html('Success!')
			this.container.removeClass('panel-primary').addClass('panel-success');
			this.button_no.hide();
			this.button_yes.html('OK');
			break;
			
		case 'error' :
			this.title.html('Error!')
			this.container.removeClass('panel-primary').addClass('panel-danger');
			this.button_no.hide();
			this.button_yes.html('OK');
			break;		
	}
}



Dialog.prototype.show = function () {
	$('.panel').remove();
	$('#insert').append(this.container);
}
Dialog.prototype.makeContainer = function () {
	var div = $("<div class='panel panel-primary'>");
	div.append('<div class="panel-heading">');
	div.append('<div class="panel-body">');
	div.append('<div class="panel-footer">' + 
		'<a href ="#" class="btn btn-success">Yes</a>' +
		'<a href ="#" class="btn clearfix btn-danger">No</a>' + '</div>');
	return div;
}

Dialog.prototype.doYes = function() {
	alert("It's a Yes!");
	$('.panel').remove();
}

Dialog.prototype.doNo = function() {
	alert("It's a No!");
	$('.panel').remove();
}