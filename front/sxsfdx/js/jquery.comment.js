(function($){
	var USEROLE="";
	function crateCommentInfo(obj){
		USEROLE=obj.USEROLE;
		/*
		 * <div class="comment-info">
			<header><img src="./images/img.jpg"></header>
			<div class="comment-right">
				<h3>匿名</h3>
				<div class="comment-content-header"><span><i class="glyphicon glyphicon-time"></i> 2017-10-17 11:42:53</span><span><i class="glyphicon glyphicon-map-marker"></i>深圳</span></div>
				<p class="content">mongodb 副本集配置副本集概念：就我的理解就是和主从复制 差不多，就是在主从复制的基础上多加了一个选举的机制。
				复制集 特点：数据一致性 主是唯一的，没有Mysql 那样的双主结构大多数原则，集群存活节点小于二分之一是集群不可写，
				只可读从库无法写入数据自动容灾通过下面的一个图来简单的了解下
				 配置过程：一、安装mongodb安装过程略，不懂得可以看前面的教程二、创建存储目录与配置文件创...</p>
				<div class="comment-content-footer">
					<div class="row">
						<div class="col-md-10">
							<span><i class="glyphicon glyphicon-pushpin"></i> 来自:win10 </span><span><i class="glyphicon glyphicon-globe"></i> chrome 55.0.2883.87</span>
						</div>
						<div class="col-md-2"><span class="reply-btn">回复</span></div>
					</div>
				</div>
				<div class="reply-list">
					<div class="reply">
						<div><a href="javascript:void(0)">匿名</a>:<a href="javascript:void(0)">@匿名</a><span>这写的是什么鬼东西。。。。</span></div>
						<p><span>2017-10-17 11:42:53</span> <span class="reply-list-btn">回复</span></p>
					</div>
				</div>
			</div>
		</div>
		 * */
		
		if(typeof(obj.DATE) == "undefined" || obj.DATE == ""){
			obj.DATE = getNowDateFormat();
		}
		var el = "<div class='comment-info clearfix'><div class='comment-c-l fl'><img src='"+$("#hiddenBaseUrl").val()+'/'+obj.img+"' onerror='javascript:this.src=\""+$("#hiddenBaseUrl").val()+"/static/comment/images/img.jpg\"'><span>"+obj.USERNAME+"</span></div><div class='comment-c-r fr'>"
				+"";
		
		/*if(typeof(obj.address) != "undefined" && obj.browse != ""){
			el =el+"<span><i class='glyphicon glyphicon-map-marker'></i>"+obj.address+"</span>";
		}*/
		el = el+"<div><p class='comment-words'>"+obj.CONTENT+"</p>" +
            "<div class='clearfix'><div class='fl'><span class='comment-time'>"+obj.DATE+"</span></div>" +
            "<div class='fr'>";
		
		/*if(typeof(obj.osname) != "undefined" && obj.osname != ""){
			el =el+"<span><i class='glyphicon glyphicon-pushpin'></i> 来自:"+obj.osname+"</span>";
		}*/
		
		/*if(typeof(obj.browse) != "undefined" && obj.browse != ""){
			el = el + "<span><i class='glyphicon glyphicon-globe'></i> "+obj.browse+"</span>";
		}*/
		
		el = el + "<div class='comment-btn'><span class='reply-btn' userid='"+obj.USERID+"' theme='"+obj.THEME+"' replyid='"+obj.REPLYID+"' commentid='"+obj.COMMENT_ID+"'>回复</span></div>";
        if(obj.USERID==userid||obj.USEROLE=='3264c8e83d0248bb9e3ea6195b4c0216'){
        el=el+"<div class='delete-btn'><span class='del-btn'><a href='javascript:void(0)' onclick='delComment(this)' userid='"+obj.USERID+"' theme='"+obj.THEME+"' replyid='"+obj.REPLYID+"' commentid='"+obj.COMMENT_ID+"'>删除</span></a></div>";
        }
        el=el+"</div></div></div>";
        //评论软件结束
        //回复的评论
        el= el+
            "<div class='reply-list'>";

		if(obj.children != "" && obj.children.length > 0){
			var arr = obj.children;
			for(var j=0;j<arr.length;j++){
				var replyObj = arr[j];
				el = el+createReplyComment(replyObj);
			}
		}
		el = el+"</div></div></div></div>";
		return el;
	}
	
	//返回每个回复体内容
	function createReplyComment(reply){
	    console.log(reply)
		var replyEl = "<div class='reply clearfix'><div class='comment-ol-l fl'><img src='"+reply.img+"' onerror='javascript:this.src=\""+$("#hiddenBaseUrl").val()+"/static/comment/images/img.jpg\"'><a href='javascript:void(0)' class='replyname' style='color: #337ab7'><span>"+reply.USERNAME+"</span></a> </div>" +
            "<div class='comment-ol-r fr'><div style='margin-top: 5px;'><p class='comment-ol-words'><a href='javascript:void(0)' style='color: #337ab7'>@"+reply.REPLYNAME+" </a><span>: "+reply.CONTENT+"</span></p></div>" +
            "<div><span class='comment-time'>"+reply.DATE+"</span>" +
            "<div class='comment-btn'><span class='reply-list-btn' userid='"+reply.USERID+"' theme='"+reply.THEME+"' replyid='"+reply.REPLYID+"' commentid='"+reply.COMMENT_ID+"'>回复</span></div>" ;

        if(reply.USERID==userid||USEROLE=='3264c8e83d0248bb9e3ea6195b4c0216'){
        replyEl=replyEl+"<div class='delete-btn'><a href='javascript:void(0)' onclick='delComment(this)' userid='"+reply.USERID+"' theme='"+reply.THEME+"' replyid='"+reply.REPLYID+"' commentid='"+reply.COMMENT_ID+"'><span style='color: #aaa'>删除</span></a></div>";
        }
        replyEl = replyEl+ "</div></div></div>";
		return replyEl;
	}
	function getNowDateFormat(){
		var nowDate = new Date();
		var year = nowDate.getFullYear();
		var month = filterNum(nowDate.getMonth()+1);
		var day = filterNum(nowDate.getDate());
		var hours = filterNum(nowDate.getHours());
		var min = filterNum(nowDate.getMinutes());
		var seconds = filterNum(nowDate.getSeconds());
		return year+"-"+month+"-"+day+" "+hours+":"+min+":"+seconds;
	}
	function filterNum(num){
		if(num < 10){
			return "0"+num;
		}else{
			return num;
		}
	}
	function replyClick(el){
		el.parent().parent().parent().append("<div class='replybox' style='margin-top: 10px;'><div class='layui-form-item layui-form-text'><div class='layui-input-block'>" +
            "<textarea placeholder='来说几句吧......' class='layui-textarea' id='reply' style='margin-left:-110px;'></textarea>" +
            "</div><div class='layui-btn send' style='float: right;margin-right: 125px;margin-top: 5px'>发送</div></div></div></div>")
		.find(".send").click(function(){
			var content = $("#reply").val();
			if(content != ""){
				var parentEl = $(this).parent().parent().parent().parent().parent(),
					replyName=$(this).parent().parent().parent().parent().find(".replyname").text();
				var obj = new Object();
				obj.USERNAME=name;//当前用户名
				obj.REPLYNAME=replyName || parentEl.parent().find("span").eq(0).text();
				obj.CONTENT=content;//评论内容
                obj.THEME=themeid;//评论主题id
                obj.USERID=userid;//用户id
                obj.REPLYID=el.attr("commentid");//回复对象id 为对方的评论id
				obj.DATE = getNowDateFormat();//回复日期
                if(el.attr("userid")==userid){
                    layui.use('layer', function(){
                        var layer = layui.layer;
                        layer.msg('不能回复自己');
                    });
                    return;
                }
                //保存评论并返回该评论id
                var res=SendAction(root+"/comment/saveComment.do",
                    {USERID:obj.USERID,USERNAME:obj.USERNAME,CONTENT:obj.CONTENT,THEME:obj.THEME,REPLYID:obj.REPLYID});
                if(res=="error"){
                    layui.use('layer', function(){
                        var layer = layui.layer;
                        layer.msg('该评论已被删除');
                    });
                    var res=SendAction(root+"/comment/getCommentTree.do",{theme:themeid, replyid:0,page:1});
                    var json=$.parseJSON(res);
                    var js = $.parseJSON(json.js);
                    $(".comment-list").empty().addCommentList({data:js,add:""});
                    return;
                }else if(res.length>100){
					layui.use('layer', function(){
						var layer = layui.layer;
						layer.msg('评论失败！');
					});
					setTimeout(function () {
						window.location.reload();
					},1500);
				}else{
					layui.use('layer', function(){
						var layer = layui.layer;
						layer.msg('评论成功！');
					});
				}
                obj.COMMENT_ID=res;//评论id

				var replyString = createReplyComment(obj);
				$(".replybox").remove();
				if(parentEl.hasClass("reply-list")){
					parentEl.append(replyString);
				}else{
					parentEl.find(".reply-list").append(replyString);
				}

			}else{
                layui.use('layer', function(){
                    var layer = layui.layer;
                    layer.msg('空内容');
                });
			}
		});
	}
	
	
	$.fn.addCommentList=function(options){
		var defaults = {
			data:[],
			add:""
		}
		var option = $.extend(defaults, options);
		//加载数据
		if(option.data.length > 0){
			var dataList = option.data;
			var totalString = "";
			for(var i=0;i<dataList.length;i++){
				var obj = dataList[i];
				var objString = crateCommentInfo(obj);
				totalString = totalString+objString;
			}
			$(this).append(totalString).find(".reply-btn").click(function(){
				if($(this).parent().parent().parent().find(".replybox").length > 0){
					$(".replybox").remove();
				}else{
					$(".replybox").remove();
					replyClick($(this));
				}
			});
			$(".reply-list-btn").click(function(){
				if($(this).parent().parent().parent().find(".replybox").length > 0){
					$(".replybox").remove();
				}else{
					$(".replybox").remove();
					replyClick($(this));
				}
			})
		}
		
		//添加新数据
		if(option.add != ""){
			obj = option.add;
			var str = crateCommentInfo(obj);
			$(this).prepend(str).find(".reply-btn").click(function(){
				replyClick($(this));
			});
		}
	}
	
})(jQuery);

function delComment(delcmt) {
    var COMMENT_ID = delcmt.getAttribute("commentid");
    var theme = delcmt.getAttribute("theme");
    var replyid = delcmt.getAttribute("replyid");
    var result=SendAction(root+"/comment/delComment.do",
        {COMMENT_ID:COMMENT_ID,theme:theme,replyid:replyid});
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.msg(result);
    });
    var res=SendAction(root+"/comment/getCommentTree.do",{theme:themeid, replyid:0,page:1});
    var json=$.parseJSON(res);
    var js = $.parseJSON(json.js);
    $(".comment-list").empty().addCommentList({data:js,add:""});
}