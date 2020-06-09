<%@ page pageEncoding="UTF-8" %>
<!doctype html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="/common/base.jsp"%>
<title>列表</title>
<%@include file="/include/head.jsp"%>
<script src="${basePath}/js/jqueryAlert/jquery.js" type="text/javascript"></script>
<script src="${basePath}/js/jqueryAlert/jquery.ui.draggable.js" type="text/javascript"></script>
<!-- Core files -->
<script src="${basePath}/js/jqueryAlert/jquery.alerts.js" type="text/javascript"></script>
<link href="${basePath}/js/jqueryAlert/jquery.alerts.css" rel="stylesheet" type="text/css" media="screen" />
</head>
<body>
	请登录
<script type="text/javascript">
if(window.top.location!=self.location)
{
	window.top.location=self.location;
}
var type='${sessionScope.logoutType}';
if(type=='0'||type==''||type=='undefined'){
jAlert("登录超时,请重新登录","友情提醒",function(){
	location.href="${pageContext.request.contextPath}/login.html";
});
}
else if(type=='-1'){
	jAlert("您的帐号在其它地方登录导致被强制踢出","友情提醒",function(){
		location.href="${pageContext.request.contextPath}/login.html";
	});
}
else if(type=='-2'){
	jAlert("您的帐号权限发生变化,请重新登录","友情提醒",function(){
		location.href="${pageContext.request.contextPath}/login.html";
	});
}
else{
	jAlert("您的帐号被停用导致被系统强制踢出","友情提醒",function(){
		location.href="${pageContext.request.contextPath}/login.html";
	});
}

</script>
</body>
</html>