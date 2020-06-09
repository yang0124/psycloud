<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="description" content="Common UI Features & Elements" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<%@include file="/common/base.jsp"%>
	
	
	
	<script type="text/javascript">
	function startTest(obj) {
		 $(obj).find(".icon-beaker").hide();
		$(obj).find(".icon-spinner").show();
		$(obj).attr("disabled","disabled"); 
		$(obj).find("span").text("加载中..."); 
		windowOpen("${basePath}/testAction/doTest?scale_id=${scale_info.id }&batch_id=${batch_id}");
	}
	</script>
	<title>${scale_info.title_cn }-实验指导语</title>
	<style>
	p.guide-text{text-indent: 2em;margin-top: 100px; margin-bottom: 100px; font-size: 25px; line-height: 40px;}
	</style>
</head>
<body class="navbar-fixed">
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container-fluid">
				<a class="brand" href="#">
					<small> <i class="icon-leaf"></i>
						${sys_title }
					</small>
				</a>
				<ul class="nav ace-nav pull-right">
					<li class="light-blue user-profile">
						<a
						class="user-menu dropdown-toggle" href="#" data-toggle="dropdown">
							<img alt="Jason's Photo" src="${basePath}/front/avatars/user.jpg"
							class="nav-user-photo" />
							<span id="user_info">
								<small>欢迎,</small>
								${user_info.name }
							</span> <i class="icon-caret-down"></i>
						</a>
						<ul id="user_menu"
							class="pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-closer">
							<li>
								<a href="#">
									<i class="icon-cog"></i>
									设置
								</a>
							</li>
							<li>
								<a href="#">
									<i class="icon-user"></i>
									个人中心
								</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="${basePath }/login.jsp">
									<i class="icon-off"></i>
									退出登录
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<!--/.ace-nav-->
			</div>
			<!--/.container-fluid-->
		</div>
		<!--/.navbar-inner-->
	</div>
	<div id="main-content" class="clearfix" style="margin:0;">
		<div id="page-content" class="span12" style="float: none; margin: 0 auto;">
			<p class="guide-text" >${scale_info.guide }</p>
			<center>
				<button class="btn btn-primary" 
					<%-- onclick='windowOpen("${basePath}/testAction/doTest?scale_id=${scale_info.id }")'>
					--%>
				onclick='startTest(this);'>
					<i class="icon-beaker"></i>
					<i class="icon-spinner icon-spin white bigger-125" style="display: none;"></i>
					<span>开始测验</span>
				</button>
			</center>
		</div>
	</div>
</body>
</html>