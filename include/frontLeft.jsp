<%@ page pageEncoding="UTF-8" %>
	  <div class = "menus"> <!-- 菜单(start) -->
        <div class="logo">
        	<!-- <img src = "${basePath}/pc/images/home/logo.png" height = 45  /> -->
        </div>
        <c:forEach var="item" items="${returnList}" varStatus="status">
        	<c:if test="${item.isRoot&&item.isRoleMenu}">
        	<div class="sub">	
        		<div class="subNav " id="${item.code }">${item.menuName}  </div>
        		<ul class="navContent" style="display: none;">
        			<c:forEach var="chileItem" items="${item.childMenuList}" varStatus="status">
	        			<c:if test="${chileItem.isRoleMenu}">
			                <li><a href="${basePath}${chileItem.menuUrl}">${chileItem.menuName}</a></li>
			            </c:if>
			        </c:forEach> 
	            </ul>
	          </div> 
        	</c:if>  
		</c:forEach> 
        <div class="menusButtomNull" style="height:auto; ;">&nbsp;</div>
    </div> <!-- 菜单(end) -->

	 

	 