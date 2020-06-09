<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head lang="en">
<meta charset="UTF-8">
<meta name="description" content="Common UI Features & Elements" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<%@include file="/common/base.jsp"%>
<title>心理教学云平台</title>
<%--  <link href="${basePath}/front/css/bootstrap.min.css" rel="stylesheet">

    <link href="${basePath}/front/fonts/css/font-awesome.min.css" rel="stylesheet">
    <!-- Custom styling plus plugins -->
    <link href="${basePath}/front/css/index.css" rel="stylesheet"/>
    <script src="${basePath}/front/js/jquery.min.js"></script>
    <script src="${basePath}/front/js/bootstrap.min.js"></script> --%>
<script src="${basePath}/front/js/jquery.min.js"></script>
<script type="text/javascript">
	$(document)
			.ready(
					function() {
						var account = getCookie("account");
						var password = getCookie("password");

						$("#account").val(account);
						$("#password").val(password);
						$('#account').focus();

						$("#submitBtn")
								.click(
										function() {
											var account = $("#account").val();
											var password = $("#password").val();
											if (account == '' || password == '') {
												alert("请输入用户名和密码");
												return false;
											}

											var prms = {};
											prms['account'] = $("#account")
													.val();
											//var password_md5 = $.md5(password);
											prms['password'] = password; //password_md5;
											prms['valiCode'] = $("#valiCode")
													.val();
											$
													.ajax({
														type : 'post',
														url : "${basePath}/loginAction/login",
														data : prms,
														dataType : 'json',
														beforeSend : function() {
															$("#submitBtn")
																	.attr(
																			"disabled",
																			"disabled");
														},
														success : function(
																data,
																textStatus) {
															if (data.success) {
																window.top.location.href = "${basePath}/homeAction/home";
															} else {

															}
															$("#submitBtn")
																	.removeAttr(
																			"disabled");
														},
														complete : function() {
															$("#submitBtn")
																	.removeAttr(
																			"disabled");
														}
													});
											return false;
										});
					});

	function keypress(e, inp) {
		e = window.event ? window.event : e;
		if (typeof (e) == 'undefined') {
		} else {
			if (e.keyCode == 13) {
				if (inp == '') {
					login();
				} else {
					$("#" + inp).focus();
				}
			}
		}
	}

	function reloadCode() {
		$("#vcodeImg").attr("src", "${basePath}/validateCode?" + Math.random());
		$("#valiCode").focus();
	}

	//写cookies函数
	//两个参数，一个是cookie的名称，一个是值
	function setCookie(name, value) {
		var Days = 30; //此 cookie 将被保存 30 天
		var exp = new Date(); //new Date("December 31, 9998");
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires="
				+ exp.toGMTString();
	}

	//读取cookies函数
	function getCookie(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name
				+ "=([^;]*)(;|$)"));
		if (arr != null)
			return unescape(arr[2]);
		return null;
	}

	//删除cookie
	function delCookie(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires="
					+ exp.toGMTString();
	}

	//重置表单
	$("#resetBtn").click(function() {
		$("input").val("");
	});
</script>
</head>
<body class="login-layout">
	<!-- 新页面设计图适应测试 -->
	<%-- <div class="container-fluid" id="main-container">
	 	<img alt="" src="${basePath}/front/images/login3.png" width="100%" style="height:970px;" height="980">
	</div> --%>
	<!-- /新页面设计图适应测试 -->
	<div class="container-fluid" id="main-container">
		<div id="main-content">
			<div class="row-fluid">
				<div class="span12">
					<div class="login-container">
						<div class="row-fluid">
							<div class="center">
								<h1>
									<i class="icon-leaf green"></i> <span class="white">心理测量云平台</span>
								</h1>
								<!-- <h4 class="blue">&copy; 心云天地</h4> -->
							</div>
						</div>
						<div class="space-6"></div>
						<div class="row-fluid">
							<div class="position-relative">
								<div id="login-box" class="visible widget-box no-border">
									<div class="widget-body">
										<div class="widget-main">
											<h4 class="header lighter bigger">
												<i class="icon-coffee green"></i> 请输入账户信息
											</h4>

											<div class="space-6"></div>
											<form class="main" method="post">
												<fieldset>
													<!-- <div class="form-group">
														<label class="control-label"><input type="text"
															placeholder="用户名" name="userName" id="account"
															class="form-control" size="30"></label>
													</div>
													<div class="form-group">
														<label class="control-label"><input
															type="password" placeholder="密码" name="password"
															id="password" class="form-control" size="30"></label>
													</div> -->
													<label style="width: 100%;"> <span
														class="block input-icon input-icon-right"> <input
															name="userName" id="account" type="text" class="span12"
															placeholder="用户名" /> <i class="icon-user"></i>
													</span>
													</label style="width:100%;"> <label> <span
														class="block input-icon input-icon-right"> <input
															name="password" id="password" type="password"
															class="span12" placeholder="密码" /> <i class="icon-lock"></i>
													</span>
													</label>

													<div class="login-button">
														<!-- <button class="span4 btn btn-small btn-default"
														style="margin-right: 30px;" id="resetBtn">重置</button> -->
														<button class="span12 btn btn-small btn-primary"
															id="submitBtn">登录</button>
													</div>
												</fieldset>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>