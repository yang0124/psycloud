<%@ page pageEncoding="UTF-8" %>
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <%@include file="/common/base.jsp"%>
	
	<%@include file="/common/easyui.jsp"%>
	
  <link rel = "stylesheet" href = "${basePath}/pc/style/reset.css" />
  <link rel = "stylesheet" href = "${basePath}/pc/style/home.css" />
  <link rel = "stylesheet" href = "${basePath}/pc/style/prop.css" />
  <link rel = "stylesheet" href = "${basePath}/pc/style/find.css" />
  <script src = "${basePath}/pc/script/service/context.js"></script>
<script type="text/javascript" src="${basePath}/js/jquery/jquery.md5.js"></script>
	
    <title>智能医院</title>
<script type="text/javascript">
 	$(document).ready(function(){
 		$.ajax({
 			url: "${basePath}/loginAction/checkSession",
 			success: function(data, textStatus){
 		    	if(data.success){
 		    			window.top.location.href="${basePath}/homeAction/home";
 		    	}
 			}
 		});
 		var account = getCookie("account");
 		var password = getCookie("password");
 		var remember = getCookie("remember");
 		
 		$("#account").val(account);
 		$("#password").val(password);
 		$("#remember").attr("checked",remember);
 		$('#account').focus();
 		
 		$("#submitBtn").click(function(){
 			var remember = $("#remember").attr("checked");
 			var account = $("#account").val();
 			var password = $("#password").val();
 			if(account=='' || password==''){
 				alert("请输入用户名和密码");
 				return false;
 			}
 			
 			var prms = {};
 			prms['account'] = $("#account").val();
 			//var password_md5 = $.md5(password);
 			prms['password'] = password;  //password_md5;
 			prms['valiCode'] = $("#valiCode").val();
 			$.ajax({
 				type : 'post',
 				url : "${basePath}/loginAction/login",
 				data : prms,
 				dataType : 'json',
 				beforeSend : function() {
 					$("#submitBtn").attr("disabled","disabled");
 				},
 				success : function (data, textStatus){
 					if(data.success){
 						if(remember=="checked"){
 							setCookie("account", account);
 							setCookie("password", password);
 							setCookie("remember", remember);
 						}else{
 							delCookie("account");
 							delCookie("password");
 							delCookie("remember");
 						}
 							window.top.location.href = "${basePath}/homeAction/home";
 					}else{
 						if(data.msg=="-1"){
 							window.top.location="${basePath}/loginAction/updatePassword";	
 						}else{
 							if(data.msg=="relogin"){
 								$.messager.confirm('登录提醒', "该用户刚刚在"+data.resultObject.lastLoginTime+", "+data.resultObject.loginIp+"登录,是否要强制登录?", function(r){
 									if (r){
 										$.post("${basePath}/loginAction/relogin",function(reData){
 											if(reData.success){
 												if(remember=="checked"){
 													setCookie("account", account);
 													setCookie("password", password);
 													setCookie("remember", remember);
 												}else{
 													delCookie("account");
 													delCookie("password");
 													delCookie("remember");
 												}
 												
 													window.top.location.href = "${basePath}/homeAction/home";
 											}
 											else{
 												alert(reData.msg);
 												reloadCode();
 											}
 										});
 									}else{
 										reloadCode();
 									}
 								});
 							}else{
 								alert(data.msg);
 								reloadCode();
 							}
 						}
 					}
 					$("#submitBtn").removeAttr("disabled");
 				},
 				complete : function() {
 					$("#submitBtn").removeAttr("disabled");
 				}
 			});
 			return false;
 		});
 	});
 	
 	function keypress(e,inp){
 		e = window.event?window.event:e;
 		if(typeof(e)=='undefined'){}else{
	 		if(e.keyCode==13){
	 			if(inp==''){
	 				login();
	 			}else{
	 				$("#"+inp).focus();
	 			}
	 		}
 		}
 	}
 	
 	function reloadCode() { 
 		$("#vcodeImg").attr("src","${basePath}/validateCode?" + Math.random());
		$("#valiCode").focus();
	}
	
	//写cookies函数
	//两个参数，一个是cookie的名称，一个是值
	function setCookie(name,value){
	    var Days = 30; //此 cookie 将被保存 30 天
	    var exp  = new Date();    //new Date("December 31, 9998");
	    exp.setTime(exp.getTime() + Days*24*60*60*1000);
	    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	}
	 
	//读取cookies函数
	function getCookie(name){
	    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	    if(arr != null) return unescape(arr[2]); return null;
	}
	 
	//删除cookie
	function delCookie(name){
	    var exp = new Date();
	    exp.setTime(exp.getTime() - 1);
	    var cval=getCookie(name);
	    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	}
</script> 
</head>
<body>
<form>
					<div class = "find_password">
						<span class="title">
							用户登录
						</span>						
						<span class = "account">
							<i class = "ac_1"></i>
							<input type="text" id="account" value="" onkeypress="keypress(event,'password');" class = "account_input"/>
						</span>
						<span class = "account">
							<i class = "pass_1"></i>
							<input id="password" type="password" onkeypress="keypress(event,'');" value="" class = "account_input"/>
						</span>
						<span class = "fsz_14">
							<input type = "checkbox" id="remember" name="remember" class = "remember mg_L30"/>&nbsp;记住密码
<!-- 							<a href = "找回密码.html" class = "find mg_R30">找回密码</a> -->
						</span>
						<span>
							<input type="submit" id="submitBtn" class="btn green pd15230 fsz_20 mg_L25" value="确定" />
						</span>
					</div>
				</form>
</body>
</html>