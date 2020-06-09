<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link href="${ctx}/css/page.css" rel="stylesheet" type="text/css" />
	<style type="text/css">
		.span-3 {
  		  float: left;
  		  padding-top: 6px;
		}
		.txt_page{
			height: 24px;
			padding-top: 6px;
			border: 1px solid #DDDDDD;
		}
		.txt_page_no {
			height: 25px;
		    padding-top: 5px;
		    width: 60px;
		    border: 1px solid #dddddd;
		}
		.txt_page_no img{
			display: none;
		}
		.nub_page_{
			width: 20px;
			padding: 5px 6px 0;
			height: 25px;
			border: 1px solid #f60;
			background:#F60;color:#fff; font-weight:700;	
		}
	
		.writ_page {
		    padding-top: 6px;
		}
		.input_text {
		    border: 1px solid #dddddd;
		    height: 30px;
		    width: 30px;
		}
		.input_btn {
			background-color: #FFFFFF;
			border: 1px solid #dddddd;
			height: 32px;
			width: 59px;
		}
    
	</style>
</head>
<body>
<!-- 显示条数
<div class="x-drop-menu" id="finder-pagesel-1af007"
	style="display: none; overflow-y: auto;" inited="1">
	<div onClick="" class="item">
		<input type="radio" checked="checked">
		每页
		<i>100</i>条
	</div>
	<div onClick="" class="item">
		<input type="radio">
		每页
		<i>50</i>条
	</div>
	<div onClick="" class="item">
		<input type="radio">
		每页
		<i>20</i>条
	</div>
	<div onClick="" class="item">
		<input type="radio">
		每页
		<i>10</i>条
	</div>
</div>

显示条数结束 -->

<div class="table-footer clear" id="footBar">
	<div id="finder-footer-333c3e" class="finder-footer">
		<div class="finder-page clearfix clearLift">
			<%-- <div class="span-3">
				<!--翻页跳转-->
				<span id="finder-pageset-333c3e" style="cursor: pointer">
					每页显示 <i id="markId">10</i> 条 
					<img style="width: 7px; height: 5px; background-position: 0 -71px;" class="imgbundle" 
						src="${cxt}/resource/images/transparent.gif" onclick="shows()" />
				</span>
			</div> --%>

			<c:if test="${page.totalPage<=7}">
				<div
					<c:if test="${page.nowPage !=1 }">class="txt_page" onclick="go('back',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)"</c:if>
					<c:if test="${page.nowPage ==1 }">class="txt_page_no"</c:if>>
					&lt;
				</div>
				<c:forEach begin="1" end="${page.totalPage}" var="p_nub">
					<div onclick="gotopage_btn(${page.nowPage},${p_nub })"
						<c:if test="${p_nub != page.nowPage }">class="nub_page"</c:if>
						<c:if test="${p_nub == page.nowPage }">class="nub_page_"</c:if>>
						${p_nub }
					</div>
				</c:forEach>
				<div
					<c:if test="${page.nowPage !=page.totalPage }">class="txt_page" onclick="go('next',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)"</c:if>
					<c:if test="${page.nowPage ==page.totalPage }">class="txt_page_no"</c:if>>
					&gt;
				</div>
				<div class="writ_page">
					skip
				</div>
				<input class="input_text" type="text" id="topage" />
				<input class="input_btn" type="button"
					onclick="gotopage(${page.nowPage})" value="go" />
				<input value="${page.totalPage}" type="hidden" id="allpage" />
				<input value="${page.pageSize}" type="hidden" id="pagesize" />
			</c:if>

			<c:if test="${page.totalPage>7 && page.nowPage<4}">
				<div
					<c:if test="${page.nowPage !=1 }">class="txt_page" onclick="go('back',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)"</c:if>
					<c:if test="${page.nowPage ==1 }">class="txt_page_no"</c:if>>
					&lt;
				</div>
				<c:forEach begin="1" end="4" var="p_nub">
					<div onclick="gotopage_btn(${page.nowPage},${p_nub })"
						<c:if test="${p_nub != page.nowPage }">class="nub_page"</c:if>
						<c:if test="${p_nub == page.nowPage }">class="nub_page_"</c:if>>
						${p_nub }
					</div>
				</c:forEach>
				<div class="page_">
					…
				</div>
				<div class="page_">
					…
				</div>
				<div onClick="gotopage_btn(${page.nowPage},${page.totalPage })"
					class="nub_page">
					${page.totalPage }
				</div>
				<div
					<c:if test="${page.nowPage !=page.totalPage }">class="txt_page" onclick="go('next',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)"</c:if>
					<c:if test="${page.nowPage ==page.totalPage }">class="txt_page_no"</c:if>>
					&gt;
				</div>
				<div class="writ_page">
					skip
				</div>
				<input class="input_text" type="text" id="topage" />
				<input class="input_btn" type="button"
					onclick="gotopage(${page.nowPage})" value="go" />
				<input value="${page.totalPage}" type="hidden" id="allpage" />
				<input value="${page.pageSize}" type="hidden" id="pagesize" />
			</c:if>

			<c:if
				test="${page.totalPage>7 && page.nowPage>=4 && page.nowPage<=(page.totalPage-2)}">
				<div
					<c:if test="${page.nowPage !=1 }">class="txt_page" onclick="go('back',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)"</c:if>
					<c:if test="${page.nowPage ==1 }">class="txt_page_no"</c:if>>
					&lt;
				</div>
				<div onClick="gotopage_btn(${page.nowPage},1)" class="nub_page">
					1
				</div>
				<div class="page_">
					…
				</div>
				<c:forEach begin="${page.nowPage -1 }" end="${page.nowPage + 1 }"
					var="p_nub">
					<div onclick="gotopage_btn(${page.nowPage},${p_nub })"
						<c:if test="${p_nub != page.nowPage }">class="nub_page"</c:if>
						<c:if test="${p_nub == page.nowPage }">class="nub_page_"</c:if>>
						${p_nub }
					</div>
				</c:forEach>
				<div class="page_">
					…
				</div>
				<div onClick="gotopage_btn(${page.nowPage},${page.totalPage })"
					class="nub_page">
					${page.totalPage }
				</div>
				<div
					<c:if test="${page.nowPage !=page.totalPage }">class="txt_page" onclick="go('next',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)"</c:if>
					<c:if test="${page.nowPage ==page.totalPage }">class="txt_page_no"</c:if>>
					&gt;
				</div>
				<div class="writ_page">
					skip
				</div>
				<input class="input_text" type="text" id="topage" />
				<input class="input_btn" type="button"
					onclick="gotopage(${page.nowPage})" value="go" />
				<input value="${page.totalPage}" type="hidden" id="allpage" />
				<input value="${page.pageSize}" type="hidden" id="pagesize" />
			</c:if>

			<c:if
				test="${page.totalPage>7 && page.nowPage>6 && page.nowPage>(page.totalPage-2)}">
				<div
					<c:if test="${page.nowPage !=1 }">class="txt_page" onclick="go('back',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)"</c:if>
					<c:if test="${page.nowPage ==1 }">class="txt_page_no"</c:if>>
					&lt;
				</div>
				<div onClick="gotopage_btn(${page.nowPage},1)" class="nub_page">
					1
				</div>
				<div class="page_">
					…
				</div>
				<div class="page_">
					…
				</div>
				<c:forEach begin="${page.totalPage - 3 }" end="${page.totalPage}"
					var="p_nub">
					<div onclick="gotopage_btn(${page.nowPage},${p_nub })"
						<c:if test="${p_nub != page.nowPage }">class="nub_page"</c:if>
						<c:if test="${p_nub == page.nowPage }">class="nub_page_"</c:if>>
						${p_nub }
					</div>
				</c:forEach>
				<div
					<c:if test="${page.nowPage !=page.totalPage }">class="txt_page" onclick="go('next',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)"</c:if>
					<c:if test="${page.nowPage ==page.totalPage }">class="txt_page_no"</c:if>>
					&gt;
				</div>
				<div class="writ_page">
					skip;
				</div>
				<input class="input_text" type="text" id="topage" />
				<input class="input_btn" type="button"
					onclick="gotopage(${page.nowPage})" value="go" />
				<input value="${page.totalPage}" type="hidden" id="allpage" />
				<input value="${page.pageSize}" type="hidden" id="pagesize" />
			</c:if>
		</div>
	</div>
