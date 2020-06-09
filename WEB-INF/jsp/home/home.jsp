<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="description" content="Common UI Features & Elements" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<%@include file="/common/base.jsp"%>
	<title>心理教学云平台</title>
	<!--[if lt IE 9]>
	<script type="text/javascript" src="js/excanvas.min.js"></script>
	<![endif]-->
	<link rel="stylesheet" href="${basePath}/front/css/ace-responsive.min.css" />
	<link rel="stylesheet" href="${basePath}/front/css/ace-skins.min.css" />
	<script type="text/javascript"
	src="${basePath}/front/js/jquery-ui-1.10.2.custom.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/jquery.ui.touch-punch.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/jquery.slimscroll.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/jquery.easy-pie-chart.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/jquery.sparkline.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/jquery.flot.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/jquery.flot.pie.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/jquery.flot.resize.min.js"></script>
	<!-- page specific plugin scripts -->

	<script type="text/javascript" src="${basePath}/front/js/prettify.js"></script>

	<script type="text/javascript"
	src="${basePath}/front/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/jquery.dataTables.bootstrap.js"></script>
	<!-- inline scripts related to this page -->
	<script type="text/javascript">
	function confirmUser(url) {
		windowOpen(url, '_blank');
		$('#startTestDlg').modal('hide');
	};
