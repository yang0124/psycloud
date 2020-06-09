<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="description" content="Common UI Features & Elements" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<%@include file="/common/base.jsp"%>
	<title>添加/编辑因子</title>
	<script type="text/javascript">
	function addFactor() {
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/questionAction/addFactor',
			data : $('#addFactorForm').serialize(),
			async : false,
			error : function(request) {
				window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error);
			},
			success : function(data) {
				alert(data.msg);
				if (data.success) {
					windowOpen("${basePath}/scaleAction/addFactor?scale_id=${scale_id }&factor_id="+data.resultObject);
				} else {
				}
			}
		});
	}

	function addFactorLevel() {
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/scaleAction/addFactorLevel',
			data : $('#addFactorLevelForm').serialize(),
			async : false,
			error : function(request) {
				window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error);
			},
			success : function(data) {
				if (data.success) {
					/* alert(data.msg); */
					window.location.reload();
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
	}
	
	function editFactorLevel(fl_id,level_id, level_range_min, level_range_max, group_id, result_explain, result_advise){
		$('#fl_id').val(fl_id);
		$('#level_id').val(level_id);
		$('#level_range_min').val(level_range_min);
		$('#level_range_max').val(level_range_max);
		$('#norm_group').val(group_id);
		$('#result_explain').val(result_explain);
		$('#result_advise').val(result_advise);
		
		$("#addFactorLevelModel").modal('show');
	}
	
	function deleteFactorLevel(levelId){
		if (confirm("是否要删除该因子等级？")) {
			var _data = {
					"level_id ":levelId
			};
			$.ajax({
				cache : true,
				type : "POST",
				url : '${basePath}/questionAction/deleteFactorLevel?level_id='+levelId,
				data : "",
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
								<a href="${basePath}/testAction/testList">
									<i
								class="icon-double-angle-right"></i>
									手工输入
								</a>
							</li>
							<li>
								<a href="${basePath}/testAction/testList">
									<i
								class="icon-double-angle-right"></i>
									团队统计
								</a>
							</li>
							<li>
								<a href="${basePath}/testAction/testList">
									<i
								class="icon-double-angle-right"></i>
									重新算分
								</a>
							</li> -->
						</ul>
					</li>
				</c:if>
				<!-- 只有有量表编辑权限的人，才可以查看量表编辑器 -->
				<c:if test="${user_permissions.can_edit_scale != 0}">
					<li class="active">
						<a href="#" class="dropdown-toggle">
							<i
						class="icon-edit"></i>
							<span>量表管理</span>
							<b
						class="arrow icon-angle-down"></b>
						</a>
						<ul class="submenu">
							<li class="active">
								<a
							href="${basePath}/scaleAction/scaleList">
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
					<%-- <li>
					<a href="#" class="dropdown-toggle">
						<i
						class="icon-list-alt"></i>
						<span>系统管理</span>
						<b
						class="arrow icon-angle-down"></b>
					</a>
					<ul class="submenu">
						<li>
							<a href="${basePath}/userAction/userList">
								<i
								class="icon-double-angle-right"></i>
								系统管理
							</a>
						</li>
						<li>
							<a href="${basePath}/userAction/userList">
								<i
								class="icon-double-angle-right"></i>
								配置管理
							</a>
						</li>
					</ul>
				</li>
				--%>
			</c:if>
			<!--/.nav-list-->

			<div id="sidebar-collapse">
				<i class="icon-double-angle-left"></i>
			</div>
		</ul>
	</div>
	<!--/#sidebar-->

	<div class="modal fade bs-example-modal-lg" tabindex="-1"
			role="dialog" aria-labelledby="mySmallModalLabel"
			id="addFactorLevelModel" style="display: none;">
		<div class="modal-dialog modal-lg">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
								aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">添加因子等级</h4>
					</div>
					<div class="modal-body">
						<form class="form-horizontal" action=" " method="" novalidate
								id="addFactorLevelForm">
							<input name="factor_id" style="display: none" value="${factor_id}"></input>
							<input name="fl_id" id="fl_id" style="display: none" value="-1"></input>
						<div style="float: left">
							<div class="control-group">
								<label class="control-label" for="form-field-1">等级</label>
								<div class="controls">
									<input id="level_id" name="level_id" type="text"
												placeholder=""></div>
							</div>
							<div class="control-group">
								<label class="control-label" for="form-field-1">临界值（下限）</label>
								<div class="controls">
									<input id="level_range_min" name="level_range_min" type="text"
												placeholder=""></div>
								<label class="control-label" for="form-field-1">临界值（上限）</label>
								<div class="controls">
									<input id="level_range_max" name="level_range_max" type="text"
												placeholder=""></div>
							</div>
							<div class="control-group">
								<label class="control-label" for="form-field-1">团体</label>
								<div class="controls">
									<select id="norm_group" name="norm_group">
										<c:forEach var="group_item" items="${group_list }">
											<option value="${group_item.id }">${group_item.tg_title }</option>
										</c:forEach>
									</select>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label" for="form-field-1">结果解释</label>
								<div class="controls">
									<textarea name="result_explain" id="result_explain"
												class="span12" rows="3" style="width: 100%; resize: none;"></textarea>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label" for="form-field-1">建议</label>
								<div class="controls">
									<textarea name="result_advise" id="result_advise"
												class="span12" rows="3" style="width: 100%; resize: none;"></textarea>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-small cancle"
								data-dismiss="modal">取消</button>
					<button type="button" class="btn btn-small btn-primary"
								data-dismiss="modal" onclick="addFactorLevel()">确定</button>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="main-content" class="clearfix" style="padding: 20px">
	<div id="page-content" class="clearfix">
		<div class="page-header position-relative">
			<c:choose>
				<c:when test="${factor_id == -1 }">
					<h1>
						添加因子
						<small>
							<i class="icon-double-angle-right"></i>
							(题目：Q+题号；因子：F+因子编号；因子等级：L+因子编号)
						</small>
					</h1>
				</c:when>
				<c:otherwise>
					<h1>
						编辑因子
						<small>
							<i class="icon-double-angle-right"></i>
							(题目：Q+题号；因子：F+因子编号；因子等级：L+因子编号)
						</small>
					</h1>
				</c:otherwise>
			</c:choose>
		</div>

		<div class="row-fluid">
			<ul id="myTab" class="nav nav-tabs">
				<li class="active">
					<a href="#base_info" data-toggle="tab">因子信息</a>
				</li>
				<li>
					<a href="#option" data-toggle="tab">等级管理</a>
				</li>
			</ul>
			<div id="myTabContent" class="tab-content">
				<div class="tab-pane in active" id="base_info">
					<form class="form-horizontal" action=" " method="" novalidate
								id="addFactorForm">
						<input name="scale_id" style="display: none" value="${scale_id}"></input>
					<div class="control-group">
						<label class="control-label" for="form-field-1">因子序号</label>
						<div class="controls">
							<c:choose>
								<c:when test="${factor_info == null }">
									<input id="form-field-1" name="factor_code" type="text"
													placeholder=""></c:when>
								<c:otherwise>
									<input id="form-field-1" name="factor_code" type="text"
													placeholder="" value="${factor_info.factor_code }"></c:otherwise>
							</c:choose>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="form-field-1">因子名称</label>
						<div class="controls">
							<c:choose>
								<c:when test="${factor_info == null }">
									<input id="form-field-1" name="factor_title" type="text"
													placeholder=""></c:when>
								<c:otherwise>
									<input id="form-field-1" name="factor_title" type="text"
													placeholder="" value="${factor_info.factor_title }"></c:otherwise>
							</c:choose>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="form-field-1">因子计分</label>
						<div class="controls">
							<c:choose>
								<c:when test="${factor_info == null }">
									<textarea name="factor_formula" id="factor_formula"
													class="span12" rows="3" style="width: 100%; resize: none;"></textarea>
								</c:when>
								<c:otherwise>
									<textarea name="factor_formula" id="factor_formula"
													class="span12" rows="3" style="width: 100%; resize: none;">${factor_info.factor_formula }</textarea>
								</c:otherwise>
							</c:choose>
							<button type="button" onclick="buildFormula()">编译</button>
						</div>
					</div>
					<!-- <div class="control-group">
					<label class="control-label" for="form-field-1">等级数</label>
					<div class="controls">
						<input class="form-control" name="factor_level" type="text"
											placeholder="" />
					</div>
				</div>
				-->
			</form>
			<div class="modal-footer">
				<button type="button" class="btn btn-default cancle">取消</button>
				<button type="button" class="btn btn-primary"
									onclick="addFactor()">确定</button>
			</div>
		</div>
		<div class="tab-pane" id="option">
			<c:choose> 
				<c:when test="${factor_id == -1 }">
					<button class="btn btn-mini btn-primary" data-toggle="modal"
										data-target=".bs-example-modal-lg" disabled="disabled">
						<i class="icon-pencil"></i>
						添加
					</button>
				</c:when>
				<c:otherwise>
					<button class="btn btn-mini btn-primary" data-toggle="modal"
										data-target=".bs-example-modal-lg">
						<i class="icon-pencil"></i>
						添加
					</button>
				</c:otherwise>
			</c:choose>

			<table id="table_report"
								class="table table-striped table-bordered table-hover">
				<thead>
					<tr>
						<th>等级</th>
						<th>团体名称</th>
						<th>临界值</th>
						<th>结果解释</th>
						<th>建议</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="factor_item" items="${factor_level }">
						<tr>
							<td>等级${factor_item.level_id }</td>
							<td>${factor_item.tg_title }</td>
							<td>
								${factor_item.level_range_min },${factor_item.level_range_max }
							</td>
							<td>${factor_item.result_explain }</td>
							<td>${factor_item.result_advise }</td>
							<td>
								<button id="${factor_item.id }" type="button"
													class="btn btn-small" onclick='editFactorLevel("${factor_item.id }","${factor_item.level_id }","${factor_item.level_range_min }","${factor_item.level_range_max }",${factor_item.group_id}, "${factor_item.result_explain }","${factor_item.result_advise }")'>修改</button>
								<button id="${factor_item.id }" type="button"
													class="btn btn-small" onclick='deleteFactorLevel("${factor_item.id }")'>删除</button>
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
</div>
</body>
</html>