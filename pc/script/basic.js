if(typeof String.prototype.trim !== 'function'){
    String.prototype.trim = function(){
        var self = this;
        function sliceStr(){
            if(self.charAt(0) === " "){
                self = self.slice(1);
            }
            if(self.charAt(self.length-1) === " "){
                self = self.slice(0,self.length-1);
            }
            if(self.charAt(0) === " " || self.charAt(self.length-1) === " "){
                sliceStr();
            }
        }
        sliceStr();
        return self;
    }
}
var nextFlash = window.requestAnimationFrame||
            window.mozRequestAnimationFrame||
            window.webkitRequestAnimationFrame||
            window.msRequestAnimationFrame||
            function(callback){
                window.setTimeout(callback,1000/60);
            };
var ydm = function(){
    var param = arguments[0];
    if(!param){
        return false;
    }
    if(typeof param === "string"){
        return ydm.selectNodes(param);
    }
    if(ydm.checkNode(param) ){
        return ydm.addProperty(param);
    }
};
ydm.selectNodes = function(str){
    if(typeof str !== "string" || str === ""){
        return [];
    }
    str = str.trim();
    var index = str.indexOf(" ");
    if(index === -1){
        if(str.charAt(0) === "#"){
            str = str.slice(1);
            return document.getElementById(str);
        }
        if(str.charAt(0) === "."){
            str = str.slice(1);
            return ydm.getByClass(str);
        }
        return document.getElementsByTagName(str);
    }else{
        if(!str.charAt(0) === "."){
            return false;
        }
        str = str.slice(1);
        index = str.indexOf(" ");
        var left = str.slice(0,index).trim();
        var right = str.slice(index+1).trim();
        if(right.charAt(0) === "."){
            str = left + " " + right.slice(1);
            return ydm.getByClass2(str);
        }else{
            str = left + " " + right;
            return ydm.getByTag(str);
        }
    }
};
ydm.addProperty = function(elem){
    if(elem.getAttribute("addProperty")){
        return false;
    }
    elem.addProperty = true;
    elem.getById = function(str){
        return document.getElementById(str);
    }
    elem.getByClass = function(str){
        if(!str){
            return false;
        }
        str = str.trim();
        var index = str.indexOf(" ");
        if(index === -1){
            return ydm.getByClassWithInElem(this,str);
        }else{
            var parent = ydm.getByClassWithInElem(this,str.slice(0,index));
            if(!parent[0]){
                return parent;
            }else{
                parent = parent[0];
                return ydm.getByClassWithInElem(parent,str.slice(index+1));
            }
        }
    }
    elem.getByTag = function(str){
        str = str.trim();
        var index = str.indexOf(" ");
        if(index === -1){                
            return this.getElementsByTagName(str);
        }else{
            var parent = ydm.getByClassWithInElem(this,str.slice(0,index));
            if(!parent[0]){
                return parent;
            }else{
                parent = parent[0];
                return parent.getElementsByTagName(str.slice(index+1));
            }
        }
    }
    elem.addEvent = function(str,func,value){
        str = String(str);
        if(!str){
            return false;
        }
        value = false;
        if(value){
            value = true;
        }
        if(str === "click"){
            ydm.addEvent(this,"click",func);
            ydm.addEvent(this,"touchend",func);
            ydm.addEvent(this,"touchstart",function(){
                ydm.preventDefault();
            });
        }else{
            ydm.addEvent(this,str,func);
        }
        return this;
    };
    return elem;
};
ydm.checkObj = function(obj){
    if(!obj || typeof obj !== "object"){
        return false;
    }
    return true;
};
ydm.checkNode = function(node){
    if(!node || typeof node !== "object" || node.nodeType !== 1){
        return false;
    }
    return true;
};
ydm.getAllNodesInNode = function(node){
    if(!ydm.checkNode(node)){
        return false;
    }
    if(node.nodeType !== 1){
        return false;
    }
    var arr = [];
    function recursive(nextNode){
        var nodes = nextNode.childNodes;
        var i;
        for(i=0;i<nodes.length;i++){
            if(nodes[i].nodeType === 1){
                arr.push(nodes[i]);
                recursive(nodes[i]);
            }
        }
    };
    recursive(node);
    return arr;
};
ydm.checkClassName = function(className,str){
    var index = 0;
    var leftChar  = "";
    var rightChar  = "";
    index = className.indexOf(str);
    if(index === -1){
        return false;
    }
    if(index !== 0){
        leftChar = className.charAt(index-1);
        if(leftChar !== " "){
            return false;
        }
    }
    if(index + str.length !== className.length){
        rightChar = className.charAt(index + str.length);
        if(rightChar !== " "){
            return false;
        }
    }
    return true;
};
ydm.removeClass = function(elem,name){
    if(!ydm.checkNode(elem)||!name){
        return false;
    }
    var str = elem.className;
    var check = ydm.checkClassName(str,name);
    if(check){
        str = str.replace(name,"").trim();
        elem.className = str;
    }
}
ydm.getByClass = function(str){
    if(typeof str !== "string" || str === ""){
        return [];
    }
    var results = [];
    var className = "";
    var elems = document.getElementsByTagName("*");
    for(i = 0; i < elems.length; i++){
        className = elems[i].className;
        if(this.checkClassName(className,str)){
            results.push(elems[i]);
        }
    }
    return results;
};
ydm.getByClassWithInElem = function(elem,str){
    if(!elem){
        return [];
    }
    var results = [];
    var nodes = this.getAllNodesInNode(elem);
    var className = "";
    for(i = 0; i < nodes.length; i++){
        className = nodes[i].className;
        if(this.checkClassName(className,str)){
            results.push(nodes[i]);
        }
    }
    return results;
};
//根据类名获取节点 ,具备二级级检索功能
ydm.getByClass2 = function(str){
    if(typeof str !== "string" || str === ""){
        return [];
    }
    str = str.trim(str);
    var index = str.indexOf(" ");
    if(index === -1){
        return ydm.getByClass(str);
    }else{
        var parent = ydm.getByClass(str.slice(0,index));
        if(!parent[0]){
            return parent;
        }else{
            parent = parent[0];
            return ydm.getByClassWithInElem(parent ,str.slice(index+1));
        }
    }
}
ydm.getByTag = function (str){
    if(!str){
        return false;
    }
    str = str.trim(str);
    var index = str.indexOf(" ");
    if(index==-1){                
        return document.getElementsByTagName(str);
    }else{
        var parent = ydm.getByClass(str.slice(0,index));
        if(!parent[0]){
            return parent;
        }else{
            parent = parent[0];
            return parent.getElementsByTagName(str.slice(index+1));
        }
    }
}
ydm.addEvent = function(elem,type,func){
    if(elem.addEventListener){
        elem.addEventListener(type,func,false);
    }else if(elem.attachEvent){
        elem.attachEvent("on" + type,func);
    }else{
        elem["on" + type] = func;
    }
};
ydm.removeEvent = function(elem,type,func){
    if(elem.removeEventListener){
        elem.removeEventListener(type,func,false);
    }else if(elem.detachEvent){
        elem.detachEvent("on"+type,func);
    }else{
        elem["on"+type] = null;
    }
};
ydm.getEvent = function(event){
    return event ? event : window.event;
};
ydm.preventDefault = function(){
    event = ydm.getEvent;
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue = false;
    }
};
ydm.stopPropagation = function(event){
    if(!event){
        event = ydm.getEvent();
    }
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
};
ydm.getViewportSize = function (w){
    w = w || window;
    if(w.innerWidth != null)
        return { "width":w.innerWidth , "height":w.innerHeight };
    var d = w.document ;
    if(document.compatMode == "CSS1Compat")
        return { "width":d.documentElement.clientWidth,
                 "height":d.documentElement.clientHeight};
    return { "width":d.body.clientWidth , "height":d.body.clientHeight };
};
ydm.getScrollOffsets = function (){
    var w = window;
    if(w.pageXOffset != null)
        return { x:w.pageXOffset , y:w.pageYOffset };
    var d = w.document;
    if(document.compatMode=="CSS1Compat")
        return { x:d.documentElement.scrollLeft , y:d.documentElement.scrollTop };
    return { x:d.body.scrollLeft , y:d.body.scrollTop };
};
ydm.getElementCoordinate = function(elem){
    if(!elem){
        return false;
    }
    var box = elem.getBoundingClientRect();
    var offsets = ydm.getScrollOffsets();
    elem.x = box.left + offsets.x ;
    elem.y = box.top + offsets.y ;
    return { x:elem.x , y:elem.y };
};
ydm.getCoordinateDist = function(elem1,elem2){
    if(!elem1||!elem2){
        return false;
    }
    ydm.getElementCoordinate(elem1);
    ydm.getElementCoordinate(elem2);
    var x = elem2.x - elem1.x ;
    var y = elem2.y - elem1.y ; 
    return {"distX":x,"distY":y}
};
ydm.getDistance = function(elem1,elem2){
    if(!elem1||!elem2){
        return false;
    }
    ydm.getElementCoordinate(elem1);
    ydm.getElementCoordinate(elem2);
    var distX = elem2.x - elem1.x ;
    var distY = elem2.y - elem1.y ; 
    if(distX<0){
        distX = -(distX);
    }
    if(distY<0){
        distY = -(distY);
    }
    return {"distX":distX,"distY":distY}
};
ydm.mouseToElemDist = function(event,elem){
    if(!elem){
        return false;
    }
    event = ydm.getEvent(event);
    var scroll = ydm.getScrollOffsets();
    var event = ydm.getEvent(event);
    mouseX = event.clientX + scroll.x;
    mouseY = event.clientY + scroll.y;
    ydm.getElementCoordinate(elem);
    elem.mouseDistX = mouseX - elem.x;
    elem.mouseDistY = mouseY - elem.y;
    return {"mouseDistX":elem.mouseDistX , "mouseDistY":elem.mouseDistY};
};
ydm.getElementSize = function(elem){
    var box = elem.getBoundingClientRect();
    elem.width = box.right - box.left;
    elem.height = box.bottom - box.top;
    if(elem.getAttribute("width")){     
        elem.width = parseInt(elem.getAttribute("width"));
    }
    if(elem.getAttribute("height")){
        elem.height = parseInt(elem.getAttribute("height"));
    }
    if(elem.style.width!=""){
        elem.width = parseInt(elem.style.width);
    }
    if(elem.style.height!=""){
        elem.height = parseInt(elem.style.height);
    }
    return { width:elem.width , height:elem.height };
}
ydm.getDist_TouchToElem = function(elem){
    var event = ydm.getEvent();
    ydm.getElementCoordinate(elem);
    distX = event.changedTouches[0].pageX - elem.x;
    distY = event.changedTouches[0].pageY - elem.y;
    return { "touchDistX":distX , "touchDistY":distY };
}
ydm.running = (function(){
    var funcs = [];
    var ready = false;
    function handler(e){
        if(ready){
            return;
        }
        e = ydm.getEvent(e);
        if(e.type === "readystatechange" && document.readyState != "complete"){
            return;
        }
        for(var i=0; i < funcs.length; i++){
            funcs[i].call(document);
        }
        ready = true;
        funcs = null;
    }
    ydm.addEvent(document,"DOMContentLoaded",handler);
    ydm.addEvent(document,"readystatechange",handler);
    ydm.addEvent(document,"load",handler);
    return function(func){
        if(ready){
            func.call(document);
        }else{
            funcs.push(func);
        }
    };
}());
//动画函数(存在一个问题 ,使用时提示非法函数?)
ydm.flash = window.requestAnimationFrame||
            window.mozRequestAnimationFrame||
            window.webkitRequestAnimationFrame||
            window.msRequestAnimationFrame||
            function(callback){
                window.setTimeout(callback,1000/60);
            };
