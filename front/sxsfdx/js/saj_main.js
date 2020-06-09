$(function() {
	//生成内页
	if($("#s_con").length){
		var maincontent = $("#s_con").html();
		$("#s_con").empty();
		$("<div/>").html(maincontent).css({
			"padding-top": 10,
			"overflow": "auto"
		}).appendTo($("#s_con"));
	}
	//生成导航提示组件
	if($("#s_nav").length) {
		$("<ul/>").attr("id", "s_nav_ul").prependTo($("#s_nav"));
		$("<span/>").html("当前位置：").prependTo($("#s_nav"));
		var s_data = JSON.parse($("#s_nav").attr("s_data"));
		var texts = s_data.text.split(",");
		$(texts).each(function(i, n) {
			$("<li/>").html(n).appendTo($("#s_nav_ul"));
		})
	}
	//生成分页组件
	if($(".s_page").length) {
		$(".s_page").each(function(i, n) {
			var pages = $(n).attr("s_data").split(",");
			var totalpage = Number(pages[0]) || 0;
			var currentpage = Number(pages[1]) || 0;
			var address = pages[2] || "";
			currentpage = currentpage > totalpage ? totalpage : currentpage;
			//确定基本控件样式
			var $s_pagebtn = $("<div/>").addClass("s_pagebtn");
			if(totalpage <= 9) {
				if(totalpage == 1) {
					$(n).hide();
					return true;
				}else{
					for(var j = 1; j <= totalpage; j++) {
						$("<input/>").attr({
							"type": "button",
							"value": j,
							"onclick": "location.href='" + address + j + "'"
						}).appendTo($s_pagebtn);
					}
					$s_pagebtn.appendTo($(n));
				}
			} else if(totalpage >= 10) {
				if(currentpage <= 5) {
					for(var j = 1; j <= 7; j++) {
						$("<input/>").attr({
							"type": "button",
							"value": j,
							"onclick": "location.href='" + address + j + "'"
						}).appendTo($s_pagebtn);
					}
					$("<input/>").attr({
						"type": "button",
						"value": "…",
						"class": "s_ellipsis"
					}).appendTo($s_pagebtn);
					$("<input/>").attr({
						"type": "button",
						"value": totalpage,
						"onclick": "location.href='" + address + totalpage + "'"
					}).appendTo($s_pagebtn);
				} else if(currentpage >= totalpage - 4) {
					for(var j = totalpage; j > totalpage - 7; j--) {
						$("<input/>").attr({
							"type": "button",
							"value": j,
							"onclick": "location.href='" + address + j + "'"
						}).prependTo($s_pagebtn);
					}
					$("<input/>").attr({
						"type": "button",
						"value": "…",
						"class": "s_ellipsis"
					}).prependTo($s_pagebtn);
					$("<input/>").attr({
						"type": "button",
						"value": 1,
						"onclick": "location.href='" + address + 1 + "'"
					}).prependTo($s_pagebtn);
				} else if(currentpage > 5 && currentpage < totalpage - 4) {
					$("<input/>").attr({
						"type": "button",
						"value": 1,
						"onclick": "location.href='" + address + 1 + "'"
					}).appendTo($s_pagebtn);
					$("<input/>").attr({
						"type": "button",
						"value": "…",
						"class": "s_ellipsis"
					}).appendTo($s_pagebtn);
					for(var j = currentpage - 2; j <= currentpage + 2; j++) {
						$("<input/>").attr({
							"type": "button",
							"value": j,
							"onclick": "location.href='" + address + j + "'"
						}).appendTo($s_pagebtn);
					}
					$("<input/>").attr({
						"type": "button",
						"value": "…",
						"class": "s_ellipsis"
					}).appendTo($s_pagebtn);
					$("<input/>").attr({
						"type": "button",
						"value": totalpage,
						"onclick": "location.href='" + address + totalpage + "'"
					}).appendTo($s_pagebtn);
				}
				$s_pagebtn.appendTo($(n));
				var $s_gobtn = $("<div/>").addClass("s_gobtn");
				$("<input/>").attr({
					"type": "text",
					"placeholder": "页 码"
				}).appendTo($s_gobtn);
				$("<input/>").attr({
					"type": "button",
					"value": "GO"
				}).appendTo($s_gobtn).click(function() {
					location.href = address + $(this).siblings("[type='text']").val();
				});
				$s_gobtn.appendTo($(n));
			}
			$(n).find("input[type='button'][value='" + currentpage + "']").addClass("active");
		})
	}
	//生成s_table序号
	if($(".s_table").length){
		$("<th/>").html("序号").prependTo($(".s_table thead tr"));
		$(".s_table tbody tr").not(".s_exp").each(function(i,n){
			$("<td/>").html($(n).index()+1).prependTo($(n));
		})
	}
	//生成s_table复选框组件
	if($(".s_c_table").length) {
		$("<td/>").append($("<input/>").attr({
			"type": "checkbox"
		}).css("margin-top", 2)).prependTo($(".s_c_table tbody tr").not(".s_exp"));
		$("<th/>").append($("<input/>").attr({
			"type": "checkbox"
		}).css("margin-top", 2)).prependTo($(".s_c_table thead tr"));
		$(".s_c_table thead th:first-of-type").find("input[type='checkbox']").change(function() {
			$(this).closest(".s_c_table").find("tr td:first-of-type").find(":checkbox").prop("checked", this.checked);
		})
		$(".s_c_table tbody td:first-of-type").find("input[type='checkbox']").change(function() {
			if(!$(this).is(":checked")) {
				$(this).closest(".s_c_table").find("tr th:first-of-type").find(":checkbox").prop("checked", false);
			}
		})
	}
	//设定页面基础尺寸
	setSize();
	$(window).resize(function() {
		setSize();
	})
})
//设定页面基础尺寸
function setSize() {
	$("#s_con").height($("body").height() - $("#s_nav").outerHeight(true));
	$("#s_con>div").css("min-height", $("#s_con").height() - 10);
}

/*
 * 以下为工具包
 */
function queryParam(param) {
	var array = queryIndex(param);
	var value = array[0][array[1]].substring(array[2] + 1);
	return decodeURI(value);
}

function updateParam(param, value) {
	value = encodeURI(value);
	var array = queryIndex(param);
	array[0][array[1]] = array[0][array[1]].substring(0, array[2] + 1) + value;
	var url = location.href.substring(0, location.href.indexOf("?") + 1) + array[0].join("&");
	return url;
}

function queryIndex(param) {
	var result = [],
		firstp = -1;
	var index = -1;
	var query = window.location.search;
	query = query.substring(1);
	var ArrQuery = query.split('&');
	if(ArrQuery.length > 0) {
		for(var i = 0; i < ArrQuery.length; i++) {
			firstp = ArrQuery[i].indexOf("=");
			var key = ArrQuery[i].substring(0, firstp);
			if(key == param) {
				index = i;
				break;
			}
		}
		result.push(ArrQuery);
		result.push(index);
		result.push(firstp);
	}
	return result;
}