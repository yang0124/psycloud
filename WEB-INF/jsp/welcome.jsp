<%@ page pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <title>欢迎界面</title>
    <%@include file="/common/base.jsp"%>
    <link href="${basePath}/files/welcome/styles.css" type="text/css" rel="stylesheet"/>
  </head>
  <body>

<div id="head">
</div>
<div id="content">
  <div id="left">
  	 <%@include file="/include/leftmenu.jsp"%>
  </div>
  <div id="c">
      <!-- Unnamed (形状) -->
      <div id="u19" class="ax_文本">
        <img id="u19_img" class="img " src="${basePath}/resources/images/transparent.gif"/>
        <!-- Unnamed () -->
        <div id="u20" class="text">
          <p><span>欢</span><span>迎</span><span>界面！</span></p>
        </div>
      </div>

  </div>
</div>

  </body>
</html>
