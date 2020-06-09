<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="/common/base.jsp"%>

<title>列表</title>
<%@include file="/include/head.jsp"%>
    <script type="text/javascript" src="${basePath}/js/jquery.alert.js"></script>
</head>
<body>
	<div id="main">
		<%@include file="/include/frontLeft.jsp"%>
		<div id="content">
			<!-- 内容区域(start) -->
			<%@include file="/include/frontHead.jsp"%>
<script type="text/javascript">
	if(window.top.location!=self.location){
		window.top.location=self.location;
	}
	var type='${sessionScope.logoutType}';
	if(type=='0'||type==''||type=='undefined'){
		//登录超时,请重新登录
		jAlert("登录超时,请重新登录",function(){
			location.href="${pageContext.request.contextPath}/adminLogin";
		});
	}else if(type=='-1'){
		//您的帐号在其它地方登录导致被强制踢出
		jAlert("您的帐号在其它地方登录导致被强制踢出","友情提示",function(){
			location.href="${pageContext.request.contextPath}/adminLogin";
		});
	}else if(type=='-2'){
		//您的帐号权限发生变化,请重新登录
		jAlert("您的帐号权限发生变化,请重新登录","友情提示",function(){
			location.href="${pageContext.request.contextPath}/adminLogin";
		});
	}else{
		//您的帐号被停用导致被系统强制踢出
		jAlert("您的帐号被停用导致被系统强制踢出","友情提示",function(){
			location.href="${pageContext.request.contextPath}/adminLogin";
		});
	}
</script>
</div>
</div>

</body>
</html>