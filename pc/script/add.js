var _nav_link = null ;
var _op_bar = null ;
var _form = null ;
function init_objects2() {
	_form = $("#form") ;
	_nav_link = $("#nav_link") ;
	_op_bar = $("#op_bar") ;
}
function init_view2() {
	var _client_height = context.get_window_manager().get_client_height() ;
	var _form_height = _client_height - _nav_link.height() - _op_bar.height() ;
	_form.height(_form_height) ;
}

$(function() {
	init_objects2() ;
	init_view2() ;
	$(window).resize(init_view2) ;
}) ;