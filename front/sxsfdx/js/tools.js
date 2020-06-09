function setRedText(id, text) {
    $("#" + id).html("<b style='color:red;'>" + text + "</b>");
}
function setText(id, text) {
    $("#" + id).text(text);
}
// 时钟
function Clock() {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.date = date.getDate();
    this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];
    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    this.toString = function () {
        return "现在是:" + this.year + "年" + this.month + "月" + this.date + "日 " + this.hour + ":" + this.minute + ":" + this.second + " " + this.day;
    };

    this.toSimpleDate = function () {
        return this.year + "-" + this.month + "-" + this.date;
    };

    this.toDetailDate = function () {
        return this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minute + ":" + this.second;
    };

    this.display = function (ele) {
        var clock = new Clock();
        ele.innerHTML = clock.toString();
        window.setTimeout(function () { clock.display(ele); }, 1000);
    };
}

/**
 * 异步请求的方法
 * 
 * @param URL
 *            请求的action
 * @param param
 *            附带的参数
 * @param obj
 *            发送到action的json数据
 * @return 字符串
 */
function SendAction(URL,obj){
	var result="";
	$.ajax({
		cache:false,
		async:false,
		type:"POST",
		data:obj,
		url:URL,
		success:function(data,status, xhr){
			var headers=xhr.getResponseHeader("sessionstate");
			result=data;
		},
    	error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert("错误："+XMLHttpRequest.responseText);
		}
	});
	
	return result;
}

// 刷新页面
function reload() {
    if (!checklogin()) {
        return;
    }
    window.location.reload();
}
// 判断字符串str是否出现在array中
function Contains(str, array) {
    var bool = false;
    for (var i = 0; i < array.length; i++) {
        if (str == array[i]) {
            bool = true;
            break;
        }
    }
    return bool;
}
// 格式化日期格式
function formatDate(date) {
	var year=date.getFullYear();
	var month=date.getMonth()+1>9?date.getMonth()+1:"0"+(date.getMonth()+1);
	var day=date.getDate()>9?date.getDate():"0"+date.getDate();
	var hour=date.getHours()>9?date.getHours():"0"+date.getHours();
	var minutes=date.getMinutes()>9?date.getMinutes():"0"+date.getMinutes();
	var seconds=date.getSeconds()>9?date.getSeconds():"0"+date.getSeconds();
    return year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds;
}
/**
 * 获取查询字符串参数的值
 * 
 * @param param
 *            参数名
 * @return 参数值
 */
function QueryString(param) {
    var value = "";
    var query = window.location.search;// + window.location.hash;
    query = query.substring(1);
    var ArrQuery = query.split('&');
    if (ArrQuery.length > 0) {
        for (var i = 0; i < ArrQuery.length; i++) {
            var firstp = ArrQuery[i].indexOf("=");
            var key = ArrQuery[i].substring(0, firstp);
            if (key == param) {
                value = ArrQuery[i].substring(firstp + 1);
                break;
            }
        }
    }
    return decodeURI(value);
}
/**
 * 返回时间格式的随机数
 */
function getRand(){
	var date=new Date();
	var rand=date.getTime();
	return rand;
}

/**
 * 设置cookie
 * 
 * @param name
 * @param value
 * @param seconds
 */
function setCookie(name, value, seconds) {    
	seconds = seconds || 0;   // seconds有值就直接赋值，没有为0，这个根php不一样。
	var expires = "";    
	if (seconds != 0 ) {      // 设置cookie生存时间
		var date = new Date();    
		date.setTime(date.getTime()+(seconds*1000));    
		expires = "; expires="+date.toGMTString();    
	}    
	document.cookie = name+"="+escape(value)+expires+"; path=/";   // 转码并赋值
}    
// 获取cookie
function getCookie(name) {    
	var nameEQ = name + "=";    
	var ca = document.cookie.split(';');    // 把cookie分割成组
	for(var i=0;i < ca.length;i++) {    
		var c = ca[i];                      // 取得字符串
		while (c.charAt(0)==' ') {          // 判断一下字符串有没有前导空格
			c = c.substring(1,c.length);      // 有的话，从第二位开始取
		}    
		if (c.indexOf(nameEQ) == 0) {       // 如果含有我们要的name
			return unescape(c.substring(nameEQ.length,c.length));    // 解码并截取我们要值
		}    
	}    
	return null;    
}
/**
 * 删除Cookie
 * @param name Cookie名
 * */
function delCookie(name){
	var date=new Date();
	date.setTime(date.getTime()-10000);
	document.cookie=name+"=a; expires="+data.toGMTString();
}
/**
 * 时间相减
 * 
 * @param
 */
