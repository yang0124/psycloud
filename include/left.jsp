<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//Dtd XHTML 1.0 Transitional//EN" "http://www.w3.org/tr/xhtml1/Dtd/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Mandaring</title>
<%@include file="/common/base.jsp"%>
<link rel="stylesheet" type="text/css" href="${basePath}/css/admin.css" />
<script language=javascript>
	function expand(el)
	{
		childObj = document.getElementById("child" + el);

		if (childObj.style.display == 'none')
		{
			childObj.style.display = 'block';
		}
		else
		{
			childObj.style.display = 'none';
		}
		return;
	}
	
	$(function(){
		var leftMenu = $("#leftMenu").height();
		var height = $(document).height();
		if(leftMenu<height){
			$("#leftMenu").css("height",height);
		}
	});
</script>
</head>
<body>
<table id="leftMenu" height="100%" cellSpacing="0" cellPadding="0" width="170"  background="images/menu_bg.jpg" border="0">
  	<tr>
    	<td valign="top" valign="middle">
      		<table cellSpacing="0" cellPadding="0" width="100%" border="0">
        		<tr>
          			<td height="10"></td>
          		</tr>
          	</table>
          	<table cellSpacing="0" cellPadding="0" width="150" border="0" style="margin-left:10px;">
        		<tr height="22">
          			<td style="padding-left: 30px" background="images/menu_bt.jpg">
          				<a class="menuParent" href="${basePath}/orderAction/orderList" target="content">订单管理</a>
          			</td>
          		</tr>
        		<tr height="4">
          			<td></td>
          		</tr>
          	</table>
      		<table cellSpacing="0" cellPadding="0" width="100%" border="0">
        		<tr>
          			<td height="10"></td>
          		</tr>
          	</table>
          	<table cellSpacing="0" cellPadding="0" width="150" border="0" style="margin-left:10px;">
        		<tr height="22">
          			<td style="padding-left: 30px" background="images/menu_bt.jpg">
          				<a class="menuParent" href="${basePath}/teacherAction/teacherList" target="content">教师管理</a>
          			</td>
          		</tr>
        		<tr height="4">
          			<td></td>
          		</tr>
          	</table>
      		<table cellSpacing="0" cellPadding="0" width="100%" border="0">
        		<tr>
          			<td height="10"></td>
          		</tr>
          	</table>
          	<table cellSpacing="0" cellPadding="0" width="150" border="0" style="margin-left:10px;">
        		<tr height="22">
          			<td style="padding-left: 30px" background="images/menu_bt.jpg">
          				<a class="menuParent" href="${basePath}/studentAction/studentList" target="content">学生管理</a>
          			</td>
          		</tr>
        		<tr height="4">
          			<td></td>
          		</tr>
          	</table>
      		<table cellSpacing="0" cellPadding="0" width="100%" border="0">
        		<tr>
          			<td height="10"></td>
          		</tr>
          	</table>
          	<table cellSpacing="0" cellPadding="0" width="150" border="0" style="margin-left:10px;">
        		<tr height="22">
          			<td style="padding-left: 30px" background="images/menu_bt.jpg">
          				<a class="menuParent" href="${basePath}/courseAction/courseList" target="content">课程管理</a>
          			</td>
          		</tr>
        		<tr height="4">
          			<td></td>
          		</tr>
          	</table>
      		<table cellSpacing="0" cellPadding="0" width="100%" border="0">
        		<tr>
          			<td height="10"></td>
          		</tr>
          	</table>
          	<table cellSpacing="0" cellPadding="0" width="150" border="0" style="margin-left:10px;">
        		<tr height="22">
          			<td style="padding-left: 30px" background="images/menu_bt.jpg">
          				<a class="menuParent" href="${basePath}/courseTypeAction/courseTypeList" target="content">课程类型管理</a>
          			</td>
          		</tr>
        		<tr height="4">
          			<td></td>
          		</tr>
          	</table>
      		<table cellSpacing="0" cellPadding="0" width="100%" border="0">
        		<tr>
          			<td height="10"></td>
          		</tr>
          	</table>
          	<table cellSpacing="0" cellPadding="0" width="150" border="0" style="margin-left:10px;">
        		<tr height="22">
          			<td style="padding-left: 30px" background="images/menu_bt.jpg">
          				<a class="menuParent" href="${basePath}/nationalityAction/nationalityList" target="content">国籍管理</a>
          			</td>
          		</tr>
        		<tr height="4">
          			<td></td>
          		</tr>
          	</table>
      	</td>
    	<td width="1" bgColor="#d1e6f7"></td>
    </tr>
</table>
</body>
</html>