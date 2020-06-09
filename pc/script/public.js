var _list = null ;
var _tab_host = null ;
var _fragments = null ;
function init_objects() {
	_list = $("#list") ;
	_tab_host = $(".tab_host") ;
	_fragments = $("#fragments .fragment", _tab_host)
}
/*
function init_view() {
	$("tbody tr:odd", _list).css("background", "#f1f1f1") ;
	

	var _on_index = $("a.on", _tab_host).index() ;
	_fragments.eq(_on_index).show() ;

	$("a", _tab_host).click(function() {
		$(this).addClass("on").siblings().removeClass("on") ;
		_fragments.eq($(this).index()).show().siblings().hide() ;
	}) ;
}
*/
$(function() {
	init_objects() ;
	//init_view() ;
}) ;

$(function(){
	$(".subNav").click(function(){
		$(this).toggleClass("currentDt");

		$(this).next().slideToggle(500) ;
//		resetMenusHeight();
	})	
})	

$(function(){
	$("#user_header").click(function() {
		if(this.is_click) {
			this.is_click = false ;
			$("#user_info #menu").slideUp(300) ;
		} else {
			this.is_click = true ;
			$("#user_info #menu").slideDown(300) ;

		}
	}) ;
}) ;


window.onload = function() {
	$('.menusButtomNull').height(0) ;
	var _body_text_height =$(document).height();
	var _menus_height = $('.menus').height();
	
	var _first_scroll_height = document.body.scrollHeight ;
	var _last_scroll_height = document.documentElement.scrollHeight ;
	var _height = _first_scroll_height > _last_scroll_height ? _first_scroll_height : _last_scroll_height ;
	if(_body_text_height > _menus_height){
		$('.menusButtomNull').height((_body_text_height-_menus_height)) ;
	}else{
		$('.menusButtomNull').height(0) ;
	}
	$('.menus').height(_height) ;
	$('.menus').height("auto") ;
}
function resetMenusHeight(){
	var _body_text_height =$(document).height();
	var _menus_height = $('.menus').height();
	
	if(_body_text_height > _menus_height){
		$('.menusButtomNull').height((_body_text_height-_menus_height)) ;
	}else{
		$('.menusButtomNull').height(0) ;
	}
}
/****权限选择*****/
$(function(){
	var a ;
	var b ;
	var c ;
	var to_right ;
	var to_left ;
	var select_submit ;
	function init_objects() {
		a = $("#a") ;
		b = $("#b") ;
		c = $("#c") ;
		to_right = $("#to_right") ;
		to_left = $("#to_left") ;
		select_submit = $("#select_submit") ;
	}
	
	function select(parent, option) {
		parent.append(option) ;
	}
	function init_view() {
		$("#a").dblclick(function() {
			var _option = $(this.options[this.selectedIndex]) ;
			select(b, _option) ;
		}) ;
	
		$("#b").dblclick(function() {
			var _option = $(this.options[this.selectedIndex]) ;
			select(a, _option) ;
		}) ;	
		to_right.click(function() {
			// var options = new Array() ;
			for(var i = 0 ; i< a[0].options.length ;i++) {
				var option = a[0].options[i] ;
				if(option.selected) {
					// options.push(option) ;
					select(b, option) ;
					i--;
				}
			}
			//select(b, options) ;
		}) ;		
		to_left.click(function() {			
			for(var i = 0 ; i< b[0].options.length ;i++) {
				var option = b[0].options[i] ;
				if(option.selected) {
					select(a, option) ;
					i--;
				}
			}
		}) ;
		select_submit.click(function() {
			var _select_names = "" ;
			for(var i = 0 ; i< a[0].options.length ;i++) {
				var option = a[0].options[i] ;
				if(option.selected) { // 得到选中的
					_select_names += $(option).html() + "," ;
					
					
				}
			}
			$("#c").val(_select_names.substring(0, _select_names.length - 1)) ;
		}) ;		
		
	}
	$(function() {
		init_objects() ;
		init_view() ;
	
	}) ;	
})


$(function(){
	var column_select = $(".column_select select");
	var role_name_input = $("#role_name");
	$(".column_radio input[type=radio]").click(function(){
		var index = $(this).index();
		var select = column_select.eq(index) ;
		select.show().siblings().hide();
		var text = $("option:selected", select).text() ;
		role_name_input.val(text) ;
		select.change(function() {
			var text = $("option:selected", $(this)).text() ;
			role_name_input.val(text) ;
		}) ;
	});

	var _col_radio = $("#col_radio") ;
	var _col_select = $("#col_select") ;
	function _select_radio_by_value(value) {
		if(!value) return false;
		$("input[value="+ value +"]", _col_radio).prop("checked", true) ;
	}
	function _select_select_by_value(value) {
		if(!value) return false;
		$("option[value="+ value +"]", _col_select).prop("selected", true) ;
	}

	var _radio_value = $("input[name=radio_val]").val() ;
	var _select_value = $("input[name=select_val]").val() ;
	_select_radio_by_value(_radio_value) ;
	_select_select_by_value(_select_value) ;
	
	$("input[type=radio]:checked").each(function() {
		$(this).click() ;
	}) ;

})