function timeSpan(dateStart, dateEnd){
	var hoursA=dateStart.getHours();
	var minutesA=dateStart.getMinutes();
	var secondA=dateStart.getSeconds();
	var timeA="";
	
	var hoursB=dateEnd.getHours();
	var minutesB=dateEnd.getMinutes();
	var secondB=dateEnd.getSeconds();
	var timeB="";

	var hours=0;
	var minutes=0;
	var second=0;
	var result="";
	
	second=secondB-secondA;
	minutes=minutesB-minutesA;
	hours=hoursB-hoursA;
	if(second<0){
		minutes--;
		second=second+60;
	}
	if(minutes<0){
		hours--;
		minutes=minutes+60;
	}
	if(hours<0){
		hours=hours+24;
	}
	/*
	 * timeA=secondA<10?":0"+secondA:":"+secondA; timeA=minutesA<10?":0"+minutesA+timeA:":"+minutesA+timeA;
	 * timeA=hoursA<10?"0"+hoursA+timeA:hoursA+timeA;
	 * 
	 * timeB=secondB<10?":0"+secondB:":"+secondB; timeB=minutesB<10?":0"+minutesB+timeB:":"+minutesB+timeB;
	 * timeB=hoursB<10?"0"+hoursB+timeB:hoursB+timeB;
	 */
	result=second<10?":0"+second:":"+second;
	result=minutes<10?":0"+minutes+result:":"+minutes+result;
	result=hours<10?"0"+hours+result:hours+result;
	// alert(timeB+"\n"+timeA+"\n"+result);
	return result;
}
/**
 * json转string
 * 
 * @param o
 *            对象
 * @return 字符串
 */
function jsonToString(o) {
    if (o == undefined) {
        return "";
    }
    var r = [];
    if (typeof o == "string") return "\"" + o.replace(/([\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    if (typeof o == "object") {
        if (!o.sort) {
            for (var i in o)
                r.push("\"" + i + "\":" + jsonToString(o[i]));
            if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                r.push("toString:" + o.toString.toString());
            }
            r = "{" + r.join() + "}"
        } else {
            for (var i = 0; i < o.length; i++)
                r.push(jsonToString(o[i]))
            r = "[" + r.join() + "]";
        }
        return r;
    }
    return o.toString().replace(/\"\:/g, '":""');
}
function getifm(id){
	return window.frames[id].document;
}
/**
 * 将表单序列化为json对象
 */
$.fn.serializeObject = function()  
{  
   var o = {};  
   var a = this.serializeArray();  
   $.each(a, function() {  
       if (o[this.name]) {  
           if (!o[this.name].push) {  
               o[this.name] = [o[this.name]];  
           }  
           o[this.name].push($.trim(this.value) || '');  
       } else {  
           o[this.name] = $.trim(this.value) || '';  
       }  
   });  
   return o;  
};

/**试卷收集答案用，在填空题的多个空里不用去掉两边空格*/
$.fn.serialize = function()  
{  
   var o = {};  
   var a = this.serializeArray();  
   $.each(a, function() {  
       if (o[this.name]) {  
           if (!o[this.name].push) {  
               o[this.name] = [o[this.name]];  
           }  
           o[this.name].push(this.value || '');  
       } else {  
           o[this.name] = this.value || '';  
       }  
   });  
   return o;  
};

/** Array是否包含元素emement */
Array.prototype.contains = function (element) { 
	for (var i = 0; i < this.length; i++) { 
		if (this[i] == element) { 
			return true; 
		} 
	} 
	return false; 
} 
function easyDateToSimple(str){
	var date=str.split("/");
	var year=date[2];
	var month=date[0];
	var day=date[1];
	// alert(year+"-"+month+"-"+day);
	return year+"-"+month+"-"+day;
}
function simpleDateToEasy(str){
	var date=str.split("-");
	var year=date[0]
	var month=date[1];
	var day=date[2];
	// alert(month+"/"+day+"/"+year);
	return month+"/"+day+"/"+year;
}
/**过滤掉html标记*/
function removeHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
    return str;
}
/**返回选中节点的全部子节点*/
function getChildNodes(ztree, treeNode) {
    var childNodes = ztree.transformToArray(treeNode);
    var nodes = new Array();
    for(i = 0; i < childNodes.length; i++) {
         nodes[i] = childNodes[i].branchCode;
    }
    return nodes;
}
/**将秒格式化为00:00:00*/
function formatTime(seconds){
	var minutes=parseInt(seconds/60);
	var hour=parseInt(minutes/60);
	var second=seconds-minutes*60;
	minutes=minutes-hour*60;
	var _second=second<10?"0"+second:second;
	var _minute=minutes<10?"0"+minutes:minutes;
	var _hour=hour<10?"0"+hour:hour;
	return _hour+":"+_minute+":"+_second;
}

function formatNumber(num){  
    var china = new Array('零','一','二','三','四','五','六','七','八','九');  
    var arr = new Array();  
    var english = num.toString().split("")  
    for(var i=0;i<english.length;i++){  
        arr[i] = china[english[i]];  
    }  
    return arr.join("")  
}