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
	<link rel="stylesheet"
	href="${basePath}/front/css/ace-responsive.min.css" />
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
	<script type="text/javascript"
	src="${basePath}/front/js/bootstrap-colorpicker.min.js"></script>

	<script src="${basePath }/front/js/echarts/echarts.min.js"></script>
	<title>量表测量结果</title>
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
	<div id="main-content" class="clearfix" style="padding: 20px">
		<div id="page-content" class="clearfix">
			<div class="page-header position-relative">
				<h1>${scale_info.title_cn }(${scale_info.title_en})-测量结果</h1>
			</div>
			<div id="page-content" class="clearfix">
				<div class="row-fluid">
					<div id="chart_batch_scale_factor_avg_score" style="width: 100%; height: 300px"></div>
				</div>
				<div class="row-fluid">
					<table id="table_scale_list"
						class="table table-striped table-bordered table-hover">
						<thead>
							<tr>
								<th style="width: 20%; height: 44px; text-overflow: ellipsis;">姓名</th>
								<th style="width: 10%; height: 44px; text-overflow: ellipsis;">学院</th>
								<th style="width: 10%; height: 44px; text-overflow: ellipsis;">系</th>
								<th style="width: 10%; height: 44px; text-overflow: ellipsis;">班级</th>
								<th style="width: 20%; height: 44px; text-overflow: ellipsis;">测试时间</th>
								<th style="width: 20%; height: 44px; text-overflow: ellipsis;">预警等级</th>
								<th style="width: 20%; height: 44px; text-overflow: ellipsis;">操作</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="item" items="${batch_test_scale_user_list }">
								<tr>
									<td>${item.name }</td>
									<td>${item.sub_org_title }</td>
									<td>${item.team_title }</td>
									<td>${item.sub_team_title }</td>
									<td>${item.start_time }</td>
									<td>
										<div class="btn-group">
											<c:forEach var="level" items="${item.alert_level_array}">
												<button class="btn-mini" style="background-color: ${level.alert_level_color}">${level.alert_level_title}</button>
											</c:forEach>
										</div>
									</td>
									<td>
										<div class="btn-group btn-group-xs" role="group"
											aria-label="...">
											<button id="${item.id }" type="button" class="btn btn-small"
												onclick='windowOpen("${basePath}/testAction/testRecordDetail?test_id=${item.test_id }&scale_id=${item.scale_id }&test_time=${item.start_time }&user_id=${item.user_id}","_blank")'>查看</button>
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
	<script type="text/javascript">
		var myChartBatchScaleAvg = echarts.init(document.getElementById('chart_batch_scale_factor_avg_score'));

		function showChartLine(title, data) {
			var option = {
				title : {
					text : '因子平均分折线图'
				},
				tooltip : {
					trigger : 'axis'
				},
				legend : {
					data : [ '因子平均分' ]
				},
				grid : {
					left : '3%',
					right : '4%',
					bottom : '3%',
					containLabel : true
				},
				toolbox : {
					feature : {
						saveAsImage : {}
					}
				},
				xAxis : {
					type : 'category',
					boundaryGap : false,
					data : title
				},
				yAxis : {
					type : 'value'
				},
				series : [ {
					name : '因子分',
					type : 'line',
					stack : '分数',
					data : data
				} ]
			};
			myChartBatchScaleAvg.setOption(option);
		}

		function showChartBar(title, data) {
			// 指定图表的配置项和数据
			var option = {
				title : {
					text : '因子平均分柱状图'
				},
				tooltip : {},
				legend : {
					data : [ '因子平均分' ]
				},
				xAxis : {
					data : title
				},
				yAxis : {},
				series : [ {
					name : '因子分',
					type : 'bar',
					data : data
				} ]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChartBatchScaleAvg.setOption(option);
		}

		window.onload = function() {
			var _title = [];
			var _data = [];
			<c:forEach items="${batch_test_factor_avg_title}" var="u">_title.push("${u}");</c:forEach>

			<c:forEach items="${batch_test_factor_avg_data}" var="u">_data.push("${u}");</c:forEach>
			// showChartLine(_title, _data);
			showChartBar(_title, _data);
		}
	</script>
</body>
</html>