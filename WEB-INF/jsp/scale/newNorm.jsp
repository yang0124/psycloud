<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="description" content="Common UI Features & Elements" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>添加常摸</title>
	<%@include file="/common/base.jsp"%>
	<script type="text/javascript">
	function addNorm() {
		$.ajax({
			cache : true,
			type : "POST",
			url : '${basePath}/scaleAction/insertNorm',
			data : $('#addNormFrom').serialize(),
			async : false,
			error : function(request) {
				window.wxc.xcConfirm("系统出错了!",
						window.wxc.xcConfirm.typeEnum.error);
			},
			success : function(data) {
				if (data.success) {
					windowOpen('${basePath}/scaleAction/scaleDetail?id=${scale_id }')
				} else {
					window.wxc.xcConfirm(data.msg,
							window.wxc.xcConfirm.typeEnum.error);
				}
			}
		});
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

	<div id="main-content" class="clearfix" style="padding: 20px">
		<div id="page-content" class="clearfix">
			<div class="page-header position-relative">
				<h1>量表详情</h1>
			</div>

			<div class="row-fluid">
				<form class="form-horizontal" action=" " method="" novalidate
					id="addNormFrom">
					<input type="text" id="scale_id" name="scale_id"
						style="display: none" class="form-control"
						value="${scale_id }">
					<div class="control-group">
						<label class="control-label">因子：</label>
						<div class="controls">
							<select id="norm_factor" name="norm_factor">
								<option value="-1"></option>
								<c:forEach var="factor_item" items="${factor_list }">
									<option value="${factor_item.id }">${factor_item.factor_title }</option>
								</c:forEach>
							</select>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">团体：</label>
						<div class="controls">
							<select id="norm_group" name="norm_group">
								<option value="-1"></option>
								<c:forEach var="group_item" items="${group_list }">
									<option value="${group_item.id }">${group_item.tg_title }</option>
								</c:forEach>
							</select>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">常摸：</label>
						<div class="controls">
							<input type="text" id="norm_value" name="norm_value"
								class="form-control"></div>
					</div>
					<div class="form-actions">
						<button type="button" class="btn btn-default cancle"
							data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal"
							onclick="addNorm()">确定</button>
					</div>
				</form>
			</div>
		</div>
	</div>

</body>
</html>