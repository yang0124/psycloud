var _list = null ;
var _tools_bar = null ;
var _page_info = null ;
function init_objects2() {
	_list = $("#list") ;
	_tools_bar = $("#tools_bar") ;
	_page_info = $("#page_info") ;
}
function init_view2() {
	var _client_height = context.get_window_manager().get_client_height() ;
	var _list_height = _client_height - _tools_bar.height() - _page_info.height() ;
	_list.height(_list_height) ;
}

$(function() {
	init_objects2() ;
	init_view2() ;
	$(window).resize(init_view2) ;
}) ;