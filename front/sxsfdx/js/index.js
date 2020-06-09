$(function() {
	$(".container").css('min-height',$(window).height()-60);
	$(".t-l li").each(function(){
		var sortType=$("#sortType").val();
		if(sortType==""||sortType==-1){
			$(".c-content .c-title li").eq(0).addClass("on");
			return true;
		}else {
			if(sortType==$(this).val()){
				$(this).addClass("on");
				 return true;
			}
		}
	});
	
	// 点击变换li背景色
	$(".head .h-c li").click(function() {
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
	});

	// 点击选择专业
	$(".c-head a:not(.not-allow)").click(function() {
		$(".c-head a").removeClass("on");
		$(this).addClass("on");
		$(".c-head p").addClass("on");
		var classAutoids=getClassAutoids();
		pageSoftware(classAutoids, "", "0", null,null);
	});

	//点击选择软件分类
	$(".c-head-class a:not(.not-allow)").click(function() {
		$(".c-head-class a").removeClass("on");
		$(this).addClass("on");
		$(".c-head-class p").addClass("on");
		var classAutoids=getClassAutoids();
		var subclassid = getSubClassAutoids();
		pageSoftware(classAutoids, "", "0", null,subclassid);
	});

	// 点击全部的时候，选中
	$(".c-head p").click(function() {
		$(".c-head a").removeClass('on');
		$(this).removeClass('on');
		pageSoftware("", "", "0", null,null);
	});
	$(".c-head-class p").click(function() {
		$(".c-head-class a").removeClass('on');
		$(this).removeClass('on');
		var classAutoids=getClassAutoids();
		pageSoftware(classAutoids, "", "0", null,null);
	});

    // // 改变排序事件
    // $(".t-l").on("click",".layui-form-select",function() {
    //     $(this).find("dd").click(function () {
    //         $("#sortType").val($(this).attr("lay-value"));
    //         var classAutoids=getClassAutoids();
    //         var search=$("#search").val();
    //         var sortType=$("#sortType").val();
    //         var days=$("#days").val();
    //         pageSoftware(classAutoids, search, sortType, days);
    //     })
    // });
    //
    // // 点击更换时间
    // $(".t-c").on("click",".layui-form-select",function() {
    //     $(this).find("dd").click(function () {
    //         $("#days").val($(this).attr("lay-value"));
    //         var classAutoids=getClassAutoids();
    //         var search=$("#search").val();
    //         var sortType=$("#sortType").val();
    //         var days=$("#days").val();
    //         pageSoftware(classAutoids, search, sortType, days);
    //     })
    // })

	// 针对IE7对输入框进行优化
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0") {
		// 搜索框位置校正
		$(".c-l .t-r a").css({
			'top' : '-1px'
		});
	}

	// 分页时点击边框和文字变色
	$(".page p a").click(function() {
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
	});

	$.post($("#root").val()+"teacher/emulate/getHotSoftware.do",{},function(data){
		if(data!=null){
			for (var i = 0; i < data.length; i++) {
				var str="";
				str+="<div class='n-1' onclick='getSoftware("+data[i].softwareAutoid+")'>"
				str+="<div class='ranking r-"+(i+1)+"'></div>";
                str+="<div id='div"+i+"' style='height:110px'></div>";     
                str+="<p class='clearFix'>";           
                str+="<span>"+data[i].name+"</span>";
                str+="<a href='javascript:;' class='people'><i>"+data[i].userCount+"</i>人使用</a>"
                str+="<a href='javascript:;' class='mintues'><i>"+formatTime(data[i].minutes)+"</i>使用</a> </p></div>";
                $(".c-r .n-1").remove();
                $(".hot").append(str);
                myChart("div"+i, [data[i].count/data[i].userCount,data[i].count]);
			}
		}
	});
	
})


// 表格函数
// id为表格id，arr['使用人数', '使用时间', '使用次数']
function myChart(id, arr) {
	// 基于准备好的dom，初始化echarts图表
	var myChart = echarts.init(document.getElementById(id));
	option = {
		tooltip : {
			trigger : 'item'
		},
		calculable : true,
		xAxis : [ {
			type : 'value',
			axisLabel : {
				textStyle : {
					color : '#999999'
				}
			},
			axisLine : {
				lineStyle : {
					color : '#dfdfdf',
					width : '1'
				}
			}
		} ],
		yAxis : [ {
			type : 'category',
			data : [ '人均次数','使用次数'],
			axisLabel : {
				textStyle : {
					color : '#999999'
				}
			},
			axisLine : {
				lineStyle : {
					color : '#dfdfdf',
					width : '1'
				}
			},
			axisTick : {
				length : 5,
				lineStyle : {
					color : '#dfdfdf'
				}
			}
		} ],
		grid : {
			x : '60',
			y : '20',
			x2 : '15',
			y2 : '25',
			borderColor : '#dfdfdf'
		},
		series : [ {
			type : 'bar',
			barWidth : '10',
			data : [ {
				value : arr[0],
				itemStyle : {
					normal : {
						color : '#0f98e7'
					}
				}
			}, {
				value : arr[1],
				itemStyle : {
					normal : {
						color : '#fe0000'
					}
				}
			}]
		} ]
	};
	// 为echarts对象加载数据
	myChart.setOption(option);
}

function getClassAutoids(){
	if(!$(".c-head p").hasClass("on")){
		return null;
	}else {
		var softClassAutoids=new Array();
		$(".c-head a.on").each(function () {
			softClassAutoids.push($(this).parent().val())
		});
		return softClassAutoids.join(",");
	}
}
function getSubClassAutoids(){
	if(!$(".c-head-class p").hasClass("on")){
		return null;
	}else {
		var subClassAutoids=new Array();
		$(".c-head-class a.on").each(function () {
			subClassAutoids.push($(this).parent().val())
		});
		return subClassAutoids.join(",");
	}
}

function pageSoftware(classAutoids,search,sortType,days,subclassid){
	$("input[name='softClassAutoids']").val(classAutoids);
	$("input[name='subClassAutoids']").val(subclassid);
	$("input[name='search']").val(search);
	$("input[name='sortType']").val(sortType);
	$("input[name='days']").val(days);
	$("#form").submit();
}

function searchT() {
	var classAutoids=getClassAutoids();
	var subclassid = getSubClassAutoids();
	var search=$("#search").val();
	var sortType=$("#softsort").val();
	var days=$("#userate").val();
	pageSoftware(classAutoids, search, sortType, days,subclassid);
}

function getSoftware(softAutoid){
	window.open($("#root").val()+'teacher/emulate/getSoftware.do?softwareAutoid='+softAutoid+'&menuCode='+$("#menuCode").val())
}
