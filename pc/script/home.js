var _header = null ;
var _main2 = null ;
var _content = null ;
var _menus = null ;
var _menu_items = null ;
var _cursor = null ;
var _current_item = null ;
var _iframe = null ;
var _user_header = null ;
var _user_info_menu = null ;
var _body = null ;
function init_object() { // 初始化对象
	_header = $("#header") ;
	_body = $("body") ;
	_main2 = $("#main") ;
	_content = $("#content") ;
	_menus = $(".menus") ;
	_menu_items = $("ul li", _menus) ;
	_cursor = $(".cursor", _menus) ;
	_current_item = _menu_items.filter(".on") ;
	_iframe = $("iframe", _content) ;
	_user_header = $("#user_header") ;
	_user_info_menu = $("#user_info #menu") ;
}

function set_on() {
	$(".icon").removeClass("on") ;
	$(".icon", _current_item).addClass("on") ;
}

function set_cursor_position(item) { // 设置关标位置
	_cursor.animate({
		top : item.position().top + item.height() / 2 - _cursor.height() / 2 - 18
	}, 200, function() {
		set_on() ;
	}) ;
}
function init_cursor_position() {
	_cursor.css({
		top : _current_item.position().top + _current_item.height() / 2 - _cursor.height() / 2 - 18
	}) ;
	set_on() ;
}
/*
function init_view() { // 初始化视图
	// 加载默认页面
	
	var _wm = context.get_window_manager() ;
	$(window).resize(function() {
		_main2.height(_wm.get_client_height() - _header.height()) ;
		_content.width(_wm.get_client_width() - _menus.width()) ;
	}) ;
	$(window).resize(function() {
		_body.height(_wm.get_client_height()) ;
	}) ;
	_body.height(_wm.get_client_height()) ;
	

	$("#user_header").click(function() {
		if(this.is_click) {
			this.is_click = false ;
			$("#user_info #menu").slideUp(300) ;
		} else {
			this.is_click = true ;
			$("#user_info #menu").slideDown(300) ;
			
		}
	}) ;
	

	
	_main2.height(_wm.get_client_height() - _header.height()) ;
	_content.width(_wm.get_client_width() - _menus.width()) ;
	init_cursor_position() ; // 初始化光标位置
	_menu_items.click(function(e) {
		var _url = $(e.target).attr("url") || $(this).attr("url") || $(".childs a:first", this).attr("url") ; 
		if(_url) {
			load_page(_url) ;
			_current_item = $(this) ;
			set_cursor_position(_current_item) ;
		}
	}) ;
	
	
	var _url = _current_item.attr("url") ;
	if(_url) {
		load_page(_url) ;
	} else {
		var _is_continue = true ;
		$(".childs", _current_item).each(function() {
			if(_is_continue) {
				_url = $("a", this).attr("url") ;
				if(_url) {
					load_page(_url) ;
					_is_continue = false ;
				}
			}
		}) ;
	}


	_menu_items.hover(function() {
		var _childs = $(".childs", this) ;
		if(0 == $(this).index()) {
			_childs.css("top", 0) ;
		} else if((_menu_items.length - 1) == $(this).index()) {

			_childs.css("top", -_childs.height() + $(this).height()) ;
		} else {
			var _top = -_childs.height() / 2 + $(this).height() / 2 ;
			_childs.css("top", _top) ;
		}
		_childs.show() ;
	}, function() {
		var _childs = $(".childs", this) ;

		_childs.hide() ;
	}) ;


	$("a", _menu_items).click(function() {
		var _href = $(this).attr("url") ;
		load_page(_href) ;
	}) ;
}
*/
/* 加载一个页面 */
function load_page(url) {
	/*$.ajax({
		url : url ,
		success : function(data) {
			_content.html(data) ;
		}
	}) ;
	*/
	_iframe.attr("src", url) ;
}
$(function() {
	init_object() ;
//	init_view() ;

	load_page("list.html") ;
}) ;