ydm.buildCurve = function(obj){
    if(!ydm.checkObj(obj)){
        return 0;
    }
    var nowTime   = obj.nowTime || new Date(),
        startTime = obj.startTime,
        speed     = obj.speed,
        totalDist = obj.totalDist,
        locus     = obj.locus,
        power     = obj.power || 2;
    if(!startTime||!speed||!totalDist){
        return 0;
    }
    totalDist = Math.abs(totalDist);
    var x = (nowTime - startTime)*speed/totalDist;
    if(x >= 1){
        x = 1;
    }
    var result = Math.pow(x,power)*totalDist;
    if(locus === "mix"){
        result = (x - Math.sin(x*2*Math.PI)/(2*Math.PI))*totalDist;
    }
    if(locus === "dec"){
        result = (1-Math.pow(1-x,power))*totalDist;
    }
    return Math.abs(result);
};
ydm.move = function(obj){
    if(!ydm.checkObj(obj)){
        return false;
    }
    var elem = obj.elem ,
        left = obj.left ,
        top  = obj.top ,
        time = obj.time || 500,
        locus     = obj.locus, 
        callBack  = obj.callBack ,
        instantly = obj.instantly;
    if(!ydm.checkNode(elem)){
        return false;
    }
    left = parseInt(left);
    top = parseInt(top);
    if(isNaN(left) && isNaN(top)){
        return false;
    }
    if(isNaN(left)){
        elem.moveX = false;
    }else{
        elem.moveX = true;
    }
    if(isNaN(top)){
        elem.moveY = false;
    }else{
        elem.moveY = true;
    }
    if(instantly){
        if(elem.moveX){
            elem.style.left = left + "px";
        }
        if(elem.moveY){
            elem.style.top = top + "px";
        }
        return false;
    }
    var totalDist_x = 0,
        totalDist_y = 0,
        movedX   = 0,
        movedY   = 0,
        initLeft = 0,
        initTop  = 0,
        speedX   = 0,
        speedY   = 0,
        startTime = null,
        nowTime   = null;
    var coords = ydm.getCoordinateDist(elem.parentNode,elem);
    if(elem.moveX){
        if(!elem.style.left){
            totalDist_x = left - coords.distX;
            initLeft = coords.distX;
        }else{
            totalDist_x = left - parseInt(elem.style.left);
            initLeft = parseInt(elem.style.left);
        }
        speedX = Math.abs(totalDist_x/time);
        if(totalDist_x < 0){
            elem.toLeft = true;
        }else{
            elem.toLeft = false;
        }
    }
    if(elem.moveY){
        if(!elem.style.top){
            totalDist_y = top - coords.distY;
            initTop = coords.distY;
        }else{
            totalDist_y = top - parseInt(elem.style.top);
            initTop = parseInt(elem.style.top);
        }
        speedY = Math.abs(totalDist_y/time);
        if(totalDist_y < 0){
            elem.toTop = true;
        }else{
            elem.toTop = false;
        }
    }
    startTime = new Date();
    var buildCurve = {
        startTime : startTime,
        power : 4,
        locus : locus
    };
    function moving(){
        nowTime = new Date();
        if(nowTime - startTime >= time){
            if(elem.moveX){
                elem.style.left = left + "px";
            }
            if(elem.moveY){
                elem.style.top = top + "px";
            }
            if(typeof callBack === "function"){
                callBack();
            }
            return false;
        }
        if(elem.moveX){
            buildCurve.speed = speedX;
            buildCurve.totalDist = totalDist_x
            movedX = ydm.buildCurve(buildCurve);
            if(elem.toLeft){
                movedX = - Math.abs(movedX);
            }
            elem.style.left = initLeft + movedX + "px";
        }
        if(elem.moveY){
            buildCurve.speed = speedY;
            buildCurve.totalDist = totalDist_y
            movedY = ydm.buildCurve(buildCurve);
            if(elem.toTop){
                movedY = - Math.abs(movedY);
            }
            elem.style.top = initTop + movedY + "px";
        }
        nextFlash(moving);
    }
    nextFlash(moving);
};
ydm.cgSize = function(obj){
    if(!ydm.checkObj(obj)){
        return false;
    }
    var elem   = obj.elem,
        width  = obj.width,
        height = obj.height,
        time   = obj.time || 500;
    if(!ydm.checkNode(elem)){
        return false;
    }
    ydm.getElementSize(elem);
    var totalW = 0 ,
        totalH = 0 ,
        cgW = 0 ,
        cgH = 0 ;
    var initW = elem.width,
        initH = elem.height;
    width = parseInt(width);
    if(!isNaN(width)){
        totalW = width - initW;
    }
    height = parseInt(height);
    if(!isNaN(height)){
        totalH = height - initH;
    }
    var startTime = new Date();
    var param = { startTime : startTime };
    function running(){
        nowTime = new Date();
        if(width || width === 0){
            param.speed = totalW/time;
            param.totalDist = totalW;
            cgW = ydm.buildCurve(param);
            if(totalW < 0){
                cgW = - Math.abs(cgW);
            }
            elem.style.width = initW + cgW + "px";
        }
        if(height || height === 0){
            param.speed = totalH/time;
            param.totalDist = totalH;
            cgH = ydm.buildCurve(param);
            if(totalH < 0){
                cgH = - Math.abs(cgH);
            }
            elem.style.height = initH + cgH + "px";
        }
        if(nowTime - startTime > time){
            if(width || width === 0){
                elem.style.width = width + "px";
            }
            if(height || height === 0){
                elem.style.height = height + "px";
            }
            return false;
        }
        nextFlash(running);
    }
   running();
};
ydm.fadeIn = function(elem,time){
    if(!ydm.checkNode(elem)){
        return false;
    }
    var time = time || 500;
    var startTime = new Date(),
        nowTime = null,
        speedOpt = 1/time,
        speedFil = 100/time;
    var obj = {
        startTime : startTime
    };
    function running(){
        nowTime = new Date();
        obj.totalDist = 1;
        obj.speed = speedOpt;
        elem.style.opacity = ydm.buildCurve(obj);
        obj.totalDist = 100;
        obj.speed = speedFil;
        elem.style.filter = "Alpha(Opacity=" + ydm.buildCurve(obj) +")";
        if(nowTime - startTime < time){
            nextFlash(running);
        }else{
            elem.style.opacity = 1;
            elem.style.filter = "Alpha(Opacity=100,FinishOpacity=100,Style=0)";
        }
    }
    nextFlash(running);
}
ydm.fadeOut = function(elem,time){
    if(!ydm.checkNode(elem)){
        return false;
    }
    var time = time || 500;
    var opacity = 0;
    var filter  = 0;
    var startTime = new Date(),
        nowTime = null,
        speedOpt = 1/time,
        speedFil = 100/time;
    var obj = {
        startTime : startTime
    };
    function running(){
        nowTime = new Date();
        obj.totalDist = 1;
        obj.speed = speedOpt;
        elem.style.opacity = 1-ydm.buildCurve(obj);
        obj.totalDist = 100;
        obj.speed = speedFil;
        elem.style.filter = "Alpha(Opacity=" + (100 - ydm.buildCurve(obj)) +")";
        if(nowTime - startTime < time){
            nextFlash(running);
        }else{
            elem.style.opacity = 0;
            elem.style.filter = "Alpha(Opacity=0,FinishOpacity=0,Style=0)";
        }
    }
    nextFlash(running);
}
ydm.imgsSwitch = function(){
    var elems = ydm(".ydm_imgsSwitch");
    if(elems.length === 0){
        return false;
    }
    for(var i=0; i<elems.length; i++){
        loadFunc(elems[i]);
    }
    function loadFunc(elem){
        ydm(elem);
        var imgs  = elem.getByClass("ydm_img");
        var tars  = elem.getByClass("ydm_tar");
        var left  = elem.getByClass("ydm_left")[0];
        var right = elem.getByClass("ydm_right")[0];
        if(imgs.length === 0 || imgs.length < 2){
            return false;
        }
        if(tars.length === imgs.length){
            elem.cgTar = true;
        }
        var i ;
        for(i=0; i < imgs.length; i++){
            imgs[i].index = i;
        }
        for(i=0; i < tars.length; i++){
            tars[i].index = i;
        }
        var oNow = imgs[0];
    	var oNext = imgs[1];
        var interval = null;
        function toNext(){
            fade(oNow,oNext);
            cgTar(oNow.index,oNext.index);
            oNow = oNext;
            reset();
        }
        function toBefor(){
            if(oNow.index === 0){
                oNext = imgs[imgs.length-1];
            }else{
                oNext = imgs[oNow.index-1];
            }
            fade(oNow,oNext);
            cgTar(oNow.index,oNext.index);
            oNow = oNext;
            reset();
        }
        function tarSelect(tar){
            clearTimeout(interval);
            oNext = imgs[tar.index];
            fade(oNow,oNext);
            cgTar(oNow.index,oNext.index);
            oNow = oNext;
            reset();
            loop();
        }
        function fade(fadeOut,fadeIn){
            ydm.fadeOut(fadeOut);
            ydm.fadeIn(fadeIn); 
        }
        function cgTar(nowT,nextT){
            if(!elem.cgTar){
                return false;
            }
            ydm.removeClass(tars[nowT],"ydm_imgsSwitch_tar");
            tars[nextT].className += " ydm_imgsSwitch_tar";
        }
        function reset(){
            if(oNow.index === imgs.length-1){
                oNext = imgs[0];
            }else{
                oNext = imgs[oNow.index+1];
            }
        }
        function loop(){
            interval = setInterval(function(){
                toNext();
            },3000);
        }
        loop();
        if(ydm.checkNode(right)){
            ydm(right).addEvent("click",function(){
                clearTimeout(interval);
                toNext();
                loop();
            });
        }
        if(ydm.checkNode(left)){
            ydm(left).addEvent("click",function(){
                clearTimeout(interval);
                toBefor();
                loop();
            });
        }
        for(var i = 0; i < tars.length ;i++){
            ydm.addEvent(tars[i],"mouseover",function(){
                tarSelect(this);
            });
        }
    }
};
ydm.running(ydm.imgsSwitch);
ydm.imgsMove = function(){
    var elems = ydm(".ydm_imgsMove");
    if(elems.length === 0){
        return false;
    }
    for(var i=0; i<elems.length; i++){
        loadFunc(elems[i]);
    }
    function loadFunc(elem){
        ydm(elem);
        var running = false;
        elem.style.overflow = "hidden";
        var mdl   = elem.getByClass("ydm_mdl")[0];
        if(!mdl){
            return false;
        }
        mdl.innerHTML += mdl.innerHTML;
        var imgs  = elem.getByClass("ydm_img"),
            tars  = elem.getByClass("ydm_tar"),
            left  = elem.getByClass("ydm_left")[0],
            right = elem.getByClass("ydm_right")[0];
        if(imgs.length < 2){
            return false;
        }
        var imgW = ydm.getElementSize(imgs[0]).width;
        mdl.style.width = imgW * imgs.length + "px";
        if(tars.length === imgs.length/2){
            elem.cgTar = true;
        }
        var i ;
        for(i = 0; i < imgs.length; i++){
            imgs[i].left = -(i * imgW);
            imgs[i].index = i;
        }
        for(i = 0; i < tars.length; i++){
            tars[i].index = i;
        }
        var now   = imgs.length/2,
            tarNow   = 0,
            tarBefor = 0;
        ydm.move( { elem:mdl, left:imgs[now].left, instantly:true} );
        function callBack(){
            if(now === 0){
                ydm.move( { elem:mdl, left:imgs[imgs.length/2].left, instantly:true} );
                now = imgs.length/2;
            }
            if(now === imgs.length-1){
                ydm.move( { elem:mdl, left:imgs[imgs.length/2 - 1].left, instantly:true} );
                now = imgs.length/2 - 1;
            }
            running = false;
        }
        function toNext(){
            now += 1;
            ydm.move( { elem:mdl, left:imgs[now].left, callBack:callBack } );
            if(elem.cgTar){
                tarBefor = tarNow;
                tarNow += 1;
                if(tarNow === tars.length){
                    tarNow = 0;
                }
                cgTar(tarBefor,tarNow);
            }
        }
        function toBefor(){
            now -= 1;
            ydm.move( { elem:mdl, left:imgs[now].left, callBack:callBack } );
            if(elem.cgTar){
                tarBefor = tarNow;
                tarNow -= 1;
                if(tarNow < 0){
                    tarNow = tars.length - 1;
                }
                cgTar(tarBefor,tarNow);
            }
        }
        function tarSelect(index){
            if(elem.cgTar){
                tarBefor = tarNow;
                tarNow = index;
                cgTar(tarBefor,tarNow);
            }
            if(now >= imgs.length/2 ){
                index += imgs.length/2;
            }
            now = index;
            ydm.move( { elem:mdl, left:imgs[now].left, callBack:callBack } );
        }
        function cgTar(tarBefor,tarNow){
            if(!elem.cgTar){
                return false;
            }
            ydm.removeClass(tars[tarBefor],"ydm_imgsMove_tar");
            tars[tarNow].className += " ydm_imgsMove_tar";
        }
        var interval = null;
        function loop(){
            interval = setInterval(function(){
                if(running){
                    return false;
                }
                running = true;
                toNext();
            },3000);
        };
        loop();
        if(ydm.checkNode(right)){
            ydm(right).addEvent("click",function(){
                if(running){
                    return false;
                }
                running = true;
                clearTimeout(interval);
                toNext();
                loop();
            });
        }
        if(ydm.checkNode(left)){
            ydm(left).addEvent("click",function(){
                if(running){
                    return false;
                }
                running = true;
                clearTimeout(interval);
                toBefor();
                loop();
            });
        }
        for(var i = 0; i < tars.length; i++){
            ydm.addEvent(tars[i],"mouseover",function(){
                if(running){
                    return false;
                }
                running = true;
                clearTimeout(interval);
                tarSelect(this.index);
                loop();
            });
        }
    }
};
ydm.running(ydm.imgsMove);
ydm.touch_mdlsMove_x = function(){
    var elems = ydm(".touch_mdlsMove_x");
    if(elems.length === 0){
        return false;
    }
    for(var i=0; i<elems.length; i++){
        loadFunc(elems[i]);
    }
    function loadFunc(elem){
        ydm(elem);
        var mdls = elem.getByClass("ydm_mdl");
        var tars = elem.getByClass("ydm_tar");
        if(mdls.length < 2){
            return false;
        }
        var mdlW = ydm.getElementSize(mdls[0]).width;
        var i ;
        for(i = 0; i < mdls.length; i++){
            mdls[i].index = i;
            if(i > 0){
                mdls[i].style.left = -mdlW + "px";
            }
        }
        for(i = 0; i < tars.length; i++){
            tars[i].index = i;
        }
        if(tars.length === mdls.length){
            elem.cgTar = true;
        }
        var oNow   = mdls[0],
            oldNow = oNow,
            oLeft  = null,
            oRight = null;
        resetMdls();
        var startX = 0 ,
            startY = 0 ,
            distX  = 0 ,
            distY  = 0;
        moveX = false;
        elem.addEvent("touchstart",function(){
            moveX = false;
            moveY = false;
            var event = ydm.getEvent();
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
        });
        elem.addEvent("touchmove",function(){
            if(elem.touchmoving){
                return false;
            }
            var event = ydm.getEvent();
            distX = event.changedTouches[0].clientX - startX;
            distY = event.changedTouches[0].clientY - startY;
            if(!moveX && !moveY){
                if(Math.abs(distX) > Math.abs(distY)){
                    moveX = true;
                }else{
                    moveY = true;
                }
            }
            if(moveX){
                event.preventDefault();
                event.stopPropagation();
                oNow.style.left = distX + "px";
                oLeft.style.left = -mdlW + distX + "px";
                oRight.style.left = mdlW + distX + "px";
            } 
        });
        elem.addEvent("touchend",function(){
            var oNowX = parseInt(oNow.style.left);
            if(oNowX > 0 && Math.abs(oNowX) > mdlW/6){
                toBefore();
            }else if(oNowX < 0 && Math.abs(oNowX) > mdlW/6){
                toNext();
            }else{
                restore();
            }
        });
        function resetMdls(){
            oldNow.style.zIndex = 0;
            oNow.style.zIndex = 500;
            if(elem.cgTar){
                cgTar(oldNow.index,oNow.index);
            }
            oldNow = oNow;
            if(oNow.index === 0){
                oLeft  = mdls[mdls.length-1];
                oRight = mdls[oNow.index+1];
            }else if(oNow.index === mdls.length-1){
                oLeft  = mdls[oNow.index-1];
                oRight = mdls[0];
            }else{
                oLeft  = mdls[oNow.index-1];
                oRight = mdls[oNow.index+1];
            }
            oNow.style.left = 0 + "px";
            oLeft.style.left = -mdlW + "px";
            oRight.style.left = mdlW + "px";
        }
        function toBefore(){
            //elem.touchmoving = true;
            ydm.move({"elem":oNow,"left":mdlW,"callBack":resetMdls,"time":300});
            ydm.move({"elem":oLeft,"left":0,"time":300});
            oNow = oLeft;
        }
        function toNext(){
            //elem.touchmoving = true;
            ydm.move({"elem":oNow,"left":-mdlW,"callBack":resetMdls,"time":300});
            ydm.move({"elem":oRight,"left":0,"time":300});
            oNow = oRight;
        }
        function restore(){
            ydm.move({"elem":oNow,"left":0});
            ydm.move({"elem":oLeft,"left":-mdlW});
            ydm.move({"elem":oRight,"left":mdlW});
        }
        function callBack(){
            //elem.touchmoving = false;
            
        }
        function cgTar(now,next){
            ydm.removeClass(tars[now],"ydm_touch_mdlsMove_x_tar");
            tars[next].className += " ydm_touch_mdlsMove_x_tar";
        }
    }
}
ydm.running(ydm.touch_mdlsMove_x);
ydm.dropDownNav = function(){
    var elems = ydm(".pullDown_nav");
    if(elems.length === 0){
        return false;
    }
    for(var i = 0; i < elems.length ;i++){
        loadFunc(elems[i]);
    }
    function loadFunc(elem){
        if(!elem){
            return false;
        }
        ydm(elem);
        var tabs = elem.getByClass("pullD_tab");
        var mdls = elem.getByClass("pullD_mdl");
        if(!tabs||!mdls){
            return false;
        }
        if(tabs.length ===0 || tabs.length != mdls.length){
            return false;
        }
        var mdlText = null;
        for(var i=0;i<tabs.length;i++){
            tabs[i].index = i;
            mdls[i].state = "hide";
            mdlText = ydm(mdls[i]).getByClass("pullD_content")[0];
            if(mdlText){
                mdls[i].targetH = ydm.getElementSize(mdlText).height;
            }else{
                mdls[i].targetH = 0;
            }
            addEvent(tabs[i],mdls[i]);
        }
        function addEvent(tab,mdl){
            ydm.addEvent(tab,"click",function(){
                if(mdl.state === "hide"){
                    tab.className += " pullDown_naved";
                    ydm.cgSize({ elem:mdl, height:mdl.targetH ,time:300 });
                    mdl.state = "show";
                    resetOthersH(tab.index);
                }else{
                    ydm.removeClass(tab,"pullDown_naved");
                    ydm.cgSize({ elem:mdl, height:0 ,time:300 });
                    mdl.state = "hide";
                }
            });
        }
        function resetOthersH(index){
            for(var x=0; x < mdls.length; x++){
                if(x === index){
                    continue;
                }
                ydm.cgSize({ elem:mdls[x], height:0 ,time:300 });
                mdls[x].state = "hide";
                ydm.removeClass(tabs[x],"pullDown_naved");
            }
        }
    }
}
ydm.running(ydm.dropDownNav);
function windowsCascade(){
    var elems = ydm(".ydm_windowsCascade");
    if(elems.length === 0){
        return false;
    }
    for(var i=0; i < elems.length; i++){
        loadFunc(elems[i]);
    }
    function loadFunc(elem){
        ydm(elem);
        var mdls = elem.getByClass("ydm_mdl");
        if(!mdls||mdls.length < 2){
            return false;
        }
        elem.style.overflow = "hidden";
        var elemW = ydm.getElementSize(elem).width ,
            mdlW  = ydm.getElementSize(mdls[0]).width ,
            dist  = (elemW - mdlW)/(mdls.length - 1);
        
        for(i=0; i < mdls.length; i++){
            mdls[i].style.position = "absolute";
            if(i === 0){
                mdls[i].style.left = "0px";
            }else{
                mdls[i].style.left = (i - 1) * dist + mdlW + "px";
            }
            mdls[i].index = i;
            mdls[i].start = (i - 1) * dist + mdlW;
            mdls[i].end   = mdls[i].start - (mdlW - dist);
            addEvent(mdls[i]);
        }
        function addEvent(mdl){
            ydm(mdl).addEvent("mouseover",function(){
                for(var x = this.index; x > 0; x--){
                    ydm.move({"elem":mdls[x],"left":mdls[x].end,"time":100});
                }
                for(x = this.index+1; x < mdls.length; x++){
                    ydm.move({"elem":mdls[x],"left":mdls[x].start,"time":100});
                }
            });
        }
    }
}
ydm.running(windowsCascade);
ydm.ydmScroll = {
    "moving":false,
    "x":0,
    "y":0,
    "count":0,
    "arrY":new Array()
};
ydm.moveScroll_y = function(targetY){
    if(!targetY && targetY!=0){
        return false;
    }
    targetY = parseInt(targetY);
    var coordinate = ydm.getScrollOffsets();
    ydm.ydmScroll.y = coordinate.y;
    if(ydm.ydmScroll.y === targetY){
        return false;
    }
    
    window.scrollTo(null,targetY);
}
ydm.goTop = function(){
    var gotop = ydm(".goTop")[0];
    if(!gotop){
        return false;
    }
    ydm.addEvent(gotop,"click",function(){
        ydm.moveScroll_y(0);
    });
}
ydm.running(ydm.goTop);
ydm.bycNav = function(jsn){
    var elems     = jsn.elems;
    var checkedCl = jsn.checkedCl;
    if(elems.length==0){
        return false;
    }
    var nowTab = null;
    var chapter = null;
    for(var x=0;x<elems.length;x++){
        chapter = elems[x];
        chapter.style.transition = "300ms";
        var tab = ydm(chapter).getByClass("tab")[0];
        tab.height = getElementSize(tab).height;
        var mdl = chapter.getByClass("mdl")[0];
        chapter.tab = tab;
        if(!tab||!mdl){
            continue;
        }
        tab.index = x;
        tab.state = "hide";
        tab.tarHeight = getElementSize(mdl).height + tab.height;
        addEvent(chapter,tab,mdl);
    }
    function addEvent(chapter,tab,mdl){
        ydm(tab).addEvent("click",function(){
            if(nowTab){
                nowTab.style.color = "";
            }
            if(checkedCl){
                this.style.color = checkedCl;
            }
            nowTab = this;
            if(this.state=="hide"){
                chapter.style.height = this.tarHeight + "px";
                this.state = "show";
                resetHeight(this.index,this.height);
            }else{
                chapter.style.height = this.height+"px";
                this.style.color = "rgb(0,0,0)";
                this.state = "hide";
            }
        },false);
    }
    function resetHeight(index,tabH){
        for(var x=0;x<elems.length;x++){
            if(x==index){
                continue;
            }
            elems[x].style.height = tabH + "px";
            if(elems[x].tab){
                elems[x].tab.state = "hide";
            }
        }
    }
}
ydm.switchMdl = function(jsn){
    var tabs = jsn.tabs;
    var mdls = jsn.mdls;
    if(!tabs||!mdls){
        return false;
    }
    if(tabs.length==0||mdls.length==0){
        return false;
    }
    if(tabs.length!=mdls.length){
        return false;
    }
    for(var i=0;i<tabs.length;i++){
        tabs[i].index = i;
        mdls[i].index = i;
        addEvent(tabs[i],mdls[i]);
    }
    var index = 0;
    function addEvent(tab,mdl){
        ydm.addEvent(tab,"click",function(){
            if(index === this.index){
                return false;
            }
            clearSelected();
            this.className += " switchTab_ed";
            mdls[index].style.display = "none";
            mdls[this.index].style.display = "block";
            index = this.index;
        });
    }
    function clearSelected(){
        for(var i=0;i<tabs.length;i++){
            var check = tabs[i].className.indexOf("switchTab_ed");
            if(check!=-1){
                var str = tabs[i].className;
                str = str.replace("switchTab_ed","");
                var str2 = str.trim();
                tabs[i].className = str2;
            }
        }
    }
}
ydm.switchMdl_run = function(){
    var elems = ydm(".switchMdl");
    if(elems.length === 0){
        return false;
    }
    var elem = null;
    for(var i=0; i < elems.length; i++){
        elem = elems[i];
        ydm(elem);
        var tabs = elem.getByClass("switchMdl_tab");
        var mdls = elem.getByClass("switchMdl_mdl");
        var jsn = {
            "tabs":tabs,
            "mdls":mdls
        };
        ydm.switchMdl(jsn);
    } 
}
ydm.running(ydm.switchMdl_run);
ydm.switchState = function(jsn){
    var elem    = jsn.elem;
    var cancel  = jsn.cancel;
    var checked = jsn.checked;
    var state   = jsn.state;
    if(!elem||!cancel||!checked){
        return false;
    }
    if(!state){
        state = "hide";
    }
    elem.onclick = function(){
        if(state=="hide"){
            cancel.style.display = "none";
            checked.style.display = "block";
            state = "show";
        }else{
            cancel.style.display = "block";
            checked.style.display = "none";
            state = "hide";
        }
    };
}
ydm.switchState_run = function(){
    var elems = ydm(".switchState");
    if(elems.length==0){
        return false;
    }
    var elem = null;
    var state = "";
    for(i=0;i<elems.length;i++){
        elem = elems[i];
        state = elem.getAttribute("state");
        if(!elem.state){
            elem.state = "hide";
        }
        var cancel  = ydm(elem).getByClass("cancel")[0];
        var checked = elem.getByClass("checked")[0];
        if(!cancel||!checked){
            return false;
        }
        var jsn = {
            "elem":elem,
            "cancel":cancel,
            "checked":checked,
            "state":state
        };
        ydm.switchState(jsn);
    } 
}
ydm.running(ydm.switchState_run);
ydm.dropDownMenu_mdls = function(){
    var elems = ydm(".dropDownMenu_mdls");
    if(elems.length === 0){
        return false;
    }
    for(var i=0; i < elems.length; i++){
        loadFunc(elems[i]);
    }
    function loadFunc(elem){
        ydm(elem);
        var tabs  = elem.getByClass("tab");
        var mdls  = elem.getByClass("mdl");
        if(tabs.length != mdls.length){
            return false;
        }
        for(i=0; i < tabs.length; i++){
            tabs[i].index = i;
            mdls[i].index = i;
            addEvent(tabs[i]);
            addEvent_Mdl(mdls[i]);
        }
        function addEvent(tab){
            ydm.addEvent(tab,"mouseover",function(){
                this.className += " dropDownMenu_mdls_tar";
                hideOthers(this.index);
                ydm.fadeIn(mdls[this.index]);
                mdls[this.index].style.display = "block";
            });
            ydm.addEvent(tab,"mouseout",function(){
                tab.hide = true;
                setTimeout(function(){
                    if(tab.hide){
                        mdls[tab.index].style.display = "none";
                        ydm.removeClass(tab,"dropDownMenu_mdls_tar");
                    } 
                },100);
            });
        }
        function addEvent_Mdl(mdl){
            ydm.addEvent(mdl,"mouseover",function(){
                tabs[mdl.index].hide = false;
            });
            ydm.addEvent(mdl,"mouseout",function(){
                this.style.display = "none";
                ydm.removeClass(tabs[this.index],"dropDownMenu_mdls_tar");
            });
        }
        function hideOthers(index){
            for(i=0; i < tabs.length; i++){
                if(i != index){
                    mdls[i].style.display = "none";
                    ydm.removeClass(tabs[i],"dropDownMenu_mdls_tar");
                }
            }
        }
    }
}
ydm.running(ydm.dropDownMenu_mdls);
ydm.ajax = function(jsn){
	var url     = jsn.url;
	var method  = jsn.method;
	var params  = jsn.params;
	var fnSucc  = jsn.fnSucc;
	var oAjax   = null;
	if(window.XMLHttpRequest){
	    oAjax = new XMLHttpRequest();
	}
	else{
	    oAjxa = new ActiveXObject("Microsoft.XMLHTTP");
	}
	oAjax.open(method,url,true);
	if(method=="post"){
	    oAjax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	    oAjax.send(parameters);
	}
	else{
	    oAjax.send();
	}
	oAjax.onreadystatechange=function(){ 
	    if(oAjax.readyState==4){
		    if(oAjax.status==200){
				if(fnSucc){
					fnSucc(oAjax.responseText);
				}else{
					return oAjax.responseText;
				}
			}
		}
	}
}