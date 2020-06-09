<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="Common UI Features & Elements" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>量表编辑-${scale_info.title_cn }</title>
<%@include file="/common/base.jsp"%>
<script type="text/javascript" src="${basePath }/js/ajaxfileupload.js"></script>
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
				if (data.success) {
					/* alert(data.msg); */
					/* window.location.reload(); */
					history.go(-1);
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
	}

	function addTestGroup() {
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/scaleAction/addTestGroup',
			data : $('#addTestGroupFrom').serialize(),
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

	function editTestGroup() {

	}

	function editScale() {
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/scaleAction/editScale',
			data : $('#editScaleForm').serialize(),
			async : false,
			error : function(request) {
				window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error);
			},
			success : function(data) {
				if (data.success) {
					alert(data.msg);
					windowOpen('${basePath}/scaleAction/scaleList');
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
	}

	function addCodition() {
		var _field = $('#test_field_title').val();
		var _opt = $('#test_field_operator').val();
		var _value = $('#test_field_value').val();
		var _logic = $('#test_field_logic').val();

		/* alert(_field + "," + _opt + "," + _value + "," + _logic); */

		var _condition = $('#test_condition_in').val();
		var _condition_text = $('#test_condition').val();
		_condition = _condition + " " + _field + " " + _opt + " '" + _value
				+ "' " + _logic;
		_condition_text = _condition_text + " "
				+ $("#test_field_title").find("option:selected").text() + " "
				+ $("#test_field_operator").find("option:selected").text()
				+ " " + _value + " "
				+ $("#test_field_logic").find("option:selected").text();

		$('#test_condition').val(_condition_text);
		$('#test_condition_in').val(_condition);

		// 清空输入项
		$('#test_field_title').get(0).selectedIndex = 0;
		$('#test_field_operator').get(0).selectedIndex = 0;
		$('#test_field_logic').get(0).selectedIndex = 0;
		$('#test_field_value').val("");
	}

	function buildFormula() {
		var _formula = $('#factor_formula').val();
		/* alert(_formula); */
		var _param = {
			"factor_formula" : _formula
		};
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/questionAction/buildFormula',
			data : _param,
			async : false,
			error : function(request) {
				window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error);
			},
			success : function(data) {
				if (data.success) {
					alert("公式正确");
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
	}
	/**
	 * 导入Excel
	 */
	function importQuestionByExcel() {
		var file = $("#fileQuestion").val();
		/* alert(file) */
		if (file == null || file == '') {
			alert("请选择要导入的excel！");
			return;
		}
		$.ajaxFileUpload({
			url : "${basePath }/scaleAction/importQuestionByExcel",
			secureuri : false,
			fileElementId : "fileQuestion",
			dataType : "text",
			success : function(data, status) {
				if (status == "success") {
					/* alert(data.msg); */
					location.reload();
				}
			}
		});
		$("#fileQuestion").val('');
	}

	/**
	 * 导入Excel
	 */
	function importOptionByExcel() {
		var file = $("#fileOption").val();
		if (file == null || file == '') {
			alert("请选择要导入的excel！");
			return;
		}
		$.ajaxFileUpload({
			url : "${basePath }/scaleAction/importOptionByExcel",
			secureuri : false,
			fileElementId : "fileOption",
			dataType : "text",
			success : function(data, status) {
				if (status == "success") {
					/* alert(data.msg); */
					alert("导入成功");
					window.location.reload();
				}
			}
		});
		$("#fileOption").val('');
	}
</script>
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
									<i
								class="icon-double-angle-right"></i>
									手工输入
								</a>
							</li>
							<li>
								<a href="#">
									<i
								class="icon-double-angle-right"></i>
									团队统计
								</a>
							</li>
							<li>
								<a href="#">
									<i
								class="icon-double-angle-right"></i>
									重新算分
								</a>
							</li> -->
						</ul></li>
				</c:if>
				<!-- 只有有量表编辑权限的人，才可以查看量表编辑器 -->
				<c:if test="${user_permissions.can_edit_scale != 0}">
					<li class="active"><a href="#" class="dropdown-toggle"> <i
							class="icon-edit"></i> <span>量表管理</span> <b
							class="arrow icon-angle-down"></b>
					</a>
						<ul class="submenu">
							<li class="active"><a
								href="${basePath}/scaleAction/scaleList"> <i
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
				<!-- 根据不同的权限，不同的人看到的人员管理不同 -->
				<c:if test="${user_info.roleId<7 }">
					<c:if test="${user_info.roleId<6 }">
						<li><a href="#" class="dropdown-toggle"> <i
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
									<li><a
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

		<div id="main-content" class="clearfix" style="padding: 20px">
			<div id="page-content" class="clearfix">
				<div class="page-header position-relative">
					<h1>量表详情</h1>
				</div>

				<div class="row-fluid">
					<div class="modal fade bs-example-modal-lg" tabindex="-1"
						role="dialog" aria-labelledby="mySmallModalLabel"
						aria-hidden="true" style="display: none;" id="addFactorModal">
						<div class="modal-dialog modal-lg">

							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									<h4 class="modal-title" id="myModalLabel">添加因子</h4>
								</div>
								<div class="modal-body">
									<form class="form-horizontal" action=" " method="" novalidate
										id="addFactorForm">
										<input name="scale_id" style="display: none"
											value="${scale_info.id}"></input>
										<fieldset>
											<div style="float: left">
												<%-- <div data-spy="scroll" data-target="#myScrollspy"
													data-offset="0"
													style="height: 200px; width: 20%; overflow: auto; position: relative;">
										<ul class="list-group">
											<c:forEach var="question_item" items="${question_list }">
												<li class="list-group-item">第${question_item.question_code }题</li>
											</c:forEach>
										</ul>
									</div>
									--%>
												<p>题目：Q+题号；因子：F+因子编号</p>
												<label class="col-lg-2 control-label" for="factor_code">因子序号</label>
												<div class="col-lg-4">
													<input class="form-control" name="factor_code" type="text"
														placeholder="" />
												</div>
												<label class="col-lg-2 control-label" for="factor_title">因子名称</label>
												<div class="col-lg-4">
													<input class="form-control" name="factor_title" type="text"
														placeholder="" />
												</div>
												<label class="col-lg-2 control-label" for="factor_formula">因子计分</label>
												<div class="col-lg-12" sytle="width:100%;">
													<textarea name="factor_formula" id="factor_formula"
														class="form-control col-lg-12" rows="3"
														sytle="width:100%;resize:none;"></textarea>
													<button type="button" onclick="buildFormula()">编译</button>
												</div>
												<label class="col-lg-2 control-label" for="factor_formula">等级数</label>
												<div class="col-lg-12">
													<input class="form-control" name="factor_level" type="text"
														placeholder="" />
												</div>
											</div>
										</fieldset>
										<fieldset>
											<div></div>
										</fieldset>
									</form>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-small cancle"
										data-dismiss="modal">取消</button>
									<button type="button" class="btn btn-small btn-primary"
										data-dismiss="modal" onclick="addFactor()">确定</button>
								</div>
							</div>
						</div>
					</div>

					<div class="modal fade bs-example-modal-sm" tabindex="-1"
						role="dialog" aria-labelledby="mySmallModalLabel"
						style="display: none;" id="addUserGroupModel">
						<div class="modal-dialog modal-sm">

							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									<h4 class="modal-title" id="myModalLabel">添加团体</h4>
								</div>
								<div class="modal-body">
									<form class="form-horizontal" action=" " method="" novalidate
										id="addTestGroupFrom">
										<input type="text" id="scale_id" name="scale_id"
											style="display: none" class="form-control"
											value="${scale_info.id }">
										<div class="control-group">
											<label class="control-label">团队名称：</label>
											<div class="controls">
												<input type="text" id="test_group_title"
													name="test_group_title" class="form-control">
											</div>
										</div>
										<div class="control-group">
											<label class="control-label">字段：</label>
											<div class="controls">
												<select id="test_field_title">
													<option value="G0">职业</option>
													<option value="G1">学历</option>
													<option value="G2">性别</option>
													<option value="G3">年龄</option>
												</select> <select id="test_field_operator">
													<option value="==">==</option>
													<option value="<">&lt;</option>
													<option value="<=">&lt;=</option>
													<option value=">">&gt;</option>
													<option value=">=">&gt;=</option>
													<option value="!=">!=</option>
												</select> <input type="text" id="test_field_value"
													name="test_field_value" class="form-control"> <select
													id="test_field_logic">
													<option value=""></option>
													<option value="&&">AND</option>
													<option value="||">OR</option>
												</select>
												<button type="button" id="add_condition_option"
													class="btn btn-mini btn-primary" onclick="addCodition()">添加</button>
											</div>
										</div>
										<div class="control-group">
											<label class="control-label">筛选条件：</label>
											<div class="controls">
												<input type="text" id="test_condition" name="test_condition"
													class="form-control"> <input type="text"
													id="test_condition_in" name="test_condition_in"
													style="display: none" class="form-control">
											</div>
										</div>
									</form>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-default cancle"
										data-dismiss="modal">取消</button>
									<button type="button" class="btn btn-primary"
										data-dismiss="modal" onclick="addTestGroup()">确定</button>
								</div>
							</div>
						</div>
					</div>

					<div class="tabbable" style="float: top">
						<ul id="myTab" class="nav nav-tabs">
							<li class="active"><a href="#base_info" data-toggle="tab">基本信息</a>
							</li>
							<li><a href="#question" data-toggle="tab">试题</a></li>
							<c:if
								test="${scale_info.is_factor_visible == 1 || user_info.id == 1 }">
								<li><a href="#team" data-toggle="tab">团体</a></li>
								<li><a href="#factor" data-toggle="tab">因子</a></li>
								<!-- <li>
					<a href="#norm" data-toggle="tab">常摸</a>
				</li>
				-->
							</c:if>
							<!-- <li>
			<a href="#appendix" data-toggle="tab">附件</a>
		</li>
		<li>
			<a href="#question_control" data-toggle="tab">题目控制</a>
		</li>
		-->
						</ul>
						<div class="tab-content">
							<div class="tab-pane in active" id="base_info">
								<form class="form-horizontal" action=" " method="" novalidate
									id="editScaleForm">
									<input name="scale_id" style="display: none"
										value="${scale_info.id}"></input>
									<fieldset>
										<div class="control-group">
											<label class="col-lg-1 control-label" for="scale_type">量表类型</label>
											<div class="controls">
												<select name="scale_type" class="form-control">
													<c:forEach var="type_item" items="${scale_type_list }"
														varStatus="status">
														<c:choose>
															<c:when test="${scale_info.type == type_item.id }">
																<option value="${type_item.id }" selected="selected">${type_item.title }</option>
															</c:when>
															<c:otherwise>
																<option value="${type_item.id }">${type_item.title }</option>
															</c:otherwise>
														</c:choose>
													</c:forEach>
												</select>
											</div>
										</div>
										<div class="control-group">
											<label class="col-lg-2 control-label" for="scale_code">编号</label>
											<div class="controls">
												<input class="form-control" name="scale_code" type="text"
													placeholder="" value="${scale_info.code }" />
											</div>
										</div>
										<div class="control-group">
											<label class="col-lg-1 control-label" for="ds_username">量表名称</label>
											<div class="controls">
												<input class="form-control" name="scale_title_cn"
													type="text" placeholder="" value="${scale_info.title_cn }" />
											</div>
										</div>
										<div class="control-group">
											<label class="col-lg-2 control-label" for="scale_title_en">英文名称</label>
											<div class="controls">
												<input class="form-control" name="scale_title_en"
													type="text" placeholder="" value="${scale_info.title_en }" />
											</div>
										</div>
										<div class="control-group">
											<label class="col-lg-1 control-label" for="age_start">适用年龄</label>
											<div class="controls">
												<input style="width: 30%" class="form-control"
													name="age_start" type="text" placeholder=""
													value="${scale_info.age_start }" /> 到 <input
													style="width: 30%" class="form-control" name="age_end"
													type="text" placeholder="" value="${scale_info.age_end }" />
											</div>
										</div>
										<div class="control-group">
											<label class="col-lg-2 control-label" for="test_time_cost">测验用时</label>
											<div class="controls">
												<input class="form-control" name="test_time_cost"
													type="text" placeholder=""
													value="${scale_info.test_time_cost }" /> 分
											</div>
										</div>
									</fieldset>
									<fieldset>
										<div class="control-group">
											<label class="col-lg-1 control-label" for="scale_brief">量表简介</label>
											<div class="controls">
												<textarea name="scale_brief" class="span10" style rows="5">${scale_info.brief }</textarea>

											</div>
										</div>
									</fieldset>
									<fieldset>
										<div class="control-group">
											<label class="col-lg-1 control-label" for="scale_detail">详细介绍</label>
											<div class="controls">
												<textarea name="scale_detail" class="span10" rows="5">${scale_info.detail }</textarea>
											</div>
										</div>
									</fieldset>
									<fieldset>
										<div class="control-group">
											<label class="col-lg-1 control-label" for="scale_guide">指导语</label>
											<div class="controls">
												<textarea id="scale_guide" class="span10" rows="5">${scale_info.guide }</textarea>
											</div>
										</div>
									</fieldset>
									<div class="form-actions">
										<button type="button" class="btn btn-small btn-primary cancle"
											data-dismiss="modal" onclick="editScale()">保存</button>
										<button type="button" class="btn btn-small btn-default"
											data-dismiss="modal" style="margin-left: 10px;">取消</button>
									</div>
								</form>

							</div>
							<div class="tab-pane" id="question">
								<%-- <button type="button" class="btn btn-primary"
									onclick='windowOpen("${basePath}/questionAction/addQuestion?id=${scale_info.id }")'
									style="margin-right: 30px; margin-top: 12px; float: right;">
		<span class="glyphicon glyphicon glyphicon-plus"
										aria-hidden="true"></span>
		添加
	</button>
	--%>
								<button class="btn btn-mini btn-primary"
									onclick='windowOpen("${basePath}/questionAction/addQuestion?id=${scale_info.id }")'>
									<i class="icon-pencil"></i> 添加
								</button>
								<div>
									<div style="float: right;">
										导入选择支： <input type="file" id="fileOption" name="myFiles"
											onchange="importOptionByExcel()"></input>
									</div>
									<div style="float: right;">
										导入试题： <input type="file" id="fileQuestion" name="myFiles"
											onchange="importQuestionByExcel()"></input>
									</div>
								</div>

								<div>
									<table class="table table-bordered">
										<tbody>
											<tr>
												<!-- <th>题号</th>
		-->
												<th>id</th>
												<th>序号</th>
												<th>试题类型</th>
												<th>是否图片</th>
												<th>题干</th>
												<th>操作</th>
											</tr>
											<c:forEach var="question_item" items="${question_list }">
												<tr>
													<td>${question_item.id }</td>
													<td>${question_item.question_id }</td>
													<c:choose>
														<c:when test="${question_item.question_type==0 }">
															<td>单选题</td>
														</c:when>
														<c:when test="${question_item.question_type==1 }">
															<td>多选题</td>
														</c:when>
														<c:when test="${question_item.question_type==2 }">
															<td>填空题</td>
														</c:when>
														<c:when test="${question_item.question_type==3 }">
															<td>指导语</td>
														</c:when>
														<c:otherwise>
															<td>其他类型</td>
														</c:otherwise>
													</c:choose>
													<c:choose>
														<c:when test="${question_item.has_image==0 }">
															<td>否</td>
														</c:when>
														<c:when test="${question_item.has_image==1 }">
															<td>是</td>
														</c:when>
														<c:otherwise>
															<td>未知类型</td>
														</c:otherwise>
													</c:choose>
													<td>${question_item.question_content }</td>
													<td>
														<div class="btn-group btn-group-xs" role="group"
															aria-label="...">
															<button id="${scale_item.id }" type="button"
																onclick='windowOpen("${basePath}/questionAction/editQuestion?scale_id=${scale_info.id}&id=${question_item.id}","_blank")'
																class="btn btn-small">修改</button>
															<button id="${scale_item.id }" type="button"
																class="btn btn-small">删除</button>
														</div>
													</td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
							<c:if
								test="${scale_info.is_factor_visible == 1 or user_info.id == 1 }">
								<div class="tab-pane" id="factor">
									<!-- <button type="button" class="btn btn-primary"
									data-toggle="modal" data-target=".bs-example-modal-lg"
									style="margin-right: 30px; margin-top: 12px; float: right;">
<span class="glyphicon glyphicon glyphicon-plus"
										aria-hidden="true"></span>
添加
</button>
-->
									<button class="btn btn-mini btn-primary"
										onclick='windowOpen("${basePath}/scaleAction/addFactor?scale_id=${scale_info.id }&factor_id=-1")'>
										<i class="icon-pencil"></i> 添加
									</button>
									<div class="row-fluid">
										<table class="table table-striped table-bordered table-hover"
											width="100%" cellspacing="0" cellpadding="0"
											style="table-layout: fixed;">
											<tbody>
												<tr>
													<th
														style="width: 30px; height: 44px; text-overflow: ellipsis;">序号</th>
													<th
														style="width: 60px; height: 44px; text-overflow: ellipsis;">因子名称</th>
													<th
														style="width: 10px; height: 44px; text-overflow: ellipsis;">等级数</th>
													<th
														style="width: 50%; height: 44px; word-break: break-all;">计分方法</th>
													<!-- 		<th style="width: 20%; height: 44px; text-overflow: ellipsis;">加入剖析图</th>
		<th style="width: 20%; height: 44px; text-overflow: ellipsis;">是否可见</th> -->
													<th
														style="width: 80px; height: 44px; text-overflow: ellipsis;">操作</th>
												</tr>
												<c:forEach var="factor_item" items="${factor_list }">
													<tr>
														<td>${factor_item.factor_code }</td>
														<td>${factor_item.factor_title }</td>
														<td>${factor_item.factor_level }</td>
														<td>${factor_item.factor_formula }</td>
														<%-- <td>${factor_item.factor_is_join_to_chart }</td>
			<td>${factor_item.factor_is_visiable }</td> --%>
														<td>
															<div class="btn-group btn-group-xs" role="group"
																aria-label="...">
																<button id="${factor_item.id }" type="button"
																	onclick='windowOpen("${basePath}/scaleAction/addFactor?scale_id=${scale_info.id }&factor_id=${factor_item.id }")'
																	class="btn btn-small">修改</button>
																<button id="${factor_item.id }" type="button"
																	class="btn btn-small">删除</button>
															</div>
														</td>
													</tr>
												</c:forEach>
											</tbody>
										</table>
									</div>
								</div>
								<div class="tab-pane" id="team">
									<button class="btn btn-mini btn-primary" data-toggle="modal"
										data-target=".bs-example-modal-sm">
										<i class="icon-pencil"></i> 添加
									</button>

									<div>
										<table class="table table-bordered">
											<tbody>
												<tr>
													<th>团体名称</th>
													<th>筛选条件</th>
													<th>操作</th>
												</tr>
												<c:forEach var="group_item" items="${group_list }">
													<tr>
														<td>${group_item.tg_title }</td>
														<td>${group_item.tg_condition_title }</td>
														<td>
															<div class="btn-group btn-group-xs" role="group"
																aria-label="...">
																<!-- <button id="${group_item.id }" type="button" onclick='windowOpen("${basePath}/scaleAction/addTestGroup?scale_id=${scale_info.id }&group_id=${group_item.id }")' class="btn btn-small">修改</button> -->
																<button id="${group_item.id }" type="button"
																	class="btn btn-small">修改</button>
																<button id="${group_item.id }" type="button"
																	class="btn btn-small">删除</button>
															</div>
														</td>
													</tr>
												</c:forEach>
											</tbody>
										</table>
									</div>
								</div>
							</c:if>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>