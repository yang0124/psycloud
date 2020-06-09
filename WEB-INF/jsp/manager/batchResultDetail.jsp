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

	<script src="${basePath }/front/js/echarts/echarts.min.js"></script>
	<script type="text/javascript">
	// function addAlertLevel() {
	// 	$.ajax({
	// 		cache : true,
	// 		type : "POST",
	// 		url : '${basePath}/scaleAlertAction/addAlertLevel',
	// 		data : $('#addAlertLevelForm').serialize(),
	// 		async : false,
	// 		error : function(request) {
	// 			 window.wxc.xcConfirm("系统出错了!",
	// 					window.wxc.xcConfirm.typeEnum.error); 
	// 		},
	// 		success : function(data) {
	// 			if (data.success) {
	// 				window.location.reload();
	// 			} else {
	// 				window.wxc.xcConfirm(data.msg,
	// 						window.wxc.xcConfirm.typeEnum.error);
	// 			}
	// 		}
	// 	});
	// }
	
	$(function(){
		$('#simple-colorpicker-1').ace_colorpicker();
	});
</script>
	<title>结果报告</title>
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
						<li class="active">
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
						<li>
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
			<h1>${test_batch_info.title }</h1>
		</div>
		<div class="row-fluid">
			<ul id="myTab" class="nav nav-tabs">
				<li class="active">
					<a href="#base_info" data-toggle="tab">概要信息</a>
				</li>
				<li>
					<a href="#scale" data-toggle="tab">量表信息</a>
				</li>
				<li>
					<a href="#user" data-toggle="tab">测量者信息</a>
				</li>
			</ul>
			<div id="myTabContent" class="tab-content">
				<div class="tab-pane in active" id="base_info">
					<div id="chart_batch_test_status" style="width: 100%; height: 300px"></div>
					<div id="chart_batch_test_process" style="width: 100%; height: 300px"></div>
					<div id="chart_batch_alert" style="width: 100%; height: 300px"></div>
				</div>
				<div class="tab-pane" id="scale">
					<table id="table_scale_list"
							class="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th>编号</th>
								<th>量表名称</th>
								<th>测试用时</th>
								<th>测试计时</th>
								<th>计时方式</th>
								<!-- <th>使用常模</th> -->
								<th>使用预警</th>
								<th>显示量表名称</th>
								<th>测验进展</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="item" items="${batch_scale_list }">
								<tr>
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
									<!-- <td>${item.norm_id }</td> -->
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
										<div class="progress" data-percent="<fmt:formatNumber type="number" value="${item.finished_user_count/(item.user_count)*100 }" maxFractionDigits="2"/>%">
											<div class="bar" style="width:${item.finished_user_count/(item.user_count)*100 }%;"></div>
										</div>
									</td>
									<td>
										<div class="btn-group btn-group-xs" role="group"
												aria-label="...">
											<button id="${item.id }" type="button" class="btn btn-small"
													onclick='windowOpen("${basePath}/resultAnalysisAction/getBatchScaleUserResult?id=${item.batch_id }&scale_id=${item.scale_id }")'>查看</button>
										</div>
									</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
				<div class="tab-pane" id="user">
					<table id="table_scale_list"
							class="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th>姓名</th>
								<th>学院</th>
								<th>系</th>
								<th>班级</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="item" items="${batch_user_list }">
								<tr>
									<td>${item.name }</td>
									<td>${item.sub_org_title }</td>
									<td>${item.team_title }</td>
									<td>${item.sub_team_title }</td>
									<td>
										<div class="btn-group btn-group-xs" role="group"
												aria-label="...">
											<button id="${item.id }" type="button" class="btn btn-small"
													onclick='getBatchUserResult("${batch_id}","${item.id}")'>查看</button>
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
		// 基于准备好的dom，初始化echarts实例
		var myChartBatchStatus = echarts.init(document.getElementById('chart_batch_test_status'));
		// 预警分布
		var myChartBatchAlert = echarts.init(document.getElementById('chart_batch_alert'));

		function showChartPieBatchStatus(title, data) {
			// 指定图表的配置项和数据
			var option = {
					title : {
				        text: '被测性别分布',
				        subtext: '男女比例',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: title
				    },
				    series : [
				        {
				            name: '被测人员性别',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:data,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChartBatchStatus.setOption(option);
		}
		
		function showChartPieBatchProcess(title, data) {
			// 指定图表的配置项和数据
			var option = {
					title : {
				        text: '被测性别分布',
				        subtext: '男女比例',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: title
				    },
				    series : [
				        {
				            name: '被测人员性别',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:data,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChartBatchStatus.setOption(option);
		}

		function showChartPieAlert(title, data, alertTitle) {
			// 指定图表的配置项和数据
			var option = {
					title : {
				        text: '预警分布',
				        subtext: alertTitle,
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: title
				    },
				    series : [
				        {
				            name: '预警分',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:data,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChartBatchAlert.setOption(option);
		}

		window.onload = function() {
			var _title = [];
			var _data = [];
			
			// 人口信息分布
		<c:forEach items="${chart_gender_data.title}" var="u">_title.push("${u}");</c:forEach>

		<c:forEach items="${chart_gender_data.data}" var="u">
			var _obj = {};
			_obj['name'] = '${u.name}';
			_obj['value'] = '${u.value}';
			_data.push(_obj);
		</c:forEach>
		
			var _processTitle = ['已完成','未完成'];
			
			showChartPieBatchStatus(_title, _data);
			
			// 预警信息分布
		}

		function getBatchUserResult(batchId, userId){
			// alert("batch_id="+batchId+",userId="+userId);
			// var _data = {
			// 	"batch_id" : batchId,
			// 	"user_id" : userId
			// };
			// alert(_data);
			windowOpen('${basePath}/resultAnalysisAction/getBatchUserResult?batch_id='+batchId+'&user_id='+userId);
			// $.ajax({
			// 	cache : true,
			// 	type : "POST",
			// 	url : '${basePath}/resultAnalysisAction/getBatchUserResult',
			// 	data : _data, 
			// 	async : false,
			// 	error : function(request) {
			// 		 window.wxc.xcConfirm("系统出错了!",
			// 				window.wxc.xcConfirm.typeEnum.error); 
			// 	},
			// 	success : function(data) {
			// 		if (data.success) {
			// 			window.location.reload();
			// 		} else {
			// 			window.wxc.xcConfirm(data.msg,window.wxc.xcConfirm.typeEnum.error);
			// 		}
			// 	}
			// });
		}
	</script>
</body>
</html>