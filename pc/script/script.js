
function AddCode(){
	var input_id="specificationValue_1";
    var clickPlay = ydm(".clickPlay"),
        codeVal = ydm(".codeVal")[0],     
        divLayer = ydm(".divLayer")[0],    
        mask = ydm(".mask")[0], 
        divBox = ydm(".divBox")[0], 
        delCode = ydm(".delCode")[0], 
        closed_C = ydm(".divBox .closed_C")[0],
        ListItem = ydm(".codeListMdl .ListItem")[0],    
        codeList = ydm(".codeList")[0],
        codeInput = ydm(".codeInput")[0],
        addCode = ydm(".addCode")[0],
        saveBtn = ydm(".saveBtn")[0];      
    if(!clickPlay||!divLayer){
        return false;
    }
    for(var x=0;x<clickPlay.length;x++){
        clickPlay[x].index = x;
        publicFun(clickPlay[x]);
    }
    function publicFun(cpy){
        ydm.addEvent(cpy,"click",function(){
            divLayer.style.display = "block";
            divBox.style.display = "block"; 
            input_id = $(cpy).siblings(".codeVal1")[0].id;
            var specificationValue = $(cpy).siblings(".codeVal1").val();
            if(specificationValue.length !=0){
            	var specificationValue_array = specificationValue.split(",");
            	$(".codeListMdl").html("")
            	var str='';
            	for(var k =0 ;k< specificationValue_array.length ;k++){
//            	str += '<div class="ListItem">';
//            	str += '<input type="checkbox" class="listInput" name="" value="'+specificationValue_array[k]+'"/> <span class="spanText">'+specificationValue_array[k]+'</span>';
//            	str += '</div>';
            		var inputVal = specificationValue_array[k];
            		var div = document.createElement("div");
            		var input = document.createElement("input");
            		var span = document.createElement("span");
            		input.type = "checkbox";
            		input.className = "listInput"; 
            		span.className = "spanText";                
            		div.className = "ListItem";
            		codeList.appendChild(div);
            		div.appendChild(input);        
            		div.appendChild(span);
            		spanText = codeList.getElementsByClassName("spanText");
            		spanText[spanText.length-1].innerHTML = inputVal;
            		codeInput.value = "";  
            	}
            }
//            $(".codeListMdl").html(str);

        });         
    }
    ydm.addEvent(closed_C,"click",function(){
        divLayer.style.display = "none";
        divBox.style.display = "none";
        codeList.innerHTML = ""; 
    }); 
    ydm.addEvent(addCode,"click",function(){
        var inputVal = codeInput.value;
        var div = document.createElement("div");
        var input = document.createElement("input");
        var span = document.createElement("span");
        input.type = "checkbox";
        input.className = "listInput"; 
        span.className = "spanText";                
        div.className = "ListItem";
        codeList.appendChild(div);
        div.appendChild(input);        
        div.appendChild(span);
        spanText = codeList.getElementsByClassName("spanText");
        spanText[spanText.length-1].innerHTML = inputVal;
        codeInput.value = "";  
        // var inputVal = codeInput.value;
        // var ListItemCN = ListItem.cloneNode(true); //当为true时，连ListItem的innerHTML一起克隆
        // codeList.appendChild(ListItemCN);
        // spanText = ydm(".codeList .spanText");
        // spanText[spanText.length-1].innerHTML = inputVal;
        // codeInput.value = "";
    }); 
    var listInput = document.getElementsByClassName("listInput");
    ydm.addEvent(delCode,"click",function(){
        for(var i = 0; i< listInput.length; i++){
            if(listInput[i].checked){
                listInput[i].parentNode.remove();
                i--;  //当删掉ListItem的时候，ListItem节点的索引又重新排序了，所以i得减去1
            }; 
        }
    });  
    ydm.addEvent(saveBtn,"click",function(){
        spanText = ydm(".codeList .spanText");
        var string = codeVal.value;
        if(string == ""){
            for(var i = 0; i< spanText.length; i++){
                if(i == 0){
                    string += spanText[i].innerHTML;                
                }else{
                    string += "," + spanText[i].innerHTML;                   
                }
            }            
        }else{
            for(var i = 0; i< spanText.length; i++){
                string += "," + spanText[i].innerHTML;                   
            }             
        }
        codeVal.value = string;
        $("#"+input_id).val(string);
        divLayer.style.display = "none";
        divBox.style.display = "none";
        codeList.innerHTML = ""; 
    });        
}
ydm.running(AddCode);


function AddMessage(){
    var clickPlay = ydm(".clickPlay_1"),
        divLayer = ydm(".divLayer_1")[0],    
        mask = ydm(".divLayer_1 .mask_1")[0], 
        divBox = ydm(".divLayer_1 .divBox_1")[0], 
        cancelBtn = ydm(".divLayer_1 .cancelBtn_1")[0],
        saveBtn = ydm(".divLayer_1 .saveBtn_1")[0];      
    if(!clickPlay||!divLayer){
        return false;
    }
    for(var x=0;x<clickPlay.length;x++){
        clickPlay[x].index = x;
        publicFun(clickPlay[x]);
    }
    function publicFun(cpy){
        ydm.addEvent(cpy,"click",function(){
            divLayer.style.display = "block";
            divBox.style.display = "block"; 
            //清空数据
            $('#imgFileQueue').html('');
            $("#dialog_content").val('');
   		 	$("#imgs").val('');
        });         
    }
    ydm.addEvent(cancelBtn,"click",function(){
        divLayer.style.display = "none";
        divBox.style.display = "none";
    }); 
       
}
ydm.running(AddMessage);

