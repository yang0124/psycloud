<!-- %@ taglib uri="/WEB-INF/tlds/c.tld" prefix="c" %> -->
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/WEB-INF/tlds/authority.tld" prefix="authority"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %> 
<c:set var="basePath" value="${pageContext.request.contextPath }" />

<!-- basic styles -->
<link href="${basePath}/front/css/bootstrap.min.css" rel="stylesheet" />
<link href="${basePath}/front/css/bootstrap-responsive.min.css"
	rel="stylesheet" />
<link rel="stylesheet" href="${basePath}/front/css/font-awesome.min.css" />
<!--[if IE 7]>
		  <link rel="stylesheet" href="css/font-awesome-ie7.min.css" />
		<![endif]-->
<!-- page specific plugin styles -->

<link rel="stylesheet"
	href="${basePath}/front/css/jquery-ui-1.10.2.custom.min.css" />
<link rel="stylesheet" href="${basePath}/front/css/jquery.gritter.css" />
<!-- ace styles -->
<link rel="stylesheet" href="${basePath}/front/css/ace.min.css" />
<link rel="stylesheet"
	href="${basePath}/front/css/ace-responsive.min.css" />
<link rel="stylesheet" href="${basePath}/front/css/ace-skins.min.css" />
<!--[if lt IE 9]>
		  <link rel="stylesheet" href="css/ace-ie.min.css" />
		<![endif]-->
<!-- basic scripts -->
<script src="${basePath}/front/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
	window.jQuery
			|| document
					.write("<script src='js/jquery-1.9.1.min.js'>\x3C/script>");
</script>

<script src="${basePath}/front/js/bootstrap.min.js"></script>

<!--[if lt IE 9]>
		<script type="text/javascript" src="js/excanvas.min.js"></script>
		<![endif]-->
<script type="text/javascript"
	src="${basePath}/front/js/jquery-ui-1.10.2.custom.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/jquery.ui.touch-punch.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/jquery.slimscroll.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/jquery.easy-pie-chart.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/jquery.sparkline.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/jquery.flot.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/jquery.flot.pie.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/jquery.flot.resize.min.js"></script>

<!-- page specific plugin scripts -->

<script type="text/javascript" src="${basePath}/front/js/prettify.js"></script>

<script type="text/javascript"
	src="${basePath}/front/js/jquery.dataTables.min.js"></script>
<script type="text/javascript"
	src="${basePath}/front/js/jquery.dataTables.bootstrap.js"></script>
<!-- ace scripts -->
<script src="${basePath}/front/js/ace-elements.min.js"></script>
<script src="${basePath}/front/js/ace.min.js"></script>
<!-- inline scripts related to this page -->

<script type="text/javascript">
	function windowOpen(url, target) {
		var a = document.createElement("a");
		a.setAttribute("href", url);
		if (target == null) {
			target = '';
		}
		a.setAttribute("target", target);
		document.body.appendChild(a);
		if (a.click) {
			a.click();
		} else {
			try {
				var evt = document.createEvent('Event');
				a.initEvent('click', true, true);
				a.dispatchEvent(evt);
			} catch (e) {
				window.open(url);
			}
		}
		document.body.removeChild(a);
	};
</script>


