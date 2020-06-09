<%@ page pageEncoding="UTF-8"%>
<script type="text/javascript">
var areaData;
function commonAreaComboTree(comboTree) {
	getAreaTreaData();
	$(comboTree).combotree({
		data : areaData,
		valueField : 'id',
		textField : 'text',
		editable : false,
		method : 'GET',
		onBeforeExpand : function(node, param) {
			$.ajax({
				type : 'get',
				async : false,
				url : '${basePath}/js/areadata/' + node.id + '.json',
				dataType : "json",
				success : function(data) {
					var areaCombTree = $(comboTree).combotree('tree');
					areaNode = areaCombTree.tree('find', node.id);
					if (areaCombTree.tree('getChildren', areaNode.target).length == 0 && areaNode) {
						$(areaCombTree).tree('append', {
							parent : areaNode.target,
							data : data
						});
					}
				},
				error : function() {
					$.messager.error('请求异常');
				}
			});
		}
	});
};
function getAreaTreaData() {
	$.ajax({
		type : 'get',
		async : false,
		url : "${basePath}/js/areadata/all.json",
		dataType : "json",
		success : function(data) {
			areaData = data;
		},
		error : function() {
			$.messager.error('请求异常');
		}
	});
}
function expandToNode(comboTree, areaCode) {
	if(!areaCode || '' == areaCode){
		return;
	}
	var i = 2;
	var currCode;
	while (i < areaCode.length && i <= 6) {
		try {
			currCode = areaCode.substring(0, i);
			currCode = currCode * Math.pow(10,6-i);
			$.ajax({
				type : 'get',
				async : false,
				url : "${basePath}/js/areadata/" + currCode + ".json",
				dataType : "json",
				success : function(data) {
					var areaCombTree = $(comboTree).combotree('tree');
					var areaNode = areaCombTree.tree('find', currCode);
					if (areaNode != null && areaCombTree.tree('getChildren', areaNode.target).length == 0) {
						$(areaCombTree).tree('append', {
							parent : areaNode.target,
							data : data
						});
						areaCombTree.tree('expand', areaNode.target);
					}
				},
				error : function() {}
			});
			i = i + 2;
		} catch (e) {
			return;
		}
	}
}
function getNameByCode(areaCode){
	var re_p =/\d{2}0000$/;
	var re_c =/\d{4}00$/;
	var re =/\d{6}$/;
	var result_p =  re_p.test(areaCode);
	var result_c =  re_c.test(areaCode);
	var result =  re.test(areaCode);
	var returnStr = '';
	if(!result){
		return;
	}
	if(result_p){
		$.ajax({
			type : 'get',
			async : false,
			url : "${basePath}/js/areadata/all.json",
			dataType : "json",
			success : function(data) {
				for ( var i = 0; i < data[0].children.length; i++) {
					if(data[0].children[i].id == areaCode){
						returnStr = data[0].children[i].text;
						break;
					}
				}
			},
			error : function() {}
		});
	}else if(result_c){
		var currCode = areaCode.substring(0, 2);
		currCode = currCode * 10000;
		$.ajax({
			type : 'get',
			async : false,
			url : "${basePath}/js/areadata/"+currCode+".json",
			dataType : "json",
			success : function(data) {
				for ( var i = 0; i < data.length; i++) {
					if(data[i].id == areaCode){
						returnStr = data[i].text;
						break;
					}
				}
			},
			error : function() {}
		});
	}else{
		var currCode = areaCode.substring(0, 4);
		currCode = currCode * 100;
		$.ajax({
			type : 'get',
			async : false,
			url : "${basePath}/js/areadata/"+currCode+".json",
			dataType : "json",
			success : function(data) {
				for ( var i = 0; i < data.length; i++) {
					if(data[i].id == areaCode){
						returnStr = data[i].text;
						break;
					}
				}
			},
			error : function() {}
		});
	}
	return returnStr;
}
function initArea(provinceEle,cityEle,provinceCode,cityCode){
	var provinceSelector = document.getElementById(provinceEle);
	var citySelector = document.getElementById(cityEle);
	$.ajax({
		type : 'get',
		async : false,
		url : "${basePath}/areacodeAction/getAreacodeList/0",
		dataType : "json",
		success : function(data) {
			provinceSelector.add(new Option("请选择","")); 
			for ( var i = 0; i < data.length; i++) {
				var op = new Option(data[i].name,data[i].code);
				if(data[i].code == provinceCode){
    				op.selected = true;
    			}
				provinceSelector.add(op); 
			}
		},
		error : function() {}
	});
	if(provinceCode!=null && provinceCode!=''){
		$.ajax({
			type : 'get',
			async : false,
			url : "${basePath}/areacodeAction/getAreacodeList/"+provinceCode,
			dataType : "json",
			success : function(data) {
				citySelector.add(new Option("请选择","")); 
				for ( var i = 0; i < data.length; i++) {
					var op = new Option(data[i].name,data[i].code);
					if(data[i].code == cityCode){
	    				op.selected = true;
	    			}
					citySelector.add(op); 
				}
			},
			error : function() {}
		});
	}else{
		citySelector.add(new Option("请选择","")); 
	}
	
	
}
function onProvinceChange(provinceEle,cityEle){
	var provinceSelector = document.getElementById(provinceEle);
	var citySelector = document.getElementById(cityEle);
	var areacode = provinceSelector.value;
	citySelector.options.length=0;
	citySelector.add(new Option("请选择",""));
	$.ajax({
		type : 'get',
		async : false,
		url : "${basePath}/areacodeAction/getAreacodeList/"+areacode,
		dataType : "json",
		success : function(data) {
			for ( var i = 0; i < data.length; i++) {
				var op = new Option(data[i].name,data[i].code);
				citySelector.add(op); 
			}
		},
		error : function() {}
	});
}
function onCityChange(cityEle,adEle,cbFunc){
	var citySelector = document.getElementById(cityEle);
	var adSelector = document.getElementById(adEle);
	var cityCode = citySelector.value;
	adSelector.options.length=0;
	adSelector.add(new Option("请选择","")); 
	$.ajax({
		type : 'get',
		async : false,
		url : "${basePath}/js/areadata/"+cityCode+".json",
		dataType : "json",
		success : function(data) {
			for ( var i = 0; i < data.length; i++) {
				var op = new Option(data[i].text,data[i].id);
				adSelector.add(op); 
			}
		},
		error : function() {}
	});
	if(cbFunc){
		cbFunc();
	}
}
</script>