<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<ul class="ulColumnsF pd10_ mgR5_ bdE9E8E8_ csPT_ cl918F8F">
	<c:if test="${page.totalPage<=7}">
		<c:if test="${page.nowPage !=1 }">
			<li onclick="go('back',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)">
				&lt;
			</li>
		</c:if>
		<c:forEach begin="1" end="${page.totalPage}" var="p_nub">
			<li onclick="gotopage_btn(${page.nowPage},${p_nub })" <c:if test="${p_nub == page.nowPage }"> class="bg50ADE4 clFFF"</c:if>>
				${p_nub }
			</li>
		</c:forEach>
		<c:if test="${page.nowPage !=page.totalPage}">
			<li onclick="go('next',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)">
				&gt;
			</li>
		</c:if>
		<input value="${page.totalPage}" type="hidden" id="allpage" />
		<input value="${page.pageSize}" type="hidden" id="pagesize" />
	</c:if>
	
	<c:if test="${page.totalPage>7 && page.nowPage<4}">
		<c:if test="${page.nowPage !=1 }">
			<li onclick="go('back',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)">
				&lt;
			</li>
		</c:if>
		<c:forEach begin="1" end="4" var="p_nub">
			<li onclick="gotopage_btn(${page.nowPage},${p_nub })" <c:if test="${p_nub == page.nowPage }"> class="bg50ADE4 clFFF"</c:if>>
				${p_nub }
			</li>
		</c:forEach>
		<li>
			…
		</li>
		<li>
			…
		</li>
		<li onClick="gotopage_btn(${page.nowPage},${page.totalPage })">
			${page.totalPage }
		</li>
		<c:if test="${page.nowPage !=page.totalPage }">
			<li onclick="go('next',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)">
				&gt;
			</li>
		</c:if>
		<li onclick="gotopage_btn(${page.nowPage},5)">
			&gt;&gt;
		</li>
		<input value="${page.totalPage}" type="hidden" id="allpage" />
		<input value="${page.pageSize}" type="hidden" id="pagesize" />
	</c:if>

	<c:if test="${page.totalPage>7 && page.nowPage>=4 && page.nowPage<=(page.totalPage-2)}">
		<li onclick="gotopage_btn(${page.nowPage},${page.nowPage -2 })">
			&lt;&lt;
		</li>
		<li onclick="go('back',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)">
			&lt;
		</li>
		<li onClick="gotopage_btn(${page.nowPage},1)">
			1
		</li>
		<li>
			…
		</li>
		<c:forEach begin="${page.nowPage -1 }" end="${page.nowPage + 1 }" var="p_nub">
			<li onclick="gotopage_btn(${page.nowPage},${p_nub })" <c:if test="${p_nub == page.nowPage }"> class="bg50ADE4 clFFF"</c:if>>
				${p_nub }
			</li>
		</c:forEach>
		<c:if test="${page.nowPage<(page.totalPage-2)}">
			<li>
				…
			</li>
		</c:if>
		<li onClick="gotopage_btn(${page.nowPage},${page.totalPage })">
			${page.totalPage }
		</li>
		<li onclick="go('next',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)">
			&gt;
		</li>
		<c:if test="${page.nowPage<(page.totalPage-2)}">
			<li onclick="gotopage_btn(${page.nowPage},${page.nowPage +2 })">
				&gt;&gt;
			</li>
		</c:if>
		<input value="${page.totalPage}" type="hidden" id="allpage" />
		<input value="${page.pageSize}" type="hidden" id="pagesize" />
	</c:if>

	<c:if test="${page.totalPage>7 && page.nowPage>6 && page.nowPage>(page.totalPage-2)}">
		<li onclick="gotopage_btn(${page.nowPage},${page.totalPage -4 })">
			&lt;&lt;
		</li>
		<li class="txt_page" onclick="go('back',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)">
			&lt;
		</li>
		<li onClick="gotopage_btn(${page.nowPage},1)">
			1
		</li>
		<li>
			…
		</li>
		<li>
			…
		</li>
		<c:forEach begin="${page.totalPage - 3 }" end="${page.totalPage}" var="p_nub">
			<li onclick="gotopage_btn(${page.nowPage},${p_nub })" <c:if test="${p_nub == page.nowPage }"> class="bg50ADE4 clFFF"</c:if>>
				${p_nub }
			</li>
		</c:forEach>
		<c:if test="${page.nowPage !=page.totalPage }">
			<li onclick="go('next',${page.nowPage })" onmousemove="page_move(this)" onmouseout="page_out(this)">
				&gt;
			</li>
		</c:if>
		<input value="${page.totalPage}" type="hidden" id="allpage" />
		<input value="${page.pageSize}" type="hidden" id="pagesize" />
	</c:if>
</ul>
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
		
		var nowPage = document.createElement("input");
		nowPage.type = "hidden";
		nowPage.name = "nowPage";
		nowPage.id = "nowPage";
		nowPage.value = nowpage;
		var toPage = document.createElement("input");
		toPage.type = "hidden";
		toPage.name = "toPage";
		toPage.id = "toPage";
		toPage.value = topage;
		document.getElementsByName("hidForm")[0].appendChild(nowPage);
		document.getElementsByName("hidForm")[0].appendChild(toPage);
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
		var nowPage = document.createElement("input");
		nowPage.type = "hidden";
		nowPage.name = "nowPage";
		nowPage.id = "nowPage";
		nowPage.value = nowpage;
		var pageMethod = document.createElement("input");
		pageMethod.type = "hidden";
		pageMethod.name = "pageMethod";
		pageMethod.id = "pageMethod";
		pageMethod.value = method;
		document.getElementsByName("hidForm")[0].appendChild(nowPage);
		document.getElementsByName("hidForm")[0].appendChild(pageMethod);
		document.getElementsByName("hidForm")[0].submit();
	}
   </script>
</body>
</html>