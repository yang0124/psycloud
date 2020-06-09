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
	function addOrgSubTeam() {
		/* alert($('#addUserOrganizationForm').serialize()); */
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/userSubTeamAction/addOrgSubTeam',
			data : $('#addOrgSubTeamForm').serialize(),
			async : false,
			error : function(request) {
				window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error);
			},
			success : function(data) {
				if (data.success) {
					location.reload();
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
	}
	
	function deleteSubTeam(subTeamId){
		if (confirm("是否要删除该班级？")) {
			var _data = {
					"sub_team_id":subTeamId
			};
			$.ajax({
				cache : true,
				type : "POST",
				url : '${basePath}/userSubTeamAction/deleteSubTeam',
				data : _data,
				async : false,
				error : function(request) {
					window.wxc.xcConfirm("系统出错了!",
							window.wxc.xcConfirm.typeEnum.error);
				},
				success : function(data) {
					if (data.success) {
						location.reload();
					} else {
						window.wxc.xcConfirm(data.msg,
								window.wxc.xcConfirm.typeEnum.error);
					}
				}
			});
		}
	}
</script>
<title>班级</title>
</head>
<body class="navbar-fixed">
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container-fluid">
				<a class="brand" href="#"> <small> <i class="icon-leaf"></i>
						${sys_title }
				</small>
				</a>
				<ul class="nav ace-nav pull-right">
					<li class="light-blue user-profile"><a
						class="user-menu dropdown-toggle" href="#" data-toggle="dropdown">
							<img alt="Jason's Photo" src="${basePath}/front/avatars/user.jpg"
							class="nav-user-photo" /> <span id="user_info"> <small>欢迎,</small>
								${user_info.name }
						</span> <i class="icon-caret-down"></i>
					</a>
						<ul id="user_menu"
							class="pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-closer">
							<li><a href="#"> <i class="icon-cog"></i> 设置
							</a></li>
							<li><a href="#"> <i class="icon-user"></i> 个人中心
							</a></li>
							<li class="divider"></li>
							<li><a href="${basePath }/login.jsp"> <i
									class="icon-off"></i> 退出登录
							</a></li>
						</ul></li>
				</ul>
				<!--/.ace-nav-->
			</div>
			<!--/.container-fluid-->
		</div>
		<!--/.navbar-inner-->
	</div>

	<div class="container-fluid" id="main-container">
		<a href="#" id="menu-toggler"> <span></span>
		</a>
		<!-- menu toggler -->

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
					<li><a href="#" class="dropdown-toggle"> <i
							class="icon-dashboard"></i> <span>我的测验</span> <b
							class="arrow icon-angle-down"></b>
					</a>
						<ul class="submenu">
							<li><a href="${basePath}/testAction/testResult"> <i
									class="icon-double-angle-right"></i> 我的测验结果
							</a></li>
							<li><a href="${basePath}/testAction/startTest"> <i
									class="icon-double-angle-right"></i> 开始测验
							</a></li>
						</ul></li>
				</c:if>
				<!-- 只有教师权限才可以看到测验管理部分内容 -->
				<c:if test="${user_permissions.can_select_test != 0}">
					<li><a href="#" class="dropdown-toggle"> <i
							class="icon-desktop"></i> <span>测验管理</span> <b
							class="arrow icon-angle-down"></b>
					</a>
						<ul class="submenu">
							<li><a
								href="${basePath}/resultAnalysisAction/getBatchResultList">
									<i class="icon-double-angle-right"></i> 测验结果
							</a></li>
							<li><a href="${basePath}/selectTestAction/getSelectTest">
									<i class="icon-double-angle-right"></i> 指定测验
							</a></li>
							<li><a href="${basePath}/scaleAlertAction/scaleAlertList">
									<i class="icon-double-angle-right"></i> 心理预警
							</a></li>
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
						</ul></li>
				</c:if>
				<!-- 只有有量表编辑权限的人，才可以查看量表编辑器 -->
				<c:if test="${user_permissions.can_edit_scale != 0}">
					<li><a href="#" class="dropdown-toggle"> <i
							class="icon-edit"></i> <span>量表管理</span> <b
							class="arrow icon-angle-down"></b>
					</a>
						<ul class="submenu">
							<li><a href="${basePath}/scaleAction/scaleList"> <i
									class="icon-double-angle-right"></i> 量表列表
							</a></li>
							<li><a href="${basePath}/scaleAction/scaleTypeList"> <i
									class="icon-double-angle-right"></i> 量表类型列表
							</a></li>
							<!-- <li>
							<a href="#">
								<i class="icon-double-angle-right"></i>
								团队列表
							</a>
						</li> -->
						</ul></li>
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
						<li class="active"><a href="#" class="dropdown-toggle"> <i
								class="icon-list-alt"></i> <span>系统管理</span> <b
								class="arrow icon-angle-down"></b>
						</a>

							<ul class="submenu">
								<c:if test="${user_info.roleId<=1 }">
									<li><a href="${basePath}/userAreaAction/userArea"> <i
											class="icon-double-angle-right"></i> 大区管理
									</a></li>
								</c:if>
								<c:if test="${user_info.roleId<=2 }">
									<li class="active"><a
										href="${basePath}/userOrganizationAction/getUserOrganizationList">
											<i class="icon-double-angle-right"></i> 学校管理
									</a></li>
								</c:if>
								<c:if test="${user_info.roleId<=3 }">
									<li><a
										href="${basePath}/userSubOrganizationAction/getUserSubOrganizationList">
											<i class="icon-double-angle-right"></i> 院系管理
									</a></li>
								</c:if>
								<c:if test="${user_info.roleId==4 }">
									<li><a href="${basePath}/userTeamAction/getOrgTeamList">
											<i class="icon-double-angle-right"></i> 专业管理
									</a></li>
								</c:if>
								<c:if test="${user_info.roleId<=5 && user_info.roleId >= 4 }">
									<li><a
										href="${basePath}/userSubTeamAction/getOrgSubTeamList"> <i
											class="icon-double-angle-right"></i> 班级管理
									</a></li>
								</c:if>
							</ul></li>
					</c:if>
					<li><a href="#" class="dropdown-toggle"> <i
							class="icon-list-alt"></i> <span>用户管理</span> <b
							class="arrow icon-angle-down"></b>
					</a>

						<ul class="submenu">
							<c:if test="${user_info.roleId<=2 }">
								<li><a href="${basePath}/userAction/employeeList"> <i
										class="icon-double-angle-right"></i> 员工管理
								</a></li>
							</c:if>
							<c:if test="${user_info.roleId<=3 }">
								<li><a href="${basePath}/userAction/customList"> <i
										class="icon-double-angle-right"></i> 系统管理员管理
								</a></li>
							</c:if>
							<c:if test="${user_info.roleId==4 }">
								<li><a href="${basePath}/userAction/teacherList"> <i
										class="icon-double-angle-right"></i> 教师管理
								</a></li>
							</c:if>
							<c:if test="${user_info.roleId<=6 && user_info.roleId >= 4 }">
								<li><a href="${basePath}/userAction/userList"> <i
										class="icon-double-angle-right"></i> 学生管理
								</a></li>
							</c:if>
						</ul></li>
				</c:if>

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
			</li> -->

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
					<h1>
						班级管理
						<button class="btn btn-mini btn-primary" data-toggle="modal"
							data-target=".bs-example-modal-sm">
							<i class="icon-pencil"></i> 添加
						</button>
					</h1>
				</div>

				<div class="modal fade bs-example-modal-sm" tabindex="-1"
					role="dialog" aria-labelledby="mySmallModalLabel"
					id="addUserAreaModel" style="display: none">
					<div class="modal-dialog modal-sm">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 class="modal-title" id="myModalLabel">添加班级</h4>
							</div>
							<div class="modal-body">
								<form class="form-horizontal" action=" " method="" novalidate
									id="addOrgSubTeamForm">
									<input type="text" name="area_id"
										value="${user_permissions.area_id}" style="display: none">
									<input type="text" name="org_id"
										value="${user_permissions.org_id}" style="display: none">
									<input type="text" name="sub_org_id"
										value="${user_permissions.sub_org_id}" style="display: none">
									<!-- 组织基本信息 -->
									<div class="control-group">
										<label class="control-label" for="sub_team_title">班级名称</label>
										<div class="controls">
											<input id="sub_team_title" type="text" name="sub_team_title">
										</div>
									</div>
									<div class="control-group">
										<label class="control-label" for="team_id">所属院系</label>
										<div class="controls">
											<select id="team_id" name="team_id" class="form-control">
												<option value="0"></option>
												<c:forEach var="item" items="${team_list }">
													<option value="${item.id }">${item.team_title }</option>
												</c:forEach>
											</select>
										</div>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default cancle"
									data-dismiss="modal">取消</button>
								<button type="button" class="btn btn-primary"
									data-dismiss="modal" onclick="addOrgSubTeam()">确定</button>
							</div>
						</div>
					</div>
				</div>
				<div class="row-fluid">
					<table id="table_report"
						class="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th>班级名称</th>
								<th>院系名称</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="item" items="${sub_team_list }">
								<tr>
									<td>${item.sub_team_title }</td>
									<td>${item.team_title }</td>
									<td>
										<div class="btn-group btn-group-xs" role="group"
											aria-label="...">
											<%-- <button id="${item.id }" type="button" class="btn btn-small"
												onclick='windowOpen("${basePath}/scaleAction/scaleDetail?id=${item.id }")'>修改</button> --%>
											<button id="${item.id }" type="button" class="btn btn-small"
												onclick='deleteSubTeam("${item.id }")'>删除</button>
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
</body>
</html>