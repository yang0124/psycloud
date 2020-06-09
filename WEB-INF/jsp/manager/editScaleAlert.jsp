<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="description" content="Common UI Features & Elements" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<%@include file="/common/base.jsp"%>
	<!-- ace styles -->
	<link rel="stylesheet" href="${basePath}/front/css/ace.min.css" />
	<link rel="stylesheet" href="${basePath}/front/css/ace-responsive.min.css" />
	<link rel="stylesheet" href="${basePath}/front/css/ace-skins.min.css" />
	<!--[if lt IE 9]>
	<link rel="stylesheet" href="${basePath}/front/css/ace-ie.min.css" />
	<![endif]-->
	<link rel="stylesheet"
	href="${basePath}/front/css/bootstrap-timepicker.css" />
	<link rel="stylesheet" href="${basePath}/front/css/daterangepicker.css" />
	<script type="text/javascript"
	src="${basePath}/front/js/bootstrap-datepicker.min.js"></script>
	<script type="text/javascript"
	src="${basePath}/front/js/bootstrap-timepicker.min.js"></script>
	<script type="text/javascript" src="${basePath}/front/js/date.js"></script>
	<script type="text/javascript" src="${basePath}/front/js/bootstrap-colorpicker.min.js"></script>
	<script type="text/javascript">
	function addAlertLevel() {
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/scaleAlertAction/addAlertLevel',
			data : $('#addAlertLevelForm').serialize(),
			async : false,
			error : function(request) {
				/* window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error); */
			},
			success : function(data) {
				if (data.success) {
					window.location.reload();
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
	}
	
	$(function(){
		$('#simple-colorpicker-1').ace_colorpicker();
	});
</script>
	<title>添加/编辑心理预警</title>
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
	<div id="sidebar" class="fixed">
		<ul class="nav nav-list">
			<li>
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
				<li class="active">
					<a href="#" class="dropdown-toggle">
						<i
					class="icon-desktop"></i>
						<span>测验管理</span>
						<b
					class="arrow icon-angle-down"></b>
					</a>
					<ul class="submenu">
						<li>
							<a href="${basePath}/resultAnalysisAction/getBatchResultList">
								<i class="icon-double-angle-right"></i>
								测验结果
							</a>
						</li>
						<li>
							<a href="${basePath}/selectTestAction/getSelectTest">
								<i
							class="icon-double-angle-right"></i>
								指定测验
							</a>
						</li>
						<li class="active">
							<a href="${basePath}/scaleAlertAction/scaleAlertList">
								<i class="icon-double-angle-right"></i>
								心理预警
							</a>
						</li>
						<!-- <li>
							<a href="#">
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
			<!-- <li>
			<a href="#" class="dropdown-toggle">
				<i
					class="icon-list-alt"></i>
				<span>系统管理</span>
				<b
					class="arrow icon-angle-down"></b>
			</a>
			<ul class="submenu">
				<li>
					<a href="#">
						<i class="icon-double-angle-right"></i>
						系统管理
					</a>
				</li>
				<li>
					<a href="#">
						<i class="icon-double-angle-right"></i>
						配置管理
					</a>
				</li>
			</ul>
		</li>
		-->
	</c:if>
	<!--/.nav-list-->
</ul>
<div id="sidebar-collapse">
	<i class="icon-double-angle-left"></i>
</div>
</div>
<!--/#sidebar-->
<div id="main-content" class="clearfix" style="padding: 20px">
<div id="page-content" class="clearfix">
	<div class="page-header position-relative">
		<c:choose>
			<c:when test="${scale_alert == null }">
				<h1>添加心理预警</h1>
			</c:when>
			<c:otherwise>
				<h1>编辑心理预警</h1>
			</c:otherwise>
		</c:choose>
	</div>
	<div class="modal fade bs-example-modal-lg" tabindex="-1"
				role="dialog" aria-labelledby="mySmallModalLabel"
				id="addTestBatchDialog" style="display:none">
		<div class="modal-dialog modal-lg">

			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="myModalLabel">添加量表</h4>
				</div>
				<div class="modal-body">
					<form class="form-horizontal" action=" " method="" novalidate
								id="addAlertLevelForm">
						<input id="alert_id" name="alert_id" value="${alert_info.id }" style="display:none">
						<div class="control-group">
							<label class="control-label" for=alert_level_code>编号</label>
							<div class="controls">
								<input id="alert_level_code" type="text" placeholder="输入编号"
											name="alert_level_code"></div>
						</div>
						<div class="control-group">
							<label class="control-label" for=alert_level_title>预警等级标题</label>
							<div class="controls">
								<input id="alert_level_title" type="text" placeholder="输入预警等级标题"
											name="alert_level_title"></div>
						</div>
						<div class="control-group">
							<label class="control-label" for="alert_level_formula">预警公式</label>
							<div class="controls">
								<input id="alert_levet_formula" type="text" placeholder="输入预警公式"
											name="alert_levet_formula"></div>
						</div>
						<div class="control-group">
							<label class="control-label" for="show_clock">预警颜色</label>
							<div class="controls">
								<!-- <a class="dropdown-toggle" href="#" data-toggle="dropdown">
								<span class="btn-colorpicker" style="background-color:#ffad46"></span>
							</a>
							-->
							<select id="simple-colorpicker-1" name="alert_level_color" class="hidden">
								<option value="#ac725e">#ac725e</option>
								<option value="#d06b64">#d06b64</option>
								<option value="#f83a22">#f83a22</option>
								<option value="#fa573c">#fa573c</option>
								<option value="#ff7537">#ff7537</option>
								<option value="#ffad46" selected>#ffad46</option>
								<option value="#42d692">#42d692</option>
								<option value="#16a765">#16a765</option>
								<option value="#7bd148">#7bd148</option>
								<option value="#b3dc6c">#b3dc6c</option>
								<option value="#fbe983">#fbe983</option>
								<option value="#fad165">#fad165</option>
								<option value="#92e1c0">#92e1c0</option>
								<option value="#9fe1e7">#9fe1e7</option>
								<option value="#9fc6e7">#9fc6e7</option>
								<option value="#4986e7">#4986e7</option>
								<option value="#9a9cff">#9a9cff</option>
								<option value="#b99aff">#b99aff</option>
								<option value="#c2c2c2">#c2c2c2</option>
								<option value="#cabdbf">#cabdbf</option>
								<option value="#cca6ac">#cca6ac</option>
								<option value="#f691b2">#f691b2</option>
								<option value="#cd74e6">#cd74e6</option>
								<option value="#a47ae2">#a47ae2</option>
								<option value="#555">#555</option>
							</select>
						</div>
					</div>
				</form>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default cancle"
								data-dismiss="modal">取消</button>
				<button type="button" class="btn btn-primary"
								data-dismiss="modal" onclick="addAlertLevel()">确定</button>
			</div>
		</div>
	</div>
</div>
<div class="row-fluid">
	<ul id="myTab" class="nav nav-tabs">
		<li class="active">
			<a href="#base_info" data-toggle="tab">基本信息</a>
		</li>
		<li>
			<a href="#scale" data-toggle="tab">预警设置</a>
		</li>
	</ul>
	<div id="myTabContent" class="tab-content">
		<div class="tab-pane in active" id="base_info">
			<form class="form-horizontal" action=" " method="" novalidate
							id="addTestBatchScaleFrom">
				<input id="alert_id" name="alert_id" value="${alert_info.id }" style="display:none">
				<div class="control-group">
					<label class="control-label" for="code">预警编号</label>
					<div class="controls">
						<input id="code" type="text" placeholder="输入预警编号"
										name="code" value="${alert_info.code }"></div>
				</div>
				<div class="control-group">
					<label class="control-label" for="title">预警名称</label>
					<div class="controls">
						<input id="title" type="text" placeholder="输入预警名称"
										name="title" value="${alert_info.title }"></div>
				</div>
				<div class="form-actions">
					<button class="btn btn-info" type="submit" id="btn_confirm">
						<i class="icon-ok"></i>
						确定
					</button>
					<button class="btn" type="reset" id="btn_reset">
						<i class="icon-undo"></i>
						重置
					</button>
				</div>
			</form>
		</div>
		<div class="tab-pane" id="scale">
			<button class="btn btn-mini btn-primary" data-toggle="modal"
							data-target=".bs-example-modal-lg">
				<i class="icon-pencil"></i>
				添加
			</button>
			<table id="table_scale_list"
							class="table table-striped table-bordered table-hover">
				<thead>
					<tr>
						<th>编号</th>
						<th>标题</th>
						<th>预警公式</th>
						<th>预警颜色</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="item" items="${scale_alert_level_list }">
						<tr>
							<td>${item.code }</td>
							<td>${item.title }</td>
							<td>${item.alert_level_formula }</td>
							<td>
								<span class="span12" style="background-color:${item.alert_level_color}"></span>
							</td>
							<td>
								<div class="btn-group btn-group-xs" role="group"
												aria-label="...">
									<button id="${item.id }" type="button" class="btn btn-small"
													onclick='windowOpen("${basePath}/selectTestAction/editTestBatch?id=${item.id }")'>修改</button>
									<button id="${item.id }" type="button" class="btn btn-small">删除</button>
								</div>
							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
</div>
</div>
</div>
</body>
</html>