</script>
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

	<div class="container-fluid" id="main-container">
		<a href="#" id="menu-toggler">
			<span></span>
		</a>
		<!-- menu toggler -->

		<div id="sidebar" class="fixed">
			<ul class="nav nav-list">
				<li class="active">
					<a href="${basePath}/homeAction/home">
						<i
						class="ace-icon fa fa-home icon-home" style="font-size: 22px;"></i>
						<span>首页</span>
					</a>
				</li>
				<!-- 有做题权限的人可以做题 -->
				<c:if test="${user_permissions.can_do_test != 0}">
					<li>
						<a href="#" class="dropdown-toggle">
							<i
							class="icon-dashboard"></i>
							<span>我的测验</span>
							<b
							class="arrow icon-angle-down"></b>
						</a>
						<ul class="submenu">
							<li>
								<a href="${basePath}/testAction/testResult">
									<i
									class="icon-double-angle-right"></i>
									我的测验结果
								</a>
							</li>
							<li>
								<a href="${basePath}/testAction/startTest">
									<i
									class="icon-double-angle-right"></i>
									开始测验
								</a>
							</li>
						</ul>
					</li>
				</c:if>
				<!-- 只有教师权限才可以看到测验管理部分内容 -->
				<c:if test="${user_permissions.can_select_test != 0}">
					<li>
						<a href="#" class="dropdown-toggle">
							<i
							class="icon-desktop"></i>
							<span>测验管理</span>
							<b
							class="arrow icon-angle-down"></b>
						</a>
						<ul class="submenu">
							<li>
								<a
								href="${basePath}/resultAnalysisAction/getBatchResultList">
									<i
									class="icon-double-angle-right"></i>
									测验结果
								</a>
							</li>
							<li>
								<a href="${basePath}/selectTestAction/getSelectTest">
									<i class="icon-double-angle-right"></i>
									指定测验
								</a>
							</li>
							<li>
								<a href="${basePath}/scaleAlertAction/scaleAlertList">
									<i class="icon-double-angle-right"></i>
									心理预警
								</a>
							</li>
							<!-- <li>
								<a href="${basePath}/manualInputAction/testBatchList">
									<i class="icon-double-angle-right"></i>
									手工输入
								</a>
							</li>
							<li>
								<a href="#">
									<i class="icon-double-angle-right"></i>
									团队统计
								</a>
							</li>
							<li>
								<a href="#">
									<i class="icon-double-angle-right"></i>
									重新算分
								</a>
							</li> -->
						</ul>
					</li>
				</c:if>
				<!-- 只有有量表编辑权限的人，才可以查看量表编辑器 -->
				<c:if test="${user_permissions.can_edit_scale != 0}">
					<li>
						<a href="#" class="dropdown-toggle">
							<i
						class="icon-edit"></i>
							<span>量表管理</span>
							<b
						class="arrow icon-angle-down"></b>
						</a>
						<ul class="submenu">
							<li>
								<a href="${basePath}/scaleAction/scaleList">
									<i
								class="icon-double-angle-right"></i>
									量表列表
								</a>
							</li>
							<li>
								<a href="${basePath}/scaleAction/scaleTypeList">
									<i
								class="icon-double-angle-right"></i>
									量表类型列表
								</a>
							</li>
							<!-- <li>
								<a href="#">
									<i class="icon-double-angle-right"></i>
									团队列表
								</a>
							</li> -->
						</ul>
					</li>
				</c:if>
				<!-- <li>
				<a href="#" class="dropdown-toggle">
					<i
						class="icon-list-alt"></i>
					<span>数据管理</span>
					<b
						class="arrow icon-angle-down"></b>
				</a>
				<ul class="submenu">
					<li>
						<a href="#">
							<i class="icon-double-angle-right"></i>
							导入数据
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon-double-angle-right"></i>
							导出数据
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon-double-angle-right"></i>
							光标阅读
						</a>
					</li>
				</ul>
			</li>
			-->
			<!-- 根据不同的权限，不同的人看到的人员管理不同 -->
			<c:if test="${user_info.roleId<7 }">
				<c:if test="${user_info.roleId<6 }">
				<li>
					<a href="#" class="dropdown-toggle">
						<i
							class="icon-list-alt"></i>
						<span>系统管理</span>
						<b
							class="arrow icon-angle-down"></b>
					</a>

					<ul class="submenu">
						<c:if test="${user_info.roleId<=1 }">
							<li>
								<a href="${basePath}/userAreaAction/userArea">
									<i
										class="icon-double-angle-right"></i>
									大区管理
								</a>
							</li>
						</c:if>
						<c:if test="${user_info.roleId<=2 }">
							<li>
								<a
									href="${basePath}/userOrganizationAction/getUserOrganizationList">
									<i class="icon-double-angle-right"></i>
									学校管理
								</a>
							</li>
						</c:if>
						<c:if test="${user_info.roleId<=3 }">
							<li>
								<a href="${basePath}/userSubOrganizationAction/getUserSubOrganizationList">
									<i
										class="icon-double-angle-right"></i>
									院系管理
								</a>
							</li>
						</c:if>
						<c:if test="${user_info.roleId==4 }">
							<li>
								<a href="${basePath}/userTeamAction/getOrgTeamList">
									<i
										class="icon-double-angle-right"></i>
									专业管理
								</a>
							</li>
						</c:if>
						<c:if test="${user_info.roleId<=5 && user_info.roleId >= 4 }">
							<li>
								<a href="${basePath}/userSubTeamAction/getOrgSubTeamList">
									<i
										class="icon-double-angle-right"></i>
									班级管理
								</a>
							</li>
						</c:if>
					</ul>
				</li>
				</c:if>
				<li>
					<a href="#" class="dropdown-toggle">
						<i
							class="icon-list-alt"></i>
						<span>用户管理</span>
						<b
							class="arrow icon-angle-down"></b>
					</a>

					<ul class="submenu">
						<c:if test="${user_info.roleId<=2 }">
							<li>
								<a href="${basePath}/userAction/employeeList">
									<i
										class="icon-double-angle-right"></i>
									员工管理
								</a>
							</li>
						</c:if>
						<c:if test="${user_info.roleId<=3 }">
							<li>
								<a href="${basePath}/userAction/customList">
									<i
										class="icon-double-angle-right"></i>
									系统管理员管理
								</a>
							</li>
						</c:if>
						<c:if test="${user_info.roleId==4 }">
							<li>
								<a href="${basePath}/userAction/teacherList">
									<i
										class="icon-double-angle-right"></i>
									教师管理
								</a>
							</li>
						</c:if>
						<c:if test="${user_info.roleId<=6 && user_info.roleId >= 4 }">
							<li>
								<a href="${basePath}/userAction/userList">
									<i
										class="icon-double-angle-right"></i>
									学生管理
								</a>
							</li>
						</c:if>
					</ul>
				</li>
			</c:if>

			<!--/.nav-list-->
		</ul>
		<div id="sidebar-collapse">
			<i class="icon-double-angle-left"></i>
		</div>
	</div>
	<!--/#sidebar-->

	<!-- <div id="main-content" class="clearfix" style="padding: 20px;">
	<h1>欢迎使用${sys_title }</h1>
	<div id="ace-settings-container">
		<div class="btn btn-app btn-mini btn-warning open" id="ace-settings-btn">
			<i class="icon-cog"></i>
		</div>
		<div id="ace-settings-box" class="open">
			<div>
				<div class="pull-left">
					<select id="skin-colorpicker" class="hidden">
						<option data-class="default" value="#438EB9">#438EB9</option>
						<option data-class="skin-1" value="#222A2D">#222A2D</option>
						<option data-class="skin-2" value="#C6487E">#C6487E</option>
						<option data-class="skin-3" value="#D0D0D0">#D0D0D0</option>
					</select>
				</div>
				<span>&nbsp; 选择皮肤</span>
			</div>
			<div>
				<input type="checkbox" class="ace-checkbox-2"
							id="ace-settings-header" />
				<label class="lbl"
							for="ace-settings-header">Fixed Header</label>
			</div>
			<div>
				<input type="checkbox" class="ace-checkbox-2"
							id="ace-settings-sidebar" />
				<label class="lbl"
							for="ace-settings-sidebar">Fixed Sidebar</label>
			</div>
		</div>
	</div>
</div>
-->
</div>
<!-- ace scripts -->
<script src="${basePath}/front/js/ace-elements.min.js"></script>
<script src="${basePath}/front/js/ace-new.min.js"></script>
<script type="text/javascript" src="${basePath}/front/js/jquery-ui-1.10.2.custom.min.js"></script>
<script type="text/javascript" src="${basePath}/front/js/jquery.ui.touch-punch.min.js"></script>
</body>
</html>