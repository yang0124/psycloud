<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="Common UI Features & Elements" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<%@include file="/common/base.jsp"%>
<link rel="stylesheet"
	href="${basePath}/front/css/bootstrap-timepicker.css" />
<link rel="stylesheet" href="${basePath}/front/css/daterangepicker.css" />
<script type="text/javascript"
	src="${basePath}/front/js/bootstrap-datepicker.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/bootstrap-timepicker.min.js"></script>
<script type="text/javascript" src="${basePath}/front/js/date.js"></script>
<title>添加/编辑指定实验</title>
<script type="text/javascript">
	function selectScale(node) {
		var _scaleId = $("#scale_id").val();
		var _data = {
			"scale_id" : _scaleId
		};
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/scaleAlertAction/getScaleAlert',
			data : _data,
			async : false,
			error : function(request) {
				window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error);
			},
			success : function(data) {
				if (data.success) {
					$('#alert_id').empty();
					for (var i = 0; i < data.resultList.length; ++i) {
						$('#alert_id').append(
								'<option value="'+data.resultList[i].id+'">'
										+ data.resultList[i].title
										+ '</option>');
					}
					$('#alert_id').prepend('<option value="0">请选择</option>');
					$('#alert_id').val(0);
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
	}
	
	function editTestBatchScale(batchScaleId, scaleId, testInterval, showClock, timeType, alertId, isShowScaleTitle) {

		var _data = {
			"scale_id" : scaleId
		};
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/scaleAlertAction/getScaleAlert',
			data : _data,
			async : false,
			error : function(request) {
				window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error);
			},
			success : function(data) {
				if (data.success) {
					$('#batch_scale_id').val(batchScaleId);
					$('#scale_id').val(scaleId);
					$('#test_interval').val(testInterval);
					$('#show_clock').eq(showClock).attr('checked', 'checked');
					$('#time_type').eq(timeType).attr('checked', 'checked');
					$('#alert_id').val(alertId);
					$('#is_show_scale_title').eq(isShowScaleTitle).attr('checked', 'checked');

					$('#alert_id').empty();
					$('#alert_id').append('<option value="0">无预警</option>');
					for (var i = 0; i < data.resultList.length; ++i) {
						$('#alert_id').append(
								'<option value="'+data.resultList[i].id+'">'
										+ data.resultList[i].title
										+ '</option>');
					}
					$('#addTestBatchDialog').modal('show');					
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
	}

	function deleteBatchScale(batchScaleId){
		if (confirm("是否要删除该量表？")) {
			var _data = {
					"batch_scale_id":batchScaleId
			};
			$.ajax({
				cache : true,
				type : "POST",
				url : '${basePath}/selectTestAction/deleteBatchScale',
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
				<li class="active"><a href="#" class="dropdown-toggle"> <i
						class="icon-desktop"></i> <span>测验管理</span> <b
						class="arrow icon-angle-down"></b>
				</a>
					<ul class="submenu">
						<li><a
							href="${basePath}/resultAnalysisAction/getBatchResultList"> <i
								class="icon-double-angle-right"></i> 测验结果
						</a></li>
						<li class="active"><a
							href="${basePath}/selectTestAction/getSelectTest"> <i
								class="icon-double-angle-right"></i> 指定测验
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
					<c:when test="${test_batch == null }">
						<h1>添加实验批次</h1>
					</c:when>
					<c:otherwise>
						<h1>编辑实验批次-"${test_batch.title }"</h1>
					</c:otherwise>
				</c:choose>
			</div>
			<div class="modal fade bs-example-modal-lg" tabindex="-1"
				role="dialog" aria-labelledby="mySmallModalLabel"
				id="addTestBatchDialog" style="display: none">
				<div class="modal-dialog modal-lg">

					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title" id="myModalLabel">添加量表</h4>
						</div>
						<div class="modal-body">
							<form class="form-horizontal" action=" " method="" novalidate
								id="addTestBatchScaleForm">
								<input id="batch_scale_id" name="batch_scale_id" value="-1"
									style="display: none">
								<input id="batch_id" name="batch_id" value="${test_batch.id }"
									style="display: none">
								<div class="control-group">
									<label class="col-lg-1 control-label" for="scale_id">量表</label>
									<div class="controls">
										<select id="scale_id" name="scale_id" class="form-control"
											onchange="selectScale(this)">
											<option value="0">请选择量表</option>
											<c:forEach var="item" items="${scale_list }">
												<option value="${item.id }">${item.title_cn }</option>
											</c:forEach>
										</select>
									</div>
								</div>
								<div class="control-group">
									<label class="control-label" for="test_interval">请输入测验用时</label>
									<div class="controls">
										<input id="test_interval" type="text" placeholder="测试用时（分）"
											name="test_interval">
									</div>
								</div>
								<div class="control-group">
									<label class="control-label" for="show_clock">测试计时</label>
									<div class="controls">
										<div class="span2">
											<label> <input id="show_clock" type="radio"
												name="show_clock" name="show_clock" value="0"> <span
												class="lbl">显示</span>
											</label>
										</div>
										<div class="span2">
											<label> <input id="show_clock" type="radio"
												name="show_clock" name="show_clock" value="1"> <span
												class="lbl">不显示</span>
											</label>
										</div>
									</div>
								</div>
								<div class="control-group">
									<label class="control-label" for="time_type">计时方式</label>
									<div class="controls">
										<div class="span2">
											<label> <input id="time_type" type="radio"
												name="time_type" value="0"> <span class="lbl">正向计时</span>
											</label>
										</div>
										<div class="span2">
											<label> <input id="time_type" type="radio"
												name="time_type" value="1"> <span class="lbl">不显示</span>
											</label>
										</div>
									</div>
								</div>
								<div class="control-group">
									<label class="control-label" for="is_show_scale_title">是否显示量表名称</label>
									<div class="controls">
										<div class="span2">
											<label> <input id="is_show_scale_title" type="radio"
												name="is_show_scale_title" name="show_clock" value="0">
												<span class="lbl">显示</span>
											</label>
										</div>
										<div class="span2">
											<label> <input id="is_show_scale_title" type="radio"
												name="is_show_scale_title" name="show_clock" value="1">
												<span class="lbl">不显示</span>
											</label>
										</div>
									</div>
								</div>
								<div class="control-group" style="display: none">
									<label class="control-label" for="norm_id">指定常模</label>
									<div class="controls">
										<select id="norm_id" name="norm_id">
											<option value="0">系统常模</option>
										</select>
									</div>
								</div>
								<div class="control-group">
									<label class="control-label" for="alert_id">设定预警</label>
									<div class="controls">
										<select id="alert_id" name="alert_id">
											<option value="0">无预警</option>
										</select>
									</div>
								</div>
							</form>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default cancle"
								data-dismiss="modal">取消</button>
							<button type="button" class="btn btn-primary"
								data-dismiss="modal" onclick="addTestBatchScale()">确定</button>
						</div>
					</div>
				</div>
			</div>
			<div class="row-fluid">
				<ul id="myTab" class="nav nav-tabs">
					<li class="active"><a href="#base_info" data-toggle="tab">指定实验基本信息</a>
					</li>
					<li><a href="#option" data-toggle="tab">选择被试用户</a></li>
					<li><a href="#scale" data-toggle="tab">选择量表</a></li>
				</ul>
				<div id="myTabContent" class="tab-content">
					<div class="tab-pane in active" id="base_info">
						<form class="form-horizontal" action=" " method="" novalidate
							id="addTestBatchScaleFrom">
							<input id="batch_id" name="batch_id" value="${test_batch.id }"
								style="display: none">
							<%-- <input id="batch_id" name="batch_id" value="${test_batch.id }">
						--%>
							<div class="control-group">
								<label class="control-label" for="form-field-1">输入测试的名称</label>
								<div class="controls">
									<input id="form-field-1" type="text" placeholder="输入测试的名称"
										name="title" value="${test_batch.title }">
								</div>
							</div>
							<!-- <div class="control-group">
						<label class="control-label" for="form-field-1">请输入测验用时</label>
						<div class="controls">
							<input id="form-field-1" type="text" placeholder="测试用时（分）"
										name="test_interval"></div>
					</div>
					<div class="control-group">
						<label class="control-label" for="show_clock">测试计时</label>
						<div class="controls">
							<div class="span2">
								<label>
									<input id="show_clock" type="radio"
											name="show_clock" name="show_clock" value="0">
									<span
											class="lbl">显示</span>
								</label>
							</div>
							<div class="span2">
								<label>
									<input id="show_clock" type="radio"
											name="show_clock" name="show_clock" value="1">
									<span
											class="lbl">不显示</span>
								</label>
							</div>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="show_clock">计时方式</label>
						<div class="controls">
							<div class="span2">
								<label>
									<input id="time_type" type="radio"
											name="time_type" value="0">
									<span class="lbl">正向计时</span>
								</label>
							</div>
							<div class="span2">
								<label>
									<input id="time_type" type="radio"
											name="time_type" value="1">
									<span class="lbl">不显示</span>
								</label>
							</div>
						</div>
					</div>
					-->
							<div class="control-group">
								<label class="control-label" for="avalid_start_time">测试有效期开始时间</label>
								<div class="controls">
									<input id="avalid_start_time" class="span2 date-picker"
										type="text" data-date-format="yyyy-mm-dd"
										name="avalid_time_start"
										value="${test_batch.avalid_time_start }"> <span
										class="add-on"> <i class="icon-calendar"></i>
									</span>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label" for="avalid_end_time">测试有效期结束时间</label>
								<div class="controls">
									<input id="avalid_end_time" class="span2 date-picker"
										type="text" data-date-format="yyyy-mm-dd"
										name="avalid_time_end" value="${test_batch.avalid_time_end }">
									<span class="add-on"> <i class="icon-calendar"></i>
									</span>
								</div>
							</div>
							<!-- <div class="control-group">
					<label class="control-label" for="id-date-picker-1">指定常模</label>
					<div class="controls">
						<select id="norm_id" name="norm_id">
							<option value="0">系统常模</option>
						</select>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label" for="id-date-picker-1">设定预警</label>
					<div class="controls">
						<select id="alert_id" name="alert_id">
							<option value="0">无预警</option>
						</select>
					</div>
				</div>
				-->
							<div class="form-actions">
								<button class="btn btn-info" type="submit" id="btn_confirm">
									<i class="icon-ok"></i> 确定
								</button>
								<button class="btn" type="reset" id="btn_reset">
									<i class="icon-undo"></i> 重置
								</button>
							</div>
						</form>
					</div>
					<div class="tab-pane" id="option">
						<div>
							<!-- <button type="button" class="btn btn-primary"
									data-toggle="modal" data-target=".bs-example-modal-md"
									style="margin-right: 50px; margin-top: 12px; float: right;">
				<span class="glyphicon glyphicon glyphicon-plus"
										aria-hidden="true"></span>
				添加
			</button>
			-->
							<div>
								<table class="table table-bordered" id="table_user_list">
									<tbody>
										<tr>
											<th class="center"><label> <input
													type="checkbox"> <span class="lbl"></span>
											</label></th>
											<th>姓名</th>
											<th>系</th>
											<th>班级</th>
										</tr>
										<c:forEach var="item" items="${user_list }">
											<tr>
												<td class="center" name="check"><label> <input
														type="checkbox" id="${item.id }"> <span
														class="lbl"></span>
												</label></td>
												<td>${item.name }</td>
												<td>${item.team_title }</td>
												<td>${item.sub_team_title }</td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="tab-pane" id="scale">
						<button class="btn btn-mini btn-primary" data-toggle="modal"
							data-target=".bs-example-modal-lg">
							<i class="icon-pencil"></i> 添加
						</button>
						<table id="table_scale_list"
							class="table table-striped table-bordered table-hover">
							<thead>
								<tr>
									<!-- <th class="center"><label> <input type="checkbox">
											<span class="lbl"></span>
									</label></th> -->
									<th>编号</th>
									<th>量表名称</th>
									<th>测试用时</th>
									<th>测试计时</th>
									<th>计时方式</th>
									<!-- <th>使用常模</th> -->
									<th>使用预警</th>
									<th>显示量表名称</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach var="item" items="${test_batch_scale_list }">
									<tr>
										<%-- <td class="center" name="check"><label> <input
												type="checkbox" id="${item.id }"> <span class="lbl"></span>
										</label></td> --%>
										<td>${item.code }</td>
										<td>${item.scale_title }</td>
										<td>${item.test_interval }分钟</td>
										<c:choose>
											<c:when test="${item.show_clock == 0 }">
												<td>显示</td>
											</c:when>
											<c:when test="${item.show_clock == 1 }">
												<td>不显示</td>
											</c:when>
										</c:choose>
										<c:choose>
											<c:when test="${item.time_type == 0 }">
												<td>正向计时</td>
											</c:when>
											<c:when test="${item.time_type == 1 }">
												<td>不显示</td>
											</c:when>
										</c:choose>
										<%-- <td>${item.norm_id }</td> --%>
										<!-- <td>${item.alert_id }</td> -->
										<c:choose>
											<c:when test="${item.alert_id == 0 }">
												<td>无预警</td>
											</c:when>
											<c:otherwise>
												<td>${item.alert_title }</td>
											</c:otherwise>
										</c:choose>
										<c:choose>
											<c:when test="${item.is_show_scale_title == 0 }">
												<td>显示</td>
											</c:when>
											<c:when test="${item.is_show_scale_title == 1 }">
												<td>不显示</td>
											</c:when>
										</c:choose>
										<td>
											<div class="btn-group btn-group-xs" role="group"
												aria-label="...">
												<button id="${item.id }" type="button" class="btn btn-small"
													onclick='editTestBatchScale("${item.id}","${item.scale_id }", "${item.test_interval }", "${item.show_clock }", "${item.time_type }","${item.alert_id }","${item.is_show_scale_title }")'>修改</button>
												<button id="${item.id }" type="button" class="btn btn-small" onclick='deleteBatchScale("${item.id }")'>删除</button>
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
	<script type="text/javascript">
		$('.date-picker').datepicker({
			format : 'yyyy-mm-dd',
			language : 'en',
			pickDate : true,
			pickTime : true,
			hourStep : 1,
			minuteStep : 15,
			secondStep : 30,
			inputMask : true
		});
		$('#timepicker1').timepicker({
			minuteStep : 1,
			showSeconds : true,
			showMeridian : false
		});

		/* $('#id-date-range-picker-1').daterangepicker(

		); */

		$('table th input:checkbox').on(
				'click',
				function() {
					var that = this;
					$(this).closest('table').find(
							'tr > td:first-child input:checkbox').each(
							function() {
								this.checked = that.checked;
								$(this).closest('tr').toggleClass('selected');
							});

				});
		$('#btn_confirm')
				.on(
						'click',
						function() {
							// 基本信息
							var _data = $('#addTestBatchScaleFrom').serialize();
							var _userList = [];
							// 所选用户
							$("#table_user_list").find(
									'tr > td:first-child input:checkbox').each(
									function() {
										if ($(this).is(':checked')) {
											_userList.push($(this).attr('id'));
										}
									});

							var _scaleList = [];
							// 所选量表
							$("#table_scale_list").find(
									'tr > td:first-child input:checkbox')
									.each(
											function() {
												if ($(this).is(':checked')) {
													_scaleList.push($(this)
															.attr('id'));
												}
											});
							_data += "&select_user_list="
									+ _userList.toString();
							_data += "&select_scale_list="
									+ _scaleList.toString();
							/* alert(_data); */
							$
									.ajax({
										cache : true,
										type : 'POST',
										url : '${basePath}/selectTestAction/updateTestBatchDetail',
										data : _data,// 
										async : false,
										error : function(request) {

										},
										success : function(data) {
											if (data.success) {
												windowOpen('${basePath}/selectTestAction/getSelectTest');
											} else {
												/* alert(data.msg); */
											}
										}
									});
						});
		function addTestBatchScale() {
			$.ajax({
				cache : true,
				type : "POST",
				url : '${basePath}/selectTestAction/addTestBatchScale',
				data : $('#addTestBatchScaleForm').serialize(),
				async : false,
				error : function(request) {
					window.wxc.xcConfirm("系统出错了!",
							window.wxc.xcConfirm.typeEnum.error);
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
	</script>
</body>
</html>