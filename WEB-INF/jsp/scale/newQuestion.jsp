
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="Common UI Features & Elements" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>添加试题</title>
<%@include file="/common/base.jsp"%>
<script type="text/javascript" src="${basePath }/js/ajaxfileupload.js"></script>
<script type="text/javascript">
	function addOption() {
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/questionAction/addOption',
			data : $('#addOptionForm').serialize(),// 
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
	function saveQuestion() {
		/* alert($('#addQuestionForm').serialize()); */
		$
				.ajax({
					cache : true,
					type : "POST",
					url : '${basePath}/questionAction/saveQuestion',
					data : $('#addQuestionForm').serialize(),// 
					async : false,
					error : function(request) {
						window.wxc.xcConfirm("系统出错了!",
								window.wxc.xcConfirm.typeEnum.error);
					},
					success : function(data) {
						if (data.success) {
							window.location.href = '${basePath}/scaleAction/scaleDetail?id='
									+ data.resultObject;
						}
					}
				});
	}

	function editOption(qid, code, content, value, jumpCode) {
		$('#option_id').val(qid);
		$('#option_code').val(code);
		$('#option_value').val(value);
		$('#option_jump_question').val(jumpCode);
		$('#option_content').val(content);
		
		$('#addOptionModel').modal('show');
	}
	
	function deleteOption(optionId){
		if (confirm("是否要删除该选择支？")) {
			var _data = {
					"option_id":optionId
			};
			$.ajax({
				cache : true,
				type : "POST",
				url : '${basePath}/questionAction/deleteOption',
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
					<c:choose>
						<c:when test="${question_info == null }">
							<h1>添加题目</h1>
						</c:when>
						<c:otherwise>
							<h1>编辑题目</h1>
						</c:otherwise>
					</c:choose>
				</div>
				<div class="row-fluid">
					<div class="modal fade bs-example-modal-md" tabindex="-1"
						role="dialog" aria-labelledby="mySmallModalLabel"
						id="addOptionModel">
						<div class="modal-dialog modal-md">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
									<h4 class="modal-title" id="myModalLabel">添加选择支</h4>
								</div>
								<div class="modal-body">
									<form class="form-horizontal" action=" " method="" novalidate
										id="addOptionForm">
										<c:choose>
											<c:when test="${scale_id == '' }">
												<input name="scale_id" value="${scale_id}"
													style="display: none;" />
											</c:when>
											<c:otherwise>
												<input name="scale_id" value="${question_info.scale_id}"
													style="display: none;" />
											</c:otherwise>
										</c:choose>
										<input id="question_id" name="question_id" value="${question_info.id }"
											style="display: none;"></input>
										<input id="option_id" name="option_id" value="-1"
											style="display: none;"></input>
										<div class="control-group">
											<label class="control-label" for="option_code">序号</label>
											<div class="controls">
												<input class="form-control" id="option_code" name="option_code" type="text"
													placeholder="" />
											</div>
										</div>
										<div class="control-group">
											<label class="control-label" for="option_value">计分</label>
											<div class="controls">
												<input class="form-control" id="option_value" name="option_value" type="text"
													placeholder="" />
											</div>
										</div>
										<div class="control-group">
											<label class="control-label" for="option_jump_question">跳转</label>
											<div class="controls">
												<select id="option_jump_question_id" name="option_jump_question_id" class="form-control">
													<option value="-1">下一题</option>
													<c:forEach var="question_item" items="${question_list }">
														<option value="${question_item.question_id }">第${question_item.question_code }题</option>
													</c:forEach>
													<option value="-2">至结束</option>
												</select>
											</div>
										</div>
										<div class="control-group">
											<label class="control-label" for="option_content">选择支内容</label>
											<div class="controls">
												<textarea id="option_content" name="option_content" class="form-control"
													rows="3"></textarea>
											</div>
										</div>
									</form>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-small cancle"
										data-dismiss="modal">取消</button>
									<button type="button" class="btn btn-small btn-primary"
										data-dismiss="modal" onclick="addOption()">确定</button>
								</div>
							</div>
						</div>
					</div>
					<ul id="myTab" class="nav nav-tabs">
						<li class="active"><a href="#base_info" data-toggle="tab">基本信息</a>
						</li>
						<li><a href="#option" data-toggle="tab">选择支</a></li>
					</ul>
					<div id="myTabContent" class="tab-content">
						<div class="tab-pane in active" id="base_info">
							<form class="form-horizontal" action=" " method="" novalidate
								id="addQuestionForm">
								<c:choose>
									<c:when test="${question_info == null }">
										<input name="scale_id" style="display: none"
											value="${scale_id}"></input>
									</c:when>
									<c:otherwise>
										<input name="scale_id" style="display: none"
											value="${question_info.scale_id}"></input>
									</c:otherwise>
								</c:choose>

								<input style="display: none" class="form-control" name="id"
									type="text" placeholder="" value="${question_info.id }" />
								<div class="control-group">
									<label class="control-label" for="question_id">序号</label>
									<div class="controls">
										<input class="form-control" name="question_id" type="text"
											placeholder="" value="${question_info.question_id }" />
									</div>
								</div>
								<div class="control-group">
									<label class="control-label" for="scale_code">题目编号</label>
									<div class="controls">
										<input class="form-control" name="question_code" type="text"
											placeholder="" value="${question_info.question_code }" />
									</div>
								</div>
								<div class="control-group">
									<label class="control-label" for="scale_type">试题类型</label>
									<div class="controls">
										<select name="question_type" class="form-control">
											<c:choose>
												<c:when test="${question_info.question_type == 0 }">
													<option value="0" selected="selected">单选题</option>
													<option value="1">多选题</option>
													<option value="2">填空题</option>
													<option value="3">指导语</option>
												</c:when>
												<c:when test="${question_info.question_type == 1 }">
													<option value="0">单选题</option>
													<option value="1" selected="selected">多选题</option>
													<option value="2">填空题</option>
													<option value="3">指导语</option>
												</c:when>
												<c:when test="${question_info.question_type == 2 }">
													<option value="0">单选题</option>
													<option value="1">多选题</option>
													<option value="2" selected="selected">填空题</option>
													<option value="3">指导语</option>
												</c:when>
												<c:when test="${question_info.question_type == 3 }">
													<option value="0">单选题</option>
													<option value="1">多选题</option>
													<option value="2">填空题</option>
													<option value="3" selected="selected">指导语</option>
												</c:when>
												<c:otherwise>
													<option value="0">单选题</option>
													<option value="1">多选题</option>
													<option value="2">填空题</option>
													<option value="3">指导语</option>
												</c:otherwise>
											</c:choose>
										</select>
									</div>
								</div>
								<div class="control-group">
									<label class="control-label" for="has_image">是否图片</label>
									<div class="controls">
										<select name="has_image" class="form-control">
											<c:choose>
												<c:when test="${question_info.has_image == 0 }">
													<option value="0" selected="selected">否</option>
													<option value="1">是</option>
												</c:when>
												<c:when test="${question_info.has_image == 1 }">
													<option value="0">否</option>
													<option value="1" selected="selected">是</option>
												</c:when>
												<c:otherwise>
													<option value="0">否</option>
													<option value="1">是</option>
												</c:otherwise>
											</c:choose>
										</select>
									</div>
								</div>

								<div class="control-group">
									<label class="control-label" for="test_time_cost">题干</label>
									<div class="controls">
										<textarea name="question_content"
											class="form-control col-lg-12" rows="3">${question_info.question_content }</textarea>
									</div>
								</div>
								<div class="form-actions">
									<button type="button" class="btn btn-default cancle"
										data-dismiss="modal">取消</button>
									<button type="button" class="btn btn-primary"
										data-dismiss="modal" onclick="saveQuestion()">保存</button>
								</div>
							</form>
						</div>
						<div class="tab-pane" id="option">
							<div>
								<button class="btn btn-mini btn-primary" data-toggle="modal"
									data-target=".bs-example-modal-md">
									<i class="icon-pencil"></i> 添加
								</button>

								<div>
									<table class="table table-bordered">
										<tbody>
											<tr>
												<th>序号</th>
												<th>选择支内容</th>
												<th>计分</th>
												<th>跳转</th>
												<th>操作</th>
											</tr>
											<c:forEach var="option_item" items="${option_list }">
												<tr>
													<td>${option_item.option_code }</td>
													<td>${option_item.option_content }</td>
													<td>${option_item.option_value }</td>
													<td><c:choose>
															<c:when
																test="${option_item.option_jump_question_id == -1 }">下一题</c:when>
															<c:when
																test="${option_item.option_jump_question_id == -2 }">结束</c:when>
															<c:otherwise>第${option_item.option_jump_question_id}题</c:otherwise>
														</c:choose></td>
													<td>
														<div class="btn-group btn-group-xs" role="group"
															aria-label="...">
															<button id="${option_item.id }" type="button"
																option_code="" onclick='editOption("${option_item.id }","${option_item.option_code }","${option_item.option_content }","${option_item.option_value }","${option_item.option_jump_question_id}")'
																class="btn btn-small">修改</button>
															<button id="${option_item.id }" type="button"
																class="btn btn-small" onclick='deleteOption("${option_item.id }")'>删除</button>
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
			</div>
		</div>
</body>
</html>