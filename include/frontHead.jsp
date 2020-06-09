<%@ page pageEncoding="UTF-8" %>
<script type="text/javascript">
	/* $(function() {
		$.ajax({url: "${basePath}/loginAction/checkSession",
			success: function(data, textStatus){
		    	if(!data.success){
		    		window.top.location.href="${basePath}/timeout.jsp";
		    	}
		    }
		});
		$(document).ajaxStart(function(){
			$.ajax({url: "${basePath}/loginAction/checkSession",
				success: function(data, textStatus){
			    	if(!data.success){
			    		window.top.location.href="${basePath}/timeout.jsp";
					}
				}
			});
		});
	}) */
	function logout(){
		if(confirm('您确定要退出系统吗?')){
			$.ajax({
				url: "${basePath}/loginAction/logout",
				success: function(data, textStatus){
					window.top.location.href= "${basePath}/";
				}
			});	
		}
		return false;
	}
</script>


		<div class = "right_area"> <!-- 右部区域 -->
			<div id = "user_info"> <!-- 用户信息列表 -->
				<img id = "user_header" src = "${basePath}/pc/images/home/user_header.png" /> <!-- 网站logo -->
				<span id = "nick_name">欢迎您：${userInfo.name}</span>
				<div id = "menu">
					<a href = "javascript:logout()" >注销账号</a>
					<a href =  "${basePath}/loginAction/updatePassword" >修改密码</a>
				</div>
			</div>
		</div>