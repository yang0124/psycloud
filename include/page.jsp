	<%@ page pageEncoding="UTF-8" %>
	
	<form id="hidForm" method="post">
	    <input type = "hidden" id="page" name="pageId" value="${pager.pageId}">
		<div id = "page_info">
			<ul class = "left">
				<li><span>共查询到:${pager.rowCount}条记录!</span></li>
			</ul>
			<ul class = "right">
				<li>
					<a class = "first" onclick="document.getElementById('page').value=1; $('#hidForm').submit()">首页</a>
					<a onclick="document.getElementById('page').value=${pager.pageId>1?pager.pageId-1:1}; $('#hidForm').submit()">上一页</a>
					<a> 第${pager.pageId}页</a>
					<a onclick="document.getElementById('page').value=${pager.pageId<pager.pageCount?pager.pageId+1:pager.pageCount}; $('#hidForm').submit();">下一页</a>
					<a class = "last" onclick="document.getElementById('page').value=${pager.pageCount}; $('#hidForm').submit()">末页</a>
					<span>每页显示：<input name="pageSize" value = "${pager.pageSize}" class = "base_text w60 text_center" />&nbsp;条</span>
				</li>
			</ul>
		</div>
	</form>	
	<script>
		var onSub = 0;
		$(function(){
			$("#hidForm").submit(function(){
				if(onSub!=0)
					return false;
				else
					onSub=1;
				var $hidForm = $("#page_info");
				$('[name]',$("#searchForm")).each(function() {
					$this = $(this);
					//url += "&"+$this.attr("name")+"="+$this.val(); 
					$hidForm.append("<input type='hidden' name='"+$this.attr("name")+"' value='"+$this.val()+"'>");
				});
			});
		});
	</script>	