</div>
<script type="text/javascript">
	function page_move(obj){
		$(obj).attr("class","txt_page_");
	}
	function page_out(obj){
		$(obj).attr("class","txt_page");
	}
   	function pagestate(){
   		var firstvew = document.getElementById("firstvew");
 			var backvew = document.getElementById("backvew");
 			var nextvew = document.getElementById("nextvew");
 			var lastvew = document.getElementById("lastvew");
 			var totlepage=document.getElementById("allpage").value;
 			var nowpage = document.getElementById("topage").value;
 			if(parseInt(nowpage)>=parseInt(totlepage)){
 			nextvew.style.display="none";
 			lastvew.style.display="none";
 			}
 			if(parseInt(nowpage)<=1){
   		firstvew.style.display="none";
 			backvew.style.display="none";			
 			}
   	}
   	function gotopage(nowpage){
   		var totalPage = "${page.totalPage}";
		var topage = $("#topage").val();
		
		if(topage==""){
			alert("Please fill out the skip page");
			return ;
		}
		var reg = /\D/;
		if(topage.match(reg)==null){
			if(parseInt(topage)>parseInt(totalPage)){
				return ;
			}
			
			gotopage_btn(nowpage,topage);
		}else{
			alert("Please fill out number");
		}
		
	}
	
	function gotopage_btn(nowpage,topage){
	var val = new Array();
	$("#table-main input:checkbox:checked").each(function(){
		val.push($(this).val());
	});
	if($('#proId').val()!=''){
	val.push($('#proId').val());
	}
	$('#proId').val(val);
		var pagesize = document.getElementById("pagesize").value;
		document.getElementsByName("hidForm")[0].action+="?nowPage="+nowpage+"&toPage="+topage+"&pagesize="+pagesize;
		document.getElementsByName("hidForm")[0].submit();
	}
			
	function go(method,nowpage){
	var val = new Array();
	$("#table-main input:checkbox:checked").each(function(){
		val.push($(this).val());
	});
	if($('#proId').val()!=''){
	val.push($('#proId').val());
	}
	$('#proId').val(val);
		var pagesize = document.getElementById("pagesize").value;
		document.getElementsByName("hidForm")[0].action += "?nowPage="+nowpage+"&pageMethod="+method+"&pagesize="+pagesize;
		document.getElementsByName("hidForm")[0].submit();
	}
   </script>
</body>
</html>