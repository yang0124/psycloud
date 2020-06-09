<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="Common UI Features & Elements" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>测试中</title>
<%@include file="/common/base.jsp"%>

<link rel="stylesheet" href="${basePath}/front/css/demo.css">
<link rel="stylesheet" href="${basePath}/front/css/fakeloader.css">
<style>
ul.mylist{list-style-position: inside; margin: 0;}
ul.mylist>li{padding-left: 40px;border: #ffffff 1px solid;}
ul.mylist>li:hover{background: #f7f7f7; border-radius: 5px; border: #f2f2f2 1px solid;}
ul.mylist>li label{height: 35px; line-height: 35px; margin-bottom: 0; padding-left: 5px; display: inline-block;}
.timer{width: 100px;border: #9BD9EC 1px solid; border-radius: 7px;padding: 10px 15px; font-size: 16px; background: #B7E2EF;font-weight: bold;color:#358199;}
.cover-container{ position:fixed; top: 0px; right:0px; bottom:0px;filter: alpha(opacity=70); background-color: #333;z-index: 1002; left: 0px; display:none;opacity:0.5; -moz-opacity:0.7; color:#fff; text-align: center;padding:200px;}
</style>
<script src="${basePath}/front/js/fakeloader.min.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$(".fakeloader").fakeLoader({
			timeToHide : 1200,
			bgColor : "#2ecc71",
			spinner : "spinner1"
		});
		time_fun()
	});
	
	
	//计时器
	function two_char(n) {
            return n >= 10 ? n : "0" + n;
        }
        function time_fun() {
            var sec=0;
            setInterval(function () {
                sec++;
                var date = new Date(0, 0)
                date.setSeconds(sec);
                var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
                document.getElementById("smallTimer").innerText = two_char(h) + ":" + two_char(m) + ":" + two_char(s);
            }, 1000);
        }
		
	function selectedOption(node) {
		var _currentQuestionId = node.getAttribute("id");
		var _questionId = node.getAttribute("goto");
		if (_questionId == "id_-1") {
			// 跳转到下一题
			$('#myTab a[href="#id_' + (parseInt(_currentQuestionId) + 1) + '"]')
					.tab('show');
		} else if (_questionId == "id_-2") {
			// 跳转到结束
			alert('答题结束');
		} else {
			$('#myTab a[href="#' + _questionId + '"]').tab('show');
		}
	}

	function exit() {
		if (confirm("确认退出本次实验？")) {
			window.close();
		}
	}

	function finished() {
		/* alert($('#answerForm').serialize()); */
		$("#cover").show();
		$.ajax({
			cache : true,
			type : 'POST',
			url : '${basePath}/testAction/submitAnswer',
			data : $('#answerForm').serialize(),// 
			async : false,
			error : function(request) {
				/* window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error); */
			},
			success : function(data) {
				if (data.success) {
					window.close();
				}
			}
		});
		
	}
</script>
</head>
<body>
	<div id="main-content" style="margin: 50px auto;">
		<div id="page-content" class="span10 clearfix" style="float: none; margin: 0 auto;">
			<h1>${scale_info.title_cn } <span class="pull-right"><span class="timer">计时：<span id="smallTimer">00:00:00</span></span></span></h1>
			<div class="row-fluid">
				<form id="answerForm" action=" " method="" novalidate>
					<input name="scale_id" style="display: none"
						value="${scale_info.id}"></input> <input name="question_id_list"
						style="display: none" value="${question_id_list}"></input> <input
						name="test_id" style="display: none" value="${test_id}"></input>
					<div>
						<ul id="myTab" class="nav nav-tabs hide">
							<c:forEach var="question_item" items="${question_list }"
								varStatus="status">
								<c:choose>
									<c:when test="${status.index==0 }">
										<li class="active"><a id="${question_item.question_id }"
											href="#id_${question_item.question_id }" data-toggle="tab">${question_item.question_id }</a>
										</li>
									</c:when>
									<c:otherwise>
										<li><a id="${question_item.question_id }"
											href="#id_${question_item.question_id }" data-toggle="tab">${question_item.question_id }</a>
										</li>
									</c:otherwise>
								</c:choose>
							</c:forEach>
						</ul>
						<div id="myTabContent" class="tab-content" style="padding: 30px 20px;">
							<c:forEach var="question_item" items="${question_list }"
								varStatus="status">
								<c:choose>
									<c:when test="${status.index==0 }">
										<div class="tab-pane fade in active"
											id="id_${question_item.question_id }">
									</c:when>
									<c:otherwise>
										<div class="tab-pane fade"
											id="id_${question_item.question_id }">
									</c:otherwise>
								</c:choose>

								<div style="height:50px; ">
									<span class="span12"
										style="font-size: 24px;line-height: 30px;">${question_item.question_id }、${question_item.question_content }</span>
								</div>
								<div style="clear: both; margin-top: 20px;margin-bottom: 20px;">
									<ul class="mylist">
										<c:choose>
											<c:when test="${question_item.question_type == 0 }">
												<!-- 单选题 -->
												<c:forEach var="option_item"
													items="${question_item.options }">
													<li style="font-size: 15px;">
														<label>
															<input type="radio" name="${question_item.id }" id="${question_item.question_id }" goto="id_${option_item.option_jump_question_id }"
															value="${option_item.id }"
															onchange="selectedOption(this)" />
															${option_item.option_content }
														</label>
													</li>
												</c:forEach>
											</c:when>
											<c:when test="${question_item.question_type == 3 }">
												<!-- 指导语 -->
												<input type="button" name="${question_item.id }"
													id="${question_item.question_id }" goto="id_-1" value="开始"
													onclick="selectedOption(this)" />
											</c:when>
										</c:choose>
									</ul>
								</div>
								<div class="row-fluid">
									<div class="span12">
										<!-- <footer class="footer navbar-fixed-bottom ">
									-->
										<c:choose>
											<c:when test="${status.index==0 && question_item.options[0].option_jump_question_id != -2 }">
												<button type="button" class="btn btn-small"
													data-dismiss="modal" onclick="exit()" style="float: right">退出</button>
												<!-- <button type="button" class="btn btn-default cancle"
								data-dismiss="modal" style="float: right">上一题</button>
										-->
											</c:when>
											<c:when test="${question_item.options[0].option_jump_question_id == -2 }">
												<button type="button" class="btn btn-success"
													data-dismiss="modal" onclick="finished()"
													style="float: right;padding: 0 20px;">完成</button>
												<!-- <button type="button" class="btn btn-default cancle"
								data-dismiss="modal" style="float: right">上一题</button>
									-->
											</c:when>
											<c:otherwise>
												<button type="button" class="btn btn-small"
													data-dismiss="modal" onclick="exit()" style="float: right">退出</button>
												<!-- <button type="button" class="btn btn-default cancle"
								data-dismiss="modal" style="float: right">上一题</button>
								-->
											</c:otherwise>
										</c:choose>
										<!-- </footer>-->
									</div>
								</div>
						</div>
						</c:forEach>
					</div>
				</form>
			</div>

		</div>
	</div>

	<div class="cover-container" id="cover">
		<div>
			<h2><i class="icon-spinner icon-spin white bigger-125" style="margin-right: 10px;vertical-align: text-bottom;"></i>正在提交...</h2>
		</div>
	</div>
</body>
</html>