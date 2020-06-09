$(function() {
    //这是在判断active，移除掉其他的active
    $(".dropdown-menu>li>a[role='second-menu']").bind("click",function() {
        $(this).parents(".dropdown-menu").find("li").removeClass("active");
        $(this).parent().addClass("active");
        return false
    });
    //创建一个container
    var container = $(document.createElement("div"));
    container.addClass("container");
    //创建Nav左边的brand，并且设置点击可以跳转为首页
    var brand = $(document.createElement("div"));
    brand.addClass("navbar-header").append('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="index.html"><img src="front/img/logo.png" > &nbsp;</a>');
    //创建一个Nav导航条
    var nav = $(document.createElement("div"));
    nav.addClass("navbar-collapse collapse").attr("id", "navbar");
    var ul = setMenus();
    nav.append(ul);
    container.append(brand, nav);
    $("#main_menu").append(container);
    
    //这是底部部分
    var footer = $("#footerInfo");
    //创建了 一个nav
    var fnav = $(document.createElement("nav"));
    fnav.addClass("navbar navbar-inverse navbar-cominfo");
    var con = $(document.createElement("div"));
    con.addClass("container");
    con.append('<div class="row">' + '<div class="col-xs-12 col-md-3">' + 
    '<h5 class="white">北京心云天地科技有限公司</h5>' + '<p>电话：<span class="white">010-62669411</span></p>' + '<p>地址：<span class="white">北京市海淀区上地十街1号院3号楼14层</span></p>' + '<p>网址：<span class="white">http://www.psycloud.com.cn</span></p>' + '<div class="space"></div>' + "</div>" + '<div class="col-xs-12 col-md-3">' +
    '<h5 class="white">湖南心云天地科技有限公司</h5>'+'<p>电话：<span class="white">18610813307</span></p>' + '<p>地址：<span class="white">长沙市雨花区古曲南路198号</span></p>' + '<div class="space"></div>' + "</div>" + '<div class="col-xs-12 col-md-3">' + 
    '<h5 class="white">重庆研发中心</h5>' + '<p>电话：<span class="white">023-68681786</span></p>' + '<p>地址：<span class="white">重庆市九龙坡区谢家湾正街55号华润广场</span></p>' + '<div class="space"></div>' + "</div>" + '<div class="col-xs-12 col-md-3 text-center">' + 
    '<p><img src="front/img/qrcode.png" class="img-responsive center-block"></p>' + '<p class="white"></p>' + '<p class="white"></p>' + "</div>").appendTo(fnav);
    var rights = $(document.createElement("div"));
    rights.addClass("all-rights").append('<div class="col-xs-12 text-center">' + 'Copyright &copy; 2016.北京心云天地科技有限公司 All rights reserved. | <a href="http://beian.miit.gov.cn/" target="_blank">京ICP备16046267号-1</a>' + "</div>");
    footer.append(fnav, rights);
    /*$(".dropdown-menu>li>a[role='second-menu']").unbind("click");
    $(".dropdown-menu>li>a[role='second-menu']").bind("click",
    function() {
        $(this).parents(".dropdown-menu").find("li").removeClass("active");
        $(this).parent().addClass("active");
        return false
    })*/
});
//获取页面的信息
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    }
    return null
}
//这是导航条的压入方式
function setMenus() {
    var ul = $(document.createElement("ul"));
    ul.addClass("nav navbar-nav pull-right").attr("id", "mainMenuNav");
    $.each(menus,
    function(i, item) {
        //这是判断type类型，看是否有下拉菜单
        var type = item.type;
        //当type==0时，就没有下拉菜单
        if (type == 0) {
            var li = $(document.createElement("li"));
            li.append('<a href="' + item.url + '">' + item.name + "</a>");
            ul.append(li)
        } else {
            //当type==1的时候就是一级下拉菜单
            if (type == 1) {
                var li = $(document.createElement("li"));
                li.addClass("dropdown").append('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + item.name + '<small><span class="glyphicon glyphicon-chevron-down grey" aria-hidden="true"></span></small></a>');
                //在Li中创建另一个下拉的ul
                var _ul = $(document.createElement("ul"));
                _ul.addClass("dropdown-menu");
                $.each(item.list,
                function(k, j) {
                    var _li = $(document.createElement("li"));
                    _li.append('<a href="' + j.url + '">' + j.title + "</a>");
                    _ul.append(_li)
                });
                //吧下拉的ul压入到li中
                li.append(_ul);
                //把li压入到ul中
                ul.append(li)
            } else {
                
                if (type == 2) {
                    var li = $(document.createElement("li"));
                    li.addClass("dropdown").append('<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + item.name + '<small><span class="glyphicon glyphicon-chevron-down grey" aria-hidden="true"></span></small></a>');
                    var _ul = $(document.createElement("ul"));
                    _ul.addClass("dropdown-menu");
                    $.each(item.list,function(k, j) {
                        if(j.kind==0){
                            var _li = $(document.createElement("li"));
                            let href = j.items[0].url.split('&');
                            href = href[0] + "&id=-1";
                             _li.append('<a href="' + href + '" role="second-menu">' + j.name + "</a>");
                            /*var _ul2 = $(document.createElement("ul"));
                            _ul2.addClass("dropdown-menu-second");
                            $.each(j.items,function(a, b) {
                                var _li2 = $(document.createElement("li"));
                                _li2.append('<a href="' + b.url + '">' + b.title + "</a>");
                                _ul2.append(_li2)
                            });
                            _li.append(_ul2);*/
                            _ul.append(_li)
                        }else{
                            var _li = $(document.createElement("li"));
                            let href = j.items[0].url.split('&');
                            href = href[0] + "&id=-1";
                             _li.append('<a href="' + href + '" role="second-menu" target="_blank">' + j.name + "</a>");
                            /*var _ul2 = $(document.createElement("ul"));
                            _ul2.addClass("dropdown-menu-second");
                            $.each(j.items,function(a, b) {
                                var _li2 = $(document.createElement("li"));
                                _li2.append('<a href="' + b.url + '">' + b.title + "</a>");
                                _ul2.append(_li2)
                            });
                            _li.append(_ul2);*/
                            _ul.append(_li)
                        }
                        
                    });
                    li.append(_ul);
                    ul.append(li)
                }
            }
        }
    });
    return ul
}
//这是active样式展示的方法
function setMenusActivity(id) {
    var ls = $("#mainMenuNav>li");
    if (ls) {
        $(ls[id]).addClass("active")
    }
}
function addPageContent(page, size, obj) {
    var ls = [];
    var list = $(obj);
    var pages = Math.ceil(issues.length / size);
    var start = (pages - page) * size;
    var end = (pages - page + 1) * size;
    if (end > issues.length) {
        end = issues.length
    }
    for (i = start; i < end; i++) {
        ls.push(issues[i])
    }
    list.html("");
    for (i = ls.length - 1; i >= 0; i--) {
        var item = ls[i];
        var li = $(document.createElement("li"));
        var _li = "";
        if (item.if_new) {
            li.addClass("active");
            _li += '<a href="';
            _li += item.url;
            _li += '" target="_blank"><div class="row"><div class="col-xs-4"><span>';
            _li += item.issue;
            _li += '</span><span class="top-new">New</span></div><div class="col-xs-8">';
            _li += item.title;
            _li += "</div></div></a>";
            li.append(_li)
        } else {
            _li += '<a href="';
            _li += item.url;
            _li += '" target="_blank"><div class="row"><div class="col-xs-4"><span>';
            _li += item.issue;
            _li += '</span></div> <div class="col-xs-8">';
            _li += item.title;
            _li += "</div></div></a>";
            li.append(_li)
        }
        li.appendTo(list)
    }
}
function pagination(page, size, obj) {
    var pagecon = $(document.createElement("ul"));
    pagecon.addClass("pagination");
    var pages = Math.ceil(issues.length / size);
    var li = $(document.createElement("li"));
    if (page == 1) {
        li.addClass("disabled")
    }
    li.append('<a href="javascript:;" aria-label="Previous" data-page="-1"><span aria-hidden="true">&laquo;</span></a>').appendTo(pagecon);
    for (i = 1; i <= pages; i++) {
        var li = $(document.createElement("li"));
        li.append('<a href="javascript:;" aria-label="page" data-page="' + i + '"><span aria-hidden="true">' + i + "</span></a>");
        if (page == i) {
            li.addClass("active")
        }
        li.appendTo(pagecon)
    }
    var li2 = $(document.createElement("li"));
    if (page == pages) {
        li2.addClass("disabled")
    }
    li2.append('<a href="javascript:;" aria-label="Next" data-page="+1"><span aria-hidden="true">&raquo;</span></a>').appendTo(pagecon);
    $(obj).html(pagecon)
};
window.onload = function(){
    refreshImg();

}
function refreshImg() { 
    var imgs = document.getElementsByTagName("img");
    for (var i = 0,l = imgs.length; i < l; i++) {
        var url = imgs[i].getAttribute("data-src");
        if (imgs[i].src && url) {
            getImage(url,imgs[i]);
        }
    }
}; 

function  getImage(imgUrl,imgNode){
    /*var _img = new Image();
    _img.src = imgUrl;
    _img.onload = function(){
        imgNode.src = this.src;
        //return this.src;
    }*/
    var canvas = document.createElement('canvas'); 
    var ctx = canvas.getContext('2d'); 
    var img = new Image(); 
    img.src = imgUrl;
    //img.crossOrigin = 'Anonymous'; 
    img.onload = function(){ 
        canvas.height = img.height; 
        canvas.width = img.width; 
        ctx.drawImage(img,0,0); 
        // var dataURL = canvas.toDataURL('image/jpg');
        // imgNode.src = dataURL;
    }
}