//解决方案
var solution = [
	// {
	// 	id : 0,
	// 	title : "心理学教学云平台解决方案",
	// 	url : "solution.html?id=0",
	// 	cover : "front/img/xljx.png",
	// 	content : "<p>随着互联网的发展与普及，通过在互联网上做心理学设计、实施心理学实验已成为当今心理实验的发展趋势，"
	// 				+ "我们通过与国内外各高校的心理学专家进行沟通合作，推出了全新的基于互联网架构的心理学教学云平台及心理学实验范式。"
	// 				+ "该教学云平台不需要安装任何的客户端插件及程序，让学生和老师直接通过互联网终端（包括电脑、笔记本、手机、平板等），"
	// 				+ "在任何地点、任何时间进行实验操作，"
	// 				+ "不需要用户做任何的系统维护和升级准备，减少了系统的维护成本和故障几率，大大提升了教学系统的使用效率和学生的学习效率。</p>"
	// 				+ "<p>该心理教学云平台包括的完整分系统包括：Psycloud心理实验教学系统、Psycloud心理测评系统、"
	// 				+ "Psycloud心理实验设计系统、Psycloud心理量表编辑系统、Psycloud眼动教学系统、"
	// 				+ "Psycloud脑电教学系统、Psycloud数字沙盘系统、Psycloud开放实验室管理系统、Psycloud心理实训教学系统。<p>"
	// },{
	// 	id : 1,
	// 	title : "学前虚拟仿真实训解决方案",
	// 	url : "solution.html?id=1",
	// 	cover : "front/img/xljx.png",
	// 	content : "<p>学前教育专业的实验对象是0-6岁的儿童,儿童是人而不是物,不能把学前儿童作为实验对象。"
	// 			+ "学前儿童发育不成熟,自理能力和自我保护能力差,不能也不允许用真实的儿童进行存有潜在危险的实验;"
	// 			+ "学前儿童的成长与发展具有“一次性”和不可逆的特点,不允许在真实环境中用尝试错误和逐步探索的方式进行实验;"
	// 			+ "学前儿童成长中有着多样化的需求,也受到多种因素的影响, 学前儿童的发展与教育异常复杂，难以在真实实验教学环境中实现人才培养的任务。"
	// 			+ "我们推出的虚拟仿真实训平台，能变真实实验教学“不可及”为“可及”、“不可逆”为“可逆”、"
	// 			+ "“不可能”为“可能”,填补了学前教育教学在实训环节无法完成的教学任务的空白。</p>"
	// 			+ "<p>该学前虚拟仿真实训平台包括的分系统有：生理发展与护理虚拟仿真系统、心理发展与测量虚拟仿真系统、专业能力培养虚拟仿真系统、创新与素质拓展虚拟仿真系统。</p>"
	// },{
	// 	id : 2,
	// 	title : "高校心理咨询中心解决方案",
	// 	url : "solution.html?id=2",
	// 	cover : "front/img/gxxlzx.png",
	// 	content : "<p>高校心理咨询中心是心理老师和学生进行心理专业教学、心理活动、家庭教育中心和对外服务的主要场所，也是学校心理学专业实训基地。"
	// 			+ "由于心理咨询工作的专业性，心理咨询专业实训室的设置也有一定要求。"
	// 			+ "总体来说，高校心理咨询中心应由一系列的功能室构成，主要包括心理测评室、个体心理咨询室、"
	// 			+ "团体心理活动室、心理训练室、沙盘室、虚拟现实音乐放松室、家庭教育服务与实践中心、感统实验室、奥尔夫音乐室、蒙台梭利实验室。</p>"
	// 			+ "<p><img src='front/img/pic01.png' class='img-responsive center-block'></p>"
	// 			+ "<p><img src='front/img/pic02.png' class='img-responsive center-block'></p>"
	// },{
	// 	id : 3,
	// 	title : "中小学心理咨询中心解决方案",
	// 	url : "solution.html?id=3",
	// 	cover : "front/img/zxx.png",
	// 	content : "<p>学前教育专业的实验对象是0-6岁的儿童,儿童是人而不是物,不能把学前儿童作为实验对象。"
	// 			+ "学前儿童发育不成熟,自理能力和自我保护能力差,不能也不允许用真实的儿童进行存有潜在危险的实验;"
	// 			+ "学前儿童的成长与发展具有“一次性”和不可逆的特点,不允许在真实环境中用尝试错误和逐步探索的方式进行实验;"
	// 			+ "学前儿童成长中有着多样化的需求,也受到多种因素的影响, 学前儿童的发展与教育异常复杂，难以在真实实验教学环境中实现人才培养的任务。"
	// 			+ "我们推出的虚拟仿真实训平台，能变真实实验教学“不可及”为“可及”、“不可逆”为“可逆”、"
	// 			+ "“不可能”为“可能”,填补了学前教育教学在实训环节无法完成的教学任务的空白。</p>"
	// 			+ "<p>该学前虚拟仿真实训平台包括的分系统有：生理发展与护理虚拟仿真系统、心理发展与测量虚拟仿真系统、专业能力培养虚拟仿真系统、创新与素质拓展虚拟仿真系统。</p>"
	// },{
	// 	id : 4,
	// 	title : "公检法心理干预解决方案",
	// 	url : "solution.html?id=4",
	// 	cover : "front/img/gjf.png",
	// 	content : "<p>公检法心理干预建设方案内包含相关音乐、视觉、专业软硬件、功能分配等内容，对应实训平台内相关要素的合理分配和使用，对广大警务人员、"
	// 			+ "法务人员的心理干预起到了重要的作用。由此，我们特推出公检法心理干预建设方案。" 
	// 			+ "其中，包括相关软、硬件匹配，及训练活动方案、道具配给等全方位专业技术支持，"
	// 			+ "希望通过专业的心理技术支持，能够加强司法军警系统的心理实训干预工作。</p>"
	// 			+ "<p>该建设方案包含的完整分系统有：Psycloud军警测评系统、Psycloud音乐放松系统、Psycloud视觉放松系统、"
	// 			+ "Psycloud军警心理训练系统、多参生物反馈仪、团体无线心理评估训练系统、"
	// 			+ "精神压力分析仪、3D心理沙盘训练系统、经颅微电流刺激仪、计算机认知矫正系统。</p>"
	// },{
	// 	id : 5,
	// 	title : "监狱心理咨询解决方案",
	// 	url : "solution.html?id=5",
	// 	cover : "front/img/jy.png",
	// 	content : "<p>近年来随着社会心理卫生事业的发展，同时顺应罪犯改造工作科学化的要求，心理矫治开始逐步走入监狱，"
	// 			+ "成为罪犯改造工作的又一有力手段。“关注心理健康、提高改造质量、促进全面发展”，"
	// 			+ "是监狱心理矫治工作的出发点，更是目标，体现出社会与时代发展的必然要求。"
	// 			+ "作为一项全新的工作，心理矫治在基础理论、工作方法等方面均有其特殊性。"
	// 			+ "科学认识心理矫治工作的性质、客观评估心理矫治工作的价值、正确处理与其他各项工作的关系，有利于此项工作的健康发展。</p>"
	// 			+ "<p>该建设方案包含的完整产品有：Psycloud测评系统、Psycloud音乐放松系统、Psycloud视觉放松系统、Psycloud智能心理训练系统、多参生物反馈仪、团体无线心理评估训练系统、精神压力分析仪、3D心理沙盘训练系统、经颅微电流刺激仪、计算机认知矫正系统及心理书籍、心理挂图等。</p>"
	// },{
	// 	id : 6,
	// 	title : "体育运动解决方案",
	// 	url : "solution.html?id=6",
	// 	cover : "front/img/tyyd.png",
	// 	content : "<p>竞技体育是一项以创造优异成绩，夺取比赛胜利为目标的活动。不仅仅需要具备优秀的竞技技术水平，还需要具备良好的心理素质，"
	// 			+ "才是获得优异成绩、获取比赛胜利的有效保证。通过与各项目运动员、体育心理专家和体育院校老师长期的沟通合作，"
	// 			+ "我们的体育系统心理实训平台旨在针对运动员在训练和比赛中的心理焦虑、心理疏导调节等问题，指导运动员提升心理水平，创造更优异成绩。</p>"
	// 			+ "<p>该实训平台方案包含的完整分系统有：Psycloud运动测评系统、Psycloud音乐放松系统、Psycloud视觉放松系统、"
	// 			+ "Psycloud运动心理训练系统、多参生物反馈仪、团体无线心理评估训练系统、"
	// 			+ "精神压力分析仪、3D心理沙盘训练系统、经颅微电流刺激仪、计算机认知矫正系统。</p>"

	// },
	{
	 	id : 0,
	 	title : "心理教学云平台解决方案",
	 	url : "solution.html?id=0",
	 	cover : "front/img/xqjyxlcp.png",
	 	content : " <h3>PsyCloud心理学智慧课堂云平台方案</h3>"
	 	          +'<p>PsyCloud心理学智慧教育云平台由“云”、“网”、“端”三大部分</p>'
	 	          +'<p>“云”指的就是PsyCloud心理学教学云平台系列系统，包括有PsyCloud心理实验教学、PsyCloud心理测量系统、CEDS心理实验设计系统、PsyCloud量表设计系统、PsyCloud心理实训系统、3D心理数字沙盘系统、PsyCloud眼动追踪系统、事件相关电位（ERPs)实验教学云平台、Psycloud虚拟现实心理探索平台、开放式心理实验室管理系统等，运用高速、便捷、安全的先进计算机云服务模式，可以实现真正的在线教学、在线实验，并且可以对在线教学数据进行汇聚、分析。</p>'
	 	          +'<p>“网”指的就是可以完全基于互联网的应用，师生可以使用手机、平板、笔记本电脑等移动设备在连接互联网的情况下，在教室、办公室、寝室、咖啡厅、汽车等各种场景直接使用教学云平台，打破了传统的教学场景模式，使教和学的方式更便利及时。</p>'
	 	          +'<p>“端”指的是教师端和学生端。不同的身份账户，登录云平台后，功能和界面各不相同，可以由管理员自由定义不同身份的不同权限。</p>'
	 	          +'<p>通过整合“云”、“网”、“端”， 心理学实验教学空间实验室云平台系统依托 WEB 应用架构，采用互联网技术，结合云平台服务，通过互联网浏览器直接登录使用，同时也支持在手机、平板移动端（包含安卓操作系统和苹果操作系统）运行；让老师和学生可以在任何时间、任何地点自如使用，不受环境和终端设备的限制，同事云平台可也支持整体部署在指定的学校服务器上或指定实验室中。</p>'
                  + '<div><img src="front/img/psycloud_01.png" class="img-responsive center-block"></div>'
                  +'<p>心理学实验课是心理学教学内容和方式上的充实和提高，它激活并带动了心理教学，具有良好的教学效果。心理实验使抽象的心理学概念、原理具体化、形象化，并且操作性强，从而大大提高了学生对心理学知识的理解和认识；同时，由于实验方式本身的趣味性和科学性，调动了学生的积极性和主动性，激发出他们浓厚的兴趣、热情和探究欲望，培养了学生动手操作和从事科学实证的能力。这有效地克服了心理学课上“教之无味。听之无趣”的现象，一直得到来自教师和学生的普遍欢迎和肯定。</p>'
                  + '<div><img src="front/img/psycloud_02.png" class="img-responsive center-block"></div>'
                  +'<p>随着信息技术发展和互联网技术的普及，通过计算机和3D虚拟技术，设计、实施心理学实验已成为当今心理实验的发展趋势，通过云实验室上心理实验课，有效地培养和锻炼学生通过利用互联网技术使用计算机设计、实施心理学实验能力，也逐渐成为心理学实验课的主要教学目的之一。</p>'
                  +'<p>所以，心理学智慧教育云平台的建设，可以极大丰富教学手段、提高教学质量，促进老师与学生的教学互动，帮助学生更生动更全面理解和学习心理学知识。</p>'
                  + '<div><img src="front/img/psycloud_03.png" class="img-responsive center-block"></div>'
	 },{
	 	id : 1,
	 	title : "学前教学云平台解决方案",
	 	url : "solution.html?id=1",
	 	cover : "front/img/xqjyzxkt.png",
	 	content : "<h3>Pre_Edu学前智慧课堂云平台方案</h3>"
	 	        +'<p>依据《幼儿园教育指导纲要》、《3-6岁儿童学习与发展指南》、《学前教学专业教学大纲》、《幼儿园工作规模》、《幼儿园教师专业标准》等精神，心云天地围绕培养高素质应用型学前教育人才具备的专业知识、教育能力、职业素养和创新能力，结合互联网、云计算、多媒体、3D虚拟仿真等技术。以幼教岗位为向导，追求职业实践和师范理论平衡为目标，构建覆盖学前教育活动全过程，全方位的线上线下教学实训体系，从而为学校培育出“精教学、强实践、善创新”的高素质“双师型”人才</p>'
	 	        // + '<div><img src="front/img/pre_edu_03.jpg" class="img-responsive center-block"></div>'
	 	        // + '<div><img src="front/img/pre_edu_04.jpg" class="img-responsive center-block"></div>'
	 	        +  '<div class="row">'
				+  '<div class="col-xs-12">'
				+	'<p class="com-cul-t"></p><p class="com-cul-c"></p>'
				+	'<div class="row">'
				+	'<div class="col-xs-6">'
				+	'<img src="front/img/pre_edu_03.jpg" class="img-responsive center-block">'
				+	'</div>'
				+	'<div class="col-xs-6">'
				+	'<img src="front/img/pre_edu_04.jpg" class="img-responsive center-block">'
				+	'</div>'
				+	'</div>'
	 	        + '<p>Pre_Edu（Preschool Education）学前智慧教育实训室解决方案以Pre_Edu学前智慧教育云平台为核心。平台以“教学”、“评价”、“考核”、“实训”、“创新”为理念构建，配置以教学课件制作、教学资料云播、课堂翻转互动、教育资源库构建、情景模拟训练、职业资格考证、实习实践跟踪管理等强大功能，旨在为学校实现“一站式精英人才”培养创新条件</p>'
	            // + '<div><img src="front/img/pre_edu_01.jpg" class="img-responsive center-block"></div>'
	            // + '<div><img src="front/img/pre_edu_02.jpg" class="img-responsive center-block"></div>'
	            +  '<div class="row">'
				+  '<div class="col-xs-12">'
				+	'<p class="com-cul-t"></p><p class="com-cul-c"></p>'
				+	'<div class="row">'
				+	'<div class="col-xs-6">'
				+	'<img src="front/img/pre_edu_01.jpg" class="img-responsive center-block">'
				+	'</div>'
				+	'<div class="col-xs-6">'
				+	'<img src="front/img/pre_edu_02.jpg" class="img-responsive center-block">'
				+	'</div>'
				+	'</div>'
     },{
	 	 id : 2,
	 	 title : "中小学心理素质平台解决方案",
	 	 url : "solution.html?id=2",
	 	 cover : "front/img/xqjyzxkt.png",
	 	 content : "<h3>中小学心理素质平台解决方案</h3>"
	 	        +'<h4>一、精准定位</h4>'
	 	        +'<p>中小学时期，是未成年心理活动极其丰富，极其容易出现各种心理问题的时期。“心云天地”中小学心理健康教育云平台以中小学生为主体，设立多层级系统管理，实现心理评测、心理训练与成长、 辅导与咨询、危机预警及干预、统计分析、心理档案建设等功能。为中小学生的心理健康成长保驾护航！</p>'
	 	        + '<div><img src="front/img/str_001.jpg" class="img-responsive center-block"></div>'
	 	        +'<h4>二、全方位呵护</h4>'
	 	        +'<p>平台提供心理测评、心理档案、心理训练与成长、心理辅导与咨询、组织机构管理及心理门户网站等众多功能，促进学生、教师、家长心理成长，帮助学校、教委开展规范化的心理健康教育工作。</p>'
	 	        +'<p>平台包含6级服务端口，从学生到老师、家长，学校、教育局，以及专业的心理学专家，每级端口都拥有不同的职能和权限，分工明确，共同呵护中小学生心理健康成长：</p>'
	 	        +   '<div class="row">'
				+   '<div class="col-xs-12">'
				+	'<p class="com-cul-t"></p><p class="com-cul-c"></p>'
				+	'<div class="row">'
				+	'<div class="col-xs-12">'
				+	'<img src="front/img/str_002.jpg" class="img-responsive center-block">'
				+	'</div>'
				+	'</div>'
	 	        +'<p>1、学生端：心理测评、认知训练、学习资源、心理辅导与咨询、成长任务、学业指导、生涯规划、个人中心。</p>'
	 	        +'<p>2、教师端：功能模块：档案管理、危机预警、行为记录、量表管理、任务管理、教师心理自测、教学资源、认知训练、教师成长、心理辅导与咨询、系统管理、个人中心。</p>'
	 	        +'<p>3、家长端：功能模块：学生档案、行为记录、家长心理自测、心育百科、认知训练、心理辅导与咨询、个人中心。</p>'
	 	        +'<p>4、学校端：档案管理、预警管理、数据管理、报告管理、权限管理。</p>'
	 	        +'<p>5、专家端：线上留言、线上心理辅导、在线预约、线下心理咨询。</p>'
	 	        +'<p>6、教育局端：预警管理、数据管理、报告管理。</p>'
	 	        +   '<div class="row">'
				+   '<div class="col-xs-12">'
				+	'<p class="com-cul-t"></p><p class="com-cul-c"></p>'
				+	'<div class="row">'
				+	'<div class="col-xs-6">'
				+	'<img src="front/img/str_005.jpg" class="img-responsive center-block">'
				+	'</div>'
				+	'<div class="col-xs-6">'
				+	'<img src="front/img/str_003.jpg" class="img-responsive center-block">'
				+	'</div>'
				+	'</div>'
	 	        +'<h4>三、系统管理便捷</h4>'
	 	        +'<p>1、部门内数据可无限添加，支持单个添加、批量创建、批量导入、自助注册、数据同步五种方式，方便灵活</p>'
	 	        +'<p>2、系统支持单机、局域网、互联网三种部署模式，支持电脑、手机、平板等各类终端使用，不受时间、空间限制。</p>'				
	 	        + '<div><img src="front/img/str_004.jpg" class="img-responsive center-block"></div>'


	        }           
	 // ,{
	 // 	id : 2,
	 // 	title : "心理学教学系列产品",
	 // 	url : "solution.html?id=2",
	 // 	cover : "front/img/xlxxlcp.png",
	 // 	content :  "<h3>PsyCloud心理学教学系统</h3>"

	 // },{
	 // 	id : 3,
	 // 	title : "心理学在线课堂",
	 // 	url : "solution.html?id=3",
	 // 	cover : "front/img/xlxzxkt.png",
	 // 	content :  "<p>精神压力分析仪、3D心理沙盘训练系统、经颅微电流刺激仪、计算机认知矫正系统。</p>"

	 // }
];

//技术服务
var service = [
	{
		id : 0,
		title : "产品维护升级机制",
		url : "service.html?id=0",
		content : "<p>本公司产品终身免费维护，云端自动推送升级，"
				+ "有定期回访和技术服务群（微信、QQ）机制，实时响应客户问题，"
				+ "做到7*24小时技术服务，10分钟内对问题作出响应，4小时内给出解决方案并提供维修服务，若远程无法解决，承诺在24小时内到达现场。</p>"
	},{
		id : 1,
		title : "用户个性化需求定制开发机制",
		url : "service.html?id=1",
		content : "<p>根据学校和专业老师提供的相应需求或科研成果，公司可为其量身设计定制开发，满足教学和科研成果转化，更好更全面的加强校企合作。</p>"
	},{
		id : 2,
		title : "提供心理学大数据服务机制",
		url : "service.html?id=2",
		content : "<p>心理学与网络大数据的结合，"
				+ "既为传统心理学通过具有代表性的大样本深入挖掘个体层面的心理与行为机制提供了更为广阔的平台和机会，也同时为深入挖掘大规模人群在群体层面涌现出来的群体心理行为规律提供了可能。</p>"
	},{
		id : 3,
		title : "个性化实验室解决方案机制",
		url : "service.html?id=3",
		content : "<p>公司根据各个行业、专业、学校现状提供相对应实验室解决方案，提供详细配套产品供用户选择。</p>"
	},{
		id : 4,
		title : "联合培训机制",
		url : "service.html?id=4",
		content : "<p>随着科学技术和心理学专业理论的不断推陈出新，为更好的推广和交流，公司与实力院校合作，将定期举办产品培训会议；举行相关讲座；开展网络课堂等活动。</p>"
	}
];

//产品中心
var product = [
    {
		type:0,
		id:0,
		kind:0,
		model:0,
		name:"学前教育产品系列",
		cover : "front/img/xqjyxlcp.png",
		url : "product.html?type=0&id=0",
		items:[
			{
				id : 0,
				title : "Pre_Edu幼儿园岗前实训虚拟仿真系统",
				url : "product.html?type=0&id=0",
				login : "#",
				cover : "front/img/pro1/edu_01.png",
				content : `
					<p>
						目前学前教育重艺体技能训练，轻保教能力培养。学生受入园实习条件的限制，未能真正接触幼儿园的幼儿，掌握幼儿园里一日生活活动安排，自身的专业知识未能得到实践。
						岗前技能实训虚拟仿真系统旨在以3D动画的方式模拟幼儿园一日的生活，为学生 提供学习条件，使其学会合理安排和组织一日生活的各个环节，科学照顾幼儿园的日常生活活动，
						及时处理幼儿的常见事故。
					</p>
					
					
					<img  src="front/img/pre_edu/幼儿园岗前实训虚拟仿真系统1.jpg" style="width:90%;margin-left:50px">
				
							
					
					<p>
						其依据《幼儿园教师专业标准》，在幼儿园一日生活各环节中设定多种任务，提供多种学习资源，学生基于情景以角色扮演等方式解决问题，学习合理安排和组织一日生活的各个环节。
						Pre_Edu幼儿园岗前实训虚拟仿真系统，又可称为搬进教室的“幼儿园”，主要服务于“练”与“考”。
					</p>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
						<img  src="front/img/pre_edu/幼儿园岗前实训虚拟仿真系统2.jpg" style="width:100%">
					</div>
				`
			},
			{
				id : 1,
				title : "Pre_Edu环境创设虚拟仿真系统",
				url : "product.html?type=1&id=1",
				login : "#",
				cover : "front/img/pro1/edu_02.png",
				content : `
					<p>Pre_Edu环境创设虚拟仿真系统，可称为搬进教室的“幼儿园”，主要服务于“练”与“训”。 环境创设虚拟仿真系统利用3D虚拟仿真技术，展示幼儿园的全貌，包括户外、教室、走廊、睡室、衣帽间等，使学生对幼儿园有整体把握与了解，形成直观印象，同时呈现多种道具，让学生进行布置，增加学生的自由度，真正进行环境创设。</p>
					<div class="row">
				    <div class="col-xs-12">
				    <p class="com-cul-t"></p><p class="com-cul-c"></p>
					<div class="row">
					<div class="col-xs-1"></div>
				    <div class="col-xs-5">
				    <img  src="front/img/pre_edu/环境创设虚拟仿真系统1.jpg" class="img-responsive center-block">
				    </div>
				    <div class="col-xs-5">
				    <img  src="front/img/pre_edu/环境创设虚拟仿真系统2.jpg" class="img-responsive center-block">
				    </div>
				    </div>
					<p>
					另外，系统可实现教师对作品的及时反馈，有效增强学生的环境创设能力。同时，系统可随时保存环境创设记录，便于学生查看作品。
					幼儿园环境创设要求学生对幼儿园环境创设实例进行评析，具备独立创设幼儿园教育环境的能力，但由于实训室建设、重复利用的高成本，导致学校资源有限，学生缺少对幼儿园环境创设的机会，更多集中在于手工、美术等单独作品制作上。
					</p>
				`
			},
			{
				id : 2,
				title : "Pre_Edu早教虚拟仿真实训系统",
				url : "product.html?type=1&id=2",
				login : "#",
				cover : "front/img/pro1/edu_03.png",
				content : `
					<p>
					Pre_Edu早教虚拟仿真实训系统包含至少2个婴儿照顾场景，每个场景都分为理论学习、知识介绍、教师教学场景照料的演示以及照料的实际训练等功能，并对照护的难易程度有严格分类:
					</p>
					 <p>
					 Pre_Edu早教虚拟仿真实训系统还包含学生领养虚拟婴儿模块，学生可以使用移动终端，对领养的婴儿进行悉心照料，按照任务要求，学生每天为领养的婴儿做喂奶、换尿布、陪玩、洗澡等日常护理任务，并记录学生的具体动作，出具每天的照顾报告，统计正确的时间、动作、频次等，完成学生的照顾评估报告
					</p>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
						<img  src="front/img/pre_edu/早教虚拟仿真实训系统.jpg" style="width:100%">
					</div>
				`
			},
			{
				id : 3,
				title : "Pre_Edu学前幼儿心理情绪教育系统",
				url : "product.html?type=1&id=3",
				login : "#",
				cover : "front/img/pro1/edu_04.png",
				content : `
					<p>Pre_Edu学前幼⼉⼼理情绪教育系统是⼀款幼⼉⼼理认知发展教育软件，该软件主要包含两⼤模块，⼀是幼⼉⼼理认知发展模块，另⼀部分是幼⼉评价测量模块。</p>
					<p>系统主要涵盖幼⼉的语⾔智能发展、逻辑数学智能发展、⾃然观察智能发展、空间智能发展、⼈际认知智能发展和内省智能发展这六⼤智能领域内容，展现了⼀系列真实情景设计的游戏活动，即⼉童在进⾏游戏活动时，类似在经历⼀项项⽇常⽣活中的事件。 </p>
					<p>在测评测量部分包含幼⼉、幼师等诸多教学量表，能够让学⽣通过更多的⽅式去了解幼⼉的真正⼼理活动。</p>
					<p>通过使⽤本系统，不仅能让学⽣体会到学习的乐趣，还能让学⽣在未来⼯作中帮助家长清晰地了解⼉童多元智能发展状况，进⽽有针对性地指导⼉童的学习和智能发展。</p>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"></div>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-8">
						<img  src="front/img/pre_edu/学前幼儿心理情绪教育系统.jpg" style="width:80%">
					</div>
				`
			},
			{
				id : 4,
				title : "Pre_Edu幼儿认知能力评测与训练系统",
				url : "product.html?type=1&id=4",
				login : "#",
				cover : "front/img/pro1/edu_05.png",
				content : `
					<p>
					认知测量部分主要包括记忆⼒、专注⼒、灵活度、速度、情绪能⼒、问题解决六部分标准测验，⽤以评估当前认知能⼒⽔平。前⼀次达到需要的脑⼒训练分数才能进⾏脑⼒测验，每天最多只能进⾏⼀次脑⼒测验。下⼀次脑⼒测验解锁需要达到相应的脑⼒训练分数才能进⾏。
					</p>
					<div class="row">
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"></div>
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-8">
							<img  src="front/img/pre_edu/幼儿认知能力评测与训练系统1.jpg" style="width:100%">
						</div>
					</div>
				`
			},
			{
				id : 5,
				title : "Pre_Edu学前幼儿情绪认知能力设计系统",
				url : "product.html?type=1&id=5",
				login : "#",
				cover : "front/img/pro1/edu_06.png",
				content : `
					<p>Pre_Edu学前幼儿情绪认知能力设计系统，基于B/S架构云平台设计，通过浏览器登录使用，不仅可以在计算机系统中运行，也支持手机、平板移动端运行，真正实现智慧教育</p>
					<p>采用面向幼儿认知能力研究的开放式设计方式，通过设置幼儿认知能力呈现的属性及其之间的连接实现绝大多数的幼儿心理认知研究，建立互联网云端素材库、支持发布二维码，极大简化了幼儿心理认知研究实验设计中对过程、数据列表等概念的理解，摆脱了大量的、复杂的程序代码编写，方便使用者理解幼儿认知实验本身，促进幼儿认知能力实验设计的效率。</p>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
						<img  src="front/img/pre_edu/学前幼儿情绪认知能力设计系统.jpg" style="width:100%">
					</div>
					`
			},
			{
				id : 6,
				title : "Pre_Edu学前幼儿心理评测系统",
				url : "product.html?type=1&id=6",
				login : "#",
				cover : "front/img/pro1/edu_07.png",
				content : `
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
						<img  src="front/img/pre_edu/学前幼儿心理评测系统1.jpg" style="width:100%">
					</div>
					<p>Pre_Edu学前幼儿心理评测系统是湖心云天地科技有限公司和湖南省万婴教育科技有限公司利用云计算和大数据技术，依托国内一流高校打造的新一代心理评测系统。</p>
					<p>该系统包含人员信息管理、心理评测、危机干预、心理档案等核心功能，涵盖认知、情绪、人格、学习、心理健康、行为管理、职业兴趣、婚姻家庭等多方面的评测，既能满足教学科研需求，也能为评估学生心理健康提供专业的心理评测和报告分析。</p>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
						<img  src="front/img/pre_edu/学前幼儿心理评测系统2.jpg" style="width:100%">
					</div>
					`
			},
			{
				id : 7,
				title : "Pre_Edu学前幼儿卫生保育虚拟仿真系统",
				url : "product.html?type=1&id=7",
				login : "#",
				cover : "front/img/pro1/edu_08.png",
				content : `
				
					<p>Pre_Edu学前幼⼉卫⽣保育虚拟仿真系统主要包含两⼤模块的内容，第⼀是解剖学的学习教育模块，第⼆是幼⼉⽣理发育的学习教育模块。 </p>
					<p>Pre_Edu学前幼⼉卫⽣保育虚拟仿真系统包含⼤量的课件和知识体系，协助教师讲专业的幼⼉卫⽣保育课程，同时让学⽣在任何时间、地点都可以预习和复习幼⼉卫⽣保育知识，掌握相关的重要知识点，提⾼学习成绩。</p>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
						<img  src="front/img/pre_edu/学前幼儿卫生保育虚拟仿真方案1.jpg" style="width:100%">
					</div>
					<p>Pre_Edu学前幼儿卫生保育虚拟仿真系统在虚拟仿真环境下，模拟幼儿卫生保育诸多场景，与学生进行有效的互动，让学生更加形象直观的了解学前幼儿卫生保育的相关理论知识。</p>
					<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
						<img  src="front/img/pre_edu/学前幼儿卫生保育虚拟仿真方案2.jpg" style="width:100%">
					</div>
					`
			},
			{
				id : 8,
				title : "Pre_Edu学前教育教学系统",
				url : "product.html?type=1&id=8",
				login : "#",
				cover : "front/img/pro1/edu_09.png",
				content : `
						<p>主要依据《学前教育专业人才培养方案》，涵盖将近30门课程的知识点，以3D动画、视频、图片等形式展现内容，并根据内容设置不同层次的问题，让学生带着问题进行任务难度不同的探索尝试，大大提高学生的学习兴趣与冬季，从而提高学习效果。</p>
						<p>以3D技术重现经典的“延迟满足”实验，让学生可以动作操作，形象直观地了解实验过程和结果，观察和结果，观察孩子的行为表现，结合书本所学知识，切实做到理论和实践项结合。</p>
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
							<img  src="front/img/pre_edu/学前教育教学系统1.jpg" style="width:100%">
						</div>
						<p>Pre_Edu学前教育教学系统，又可称为“移动的教室”，主要服务于“教”与“学”</p>
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
						<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
							<img  src="front/img/pre_edu/学前教育教学系统2.jpg" style="width:100%">
						</div>
						`
			},
			{
				id : 9,
				title :"Pre_Edu学前营养膳食管理系统",
				url : "product.html?type=1&id=9",
				login : "#",
				cover : "front/img/pro1/edu_10.png",
				content : `
						<p>采用专业的向导式操作，包含一套完善的营养食物列表数据库，灵活多样的查询方式帮助用户查询所有食物营养成分。系统的基础数据库采取开放数据库，可以修改完善基础数据，数据记录无上限限制。</p>
						<p>软件系统具有实用的“营养计算”工具，可利用“营养计算“工具为个体或群体进行全方位的”营养计划“，计算分析对象单位周期内的膳食营养摄入量，为分心对象营养素是否均衡，提出改进食谱的依据，提高膳食营养质量。</p>
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/学前营养膳食管理系统.jpg" style="width:100%" />
							</div>
						</div>
						<br />
						<p>软件提供智能化的“营养配餐“工具，食物摄入量的计算采用智能化方式，无需自行设定，完全由系统根据配餐者的摄入量标准自动计算生成，也可辅以少量的手工微调。同时可以提供“各种食物对营养素的贡献比例”。</p>
						<p>软件系统具有专业的“营养监测“功能，可以实时分析周期内的膳食结构和营养状况，及时发现营养不良或过剩的现象，并针对营养问题制定计划，实施营养干预。</p>
						`
			},
			{
				id : 10,
				title : "Pre_Edu学前玩教具实训系统",
				url : "product.html?type=1&id=10",
				login : "#",
				cover : "front/img/pro1/edu_11.png",
				content : `
						<p>Pre_Edu学前玩教具实训系统采用B/S云平台体系构架，直接通过WEB浏览器运行，不需要做客户端等程序安装或者使用加密锁等硬件设施，大大方便了用户的管理和维护。</p>
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/学前玩教具实训系统1.jpg" style="width:100%">
							</div>
						</div>
						<p>Pre_Edu学前玩教具实训系统包含有三大模块：</p>
						<p>Pre_Edu学前玩教具实训系统不仅可以在计算机系统中运行，也支持手机、平板移动端运行，大大方便了教师、学生以及其他被试者的使用。
						系统在任何时间、任何地点，不受时间、空间环境的局限，真正实现了学前智慧实训室的理念
						</p>
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/学前玩教具实训系统2.jpg" style="width:100%">
							</div>
						</div>
						`
			},
			{
				id : 11,
				title : "Pre_Edu毕业生实践管理平台",
				url : "product.html?type=1&id=11",
				login : "#",
				cover : "front/img/pro1/edu_12.png",
				content : `
						<p>Pre_Edu毕业生实践管理平台主要基于互联网技术构建一个学前教育专业学生在外出实习、实验实训、社会实践、第二课堂实训等内容，能够对学生出勤、任务完成、作业提交、学分认定等管理地服务平台。 </p>
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/毕业生实践管理平台1.jpg" style="width:100%">
							</div>
						</div>
						<p>Pre_Edu学前玩教具实训系统包含有三大模块：</p>
						<p>Pre_Edu毕业生实践管理平台协助学校教师完成对学前学生的任务管理、考勤管理、定位分析、成绩管理等多个管理功能，对学生的考核、安全进行全面管理。
						</p>
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/毕业生实践管理平台2.jpg" style="width:100%">
							</div>
						</div>
						`
			},
			{
				id : 12,
				title : "Pre_Edu学前教育专业课程开发系统",
				url : "product.html?type=1&id=12",
				login : "#",
				cover : "front/img/pro1/edu_13.png",
				content : `
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/学前教育专业课程开发系统.jpg" style="width:100%">
							</div>
						</div>
						`
			},
			{
				id : 13,
				title : "Pre_Edu学前实训设计系统",
				url : "product.html?type=1&id=13",
				login : "#",
				cover : "front/img/pro1/edu_14.png",
				content : `
						<p>学前实训设计系统采用互联网云平台架构，是针对学前专业教师为了更好的实现学生学前技能的训练，而研发的技能训练平台。 </p>
						<p>该系统采用断点—训练—反馈训练模式，让学生在技能训练的同时还能清晰的掌握与技能训练关联的考核知识点，同时记录学生实训的成绩。</p>
						<p>系统主要包含四大模块：设计材料模块、技能训练知识点模块、关联阅读模块以及训练考核模块，系统可以实现多流程轴设计，支持文本、视频、图片、动画等设计训练材料，设计完成后，完全满足学前教师对学前技能训练设计的要求。</p>
						<p>该系统支持手机、平板等移动端运行。不受环境的局限，可以在任何时间、任何地点使用。该系统的互联网云端设计素材资源库自由度非常高，可通过网络浏览器异地上传、下载相关设计素材，支持图片（png、jpg）、声音(wav)、视频(mp4)，也可以实现在互联网中下载任意素材到本地并上传到资源库。</p>
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/学前实训设计系统.jpg" style="width:100%">
							</div>
						</div>
						`
			},
			{
				id : 14,
				title : "Pre_Edu幼师资格证课程培训考试系统",
				url : "product.html?type=1&id=14",
				login : "#",
				cover : "front/img/pro1/edu_15.png",
				content : `
						<p>Pre _Edu幼师资格证课程培训考试系统依据《中小学和幼儿园教师资格考试标准（试行）》作为内容设计指导，系统包含三个科目（综合素质、保教知识能力、面试）的内容，通过对幼儿教师资格证的课程、考试演练，来实现大批量、网络化、集中强化训练。 </p>
						<p>Pre_Edu幼师资格证课程培训考试系统主要包含两大模块：<p>
						<p>1、幼师资格证课程培训模块，主要包含大量的幼师资格证培训课程体系，学生可以通过此模块学习了解幼师资格证考试所包含的所有理论课程以及考试的重点知识点。<p>
						<p>2、幼师资格证考试训练系统，主要包含近10年的幼师资格证考试的真题训练库、模拟题训练库以及练习题训练库，学生可以通过竞赛、考试、对抗等多种形式进行训练，确保幼师资格证考试的通过。</p>
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/幼师资格证课程培训考试系统.jpg" style="width:100%">
							</div>
						</div>	
						`
			},
			{
				id : 15,
				title : "Pre_Edu学前职业技能训练考核系统",
				url : "product.html?type=1&id=15",
				login : "#",
				cover : "front/img/pro1/edu_16.png",
				content : `
						<p>Pre_Edu学前职业技能训练考核系统，可称为“移动的考场”，主要服务于“练”与“考”。
						主要依据教学大纲和技能考核标准，包括知识和技能考核的题库管理、试卷管理、任务管理、教师评定等模块，协助教师制定考核内容，安排考核任务，支持多名教师批阅学生成绩，考核形式支持文字、视频、音频、图片等，数据自动保存，真正实现移动办公，不受时间、地点、资源等限制。如舞蹈技能考核中民族舞考核，教师可提供示例，制定考核内容与标准，不定期安排考核任务，学社给你按要求上传作品，多名教师完成批阅，成绩自动保存，方便后期对学生的综合评估。
						</p>
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/学前职业技能训练考核系统1.jpg" style="width:100%">
							</div>
						</div>	
						<div style="overflow:hidden">
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
							<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
								<img  src="front/img/pre_edu/学前职业教育训练考核系统2.jpg" style="width:100%">
							</div>
						</div>	
						`
			},
			{
				id : 16,
				title : "Pre_Edu学前基本技能训练室",
				url : "product.html?type=1&id=16",
				login : "#",
				cover : "front/img/pro1/edu_17.png",
				content : `
			   
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室01.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>构建游戏实训室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室02.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>手工实训室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室03.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>电子琴室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室04.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>婴幼儿卫生保健室</h5></div>
								<div class="space20"></div>
						</div>	
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室05.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>舞蹈与形体训练实训室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室06.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>感觉统合实训室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室07.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>奥尔夫音乐教室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室08.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>美术室</h5></div>
								<div class="space20"></div>
						</div>


						
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室09.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>心理健康实训室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室10.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>声乐教室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室11.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>儿童科学教育实训室</h5></div>
								<div class="space20"></div>
							</div>
							<div class="col-xs-3">
								<div><img  src="front/img/pre_edu/学前基本技能训练室12.jpg" class="img-responsive"></div>
								<div class="text-center"><h5>蒙台梭利教学实训室</h5></div>
								<div class="space20"></div>
					
						</div>
						`
			},
			{
				id : 17,
				title : "Pre_Edu学前智慧教育实训中心",
				url : "product.html?type=1&id=17",
				login : "#",
				cover : "front/img/pro1/edu_18.png",
				content : `
						<p>学前智慧教育实训中心主要承担实体教学、模拟实践、教育科研三项职能，满足专业教
                             学、教育实训的需要，为学前教育专业学生进行专业技能训练，学习体验幼儿园教育教
                             学，开展教学科研活动，提升专业综合实践能⼒，增强专业素养等提供专业训练场地。实
                             训中心还可以面向社会和幼儿园开展实训工作，提升在职教室的专业能力。</p>
							 <div style="overflow:hidden">
								<div class="col-xs-6 col-sm-4 col-md-4 col-lg-1"></div>
								<div class="col-xs-6 col-sm-4 col-md-4 col-lg-10">
									<img  src="front/img/pre_edu/学前智慧教育实训中心01.jpg" style="width:100%">
								</div>
						 	</div>	
						`
			},
		]
	},
	{
		type:1,
		id:1,
		kind:1,
		model:0,
		name:"学前教育在线课堂",
		cover : "front/img/xqjyzxkt.png",
		url : "http://per.cloud.psycloud.com.cn:8180/",
		items:[
			{
				id : 0,
				title : "Pre_Edu幼儿园岗前实训虚拟仿真系统",
				url : "http://per.cloud.psycloud.com.cn:8180/",
				login : "#",
				cover : "front/img/pro1/edu_01.png",
				content : `
					<p>
						目前学前教育重艺体技能训练，轻保教能力培养。学生受入园实习条件的限制，未能真正接触幼儿园的幼儿，掌握幼儿园里一日生活活动安排，自身的专业知识未能得到实践。
						岗前技能实训虚拟仿真系统旨在以3D动画的方式模拟幼儿园一日的生活，为学生 提供学习条件，使其学会合理安排和组织一日生活的各个环节，科学照顾幼儿园的日常生活活动，
						及时处理幼儿的常见事故。
					</p>
					<img  src="front/img/pre_edu/幼儿园岗前实训虚拟仿真系统1.jpg" style="width:100%">
					<p>
						其依据《幼儿园教师专业标准》，在幼儿园一日生活各环节中设定多种任务，提供多种学习资源，学生基于情景以角色扮演等方式解决问题，学习合理安排和组织一日生活的各个环节。
						Pre_Edu幼儿园岗前实训虚拟仿真系统，又可称为搬进教室的“幼儿园”，主要服务于“练”与“考”。
					</p>
					<img  src="front/img/pre_edu/幼儿园岗前实训虚拟仿真系统2.jpg" style="width:100%">
				`
			},
		]
    },
   	{
		type:2,
		id:2,
		kind:0,
		model:1,
		name : "心理学产品系列",
		cover : "front/img/xlxxlcp.png",
		url : "product.html?type=2&id=2",
		items : [	
			{
				id : 0,
				title : "PsyCloud 心理实验教学系统",
				url : "product.html?type=2&id=2",
				login : "http://syjx.psycloud.com.cn:8080/syjx/login.jsp",
				cover : "front/img/pro/pro_00000.jpg",
				content : '<p>CETS（Cloud of Experimental Teaching System）是基于B/S架构的云平台，'
						+ '支持手机、平板等移动设备的使用，是目前国内实验数量最多、最全面的心理实验教学系统。</p>'
						+'<h3>产品特色</h3>'
						+'<p><span>1</span>系统包含实验心理学、认知心理学、普通心理学、发展和教育心理学等，共有200多个经典的实验，部分实验采用动画模式，更直观展示心理学知识。</p>'
						+'<p><span>2</span>部分实验采用虚拟仿真技术，例如：演示虚拟仿真场景下的视崖实验，并且实现考核互动功能；再如心理的神经生理机制-神经系统实验、心理的神经生理机制-大脑实验、颜色视觉实验，使用动画技术设计，能直接用网络浏览器演示及操作。</p>'
						+'<p><span>3</span>系统支持微课功能。</p>'
						+'<p><span>4</span>所有实验都具有实验简介、实验目的、实验程序、结果讨论、参考文献、扩展阅读等。</p>'
						+'<p><span>5</span>能够生成详细专业的心理实验结果，并提供符合论文书写要求的标准实验报告模板，学生可以按照标准模板提交实验报告，老师可以对学生提交的实验报告进行批阅、编辑，并支持实验报告的下载导出。</p>'
						+'<p><span>6</span>系统具备开放式实验课程设计，提供灵活多样的实验参数和实验呈现内容修改方案。</p>'
						+'<p><span>7</span>可以发布及添加心理实验设计系统所设计的实验，使得心理实验教学系统的实验个数可以无限制的添加，有助于教师应对不同实验教学对象。</p>'
						+'<p><span>8</span>系统采用管理员—教师—学生层级管理模式，管理员可实现系统管理与用户管理，并可查看整体数据，教师可实现管理员指定给自己的学生管理，为学生提供专一的教学内容。</p>'
						+'<p><span>9</span>系统采用WEB应用架构、云平台服务，通过浏览器登录访问，不需要安装任何程序。</p>'
						+'<p><span>10</span>心理实验教学系统可以多平台运行，支持PC、手机、平板，大大方便教师、学生的使用。</p>'
						+'<p><span>11</span>既可以满足在阿里云平台上使用，又可以满足在局域网中使用。</p>'
						+'<p><span>12</span>产品接受定制开发，可实现本地化服务。</p>'
						+ '<div><img src="front/img/pro/cets1.jpg" class="img-responsive"></div>'
			},
			{
				id : 1,
				title : "PsyCloud 心理实验设计系统",
				url : "product.html?type=0&id=1",
				login : "http://ceds.psycloud.com.cn:8090/ceds",
				cover : "front/img/pro/pro_00100.jpg",
				content : '<p>CEDS（Cloud of Experimental Design System ）是基于B/S架构的云平台，结合云平台服务，通过互联网浏览器直接登录使用，'
						+ '不需要安装任何程序。</p>'
						+ '<p>采用面向对象的开放式的设计方式，通过设置对象呈现的属性及对象之间的连接实现绝大对数的心理研究，简化了心理实验设计里对过程、数据列表等概念的理解，摆脱了大量的、复杂的程序代码的编写，方便使用者理解实验本身，促进实验设计效率。</p>'
						+ '<h3>产品特色</h3>'
						+ '<p><span>1</span>支持范围广：能实现心理学基础课程、专业课程和专门的实验课程的实验设计及编辑。</p>'
						+ '<p><span>2</span>实验设计灵活：系统包含互联网云端实验设计素材资源库，可使用网络浏览器异地上传、下载相关实验设计素材。实验材料可编辑，'
						+ '支持多种刺激类型的添加、编辑。</p>'
						+ '<p><span>3</span>查询极为方便：系统直接由结果查询界面，多方式查询可以直接查询一个人的所有实验结果；'
						+ '也可以查询做过的某一项实验所有人的结果，还可以调出某个时间段所有人作的实验结果。</p>'
						+ '<p><span>4</span>兼容性：可接收E-PRIME、CEDS等心理实验设计系统所设计的实验。</p>'
						+ '<p><span>5</span>直观性：支持多流程轴设计，实验运行方式一目了然，突破利用脚本控制控件跳转的局限性</p>'
						+ '<p><span>6</span>易用性：支持流程轴及控件的复制、粘贴等操作，避免重复操作，自动生成丰富专业的实验结果报表。</p>'
						+ '<p><span>7</span>实验设计修改工具：能够任意的新增、修改、删除实验，满足使用者的各种需求。</p>'
						+ '<p><span>8</span>实时保存，异地同步操作。</p>'
						+ '<p><span>9</span>大容量云端资料库。</p>'
						+ '<p><span>10</span>实验分享发布，采集被试数据。</p>'
						+ '<p><span>11</span>产品接受定制开发，可实现本地化服务。</p>'
						+ '<div><img src="front/img/pro/ceds1.jpg" class="img-responsive"></div>'
			},{
				id : 2,
				title : "PsyCloud 量表设计系统",
				url : "product.html?type=0&id=2",
				login : "http://scale.psycloud.com.cn:8082/",
				cover : "front/img/pro/pro_00200.jpg",
				content : '<p>国内心理量表产品的彻底革新，国内首个科研级心理量表研发系统，专为高校科研打造，解决量表设计过程中的各种绊脚石。</p>'
						+ '<p>PsyCloud量表设计系统是目前国内量表数量最多、最全面的心理量表设计系统。</p>'
						+ '<div><img src="front/img/pro/scale1.jpg" class="center-block" width="250px"></div>'
						+ '<h3>产品特色</h3>'
						+ '<p><span>1</span>涵盖完整的量表编制过程。包括试题编制-预测验-项目分析-正式测验-因素分析-信效度检验-合成测验。</p>'
						+ '<p><span>2</span>完美兼容多种数据格式。提供量表编制各阶段数据导出，兼容其它分析工具，可做二次开发。</p>'
						+ '<p><span>3</span>被试管理系统。被试可重复利用， 且被试群体在流失的情况下得到补充，保证数据收集的最大化与最优化。</p>'
						+ '<p><span>4</span>历史题库功能。支持历史版本的题目保留，量表回滚。</p>'
						+ '<p><span>5</span>给予被试更大自由度。被试可自愿选择是否完成指定的量表测试。</p>'
						+ '<p><span>6</span>便捷的因子公式编辑工具。集数字、运算符、函数为一体，即点即用。</p>'
						+ '<p><span>7</span>无缝连接测评系统。合成的量表可直接导入测评系统使用。</p>'
						+ '<p><span>8</span>丰富的数据分析工具。支持项目分析、因素分析、信效度分析及其它统计分析。</p>'
						+ '<p><span>9</span>完整规范的量表编制流程。完全依托于基于心理教育与测量教学大纲，提供标准化教学与科研工具。</p>'
						+ '<div><img src="front/img/pro/scale2.jpg" class="img-responsive"></div>'
			},{
				id : 3,
				title : "PsyCloud 心理测评系统",
				url : "product.html?type=0&id=3",
				login : "http://xyjx.psycloud.com.cn:8080/xyjx/login.jsp",
				cover : "front/img/pro/pro_00300.jpg",
				content : '<p>PsyCloud心理测评系统是北京心云天地利用云计算和大数据技术，依托国内一流高校，打造的新一代心理测评平台。</p>'
						+ '<p>该系统包含人员信息管理、心理测评、危机预警、心理档案等核心功能，涵盖认知、情绪、人格、学习、心理健康、行为问题、职业兴趣、婚姻家庭等多方面的测评，既能满足高校教学科研需求，同时也能为高校评估学生心理健康提供专业的心理测评和报告分析。</p>'
						+ '<div><img src="front/img/pro/ces1.jpg" class="img-responsive"></div>'
						+ '<h3>产品特色</h3>'
						+ '<p><span>1</span>应用范围广：心理测评系统是目前国内量表数量最多最全面的心理测量系统，分为智力、人格与个性、心理健康、情绪、心理控制源等11类测试题目，量表均采用全国常模或标准的临床心理测量评分方法，对精神卫生、临床心理、成人儿童等均可使用。</p>'
						+ '<p><span>2</span>操作方便：用户在一台服务器上就可以获得全部客户端的数据，同时进行用户管理、查看结果、数据库备份等操作。管理员随时可以将数据库备份。在需要时将指定的数据库备份文件导入，即可完成数据恢复。</p>'
						+ '<p><span>3</span>多种查询方式：根据不同需求，用户可分测验和用户两条线索对数据进行查询；用户还可根据单独或组合查询条件，查询个人信息或结果数据有某种共同特征的普通用户；用户可通过结果分数进行检索，迅速确定位于特定分数范围内的测试结果。</p>'
						+ '<p><span>4</span>标签式预警：可以设定多个预警公式，不仅可以显示相关预警的颜色，还可以显示预警的文字。预警的设置根据量表的因子设定，确保准确性。</p>'
						+ '<p><span>5</span>强大的测验报告：测试完成后，系统自动生成由个人信息、剖析图、结果分数、结果解释、建议、背景知识、备注、详细反应、单位介绍等多部分组成的结果报表。管理员可根据需要自由选择报表组成部分，自定义结果报告中的人称代词以及报告的标题等，并对解释和建议进行适当修改及在备注中添加既往病史、诊断建议等信息。对结果报表可以进行保存、重新编辑和打印等操作。同时，测验结果支持折线图、柱状图等，图表根据因子呈动态显示，图表的内容根据自由勾选的因子不同而变化，图标支持单独下载。</p>'
						+ '<p><span>6</span>心理测评系统可以发布和添加量表设计系统所设计的量表，使得心理测评系统的量表个数可以无限制的。</p>'
						+ '<p><span>7</span>系统可实时用数字显示注册总人数、已登录教师人数、已登录学生人数，同时，在线用户数成列表展示具体的人员信息，管理员可针对在线人员进行强制下线。</p>'
						+ '<div><img src="front/img/pro/ces2.jpg" class="img-responsive"></div>'
			},{
				id : 4,
				title : "PsyCloud 3D心理数字沙盘系统",
				url : "product.html?type=0&id=4",
				login : "http://sand.psycloud.com.cn/sand",
				cover : "front/img/pro/pro_00400.jpg",
				content : '<p>随着3D、VR技术的成熟，虚拟现实、混合现实、眼控、大数据分析等技术的研发及整合，数字心理沙盘比传统沙盘将带来更广阔的探索空间。</p>'
						+ '心理数字沙盘系统是基于B/S架构的云平台，支持手机、平板等移动设备的使用。</p>'
						+ '<div><img src="front/img/pro/3d1.jpg" width="80%" class="center-block"></div>'
						+ '<h3>产品特色</h3>'
						+ '<p><span>1</span>占地非常小：不需要沙具、沙盘、置物格，3D心理数字沙盘只需要一台电脑即可。</p>'
						+ '<p><span>2</span>沙具数量丰富：突破了传统实物沙盘沙具选择少的劣势，3D心理数字沙盘沙具数量可以无限制。</p>'
						+ '<p><span>3</span>虚拟环境，更进一步逼近真实：3D心理数字沙盘可以营造地形、天空、天气变化、场景逼真， 打造充满沉浸感的测试氛围。</p>'
						+ '<p><span>4</span>自动统计道具数量和寓意建议：为咨询师提供了强大的辅助工具，也为教学提供了非常强大的学习平台，让学生带着兴趣学习沙盘。</p>'
						+ '<p><span>5</span>支持无限制场景图片保存，随时任意角度摄录照片或视频，详细记录被试者使用沙具的过程并支持回放功能。</p>'
						+ '<p><span>6</span>管理方便，自动统计道具数量和寓意建议，突破了传统实物沙盘维护管理复杂的特点。</p>'
						+ '<p><span>7</span>携带方便：3D数字心理沙盘不受地域限制，可移动性极强，一台电脑或几台电脑即可组建一个沙盘实验室，突破了传统实物沙盘无法移动的缺点。</p>'
						+ '<p><span>8</span>可进行真正意义上的团体沙盘评估与咨询，并自动出具心理分析报告。</p>'
						+ '<p><span>9</span>虚拟沙盘与实体沙盘相配合，弥补实体沙盘工作的不足。</p>'
						+ '<div class="row"><div class="col-xs-6"><img src="front/img/pro/3d2.jpg" class="img-responsive"></div><div class="col-xs-6"><img src="front/img/pro/3d3.jpg" class="img-responsive"></div></div>'
			},{
				id : 5,
				title : "事件相关电位实验教学云平台",
				url : "product.html?type=0&id=5",
				login : "http://eeg.psycloud.com.cn:14080/eeg",
				cover : "front/img/pro/pro_00500.jpg",
				content : '<p>事件相关电位实验教学云平台主要面向应用心理学专业的课程教学与研究。脑电教学系统涵盖脑电经典实验范式。</p>'
						+ '<p>系统通过3D动画展现脑电实验过程以及数据处理分析，实验过程生动直观。</p>'
						+ '<p>所有实验都具有实验简介、实验目的、实验程序、结果讨论、参考文献。</p>'
						+ '<div><img src="front/img/pro/nd2.jpg" class="img-responsive"></div>'
						+ '<h3>产品特色</h3>'
						+ '<p><span>1</span>事件相关电位实验教学云平台模拟实时数据采集过程，实现刺激和数据同步呈现，可标记刺激类型，且可观察实时电阻变化</p>'
						+ '<p><span>2</span>涵盖脑电经典实验范式，系统通过3D动画展现脑电实验过程以及数据处理分析。</p>'
						+ '<p><span>3</span>系统分为三大模块：脑电实验动画模块、实验刺激反应模块和数据分析处理模块。</p>'
						+ '<p><span>4</span>事件相关电位实验教学云平台通过3D动画，形象的展现了不同经典实验范式实验，让全班学生通过移动鼠标就可以在短时间内，完成诸多ERP经典实验，深刻理解脑电的操作原理和实验原理，达到教学的目的。</p>'
						+ '<p><span>5</span>事件相关电位实验教学云平台不仅可以在计算机系统中运行，也支持手机、平板移动端运行，大大方便的教师、学生以及其他被试者的使用；系统在任何时间、任何地点，不受时间、空间环境的局限，真正实现了心理学虚拟仿真脑电实验室的理念。</p>'
						+ '<p><span>6</span>产品接受定制开发，可实现本地化服务。</p>'
						+ '<div><img src="front/img/pro/nd1.jpg" class="img-responsive"></div>'
			},
			{
				id:6,
				title : "PsyCloud 眼动教学系统",
				url : "product.html?type=0&id=6",
				login : "http://eye.psycloud.com.cn:13080/eye",
				cover : "front/img/pro/pro_00600.jpg",
				content : '<p>PsyCloud眼动教学系统是基于B/S架构的云平台，支持手机、平板等移动设备的使用，涵盖多种经典实验范式，包括眼动阅读、广告评估、市场营销等广阔领域。</p>'
						+ '<div><img src="front/img/pro/yd1.jpg" class="img-responsive center-block"></div>'
						+ '<h3>产品特色</h3>'
						+ '<p><span>1</span>涵盖多种类眼动经典实验范式，包含实验信息有：眼动实验范式背景、眼动实验范式流程、眼动实验范式实验材料制作、眼动实验范式数据分析与处理）和眼动实验范式程序。</p>'
						+ '<p><span>2</span>实验包含眼动阅读领域、广告评估领域、市场营销领域、消费心理学领域、信息检索领域等，诸多经典范式，让学生能够快速的理解学习眼动的理论知识，懂得眼动实验操作。</p>'
						+ '<p><span>3</span>PsyCloud眼动追踪系统对眼动数据采集形式有两种方式：支持硬件眼动仪数据采集与鼠标模拟眼动数据采集两种形式，使得系统在任何环境下都可以学习眼动实验原理以及操作眼动实验。</p>'
						+ '<p><span>4</span>实验材料支持文本、图片、音频、视频等多种组合模式。</p>'
						+ '<p><span>5</span>系统生成详尽专业的图文并茂的实验报告，也可输出注视轨迹图视频、Excel、热点图，兴趣区，注视轨迹图片等多种格式数据。</p>'
						+ '<p><span>6</span>PsyCloud眼动追踪系统拥有着非常严格的权限管理功能，教师账号可以看到所有用户所设计的实验范式，学生账号只能看到自己所设计的或则老师授权指定的实验范式，使系统数据更加安全可靠。</p>'
						+ '<p><span>7</span>PsyCloud眼动追踪系统可以导出多种数据格式，为专业的数据分析提供方面的数据源。例如：直接导入的SPSS数据分析软件中进行数据分析挖掘。</p>'
						+ '<p><span>8</span>模拟眼动轨迹，诠释眼动原理。</p>'
						+ '<p><span>9</span>产品接受定制开发，可实现本地化服务。</p>'
			},
			{
				id : 8,
				title : "PsyCloud 心理实训系统",
				url : "product.html?type=0&id=8",
				login : "http://xlsx.psycloud.com.cn:8333/xlsx",
				cover : "front/img/pro/pro_00800.jpg",
				content : '<p>PsyCloud实训教学系统是基于B/S架构的云平台，支持手机、平板等移动设备的使用，包含心理诊断训练、心理咨询训练、心理治疗训练、团体辅导训练、心理测评技能训练和教师评定等功能模块。应用于心理咨询、治疗的教学与实验，首创了通过实验室培养学生的心理应用技能的新途径。</p>'
						+ '<h3>产品特色</h3>'
						+ '<p><span>1</span>心理诊断技能训练</p>'
						+ '<p>症状识别功能模块，通过我们模拟录制的50种常见心理问题症状，训练者可以通过对各种症状的行为特征、姿态表现的学习，掌握快速识别各种症状的能力。</p>'
						+ '<p>心理诊断综合技能训练模块，根据一般心理障碍的分类，模拟日常常见的各种心理障碍，训练学生对各种心理障碍的咨询诊断能力。</p>'
						+ '<p><span>2</span>心理治疗技能训练</p>'
						+ '<p>心理治疗基本技能训练，主要对行为治疗技术、认知治疗技术和人本主义治疗技术中每一个治疗技术进行模拟情景训练，使学生熟练掌握心理治疗和危机干预的普遍技术。</p>'
						+ '<p>危机干预综合技能训练，收集了4个应激创伤障碍的案例情景，使训练者掌握能够进行危机干预和心理康复训练的技能。</p>'
						+ '<p><span>3</span>心理咨询技能训练</p>'
						+ '<p>个体面谈技能训练功能模块，对个体面谈中所主要采用的参与性技巧、影响性技巧和非言语技巧等三类技巧进行逐个训练，使训练者掌握各个面谈技能的基本理论知识和技能、技巧。</p>'
						+ '<p>心理咨询技能综合训练模块，在具体的25个生活事件案例情景中对各类个体面谈技巧进行综合模拟训练，使训练者能掌握日常生活事件的咨询技巧。</p>'
						+ '<p><span>4</span>心理测评技能训练</p>'
						+ '<p>该模块主要针对目前心理学常用的各种类型的量表的使用技能进行训练。包括量表基本信息的学习、量表修改与编制、量表施测与统计、量表解释等全方位进行训练，保证训练者对心理测评技能的专业化与熟练性。</p>'
						+ '<p><span>5</span>团体辅导技能训练</p>'
						+ '<p>团体辅导基本技能训练，主要是对团辅领导者应具备的技术，团辅的过程与方法，团辅的具体方法和团辅各阶段的实操进行知识、技能的操作性训练，使团辅领导者熟练掌握团体的基本技能。</p>'
						+ '<p>团体辅导综合技能训练，是对中小学生和企事业单位中常见的心理问题进行团体辅导的情景模拟，在情景中对团体领导者所应具备的技巧进行综合训练。</p>'
						+ '<p><span>6</span>心理沙盘技能训练</p>'
						+ '<p>PsyCloud心理数字沙盘是国内第一款心理数字沙盘系统，实现了箱庭疗法的革命性突破，突破了实体沙盘游戏过程中诸多局限性，沉浸感更好，使用者更加进入状态，更能真实创造自己的心灵世界。</p>'
						+ '<div><img src="front/img/pro/xlsx.jpg" class="img-responsive center-block"></div>'
						
			},
			{
				id : 7,
				title : "开放式心理实验室管理系统",
				url : "product.html?type=0&id=7",
				login : "#",
				cover : "front/img/pro/pro_00700.jpg",
				content : '<p>PsyCloud开放式心理实验室管理系统含实验室管理、设备管理、在线实验、自主创新实验、题库等模块，系统基于B/S架构的云平台，支持手机、平板等移动设备的使用，随时随地对实验室进行管理，体现了移动实验室的理念。</p>'
						+ '<div><img src="front/img/pro/sys1.jpg" class="img-responsive center-block"></div>'
						+ '<div><img src="front/img/pro/sys3.jpg" class="img-responsive center-block"></div>'
						+ '<h3>产品特色</h3>'
						+ '<p><span>1</span>通过实验室管理，学生可以方便的在网上预约实验室、借用实验设备，方便老师管理。</p>'
						+ '<p><span>2</span>通过题库模块，教师可以随时对学生进行考核，生成平时成绩和最终成绩。</p>'
						+ '<p><span>3</span>在线实验模块，包含了大量经典的心理学实验，能极大的帮助学生设计出自己的实验。</p>'
						+ '<p><span>4</span>支持导出多种格式的实验数据和自动生成实验报告。</p>'
						+ '<p><span>5</span>严格的权限系统确保，学生和老师设计实验信息的安全。</p>'
						+ '<p><span>6</span>产品接受定制开发，可实现本地化服务。</p>'
						+ '<div><img src="front/img/pro/sys2.jpg" class="img-responsive center-block"></div>'
			},
			// {
			// 	id : 9,
			// 	title : "学前虚拟仿真实训系统",
			// 	url : "product.html?type=0&id=9",
			// 	login : "#",
			// 	cover : "front/img/pro/pro_00900.jpg",
			// 	content : '<p>学前教育虚拟仿真实训系统，集教学、科研、师资培训、品牌打造等功能于一体，立足学前教育现有真实实验教学条件和可开展的实验教学项目，提供可靠、安全和经济的实验项目，提供“再现过去、替代现实和模拟未来”的虚拟仿真实验教学环境，实现真实实验不具备或难以完成的教学功能，形成新型的的虚拟仿真实验教学资源体系。</p>'
			// 			+ '<div><img src="front/img/pro/xnfz1.jpg" class="center-block" width="300px"></div>'
			// 			+ '<h3>产品特色</h3>'
			// 			+ '<p><span>1</span>系统共5大类60多个虚拟仿真场景。如火灾、烫伤处理等。利用云计算、多媒体、远程 互动、网络、3D 等信息化技术,通过多种虚拟仿真实验教学资源建设方式,不断开发与优化多种类型虚拟仿真实验教学资源,形成了虚拟仿真实验教学资源的多种种特性,构建了结构化教学实训体系。</p>'
			// 			+ '<p><span>2</span>采用WEB应用架构，结合云平台服务，通过互联网浏览器直接登录使用，不需要安装任何程序。</p>'
			// 			+ '<p><span>3</span>心理实训系统可以多平台运行，不仅可以在计算机系统中运行，也支持手机、平板移动端运行，大大方便教师、学生的使用。</p>'
			// 			+ '<p><span>4</span>系统在任何时间、任何地点都可以使用，不受实验室环境的局限，真正实现了心理学虚拟仿真实验室的理念。</p>'
			// 			+ '<p><span>5</span>产品接受定制开发，可实现本地化服务，既可以满足在阿里云平台上使用，又可以满足在局域网中使用。</p>'
			// 			+ '<div><img src="front/img/pro/xnfz2.jpg" class="img-responsive center-block"></div>'
			// },
			{
				id : 10,
				title : "综合心理实验台",
				url : "product.html?type=0&id=10",
				login : "#",
				cover : "front/img/pro/pro_01000.jpg",
				content : '<p>实验台结合互联网云技术，实验操作可直接通过WEB浏览器运行，便于管理和维护。</p>'
						+ '<h3>产品特色</h3>'
						+ '<p>PSY-XYTD2016综合心理实验台是由北京心云天地科技有限公司经西南大学、南京大学、苏州大学、北京大学等国内知名心理专家团队的指导，依托于阿里云平台技术，打造的新一代互联网模式下的综合心理实验台，打破传统的教学模式，让整个平台更开放，更加易用。</p>'
						+ '<div><img src="front/img/pro/syt1.jpg" class="img-responsive center-block"></div>'
						+ '<div class="space"></div>'
						+ '<p>（一）实验台的构成</p>'
						+ '<p><span>1</span>实验台由操作台、主机系统、视觉刺激呈现系统、刺激反应系统、外接扩展系统、实验和量表教学系统、实验设计控制系统、服务系统八部分组成。</p>'
						+ '<p><span>2</span>操作台：塑钢材质，尺寸1320×1330×1265mm。</p>'
						+ '<p><span>3</span>主机系统：采用计算机（系统配置：酷睿I7、8G内存、1T硬盘）和单片机结构，采用主被试隔离设计。四人位。</p>'
						+ '<p><span>4</span>视觉刺激呈现系统：可选19英寸或者21.5英寸液晶显示器提供标准化视觉刺激输出，采用双声道立体声喇叭，做听觉刺激输出，同时支持耳机。刺激呈现精度达毫米级。视觉刺激呈现系统可360度旋转，也可跟具需求调整高低。</p>'
						+ '<p><span>5</span>刺激反应系统：输入模块支持按键、摇杆、轨迹球、脚踏板、光标键盘和鼠标等多种反应方式，同时提供声音反应。采用时钟同步技术，双并口或者双USB输出。支持多模态数据同步记录，时间精度达到毫秒级。</p>'
						+ '<p><span>6</span>视外接扩展系统：支持通过DB25接口及USB接口的外接设备连接。</p>'
						+ '<p><span>7</span>实验和量表教学系统：提供生动的实验教学和全面的量表信息教学，增加互动和趣味，提供数据分析。</p>'
						+ '<p><span>8</span>实验设计控制系统：提供完整的实验过程设计及实验控制，全中文操作界面，实验设计完成之后实现共享。</p>'
						+ '<p><span>9</span>服务系统：实验台结合阿里云平台，实验操作可直接通过WEB浏览器运行，便于管理和维护；实验台操作也支持手机、平板移动端运行，大大方便教师、学生的使用；系统在任何时间、任何地点，不受实验室环境的局限，真正实现了心理学虚拟仿真实验室的理念。</p>'
						+ '<p><span>10</span>系统采用全固态化设计，功耗低，结构简单，维修方便。</p>'
						+ '<div class="space"></div>'
						+ '<p>（二）实验台内容</p>'
						+ '<p><span>1</span>功能覆盖刺激呈现、反应接收、数据采集、数据处理、知识查阅、实验及量表报告生成、实验过程设计与控制等方面，全方位满足心理学教学与科研要求。</p>'
						+ '<p><span>2</span>时间计量精度：采用工业单片机对刺激呈现和反应接收进行控制，反应系统直接通过单片机进行双并口信号输出，满足多模态数据记录同步可精确到毫秒级。</p>'
						+ '<p><span>3</span>采用主、被试隔离设计：主、被试采用单独的显示器，互不干扰，可训练学生成为主试需要具备的技能与素养。同时，配备盲视场，可完成各类盲视场条件下的实验。</p>'
						+ '<p><span>4</span>LED背光控制技术：开关时间100nS—10μS，寿命长达几十万小时，可线性调光。</p>'
						+ '<p><span>5</span>扩展、兼容性较高：系统采用模块化设计和统一数据接口，具有良好的扩展性和兼容性，实验台具备以下扩展接口：DB25、USB、VGA、HDMI。除实验台本身，可外接脑电、眼动及心理学实验仪器等设备，能兼容心理学常用设备，例如经颅电刺激仪，经颅电刺激仪能提供0-4mA的直流电以及0-4mA、0-100Hz的交流电刺激，能实时显示刺激波形，包括正弦波、三角波、方波等。经颅电刺激仪有软件著作权登记证书和软件产品登记证书。</p>'
						+ '<p><span>6</span>多样化的反应输入：支持专门设计的脚踏板及多功能键盘。脚踏板2个，左右脚各1个，用于收集部分实验中左右脚的反应。多功能键盘1套，能够精确捕捉按键时间，同时按键采用开关量设计，可以接受多种反应模式。</p>'
						+ '<p><span>7</span>多功能键盘：数字按键：0到9，扇状排列，符合人体工程学设计；多功能键盘包含颜色按键：灰、红、黄、蓝、绿、灰，直线排列，左右对称，支持左右利手；多功能键盘包含确认键：矩形，居中设计；多功能键盘包含摇杆、轨迹球各2个，摇杆在上、轨迹球在下，左右对称，一体化设计，支持双手操作。</p>'
						+ '<p><span>8</span>实验台配备心理实验教学系统、心理测评系统、心理实验设计系统等。心理实验教学系统实验模块完整，可进行192项经典心理学实验，涵盖普通心理学、儿童心理学、基本心理能力、经典心理学实验、认知心理学、人机交互与工程心理学等领域。心理测评系统量表模块完整，可进行110项经典心理测评量表，涵盖心理健康、人格特点、能力兴趣、临床诊断、人际交往、学习、自我、生活应激等领域。</p>'
						+ '<p><span>9</span>心理实验教学系统、心理测评系统、心理实验设计系统等采用usbkey形式进行正版验证，无usbkey无法使用。首次运行时需输入序列号，usbkey与序列号一一对应，后续运行不再需要输入。</p>'
						+ '<p><span>10</span>心理测评系统在选择量表时，可以在同一窗口内呈现所有量表的相关信息。在窗口左侧量表列表中选择某一量表，窗口右侧即可呈现该量表的相关信息，包含中英文名称、题目数量、适用年龄、量表简介等，无需进行窗口切换。</p>'
						+ '<p><span>11</span>数据管理：实验及量表数据可方便地导出，可直接导出为word、Excel等格式，方便直接导入到SPSS中进行分析。完善的数据保护措施，管理员可镜像数据备份、数据恢复、数据同步等操作。不同实验台上的实验数据可实现相互导入。</p>'
						+ '<p><span>12</span>局域网：用户可方便地进行实验列表管理，可在一台实验台上对所有联网实验台统一设定当前的实验和参数。基于网络功能，在数据传输上，实验结束后的原始实验数据及结果报表将通过网络自动传输至服务器端，方便教师批阅和统计研究。同时支持互联网模式。</p>'
						+ '<p>可配置专业心理学小仪器、心理学常用仪器设备、虚拟仿真心理实验教学模块。</p>'
			},
			{
				id : 11,
				title : "智能数字心理实训台",
				url : "product.html?type=0&id=11",
				login : "#",
				cover : "front/img/pro/pro_01100.jpg",
				content : '<p>PsyCloud心理实训系统是北京心云天地科技有限公司研发的心理教学云平台中的一款针对心理咨询与心理治疗技能的训练系统。基于互联网模式，实现传统课堂教学向移动课堂、虚拟实验室的转变，突破传统教学模式的局限性，从真正意义上实现教师和学生灵活的教与学。</p>'
						+ '<p>心理咨询与心理治疗教学大纲要求学生不仅要掌握专业知识，还要具备心理咨询与心理治疗的实际操作技能。但由于其学科特点，即心理咨询与心理治疗过程需要咨询师与来访者双方共同完成，且来访者必须出现了心理适应问题或心理异常，目前教学只能从实际工作需要和案例分析角度开展理论教学，学生无法随时随地获得各种心理适应问题或心理异常的来访者进行心理咨询与心理治疗的实操训练。因此，学生很难在学习过程种得到系统有目的针对性实操过程，尽管有实践课程，但又缺少了教师指导，使得教与学完全脱离。</p>'
						+ '<p>为了培养学生运用心理咨询与心理治疗理论的实际工作能力，强化学生在应用心理学方面的综合素质，为学生将来就业尽早适应并顺利开展心理咨询与心理治疗活动，乃至整个心理健康教育工作，心云天地依据心理咨询与心理治疗教学大纲及国家职业资格培训教程，研发PsyCloud心理实训系统，满足目前心理咨询与心理治疗教与学的需求，为学生理论学习及技能操作提供有效工具。</p>'
						+ '<p><b>功能与优势</b></p>'
						+ '<p><span>1</span>基于互联网B/S体系的云平台服务，可实现ios和android系统的跨平台使用<img src="front/img/pro/pro_01101.jpg" width="200px" style="width: 200px;margin: 15px;float: right;"></p>'
						+ '<p>本系统基于B/S架构，灵活便捷，既可以在局域网使用，也可外网操作，突破传统教与学环境的局限性。教师可以远程控制，集中管理，可随时监督学生的学习及训练状态。学生不受环境限制，可随时随地进行学习。</p>'
						+ '<p><span>2</span>功能全面，内容丰富且具权威性</p>'
						+ '<p>本系统依据教学大纲及国家职业资格培训教程，涵盖心理诊断训练、心理咨询训练、心理治疗训练、团体辅导训练、心理测评技能训练及教师评定六大模块，每个模块包括基本技能训练和综合技能训练，保证学生全面理解理论知识及锻炼实际操作能力。</p>'
						+ '<p><span>3</span>具有极大灵活性，呈现方式多样</p>'
						+ '<p>本系统根据学生学习特点，以文本及音视频方式呈现学习内容，且采用“中断-反馈”技术，使得学生有针对性、目的性进行学习与操作，实时得到学习反馈。另外，系统模拟学习与考核过程，促进学生有效提高学习效率。</p>'
						+ '<p><span>4</span>具有极大开放性，支持内容不断扩充</p>'
						+ '<p>本系统具有极大开放性，可与心云天地教学云平台的CEDS心理设计系统、量表编辑器、心理实验室管理系统等产品兼容，实现内容不断扩充，功能不断完善，满足实验室教与学以及管理需求。</p>'
						+ '<p><span>5</span>内容丰富，互动性强</p>'
						+ '<p>本系统包含至少40多个实例，覆盖个体面谈、心理咨询、症状识别、心理诊断、心 理治疗、团体辅导等方面。</p>'
						+ '<p>在训练过程中可以语音互动，可以实现语音指导、录音、评语，并且可以同时录制受训者的口头回答。</p>'
						+ '<p>每个训练仪针对常见的工具使用、理论知识、操作技能均有详细讲解、咨询模拟和相应的考核流程进行训练。</p>'
						+ '<h3>心理诊断训练仪</h3><p>心理诊断训练仪包括症状识别技能训练和心理诊断技能综合训练。其中，症状识别技能训练部分我们搜集了多种常见症状，训练者通过对各种症状的行为特征、姿态表现，掌握快速识别各种症状的能力。在心理诊断综合技能训练模块中，根据一般心理障碍的分类，我们搜集日常常见的各种心理障碍，训练学生对各种心理障碍的咨询诊断能力。</p></td>'
						+ '<h3>心理咨询训练仪</h3><p>心理咨询训练仪包括个体面谈技能训练和心理咨询技能综合训练。其中，个体面谈技能训练部分主要针对面谈中所主要采用的参与性技巧、影响性技巧和非言语技巧三类进行训练，使得训练者掌握各个面谈技能的基本理论知识。在心理咨询综合技能训练模块中，我们搜集了多个具体生活事件案例情景，采用“中断-反馈”技术，结合个体面谈技巧进行综合模拟训练，使得训练者能够掌握日常生活事件的咨询技巧。</p></td>'
						+ '<h3>心理治疗训练仪</h3><p>心理治疗训练仪包括心理治疗基本技能训练和危机干预综合技能训练。其中，心理治疗基本技能训练部分主要针对行为治疗技术、认知治疗技术和人本主义治疗技术中结合模拟治疗相应情景的方法进行训练，使训练者掌握心理治疗的普遍技术。在危机干预综合技能训练，我们搜集了多个应激创伤障碍的案例情景，使训练者掌握能够进行危机干预和心理康复训练的技能。</p></td>'
						+ '<h3>团体辅导训练仪</h3><p>团体辅导训练仪包括团体辅导基本技能训练和团辅课堂及团辅小组活动案例综合训练。其中，团体辅导基本技能训练部分主要是对团辅领导者的应具备的技术、团辅的过程与方法，团辅的具体方法和团辅各阶段的实操进行知识、技能的操作性训练，使团辅领导者熟练掌握团体的基本技能。在团辅课堂及团辅小组活动案例综合训练，我们搜集了中小学和企事业单位中常见心理问题的团体辅导案例情景，在案例情景中对团队领导者所应具备的技巧进行综合训练。</p></td>'
						+ '<h3>心理测评训练仪</h3><p>心理测评训练仪主要针对目前心理学常用的各种类型的量表的使用技能进行训练。包括量表基本信息的学习、量表修改与编制、量表施测与统计、量表解释等全方面进行训练，保证训练者对心理测评技能的专业化与熟练性。</p></td>'
						
						
			},
			// {
			// 	id : 12,
			// 	title : "EYE VIVERY眼动仪",
			// 	url : "product.html?type=0&id=12",
			// 	login : "#",
			// 	cover : "front/img/pro/pro_01200.jpg",
			// 	content : '<p>EV-PP2便携式眼动仪是由北京心云天地科技有限公司自主研发的便携式眼动测试设备，它提供对静态及动态素材的眼动测评功能和协同测评的环境。</p>'
			// 			+ '<p>EV-PP2便携式眼动仪客观真实地跟踪和记录人对视觉刺激的本能反应所产生的眼动数据，应用于市场研究及广告设计、界面设计及可用性研究、心理学研究、人机互动研究以及涉及眼动技术应用的相关领域，能够为客户提供完整的眼动跟踪解决方案和多种创新商业模式的应用。</p>'
			// 			+ '<p><b>1、功能特性</b></p>'
			// 			+ '<p><b>2、技术参数</b></p>'
			// 			+ '<p><table class="table table-bordered"><tr>'
			// 			+ '<td>采样率</td><td>120Hz</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>精准度</td><td>0.5°</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>空间分辨率</td><td>0.1°</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>延迟时长</td><td><8ms</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>校准方式</td><td>9点校准</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>有效识别距离</td><td>45cm – 75cm</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>头动范围</td><td>40cm x 30cm </td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>设备尺寸</td><td>20x2.2x2.0cm</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>设备重量</td><td>80g</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>数据接口</td><td>USB 3.0</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>操作系统</td><td>Win7/Win8/Win10</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>适用人群</td><td>支持戴隐形及普通眼镜被试者</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>分析软件</td><td>EVStudio + EVAnalyzer</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>分析内容</td><td>图片、网页、视频、动画等</td>'
			// 			+ '</tr><tr>'
			// 			+ '<td>安装方式</td><td>外挂或使用三角支撑架</td>'
			// 			+ '</tr></table></p>'
			// },
			{
				id : 13,
				title : "EYE VIVERY 眼动追踪系统",
				url : "product.html?type=0&id=13",
				login : "#",
				cover : "front/img/pro/pro_01300.jpg",
				content : '<p>EYE VIVERY 眼动追踪系统是北京心云天地自主研发、基于分析式和云计算的新一代眼动视觉数据分析系统。本系统通过后端统一部署分析模块、前端分离部署眼动仪硬件的创新性结构，满足高校局域网、云计算等实验室环境。通过对眼动仪采集的眼动数据进行多维度计算，能够输出热点图、轨迹图、焦点图、网络图等多种分析图形和数据，满足高校教学、实验、科研等应用要求。</p>'
						+ '<h3>系统特点：</h3>'
						+ '<p>云服务架构：支持异地协同开展测评活动，远程在线查看分析结果，适用于客户多样化的应用场景。</p>'
						+ '<p>可多台组网：可在局域网内多台联网，同时开展测评，适合于学校实验室多人开展实验及教学活动。</p>'
						+ '<p>人性化设计：人可在自由放松的状态下完成测评，自然采集到眼动数据，适应于戴眼镜等各类人群。</p>'
						+ '<p>多纬度分析：可采集和分析图片和视频的视觉数据，热点图、轨迹图、网格图、焦点图和详细图表。</p>'
						+ '<p>自定义数据：允许自定义录入被试属性信息，支持分类过滤，可以导出测评数据及图形，方便分析。</p>'
						+ '<p>便携易移动：视觉数据采集硬件做到极致，小巧方便携带，即插即用，减掉传统各种繁琐调试步骤。</p>'
						+ '<p>一站式服务：提供高性价比的租赁服务或整机销售，以及设备远程升级维护和使用培训等技术支持。</p>'
						+ '<h3>功能特点：</h3>'
						+ '<p><span>1</span>支持基于云结构的数据分析及管理2分析模块支持云计算虚拟机部署</p>'
						+ '<p><span>2</span>分析模块支持云计算虚拟机部署</p>'
						+ '<p><span>3</span>眼动客户端软件支持Windows7/8/10 <img src="front/img/pro/eye1.jpg" width="350px" style="width: 350px;margin: 15px;float: right;"></p>'
						+ '<p><span>4</span>统一设置并一键下发实验内容</p>'
						+ '<p><span>5</span>统一设置、灵活维护实验人员的信息、访问权限</p>'
						+ '<p><span>6</span>支持实验人员独立测评和分析回看</p>'
						+ '<p><span>7</span>安装、部署、使用等均为全中文操作界面</p>'
						+ '<p><span>8</span>人性化的操作界面，方便易用的使用环境和界面</p>'
						+ '<p><span>9</span>支持热点图、轨迹图、焦点图、网络图输出</p>'
						+ '<p><span>10</span>支持动态及变速回放功能，展现完整测试眼动过程<img src="front/img/pro/eye2.jpg" width="350px" style="width: 350px;margin: 15px;float: right;"></p>'
						+ '<p><span>11</span>支持图片、文字、网页、视频、动画等素材测评</p>'
						+ '<p><span>12</span>支持自定义信息录入、对结果数据进行筛选过滤分析</p>'
						+ '<p><span>13</span>支持原始数据的分析和导出，方便用户扩展分析</p>'
						+ '<p><span>14</span>支持图片分析和图片导出，支持统计数据导出</p>'
						+ '<p><span>15</span>支持分析参数选择调整、方便各类分析图形灵活展示</p>'
						+ '<p><span>16</span>支持测评工程、项目、方案三级分层管理</p>'
						+ '<p><span>17</span>支持远程升级、同步最新产品功能和服务</p>'
						+ '<p><span>18</span>一键故障上报、客服快速响应</p>'
						+ '<h3>技术参数</h3>'
						+ '<p><table class="table table-bordered"><tr>'
						+ '<td>采样率</td><td>120Hz</td>'
						+ '</tr><tr>'
						+ '<td>精准度</td><td>0.5°</td>'
						+ '</tr><tr>'
						+ '<td>空间分辨率</td><td>0.1°</td>'
						+ '</tr><tr>'
						+ '<td>延迟时长</td><td><8ms</td>'
						+ '</tr><tr>'
						+ '<td>校准方式</td><td>9点校准</td>'
						+ '</tr><tr>'
						+ '<td>有效识别距离</td><td>45cm – 75cm</td>'
						+ '</tr><tr>'
						+ '<td>头动范围</td><td>40cm x 30cm </td>'
						+ '</tr><tr>'
						+ '<td>设备尺寸</td><td>20x2.2x2.0cm</td>'
						+ '</tr><tr>'
						+ '<td>设备重量</td><td>80g</td>'
						+ '</tr><tr>'
						+ '<td>数据接口</td><td>USB 3.0</td>'
						+ '</tr><tr>'
						+ '<td>操作系统</td><td>Win7/Win8/Win10</td>'
						+ '</tr><tr>'
						+ '<td>适用人群</td><td>支持戴隐形及普通眼镜被试者</td>'
						+ '</tr><tr>'
						+ '<td>分析软件</td><td>EVStudio + EVAnalyzer</td>'
						+ '</tr><tr>'
						+ '<td>分析内容</td><td>图片、网页、视频、动画等</td>'
						+ '</tr><tr>'
						+ '<td>安装方式</td><td>外挂或使用三角支撑架</td>'
						+ '</tr></table></p>'

			}
		]
	},
	{
		type:3,
		id:3,
		kind:1,
		model:1,
		name:"心理学在线课堂",
		cover : "front/img/xlxzxkt.png",
		url : "http://per.cloud.psycloud.com.cn:8180/",
		//链接跳转其实可以不要items的东西，但是为了不改变原来的逻辑，所以加了一个items的内容
		items:[
			{
				id : 0,
				title : "心理学在线课堂",
				url : "http://per.cloud.psycloud.com.cn:8180/",
				login : "#",
				cover : "front/img/pro1/edu_01.png",
				content : `
					<p>
						目前学前教育重艺体技能训练，轻保教能力培养。学生受入园实习条件的限制，未能真正接触幼儿园的幼儿，掌握幼儿园里一日生活活动安排，自身的专业知识未能得到实践。
						岗前技能实训虚拟仿真系统旨在以3D动画的方式模拟幼儿园一日的生活，为学生 提供学习条件，使其学会合理安排和组织一日生活的各个环节，科学照顾幼儿园的日常生活活动，
						及时处理幼儿的常见事故。
					</p>
					<img  src="front/img/pre_edu/幼儿园岗前实训虚拟仿真系统1.jpg" style="width:100%">
					<p>
						其依据《幼儿园教师专业标准》，在幼儿园一日生活各环节中设定多种任务，提供多种学习资源，学生基于情景以角色扮演等方式解决问题，学习合理安排和组织一日生活的各个环节。
						Pre_Edu幼儿园岗前实训虚拟仿真系统，又可称为搬进教室的“幼儿园”，主要服务于“练”与“考”。
					</p>
					<img  src="front/img/pre_edu/幼儿园岗前实训虚拟仿真系统2.jpg" style="width:100%">
				`
			},
		]
	},
	{
		type : 4,
		id:4,
		name : "中小学教育系列产品",
		kind:0,
		model:1,
		cover : "front/img/xlxxlcp.png",
		url : "product.html?type=4&id=4",
		items :[
                {
				id : 1,
				title : "中小学心理素质教育平台",
				url : "product.html?type=4&id=4",
				login : "#",
				cover : "front/img/pro/中小学.png",
				content : '<h3>产品配置：</h3>'
						+ '<p>多功能全自动经络按摩放松椅、触摸屏控制器、生物反馈及心身放松训练系统、360 度可旋转支架,脑波 意念头箍,10.1 寸平板电脑、VR心理虚拟仿真系统。</p>'
						+ '<p>一、生物反馈及心身放松训练系统:采用便携式脑波设备作为前端脑电 测量设备,可实时获取被试者的脑电数据以及反映测试者心理状态的多项参数。 采用游戏、音乐、图像等多种方式进行训练,可以起到消除焦虑紧张情绪,实现身心 健康等作用。</p>'
						+ '<p>实时脑波数据监测 </p>'
						+ '<p>二、多功能全自动放松椅:</p>'
						+ '<p><span>1</span>新型太空舱理念设计。</p>'
						+ '<p><span>2</span>零重力按摩功能。 </p>'
						+ '<p><span>3</span>背架角度能够自动调节。</p>'
						+ '<p><span>4</span>气压、震动和人体穴位指压按摩功能。</p>'
						+ '<p><span>5</span>按摩椅内置音箱、音乐耳机。</p>'
						+ '<p><span>6</span>设有 VGA/BGN 接口可与智能手机实现信息互动。</p>'
						+ '<p>三、★VR心理虚拟仿真系统</p>'
						+ '<p><span>1</span>5.5寸2K高真屏幕， 2560×1440，刷新频率60Hz。</p>'
						+ '<p><span>2</span>Pentile排列，2K OLED屏，像素间隙小，画面更细腻。</p>'
						+ '<p><span>3</span>110度视场角FOV，视野更开阔。</p>'
						+ '<p><span>4</span>延迟率小于13毫秒。</p>'
						+ '<p><span>5</span>人体工学设计，佩戴更舒适。</p>'
						+ '<p><span>6</span>自动降雾装置，减少起雾概率。</p>'
						+ '<p><span>7</span>魔术帖衬垫，3秒拆换。</p>'
						+ '<p><span>8</span>连接方式：HDMI 1.4b;USB2.0以上。</p>'
						+ '<p><span>9</span>配备VR心理刺激呈现系统。</p>'
				},
				{
				id : 2,
				title : "心理档案系统",
				url : "product.html?type=1&id=2",
				login : "#",
				cover : "front/img/pro/pro_10200.jpg",
				content : '<p><span>1</span>心理档案系统是集心理测评和档案管理于一体的系统。</p>'
						+ '<p><span>2</span>本产品包含100个量表，量表适用于了解学生及其他个体的性格、兴趣、爱好、心理健康等特征。</p>'
						+ '<p><span>3</span>本产品是基于B/S架构，可使用互联网登陆访问，不受地域限制，方便灵活。</p>'
						+ '<p><span>4</span>分级分权限式的用户管理</p>'
						+ '<p>&nbsp;&nbsp;&nbsp;&nbsp;分校级管理员，院级管理员和教师管理员</p>'
						+ '<p>&nbsp;&nbsp;&nbsp;&nbsp;每个管理员都有一定的权限。</p>'
						+ '<p>&nbsp;&nbsp;&nbsp;&nbsp;学生用户只可以查看个人信息，进行测验及查看自己的测验结果。</p>'
						+ '<p>&nbsp;&nbsp;&nbsp;&nbsp;教师级管理员可以分配测验，查看所管理人员的测验结果，删减档案信息等等。</p>'
						+ '<p>&nbsp;&nbsp;&nbsp;&nbsp;校级管理员，院级管理员和教师管理员，都可以进行数据备份/恢复，数据导入/导出，但是只有要相对的权限范围内进行。</p>'
						+ '<p><span>5</span>安全的档案管理功能</p>'
						+ '<p>灵活的系统管理，实现用户权限的分级式管理，保证个人隐私的安全性；系统结构合理，包含用户的个人基本信息、咨询信息、诊断信息、测评信息以及附件等，建立档案简单方便灵活快捷。</p>'
						+ '<p><span>6</span>方便的测验管理功能</p>'
						+ '<p>可通过系统查询筛选对指定群体的用户安排测验项目。</p>'
						+ '<p>在相对应的权限下可以查看对应用户的测验情况，时时跟踪用户测验的结果，了解详细的测验过程。</p>'
						+ '<p><span>7</span>数据导入与导出功能</p>'
						+ '<p>高级级管理员可导入和导出与SPSS，EXCEL等专业统计软件格式兼容的数据文件，方便用使用SPSS等专业统计工具进行高级统计。</p>'
						+ '<p><span>8</span>庞大的统计分析功能</p>'
						+ '<p>本系统提供统计分析功能，包括相关分析、样本平均数的显著性检验、相关样本或独立样本平均数差异的显著性检验、方差分析等。可实现对指定因子分的平均数、标准差、分布频次、相关系数等数据进行团体统计，还可实现对两个或多个因素差异性比较进行显著性检验。</p>'
						+ '<p><span>9</span>统计报告多样化</p>'
						+ '<p>图表可以自定义导出内容，包括折线图、饼状图等等，方便后期统计报告。</p>'
			},
			{
				id : 3,
				title : "心理测评系统",
				url : "product.html?type=1&id=3",
				login : "http://xyjx.psycloud.com.cn:8080/xyjx/login.jsp",
				cover : "front/img/pro/pro_00300.jpg",
				content : '<p>产品介绍：团体测评心理测评软件内核由浙江大学心理学专家制作，总共有100多个国际标准量表，三版合一（网络版，局域网版，单机版），分为三级角色管理（高级管理员，心理老师，测评人员）三个级别管理组成，方便上级对整个未成年辅导中心的监管及数据的实时查看和调取。突破传统心理软件的单一测量功能，以一流高校心理辅导工作内容为蓝本，'
						+ '以互联网为工作平台，将计算机编程技术和网络的互动、无地域限制功能相结合，利用网络安全相对成熟的加密技术，把心理测量过程的开展、量表的管理以及整个学校心理咨询中心的日常工作集中在一套系统里面，解决学校心理辅导工作中的实际问题，将一所学校所有师生心理状况集中于一套系统内进行管理，实现心理辅导信息化办公的专业产品，以方便和减轻心理辅导教师的日常工作，把心理健康教育落到实处。长期以来，我们一直专注于学校的心理健康教育工作，目前软件在几千所单位中广泛使用。</p>'
						+ '<h4>系统安装和环境配置：</h4>'
						+ '<p><span>1</span>本系统是基于B/S网络架构开发的软件，安装心理测评系统需要WindowsXP/2000 server/2003 server操作系统中的任一种，操作系统中应已安装Internet Explorer 6.0或以上版本的Web浏览器。此外，硬盘中应至少有两个分区，其中D盘符是必须的。</p>'
						+ '<p><span>2</span>客户端无需安装，只需要保证能连接到服务器,以IE等浏览器为操作界面，并兼容其他浏览器。</p>'
						+ '<p><span>3</span>自带管理工具，可备份、还原、重启系统服务，保证数据安全。</p>'
						+ '<p><span>4</span>操作无需刻意培训，容易上手。</p>'
						+ '<p><span>5</span>量表管理智能化，可自行安装量表。</p>'
						+ '<p><span>6</span>程序包含了网站系统和心理测试系统，可直接用来快速搭建心理实验室等相关机构的大中型网站和心理测试系统，提供一站式解决方案。</p>'
			},
			{
				id : 9,
				title : "人才测评系统",
				url : "product.html?type=1&id=9",
				login : "#",
				cover : "front/img/pro/pro_30000.jpg",
				content : '<p>Psycloud人才测评系统是运用现代心理学、管理学及相关学科的研究成果，通过心理测验、情境模拟等客观化方法对人的能力、水平、性格特征、管理技能等因素进行测量，并根据职位需求及企业组织特性对其素质状况、发展潜力、个性特点等心理特征作出科学地评价，为企业用人、选人、育人等人事决策提供了切实的参考依据。</p>'
						+ '<p>Psycloud人才测评系统可支持纸笔、计算机测验和答题卡标准化测验等多种测验方式，同时适用于个体测试和团体测试。对于每一个测验，都附有详细的背景知识介绍。测试完毕，会给出标准化的结果报表，包括各项得分数据、图表以及专业化的解释和建议等。系统还可设置成套测验，测试完毕后生成包括多个测验项目的整体报表。系统具有完善的数据库管理功能和强大的数据分析处理能力，极大地方便了用户的使用。</p>'
						+ '<h3>功能介绍</h3>'
						+ '<p><span>1</span>测验功能</p>'
						+ '<p>★数据输入多样化：</p>'
						+ '<p>★成套测验：该功能允许普通用户一次连续地进行多个测验的测试。</p>'
						+ '<p>★测验指定：可根据需要，灵活指定单个测验项目或成套测验。</p>'
						+ '<p>★个性化测验列表：可自由设定测验类别和所属具体测验，让测验列表更符合用户使用需求。</p>'
						+ '<p>★自定义测验常模：可以根据自己的需要，自定义系统中测验的常模，进行适当的分数划界。</p>'
						+ '<p><span>2</span>网络功能（网络版）</p>'
						+ '<p>★ 网络测试：网络版除满足个体上机测试以外，用户还可以在包括服务器在内的任何一个装有网络版的机器上，同时进行团体网络测试。</p>'
						+ '<p>★网络数据收集：管理员在一台服务器上就可获得全部客户端数据，同时进行用户管理、查看结果、数据库备份等操作。</p>'
						+ '<p><span>3</span>数据管理功能</p>'
						+ '<p>★个性化报表定制： </p>'
						+ '<p>★数据查询：</p>'
						+ '<p>★结果分数检索：管理员可通过检索，迅速确定指定分数范围内的测试结果。</p>'
						+ '<p>★团体数据统计： </p>'
						+ '<p>★数据导入导出多样</p>'
						+ '<p>★数据库备份及恢复功能</p>'
						+ '<p><span>4</span>安全机制</p>'
						+ '<p>★用户分级管理：系统实行二级用户管理机制，包括管理员和普通用户，用户可拥有自己的密码。</p>'
						+ '<p>★个人信息管理：管理员能够管理普通用户的个人信息和结果数据，包括添加、删除、修改、查询等，还可以规定普通用户的权限。</p>'
						+ '<h3>软件内容</h3>'
						+ '<p><span>1</span>个性品质测验</p>'
						+ '<p>个性反映了一个人的行为方式和思维特点，它在一定程度上决定了个体所适合的工作类型、个体的工作方式和工作绩效。这部分提供了五个测验。</p>'
						+ '<p>（1）卡特尔16种人格因素问卷（16PF）</p>'
						+ '<p>（2）青年人格问卷（CPI）</p>'
						+ '<p>（3）艾森克人格问卷简版（EPQRSC）</p>'
						+ '<p>（4）DISC个性测验</p>'
						+ '<p>（5）职业个性测试</p>'
						+ '<p><span>2</span>职业适应性测验</p>'
						+ '<p>职业适应性测验从个体的兴趣、价值观等角度考察个体对于工作的期望，从而可以了解人与工作岗位之间的匹配关系。这部分提供了两个测验。</p>'
						+ '<p>（1）职业兴趣测查表（VIS）</p>'
						+ '<p>（2）职业价值观调查表</p>'
						+ '<p>3、组织行为特征测验</p>'
						+ '<p>本部分测验将考察个体既定的行为方式和特点，从而对其将来在工作环境中的行为特征进行预测。这部分共提供了两个测验。</p>'
						+ '<p>（1）内在－外在心理控制源量表（IELCS）</p>'
						+ '<p>（2）A型行为类型问卷（TABP）</p>'
						+ '<p><span>4</span>能力测验</p>'
						+ '<p>个体的能力水平会直接影响其工作绩效。智力反映了个体一般性的逻辑推理能力，是做好任何工作都必需的基本能力。不同的工作由于其独特的工作内容和方式，也需要从业者具备某些特定的能力。这部分提供两个测验。</p>'
						+ '<p>（1）联合型瑞文测验（CRT）</p>'
						+ '<p>（2）文书测验</p>'
						+ '<p><span>5</span>人际特征测验</p>'
						+ '<p>个体的人际交往特点会影响其在组织中是否善于合作、和其他成员和睦相处，也会决定其是否适合从事某些类型的工作，如管理、销售等。这部分提供两个测验。</p>'
						+ '<p>（1）基本人际关系倾向－行为量表（FIRO-B）</p>'
						+ '<p>（2）羞怯量表（SS）</p>'
						+ '<p><span>6</span>管理技能测验</p>'
						+ '<p>管理者必须具备一定的技能才能做好管理工作，这些技能包括良好的沟通能力、协调人际冲突、激励员工、建设团队等。这部分提供七个测验。</p>'
						+ '<p>（1）管理人际冲突能力评估</p>'
						+ '<p>（2）获取权力和影响力能力评估</p>'
						+ '<p>（3）激励员工能力评估</p>'
						+ '<p>（4）建设有效团队能力评估</p>'
						+ '<p>（5）时间管理能力评估</p>'
						+ '<p>（6）授权与委派能力评估</p>'
						+ '<p>（7）支持性沟通能力评估</p>'
						+ '<p><span>7</span>作答诚实度测验</p>'
						+ '<p>在使用自陈量表进行心理测评的时候，受测者有时会受到社会赞许性的影响，不能如实地进行做答。这里提供一个评估受测者做答可信度的量表。</p>'
						+ '<p>期待性回答平衡量表（BIDR）</p>'
						+ '<p>用于判断受测者对量表作答的可信性。包括两个因子：a自欺性拔高，即做出诚实但存在正性偏差自我陈述的倾向；b操纵印象，即有意识地伪装自我。包括40个条目。</p>'
			},
			{
				id : 8,
				title : "运动测评系统",
				url : "product.html?type=1&id=8",
				login : "#",
				cover : "front/img/pro/pro_20000.jpg",
				content : '<p>PsyCloud运动心理测评系统，包含运动心理学领域常用的20个量表和11个测验，涉及心理健康、焦虑、人格、气质、动机、自信心、意志品质、归因、应付方式、训练状态、心理技能、反应时、注意、认知能力等多个方面，几乎囊括了运动心理学所关注的所有热点问题。</p>'
						+ '<p>PsyCloud运动心理测评系统可支持纸笔、计算机测验和标准化测验等多种测验方式，同时适用于个体测试和团体测试。对于每一个量表或测验，都附有详细的介绍，包括其理论背景、形成和发展的过程、应用范围等；测试完毕，会给出准确的结果和专业化的解释。系统具有完善的数据库管理功能和强大的数据分析处理能力，极大地方便了用户的使用。</p>'
						+ '<p>PsyCloud运动心理测评系统是科研人员进行运动心理学相关研究的得力助手，也是各级运动队选拔运动员、对运动员进行心理状态监测、心理咨询和心理技能训练的有效工具。</p>'
						+ '<h3>功能特点：</h3>'
						+ '<p><span>1</span>测验功能:数据输入多样化：除个体直接上机测试的数据输入方式外，还支持纸笔问卷数据的手工录入，以及利用光电阅读机进行数据采集的标准化测试的数据文件导入。</p>'
						+ '<p><span>2</span>数据管理功能:个性化报表定制;数据查询;结果分数检索;团体数据统计;数据导入导出;数据库备份及恢复。</p>'
						+ '<p><span>3</span>安全机制:用户分级管理：系统实行二级用户管理机制。个人信息管理：轻松实现被试信息的添加、删除、修改、查询。</p>'
						+ '<p><span>4</span>教研辅助功能:用户可利用自己的研究成果自定义软件中量表的常模。</p>'
						+ '<h3>测试内容：</h3>'
						+ '<p><span>1</span>心理健康</p>'
						+ '<p>运动员的心理健康问题是运动心理学家和教练员需要认真研究的一个重要课题。运动员只有平时保持较高的心理健康水平，才能在运动竞赛中具有稳定良好的心理状态，发挥出最佳竞技水平。</p>'
						+ '<p><span>2</span>焦虑</p>'
						+ '<p>运动焦虑是指运动员在训练和比赛中，对当前的或预计到的具有潜在威胁的情境产生的担忧倾向。运动员的心理状态，赛前、赛中、赛后情绪的变化及其调节，最佳成绩的取得等都与焦虑有关。</p>'
						+ '<p><span>3</span>人格</p>'
						+ '<p>了解运动员的个性特征，区分不同项目运动员之间的个性差异，有助于科学地预测运动员的行为，还可以为运动员选材提供参照系。人格测验还可以用于运动员的心理咨询方面，帮助咨询师准确、迅速地了解咨询对象的个性发展情况。</p>'
						+ '<p><span>4</span>气质</p>'
						+ '<p>在体育运动领域，气质类型测试主要用于运动员的个性选材。现代体育项目众多，各个项目因其动作活动的不同，对于运动员气质的要求往往也有很大差异。</p>'
						+ '<p><span>5</span>动机</p>'
						+ '<p>动机是推动一个人从事某种活动的心理动因或内部动力。运动成就动机是决定运动员运动成就的关键因素，它和运动员的成绩有很大关系。</p>'
						+ '<p><span>6</span>意志品质</p>'
						+ '<p>无论在训练还是在比赛中，运动员都需要具备良好的意志品质，才能克服种种困难，完成高强度的训练任务，在比赛中迎难而上，锲而不舍，拼搏到底。</p>'
						+ '<p><span>7</span>自信</p>'
						+ '<p>自信心是运动潜力得以发挥的重要心理因素之一，它是运动员在比赛中获得胜利的重要影响因素。自信心能较好地预测比赛成绩，是区分优秀运动员与一般运动员的重要标志。</p>'
						+ '<p><span>8</span>归因</p>'
						+ '<p>归因是指个体对他人或自己的行为进行分析，判断和指出其性质或推论其原因的过程。归因的取向会影响运动员的动机和自信心，进而影响到训练和比赛的结果。</p>'
						+ '<p><span>9</span>应对方式</p>'
						+ '<p>运动员在其竞技生涯中，经常要面临各种压力和挑战，属于高应激性人群。应对方式作为一种中介因素，影响着应激反应的性质和强度，进而调节着应激与心理健康的关系。</p>'
						+ '<p><span>10</span>训练状态</p>'
						+ '<p>现代高水平竞技运动追求临界负荷训练，需要把握好训练量，使运动员既得到了充分锻炼又不至于太疲劳。在日常训练中，经常对运动员的训练状态进行监测，可以帮助教练员调整训练的安排，使之适应运动员的特点。</p>'
						+ '<p><span>11</span>心理技能</p>'
						+ '<p>心理技能是指运动员在训练和比赛中所使用的调控自己心理状态和行为的手段和方法，例如放松、表象训练、暗示、自我对话等。心理技能可以影响、制约运动员身体、技术、战术水平的改善和表现，促进其心理过程的不断完善，形成专项运动所需要的良好个性心理特征，为达到最佳竞技状态奠定基础。</p>'
						+ '<p><span>12</span>反应时</p>'
						+ '<p>反应时在一定程度上能较灵敏地反映人的应变能力和注意特征等心理特点，是构成运动员整个心理素质的重要因素之一。反应时是对运动员进行心理选材的重要指标，也可以用于测量中枢神经系统的疲劳程度。</p>'
						+ '<p><span>13</span>认知能力</p>'
						+ '<p>进行体育运动需要有许多认知活动的参与。较低级的认知活动包括感觉和知觉，较高级的认知活动就是思维，注意是所有认知活动所伴随的特征。</p>'
						+ '<p><span>14</span>其它</p>'
						+ '<p>在使用心理量表进行测评的时候，受测者有时会受到社会赞许性的影响，不能如实地进行做答。这里提供一个评估受测者做答可信度的量表。</p>'
			},
			{
				id : 0,
				title : "音乐放松椅",
				url : "product.html?type=1&id=0",
				login : "#",
				cover : "front/img/pro/pro_10000.jpg",
				content : '<h3>产品配置：</h3>'
						+ '<p><b>产品尺寸</b></p>'
						+ '<p>长105CM×宽90CM×高105CM(椅背收起) 长170CM×宽90CM×高60CM（椅背展开）</p>'
						+ '<p><b>产品工作原理</b></p>'
						+ '<p>利用心理音乐、心理电影及心理图片深入人的内心世界，让来访者达到放松目的，稳定情绪、调节压力、提高身心健康和工作学习效率。反馈型则通过指脉生理传感器，采集人体脉搏、血氧、心率等生理信号，经由USB接口传输到电脑进行处理分析，生理信号的变化状态将以三维动态的画面呈现给使用者，使用者可直观、实时了解身心放松、情绪控制的效果并及时做出调整，从而掌握一套有效的自我情绪调节、控制身心的方法。让使用者以此来稳定情绪，调节压力，提高身心健康和工作学习效率。</p>'
						+ '<p><b>产品主要功能</b></p>'
						+ '<p><span>1</span>缓解紧张与焦虑，增加积极情绪体验。</p>'
						+ '<p><span>2</span>提高压力应对和情绪自控能力。</p>'
						+ '<p><span>3</span>增加人体生理机能协调性、操作的稳定性。</p>'
						+ '<p><span>4</span>减少失误、提高决策的准确判断力。</p>'
			},
	       {
				id : 4,
				title : "VR虚拟系统",
				url : "product.html?type=1&id=4",
				login : "#",
				cover : "front/img/pro/pro_10100.jpg",
				content : '<h3>产品配置：</h3>'
						+ '<p>多功能全自动经络按摩放松椅、触摸屏控制器、生物反馈及心身放松训练系统、360 度可旋转支架,脑波 意念头箍,10.1 寸平板电脑、VR心理虚拟仿真系统。</p>'
						+ '<p>一、生物反馈及心身放松训练系统:采用便携式脑波设备作为前端脑电 测量设备,可实时获取被试者的脑电数据以及反映测试者心理状态的多项参数。 采用游戏、音乐、图像等多种方式进行训练,可以起到消除焦虑紧张情绪,实现身心 健康等作用。</p>'
						+ '<p>实时脑波数据监测 </p>'
						+ '<p>二、多功能全自动放松椅:</p>'
						+ '<p><span>1</span>新型太空舱理念设计。</p>'
						+ '<p><span>2</span>零重力按摩功能。 </p>'
						+ '<p><span>3</span>背架角度能够自动调节。</p>'
						+ '<p><span>4</span>气压、震动和人体穴位指压按摩功能。</p>'
						+ '<p><span>5</span>按摩椅内置音箱、音乐耳机。</p>'
						+ '<p><span>6</span>设有 VGA/BGN 接口可与智能手机实现信息互动。</p>'
						+ '<p>三、★VR心理虚拟仿真系统</p>'
						+ '<p><span>1</span>5.5寸2K高真屏幕， 2560×1440，刷新频率60Hz。</p>'
						+ '<p><span>2</span>Pentile排列，2K OLED屏，像素间隙小，画面更细腻。</p>'
						+ '<p><span>3</span>110度视场角FOV，视野更开阔。</p>'
						+ '<p><span>4</span>延迟率小于13毫秒。</p>'
						+ '<p><span>5</span>人体工学设计，佩戴更舒适。</p>'
						+ '<p><span>6</span>自动降雾装置，减少起雾概率。</p>'
						+ '<p><span>7</span>魔术帖衬垫，3秒拆换。</p>'
						+ '<p><span>8</span>连接方式：HDMI 1.4b;USB2.0以上。</p>'
						+ '<p><span>9</span>配备VR心理刺激呈现系统。</p>'
			},
			{
				id : 5,
				title : "智能呐喊仪",
				url : "product.html?type=1&id=5",
				login : "#",
				cover : "front/img/pro/pro_10500.jpg",
				content : '<h3>一、技术参数：</h3>'
						+ '<p>宣泄仪主机 外型尺寸：约高190cm×宽98cm×厚24cm</p>'
						+ '<p>主题控制器尺寸：约高120cm长40cm*宽35cm</p>'
						+ '<p>最大承受击打力：150公斤力</p>'
						+ '<p>LED闪灯： 16路LED发光灯条</p>'
						+ '<p>仿真宣泄靶：直径40CM，靶心直径18.5CM，高弹性海绵，内置一组高分辨力传感器 </p>'
						+ '<h3>二、产品功能：</h3>'
						+ '<p><span>1</span>8吋触摸屏显示及操作，清晰明了，方便来访者操作使用。</p>'
						+ '<p><span>2</span>自定义用户，来访者可以在管理者授权下建立自己账号，</p>'
						+ '<p><span>3</span>参数精确监测：每次使用情况自动存储（击打波形、力量、次数、评价等数据），用户可以看到每次使用的完整情况，管理者可调取对比数据。</p>'
						+ '<p><span>4</span>智能引导正向激励：系统通过测试者的击打力度和击打频率等原始数据等，分析被测试者的当前心理状态，通过波形参数显示以及科学的分析原理，并配合励志性的背景语音，有效的缓解被测人的心理状态。</p>'
						+ '<p><span>5</span>多种宣泄情绪主题：系统提供了8种常见的情绪问题而设定的宣泄主题，用户使用前先通过触摸屏控制器选择符合自己情绪的宣泄主题。</p>'
						+ '<p><span>6</span>LED火焰智能灯：系统设计了独特的LED火焰灯，根据击打的力量、速度，系统智能控制火爆炸效果，有积极的心理暗示作用。</p>'
						+ '<p><span>7</span>高清语音操作引导：系统采用高清语音操作引导语，明确、清晰指导宣泄者如何操作使用宣泄仪。</p>'
						+ '<p><span>8</span>音乐放松减压：若宣泄者需要平静宣泄方式，仪器可选择到音乐放松减压状态，自然环境、经典治疗、心灵按摩三种放松模式可供选择。</p>'
						+ '<p><span>9</span>常用减压放松主题文档供使用者阅读了解如何调节情绪和放松减压。</p>'
						+ '<p><span>10</span>系统设置管理员登陆口，方便管理及调取记录等。</p>'
						+ '<p><span>11</span>高弹性耐力面板，使用安全性更好。</p>'
						+ '<p><span>12</span>为满足不同行业机构的需求，可为用户提供个性化的定制服务，使得本产品能适用于更多的行业，提高宣泄活动效率与效用。</p>'
			},
			{
				id : 6,
				title : "实体沙盘",
				url : "product.html?type=1&id=6",
				login : "#",
				cover : "front/img/pro/pro_10600.jpg",
				content : '<p>箱庭（沙盘）疗法是分析心理学理论同游戏以及其他心理咨询理论结合起来的一种心理临床疗法，通过创造的意想和场景来表达自己，绕开咨询中心的阻抗直观显示内心世界。作为国外一种成熟的心理治疗技术，目前在我国也开始得到应用。它不但可以起到心理诊断与治疗的作用，基本上各种心理问题与心理障碍均可作为此方法的治疗范畴，同时还可以起到心理辅导与教育的作用</p>'
						+ '<h3>具体配置：</h3>'
						+ '<p>团体沙盘1套：包括2个大沙盘，1个小沙盘，4个沙具放置架，3000个沙具，30公斤沙子，一套沙盘管理软件、一部相机。</p>'
						+ '<p>标准沙盘1套：包括1个大沙盘，2个沙具放置架，1500个沙具，20公斤沙子，一套沙盘管理软件。</p>'
						+ '<p>小沙盘1套：包括1个小沙盘，1个沙具放置架，800个沙具，10公斤沙子，一套沙盘管理软件。</p>'
						+ '<h3>硬件详细参数：</h3>'
						+ '<p>沙具放置架：全实木颗粒材质9层设计（充分满足不同类别玩具按不同阶层分类摆放，便于来访者清晰地看到全部玩具），结构稳定大方、天然木纹色、外观考究（表面清漆涂层）,单体容纳500-800件玩具,尺寸（宽115*高180*深28cm）。</p>'
						+ '<p>大沙盘：内径101cm*101cm*8cm，材质：实木颗粒，颜色：内侧天蓝色，外侧自然木纹色，工艺及安全要求：底部安装防滑软垫，沙盘箱体内部防水，箱体外部表面透明清漆。</p>'
						+ '<p>小沙盘：内径57*72*7（cm）。材质：实木颗粒，颜色：内侧天蓝色，外侧自然木纹色，工艺及安全要求：底部安装防滑软垫，沙盘箱体内部防水，箱体外部表面透明清漆。</p>'
						+ '<p>沙具：按照大类和次类别划分，并提供主要类别与沙具的象征意义，沙具大类包含：人物、动物、植物、建筑物、交通工具、家居与生活用品、食物果实、天然物品、宇宙天体、宗教物品与其它，次类别不少于50种；</p>'
						+ '<p>沙子：颗粒光滑、高温消毒。</p>'
						+ '<p>相机：SONY 1820万像素</p>'
			},

		]
	},



	// {
	// 	type : 2,
	// 	name : "体育运动产品",
	// 	items : [
	// 		{
	// 			id : 0,
	// 			title : "运动测评系统",
	// 			url : "product.html?type=2&id=0",
	// 			login : "#",
	// 			cover : "front/img/pro/pro_20000.jpg",
	// 			content : '<p>PsyCloud运动心理测评系统，包含运动心理学领域常用的20个量表和11个测验，涉及心理健康、焦虑、人格、气质、动机、自信心、意志品质、归因、应付方式、训练状态、心理技能、反应时、注意、认知能力等多个方面，几乎囊括了运动心理学所关注的所有热点问题。</p>'
	// 					+ '<p>PsyCloud运动心理测评系统可支持纸笔、计算机测验和标准化测验等多种测验方式，同时适用于个体测试和团体测试。对于每一个量表或测验，都附有详细的介绍，包括其理论背景、形成和发展的过程、应用范围等；测试完毕，会给出准确的结果和专业化的解释。系统具有完善的数据库管理功能和强大的数据分析处理能力，极大地方便了用户的使用。</p>'
	// 					+ '<p>PsyCloud运动心理测评系统是科研人员进行运动心理学相关研究的得力助手，也是各级运动队选拔运动员、对运动员进行心理状态监测、心理咨询和心理技能训练的有效工具。</p>'
	// 					+ '<h3>功能特点：</h3>'
	// 					+ '<p><span>1</span>测验功能:数据输入多样化：除个体直接上机测试的数据输入方式外，还支持纸笔问卷数据的手工录入，以及利用光电阅读机进行数据采集的标准化测试的数据文件导入。</p>'
	// 					+ '<p><span>2</span>数据管理功能:个性化报表定制;数据查询;结果分数检索;团体数据统计;数据导入导出;数据库备份及恢复。</p>'
	// 					+ '<p><span>3</span>安全机制:用户分级管理：系统实行二级用户管理机制。个人信息管理：轻松实现被试信息的添加、删除、修改、查询。</p>'
	// 					+ '<p><span>4</span>教研辅助功能:用户可利用自己的研究成果自定义软件中量表的常模。</p>'
	// 					+ '<h3>测试内容：</h3>'
	// 					+ '<p><span>1</span>心理健康</p>'
	// 					+ '<p>运动员的心理健康问题是运动心理学家和教练员需要认真研究的一个重要课题。运动员只有平时保持较高的心理健康水平，才能在运动竞赛中具有稳定良好的心理状态，发挥出最佳竞技水平。</p>'
	// 					+ '<p><span>2</span>焦虑</p>'
	// 					+ '<p>运动焦虑是指运动员在训练和比赛中，对当前的或预计到的具有潜在威胁的情境产生的担忧倾向。运动员的心理状态，赛前、赛中、赛后情绪的变化及其调节，最佳成绩的取得等都与焦虑有关。</p>'
	// 					+ '<p><span>3</span>人格</p>'
	// 					+ '<p>了解运动员的个性特征，区分不同项目运动员之间的个性差异，有助于科学地预测运动员的行为，还可以为运动员选材提供参照系。人格测验还可以用于运动员的心理咨询方面，帮助咨询师准确、迅速地了解咨询对象的个性发展情况。</p>'
	// 					+ '<p><span>4</span>气质</p>'
	// 					+ '<p>在体育运动领域，气质类型测试主要用于运动员的个性选材。现代体育项目众多，各个项目因其动作活动的不同，对于运动员气质的要求往往也有很大差异。</p>'
	// 					+ '<p><span>5</span>动机</p>'
	// 					+ '<p>动机是推动一个人从事某种活动的心理动因或内部动力。运动成就动机是决定运动员运动成就的关键因素，它和运动员的成绩有很大关系。</p>'
	// 					+ '<p><span>6</span>意志品质</p>'
	// 					+ '<p>无论在训练还是在比赛中，运动员都需要具备良好的意志品质，才能克服种种困难，完成高强度的训练任务，在比赛中迎难而上，锲而不舍，拼搏到底。</p>'
	// 					+ '<p><span>7</span>自信</p>'
	// 					+ '<p>自信心是运动潜力得以发挥的重要心理因素之一，它是运动员在比赛中获得胜利的重要影响因素。自信心能较好地预测比赛成绩，是区分优秀运动员与一般运动员的重要标志。</p>'
	// 					+ '<p><span>8</span>归因</p>'
	// 					+ '<p>归因是指个体对他人或自己的行为进行分析，判断和指出其性质或推论其原因的过程。归因的取向会影响运动员的动机和自信心，进而影响到训练和比赛的结果。</p>'
	// 					+ '<p><span>9</span>应对方式</p>'
	// 					+ '<p>运动员在其竞技生涯中，经常要面临各种压力和挑战，属于高应激性人群。应对方式作为一种中介因素，影响着应激反应的性质和强度，进而调节着应激与心理健康的关系。</p>'
	// 					+ '<p><span>10</span>训练状态</p>'
	// 					+ '<p>现代高水平竞技运动追求临界负荷训练，需要把握好训练量，使运动员既得到了充分锻炼又不至于太疲劳。在日常训练中，经常对运动员的训练状态进行监测，可以帮助教练员调整训练的安排，使之适应运动员的特点。</p>'
	// 					+ '<p><span>11</span>心理技能</p>'
	// 					+ '<p>心理技能是指运动员在训练和比赛中所使用的调控自己心理状态和行为的手段和方法，例如放松、表象训练、暗示、自我对话等。心理技能可以影响、制约运动员身体、技术、战术水平的改善和表现，促进其心理过程的不断完善，形成专项运动所需要的良好个性心理特征，为达到最佳竞技状态奠定基础。</p>'
	// 					+ '<p><span>12</span>反应时</p>'
	// 					+ '<p>反应时在一定程度上能较灵敏地反映人的应变能力和注意特征等心理特点，是构成运动员整个心理素质的重要因素之一。反应时是对运动员进行心理选材的重要指标，也可以用于测量中枢神经系统的疲劳程度。</p>'
	// 					+ '<p><span>13</span>认知能力</p>'
	// 					+ '<p>进行体育运动需要有许多认知活动的参与。较低级的认知活动包括感觉和知觉，较高级的认知活动就是思维，注意是所有认知活动所伴随的特征。</p>'
	// 					+ '<p><span>14</span>其它</p>'
	// 					+ '<p>在使用心理量表进行测评的时候，受测者有时会受到社会赞许性的影响，不能如实地进行做答。这里提供一个评估受测者做答可信度的量表。</p>'
	// 		},	{
	// 			id : 1,
	// 			title : "体育技能选才系统",
	// 			url : "product.html?type=2&id=1",
	// 			login : "#",
	// 			cover : "front/img/pro/pro_20100.jpg",
	// 			content : '<p>PsyCloud体育技能选才系统可测验运动员的手脚反应时、时空判断、方位反应、综合反应、动作稳定性、注意力集中、肘动作方位、人格特质等综合指标，可用于运动员的选材、心理测试、心理训练等领域。</p>'
	// 					+ '<h3>功能特点：</h3>'
	// 					+ '<p><span>1</span>时空判断意义：它是反映运动员时间估计准确性的敏感指标。测试方法：射击靶从左侧和右侧向屏幕对侧移动，红心在屏幕中央（红心就是运动员的瞄准器准心，大小和靶的中心相同）。靶匀速运动直到消失在屏幕对侧。被试按键后靶停止移动，计算机统计靶和红心的误差。测试结果指标：平均误差、标准差。</p>'
	// 					+ '<p><span>2</span>光反应（手）意义：测量运动员手对光刺激的反应时。测试方法：运动员在红光出现时尽快按键反应。测试结果指标：平均反应时间、标准差。</p>'
	// 					+ '<p><span>3</span>声反应（手）意义：测量运动员手对声刺激的反应时。测试方法：运动员在刺激声出现时尽快按键反应。测试结果指标：平均反应时间、标准差。</p>'
	// 					+ '<p><span>4</span>光反应（脚）意义：测量运动员脚对光刺激的反应时。测试方法：运动员在红光出现时尽快踩脚踏板反应。测试结果指标：平均反应时间、标准差。</p>'
	// 					+ '<p><span>5</span>声反应（脚）意义：测量运动员脚对声刺激的反应时。测试方法：运动员在刺激声出现时尽快踩脚踏板反应。测试结果指标：平均反应时间、标准差。</p>'
	// 					+ '<p><span>6</span>方位反应意义：这是反映运动员手脚协调能力的测试。测试材料：方块、飞碟、羽毛球、乒乓球、足球、篮球、手球、垒球、击剑可选。测试方法：图片随机出现在屏幕的四个角。图片方块、羽毛球、乒乓球、足球、篮球、排球、飞碟、击剑可选。运动员根据图片出现的位置做相应的反应。左上角则左手按键；右上角则右手按键；左下角则踩左侧脚踏板；右下角则踩右侧脚踏板。测试结果指标：平均反应时间、标准差、错误次数。</p>'
	// 					+ '<p><span>7</span>综合反应意义：反映运动员对事先设定条件刺激快速应答动作以及协调能力。测试材料： 方块、飞碟、羽毛球、乒乓球、足球、篮球、手球、垒球、击剑可选。测试方法：每组有4×6共24个图，共8组。第一组是练习，后7组是正式测验。要求运动员按指定的顺序尽快用相应的手或脚尽快反应完。测试结果指标：完成时间、错误次数。</p>'
	// 					+ '<p><span>8</span>棒框仪这是一种反映运动员对周围环境依赖程度的指标。</p>'
	// 					+ '<p><span>9</span>九孔仪用以测定把握动作平衡性的能力。具有渐次缩小的九孔实验板，配接计时、计数器时便可进行实验和研究。可用于运动感觉能力与情绪稳定性的心理实验。</p>'
	// 					+ '<p><span>10</span>注意集中仪可进行视觉动作学习和注意力品质的测验；也可用于射击等体育运动的心理训练和测试，以达到培养运动员的注意力、集中能力以及抵抗外界干扰的能力。</p>'
	// 					+ '<p>11动觉方位辨别仪（肘动作方位仪） 用以自我辨别身体姿态(或肌体某部分运动状态)的内部感觉；用于个体动觉判别能力的心理实验。也可为培训和选拔对有方位感要求的专业人员提供科学的测试手段。方位定标精细，滑动臂转动范围达180。</p>'
	// 					+ '<div class="space"></div>'
	// 					+ '<p>CRT指数测验是一种非文字智力测验。测试不受文化、种族和语言的限制，特别适用于测量个体的观察、思考与推理的能力。</p>'
	// 					+ '<p>成人人格因素测验卡特尔十六种人格因素测验(简称16PF)是美国伊利诺州立大学人格及能力测验研究所卡特尔教授经过几十年的系统观察和科学实验，以及用因素分析统计法慎重确定和编制而成的一种精确的测验。这一测验能以约四十五分钟的时间测量出十六种主要人格特征，'
	// 					+ '凡具有相当于初三以上文化程度的人都可以使用。十六种人格因素是各自独立的，相互之间的相关度极小，每一种因素的测量都能使被试某一方面的人格特征有清晰而独特的认识，更能对被试人格的十六种不同因素的组合作出综合性的了解，从而全面评价其整个人格。</p>'
	// 					+ '<p>青少年人格因素测验十四种人格因素是各自独立的，每一种因素与其他各因素的相关极小。因此，每一种因素的测量都能使主试对受试者某一方面的人格特征有清晰而独特的认识，更能够对被试人格的十四种不同因素的组合作出综合性的了解，从而全面地评价儿童的人格。</p>'
	// 					+ '<p>气质测验问卷气质是个性心理特点之一。该量表包含60道题目，分别属于四种气质特点：多血质、胆汁质、粘液质和抑郁质，每题采用5级评分。要求受试者根据自己的实际情况做评定，使用简便，测查比较全面。</p>'
	// 					+ '<p>状态特质焦虑问卷该量表为自评量表，由40项描述题组成，分为两个分量表：</p>'
	// 					+ '<p><span>1</span>状态焦虑量表(简称S-AI)，包括第1-20题。状态焦虑描述一种通常为短暂性的不愉快的情绪体验，如紧张、恐惧、忧虑和神经质，伴有植物神经系统的功能亢进。</p>'
	// 					+ '<p><span>2</span>特质焦虑量表(简称T-AI)，包括第21-40题。特质焦虑描述相对稳定的，作为一种人格特质且具有个体差异的焦虑倾向。该量表用于个人或集体测试，受试者一般需具有初中文化水平。测查无时间限制，一般10－20分钟可完成整个量表条目的回答。</p>'
	// 					+ '<p>症状自评量表该量表从9个方面，以身心症状表现的角度考查了个体的心理健康水平，如果在某些症状上的得分越高，感觉到某些症状的频度和强度都比较严重，就应该注意个体在这个方面的问题。</p>'
	// 					+ '<p>焦虑自评量表（SAS） 焦虑自评量表最大的特点是简便省时、易于掌握，能较为准确而迅速的反映出被试个人主观感受到的焦虑程度。该量表适用于被测试者对自身焦虑状况的了解，也可用于焦虑症患者治疗前后的情况比较。该量表测量的是最近一周内的症状水平，评分不受年龄、性别、经济状况等因素的影响。</p>'
	// 					+ '<p>抑郁自评量表（SDS）抑郁自评量表（SDS）为短程自评量表和问卷，能有效地反映抑郁状态的有关症状及其严重程度和变化情况，评分不受年龄、性别、经济状况等因素的影响，并且操作方便，容易掌握，因而应用十分广泛。</p>'
	// 		}
	// 	]
	// },
	// {
	// 	type : 3,
	// 	name : "人力资源类产品",
	// 	items : [
	// 		{
	// 			id : 0,
	// 			title : "人才测评系统",
	// 			url : "product.html?type=3&id=0",
	// 			login : "#",
	// 			cover : "front/img/pro/pro_30000.jpg",
	// 			content : '<p>Psycloud人才测评系统是运用现代心理学、管理学及相关学科的研究成果，通过心理测验、情境模拟等客观化方法对人的能力、水平、性格特征、管理技能等因素进行测量，并根据职位需求及企业组织特性对其素质状况、发展潜力、个性特点等心理特征作出科学地评价，为企业用人、选人、育人等人事决策提供了切实的参考依据。</p>'
	// 					+ '<p>Psycloud人才测评系统可支持纸笔、计算机测验和答题卡标准化测验等多种测验方式，同时适用于个体测试和团体测试。对于每一个测验，都附有详细的背景知识介绍。测试完毕，会给出标准化的结果报表，包括各项得分数据、图表以及专业化的解释和建议等。系统还可设置成套测验，测试完毕后生成包括多个测验项目的整体报表。系统具有完善的数据库管理功能和强大的数据分析处理能力，极大地方便了用户的使用。</p>'
	// 					+ '<h3>功能介绍</h3>'
	// 					+ '<p><span>1</span>测验功能</p>'
	// 					+ '<p>★数据输入多样化：</p>'
	// 					+ '<p>★成套测验：该功能允许普通用户一次连续地进行多个测验的测试。</p>'
	// 					+ '<p>★测验指定：可根据需要，灵活指定单个测验项目或成套测验。</p>'
	// 					+ '<p>★个性化测验列表：可自由设定测验类别和所属具体测验，让测验列表更符合用户使用需求。</p>'
	// 					+ '<p>★自定义测验常模：可以根据自己的需要，自定义系统中测验的常模，进行适当的分数划界。</p>'
	// 					+ '<p><span>2</span>网络功能（网络版）</p>'
	// 					+ '<p>★ 网络测试：网络版除满足个体上机测试以外，用户还可以在包括服务器在内的任何一个装有网络版的机器上，同时进行团体网络测试。</p>'
	// 					+ '<p>★网络数据收集：管理员在一台服务器上就可获得全部客户端数据，同时进行用户管理、查看结果、数据库备份等操作。</p>'
	// 					+ '<p><span>3</span>数据管理功能</p>'
	// 					+ '<p>★个性化报表定制： </p>'
	// 					+ '<p>★数据查询：</p>'
	// 					+ '<p>★结果分数检索：管理员可通过检索，迅速确定指定分数范围内的测试结果。</p>'
	// 					+ '<p>★团体数据统计： </p>'
	// 					+ '<p>★数据导入导出多样</p>'
	// 					+ '<p>★数据库备份及恢复功能</p>'
	// 					+ '<p><span>4</span>安全机制</p>'
	// 					+ '<p>★用户分级管理：系统实行二级用户管理机制，包括管理员和普通用户，用户可拥有自己的密码。</p>'
	// 					+ '<p>★个人信息管理：管理员能够管理普通用户的个人信息和结果数据，包括添加、删除、修改、查询等，还可以规定普通用户的权限。</p>'
	// 					+ '<h3>软件内容</h3>'
	// 					+ '<p><span>1</span>个性品质测验</p>'
	// 					+ '<p>个性反映了一个人的行为方式和思维特点，它在一定程度上决定了个体所适合的工作类型、个体的工作方式和工作绩效。这部分提供了五个测验。</p>'
	// 					+ '<p>（1）卡特尔16种人格因素问卷（16PF）</p>'
	// 					+ '<p>（2）青年人格问卷（CPI）</p>'
	// 					+ '<p>（3）艾森克人格问卷简版（EPQRSC）</p>'
	// 					+ '<p>（4）DISC个性测验</p>'
	// 					+ '<p>（5）职业个性测试</p>'
	// 					+ '<p><span>2</span>职业适应性测验</p>'
	// 					+ '<p>职业适应性测验从个体的兴趣、价值观等角度考察个体对于工作的期望，从而可以了解人与工作岗位之间的匹配关系。这部分提供了两个测验。</p>'
	// 					+ '<p>（1）职业兴趣测查表（VIS）</p>'
	// 					+ '<p>（2）职业价值观调查表</p>'
	// 					+ '<p>3、组织行为特征测验</p>'
	// 					+ '<p>本部分测验将考察个体既定的行为方式和特点，从而对其将来在工作环境中的行为特征进行预测。这部分共提供了两个测验。</p>'
	// 					+ '<p>（1）内在－外在心理控制源量表（IELCS）</p>'
	// 					+ '<p>（2）A型行为类型问卷（TABP）</p>'
	// 					+ '<p><span>4</span>能力测验</p>'
	// 					+ '<p>个体的能力水平会直接影响其工作绩效。智力反映了个体一般性的逻辑推理能力，是做好任何工作都必需的基本能力。不同的工作由于其独特的工作内容和方式，也需要从业者具备某些特定的能力。这部分提供两个测验。</p>'
	// 					+ '<p>（1）联合型瑞文测验（CRT）</p>'
	// 					+ '<p>（2）文书测验</p>'
	// 					+ '<p><span>5</span>人际特征测验</p>'
	// 					+ '<p>个体的人际交往特点会影响其在组织中是否善于合作、和其他成员和睦相处，也会决定其是否适合从事某些类型的工作，如管理、销售等。这部分提供两个测验。</p>'
	// 					+ '<p>（1）基本人际关系倾向－行为量表（FIRO-B）</p>'
	// 					+ '<p>（2）羞怯量表（SS）</p>'
	// 					+ '<p><span>6</span>管理技能测验</p>'
	// 					+ '<p>管理者必须具备一定的技能才能做好管理工作，这些技能包括良好的沟通能力、协调人际冲突、激励员工、建设团队等。这部分提供七个测验。</p>'
	// 					+ '<p>（1）管理人际冲突能力评估</p>'
	// 					+ '<p>（2）获取权力和影响力能力评估</p>'
	// 					+ '<p>（3）激励员工能力评估</p>'
	// 					+ '<p>（4）建设有效团队能力评估</p>'
	// 					+ '<p>（5）时间管理能力评估</p>'
	// 					+ '<p>（6）授权与委派能力评估</p>'
	// 					+ '<p>（7）支持性沟通能力评估</p>'
	// 					+ '<p><span>7</span>作答诚实度测验</p>'
	// 					+ '<p>在使用自陈量表进行心理测评的时候，受测者有时会受到社会赞许性的影响，不能如实地进行做答。这里提供一个评估受测者做答可信度的量表。</p>'
	// 					+ '<p>期待性回答平衡量表（BIDR）</p>'
	// 					+ '<p>用于判断受测者对量表作答的可信性。包括两个因子：a自欺性拔高，即做出诚实但存在正性偏差自我陈述的倾向；b操纵印象，即有意识地伪装自我。包括40个条目。</p>'
	// 		}
	// 	]
	// },
	/*{
		type : 4,
		name : "虚拟仿真产品",
		items : [
			{
				id : 0,
				title : "广告评估1",
				url : "product.html?type=5&id=0",
				cover : "front/img/temp09.jpg",
				content : "广告评估内容内容内容内容"
			}
		]
	},*/
	// {
	// 	type : 5,
	// 	name : "工具类产品",
	// 	items : [
	// 		{
	// 			id : 0,
	// 			title : "SPSS",
	// 			url : "product.html?type=5&id=0",
	// 			login : "#",
	// 			cover : "front/img/pro/pro_40000.jpg",
	// 			content : '<p>SPSS Statistics 统计分析软件是一款在调查统计行业、市场研究行业、医学统计、政府和企业的数据分析应用中久享盛名的统计分析工具，是世界上最早的统计分析软件，由美国斯坦福大学的三位研究生于1968年研制，'
	// 					+ '1984年SPSS首先推出了世界上第一个统计分析软件微机版本SPSS/PC+，极大地扩充了它的应用范围，并使其能很快地应用于自然科学、技术科学、社会科学的各个领域，'
	// 					+ '世界上许多有影响的报刊杂志纷纷就SPSS的自动统计绘图、数据的深入分析、使用方便、功能齐全等方面给予了高度的评价与称赞。在国际学术界有条不成文的规定，即在国际学术交流中，凡是用SPSS软件完成的计算和统计分析，可以不必说明算法，由此可见其影响之大和信誉之高。</p>'
	// 					+ '<p><img src="front/img/pro/pro_50001.png" class="img-responsive center-block"></p>'
	// 					+ '<p>迄今SPSS Statistics软件已有40余年的成长历史。全球约有28万家产品用户，它们分布于通讯、医疗、银行、证券、保险、制造、商业、市场研究、科研教育等多个领域和行业，是世界上应用最广泛的专业统计软件。</p>'
	// 					+ '<p>在2009年IBM收购SPSS公司后，现在在中国国内市场上推出的最新产品，是IBM SPSS Statistics 20.0多国语言版。</p>'
	// 		},{
	// 			id : 1,
	// 			title : "EPRIME",
	// 			url : "product.html?type=5&id=1",
	// 			login : "#",
	// 			cover : "front/img/pro/pro_40100.jpg",
	// 			content : '<p>E-Prime是由卡奈基-梅龙大学和匹兹堡大学Pittsburgh学习研究与发展中心、美国PST (心理学软件工具公司，PSYCHOLOGY SOFTWARE TOOLS,INC)联合开发的一套用于计算机化行为研究的实验生成系统。'
	// 					+ 'E-Prime心理学实验操作平台，是一个高等的图形设计环境，涵盖从实验生成到毫秒精度的数据收集与初步分析等功能，提供革命性的新工具，'
	// 					+ '以加速实验发展，E-Prime可以让您在设计实验时，只须选取常用的实验功能图标，然后把图标拖曳到实验程序内，可以在短短的时间，建立复杂的实验程序。</p>'
	// 					+ "<p>E- Prime是 Experimenter's Prime (best) 的简称,是实现计算机化行为研究的一个跨平台系统,它与所有的可视化编程语言系统相似,使用类似于 Visual Basic的 E- Basic语言,"
	// 					+ '是一个涵盖从实验生成到毫秒精度数据收集与初步分析的图形界面应用软件套装。该系统包括如下特征:图形化界面编程环境,对实验功能的实现可以通过所见即所得的选择、'
	// 					+ '拖放和设定产生,使编程简单化;面向对象的简单易懂的 Script 语言,类似于Visual Basic,提供了许多针对行为研究的增强命令,为编程提供了灵活性,可以帮助实现更加灵活全面的实验范式,'
	// 					+ '并提供了E- Prime的扩展空间;扩展的数据分析和导出系统;数据检验核对功能;实验生成向导;PsychMate系统提供了实验教学需要的经典实验。</p>'
	// 					+ '<p>功能: 实验设计、生成、运行、收集数据、编辑和预处理分析数据。</p>'
	// 					+ '<p>E-Prime能呈现的刺激可以是文本、图像和声音(可以同时呈现三者的任意组合)提供了详细的时间信息和事件细节(包括呈现时间、反应时间的细节)，可供进一步分析，有助于了解实际实验运行的时间问题。专门面向心理实验，并针对心理实验的时间精度作了优化。刺激呈现与屏幕刷新同步，精度可达毫秒。相对于传统编程语言，E-Prime易学易用，实验生成快速。</p>'
	// 					+ '<p></p>'
	// 					+ '<p></p>'
	// 					+ '<p></p>'
	// 					+ '<p></p>'
	// 					+ '<p></p>'
	// 		}
	// 	]
	// }
];

//新闻资讯
var news = [
	{
		type : 'com',
		title : "公司动态",
		url : "news.html?type=com",
		items : [
			{
				id : 0,
				title : "心云天地助力“中国教育学会学校教育心理学分会理事会暨中国学校教育心理学2016年度学术研讨会”圆满举行",
				time : "2016-11-06",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_00_00.png",
				abstract : "由中国教育学会学校教育心理学分会主办，北京师范...",//摘要  30-40字
				content : '<p>由中国教育学会学校教育心理学分会主办，北京师范大学珠海分校教育学院承办，北京心云天地科技有限公司协办的'
						+ '“中国教育学会学校教育心理学分会理事会暨中国学校教育心理学2016年度学术研讨会”于2016年11月3-6日在珠海召开，'
						+ '中国教育学会学校教育心理学分会近60名理事，'
						+ '以及高等院校和中小学校从事学校心理健康教育研究与实践的专家学者300多人参加了此次研讨会。</p>'
						+ '<p>本次会议围绕“聚焦核心素养，关注心理发展”这一主题，从学校教育心理学的视域深入研讨学生应具备的、能够适应终身发展和社会'
						+ '发展需要的必备品格和关键能力，以及培养策略、发展路径等。研讨会的主要议题包括学生核心素养的培养策略与发展路径、'
						+ '核心素养与心理教师的专业化发展、核心素养与学校心理健康教育课程体系的重构、'
						+ '全媒体时代的学校心康教育、融合教育与学校特殊儿童的心理关顾、当前学校心理健康教育工作挑战与应对等。</p>'
						+ '<p>中国教育学会学校教育心理学分会成立于1984年11月28日，是中国教育学会成立最早的分支机构之一，前身为中国教育学会儿童教育心理学研究会。'
						+ '教育心理学分会的主要职责是组织协调国内与学校教育心理学相关的理论研究；组织开展与学校教育心理学相关的课程教材的研究开发；'
						+ '举办全国范围的与学校教育心理学相关的学术研讨会和交流活动；组织开展与学校教育心理学相关的业务培训和咨询服务等。'
						+ '分会重点研究和探讨儿童青少年认知发展与学习、儿童青少年社会性发展与德育、儿童青少年心理健康教育、中小学教师职业发展与专业成长等议题。'
						+ '目前分会的工作重点是学校心理健康教育的有效推进和重点弱势人群的心理健康促进等方面。中国教育学会学校教育心理学分会'
						+ '理事会暨中国学校教育心理学年度学术研讨会建立了该领域高效、互动的沟通交流平台，在国内享有较高的学术声誉和影响力。</p>'
						+ '<p>北京心云天地科技有限公司作为大会协办方，全程参与大会，广泛而深入的与各界专家学者交流'
						+ '讨论国内心理学发展特别是中小学生心理健康教育等议题，积极助力此次大会的圆满成功。</p>'
						+ '<p><img src="front/img_t/com/news_00_02.png" class="img-responsive center-block" ></p>'
						+ '<p><img src="front/img_t/com/news_00_03.png" class="img-responsive center-block" ></p>'
						+ '<p><img src="front/img_t/com/news_00_04.png" class="img-responsive center-block" ></p>'
						+ '<div class="space"></div>'
			},{
				id : 1,
				title : "心云天地参与“第三届福建省高校教育学、心理学专业建设协作会议暨2016年闽台高校教育学科建设研讨会”",
				time : "2016-12-25",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_01_00.png",
				abstract : "2016年12月23日-25日,由福建省高校教育学、心理...",
				content : '<p><img src="front/img_t/com/news_01_02.png" class="img-responsive center-block" ></p>'
						+ '<p>2016年12月23日-25日,由福建省高校教育学、心理学专业建设协作联盟与闽南师范大学联合主办的“第三届福建省高校教育学、'
						+ '心理学专业建设协作会议暨2016年闽台高校教育学科建设研讨会”在漳州宾馆举行。来自印尼、台湾以及省内9所高校的60余名专家学者参加会议。</p>'
						+ '<p>本次会议以“教育学科和心理学科的发展规划与特色建设”为主题，共举办8场大会专题报告、2个分组讨论与报告，'
						+ '就教育与心理学科的发展定位与未来规划、国考背景下教师教育类课程面临的问题与对策、'
						+ '师范生专业实践平台的构建与创新、师范生创新创业能力的培养等开展专题研讨。</p>'
						+ '<p>在专题报告环节，福建师范大学教育学院院长助理张锦坤副教授、印尼阿拉扎大学心理与教育学院院长Fidesrinur教授、'
						+ '闽南师范大学教育科学学院余益兵副教授、台东大学教育学系主任何俊青教授、高雄师范大学夏允中教授、'
						+ '泉州师范学院公共教学部主任吴忠良、台中教育大学吕锤卿教授和台湾本土心理研究基金会执行长林以正分别作了专题报告；'
						+ '在分组讨论环节，闽南师范大学应用心理研究所所长张灵聪教授主持心理学科专业发展与建设的小组讨论并在大会上进行汇报，'
						+ '福建师范大学洪明教授主持教育学科专业发展与建设的小组讨论并由福建师范大学孙曼丽副教授在大会上进行汇报。</p>'
						+ '<p>北京心云天地科技有限公司全程参加此次盛会。此次大会，拓展了心云天地对国内心理学教育的视野，增进了心云天地与福建省'
						+ '各界心理学教育学者的交流与对话，丰富了心云天地一直秉持的“专业的产品、创新的设计、生动的展现、'
						+ '灵活的应用”经营理念所涵盖的意义以及产品建设的思路，也有助于提升心云天地对国内心理学行业现状的理解与长期可持续性的发展。</p>'
						+ '<div class="space"></div>'
			},{
				id : 2,
				title : "心云天地参加“第五届海峡心理论坛暨首届文化心理与教育国际学术研讨会”",
				time : "2017-07-06",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_02_00.png",
				abstract : "2017年7月6日，由福建省心理学会、福建师范大...",
				content : '<p><img src="front/img/news_02_02.png" class="img-responsive center-block" ></p>'
						+ '<p>2017年7月6日，由福建省心理学会、福建师范大学心理学院、台湾“文化中国论坛社”主办，三明学院承办，福建省文明办协办的“'
						+ '第五届海峡心理论坛暨首届文化心理与教育国际学术研讨会”在三明市举行，两岸心理学家会聚一堂交流心得。</p>'
						+ '<p>本次会议以“多元文化下的心理和谐共建”为主题，围绕儒家文化与心理学的融合、中华文化对教师心理的影响、'
						+ '多元文化背景下心理和谐社区的构建、青少年网络成瘾问题研究等话题展开探讨与交流。专家们一致认为，'
						+ '两岸心理学家应加强沟通、交流、合作，将中华传统文化融入心理学建设，从而服务社会，'
						+ '引领青少年心灵成长，协助构建和谐社区、校园、家庭，造福两岸民众。</p>'
						+ '<p>北京心云天地科技有限公司总经理李宏伟应邀出席大会。期间，李宏伟总经理与两岸各界心理学专家进行了深入友好的交流。'
						+ '我公司一直秉持“专业的产品、创新的设计、生动的展现、灵活的应用”的经营理念，愿意致力于两岸心理学行业的和谐共建，'
						+ '愿意在两岸心理学领域的交流合作中有所建树，PsyCloud系列产品也必能更好更快的服务于两岸心理学事业，以上均取得了专家学者们的认同。</p>'
					
			},{
				id : 3,
				title : "初露峥嵘—北京心云天地科技有限公司与西南大学心理学部展开全方位合作",
				time : "2017-07-01",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_03_01.png",
				abstract : "北京心云天地科技有限公司于2016年创立至今，一直秉持“专业的产品、创新的设计、生动的展现、灵活的应用”...",
				content : '<p>北京心云天地科技有限公司于2016年创立至今，一直秉持“专业的产品、创新的设计、生动的展现、灵活的应用”创业理念与产品设计理念，'
						+ '以不断引领国内心理学教学产品为目标，以灵活便捷的产品应用和服务为宗旨，设计创造出国内第一款真正意义的心理教学云平台（PsyCloud心理云平台），'
						+ '它集“教、学、研”一体，依托互联网平台，打破了目前困扰心理学教学中的时间局限、地点局限、使用群体的局限，为心理学教学、科研创新出一种新的模式和方法。</p>'
						+ '<p>是金子总会发光，2016年12月，西南大学心理学部开始对北京心云天地科技有限公司进行全面考察，高度认可了心云天地产品设计团队和技术研发团队的强大实力，'
						+ '通过综合考量评定后，双方签署了《心理学实验教学中心实验室网络化管理系统平台》项目开发合作协议，该项目是西南大学心理学部'
						+ '承接的某项国家教育部科研课题的重要组成部分。心云天地以强大的技术实力，圆满完成项目建设并交付校方使用，取得了良好的用户评价。</p>'
						+ '<p>2017年6月，心云天地又成功竞标西南大学“心理实验设计及教学系统采购”项目，此次采购项目西南大学将全面使用心云天地'
						+ 'PsyCloud心理教学云平台中所有系列产品各100套，而且在平台功能拓展、专业内容建设等方面的后续合作开发工作双方也将陆续展开。</p>'
						+ '<p>至此，北京心云天地科技有限公司与西南大学心理学部全方位战略合作拉开序幕。心云天地以坚实的产品品质、'
						+ '严谨的工作作风、创新的设计理念、高效的执行能力，赢得用户的赞赏与信赖。</p>'
						+ '<p>初露峥嵘，心云天地有能力为用户带去更专业的产品和更好的体验；砥砺前行，心云天地期望能与中国心理学教育事业的同行者共创辉煌。</p>'

			},{
				id : 4,
				title : "北京心云天地科技有限公司助力湖南省体育科学学会年会",
				time : "2018-05-03",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_04_00.png",
				abstract : "北京心云天地科技有限公司于2016年创立至今，一直秉持“专业的产品、创新的设计、生动的展现、灵活的应用”...",
				content : '<p>为推动《“健康中国2030”规划纲要》提出的“体医融合”工作开展，探索促进青少年健康的体医融合模式，提高对青少年儿童身心发育国际前沿科学理论与实践的认知和践行能力，由湖南省体育科学研究所及湖南省体育科学学会于2018年4月16-18日在星城长沙举办了“体医融合与青少年儿童健康发展高级研修班”暨“湖南省体育科学学会年会”。来自湖南全省各地市各主管单位及高校领导参加了此次会议。</p>'
						+'	<img src="front/img_t/com/pic_01.png" />'
						+'	<img src="front/img_t/com/pic_02.png" />'
						+'	<p>此次会议的主讲嘉宾有国际运动医学联合会副主席，研究员、博士生导师李国平教授、国务院政府特殊津贴专家、湖南省儿童医院儿童保健所所长、中华儿科学会发育行为儿科学组委员、主任医师、教授、硕士生导师钟燕女士、湖南省体育科学研究所所长、研究员刘建红。参会单位还有奥美之路（北京）健康科技股分有限公司、广州绣林康体产业集团、北京心云天地科技有限公司等相关企业。</p>'
						+'	<p>北京心云天地科技有限公司是国内首家为客户提供心理学云平台的企业，开发了国内第一套心理数字沙盘和第一个心理学服务云平台，同时也是首家提出心理学云平台的概念并且付诸实施的公司，填补了国内心理学服务该领域的空白。</p>'
						+'	<p>作为国内新兴的高科技型公司、双软认证企业、高新技术企业，公司依托北京师范大学和南京大学、西南大学等国家一流高校的科研力量，为全国的心理学高校教学、研究单位及心理健康服务单位提供全套的心理学教学、研究仪器和心理健康服务应用软件和设备；并面向全国中小学校、政府部门、企事业单位提供心理学应用服务。</p>'
						+'	<p style="text-align: center;"><img src="front/img_t/com/pic_03.png" /></p>'
						+'	<img src="front/img_t/com/news_04_00.png" />'
						+'	<p>此次会议中，北京心云天地科技有限公司作为第六届理事会常务理事单位，再次被授予湖南省体育科学研究第七届理事会常务理事单位，在会议现场所展示的心理学云平台产品及各项应用，得到了参会嘉宾及各位领导、教师的认可。公司与会代表表示将积极参与湖南省青少年儿童健康发展的各项工作，加强校企之间的合作，针对大学、高职、中小学等不同层次的需求和特点，利用最新的云计算、大数据技术，充分整合资源，加快技术转化，为提高全省青少年身心健康水平做出贡献。'
						+'	</p>'

			},{
				id : 5,
				title : "心云天地精彩亮相中国人心理素质研究高端论坛",
				time : "2018-12-23",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_05_01.jpg",
				abstract : "北京心云天地科技有限公司于2016年创立至今，一直秉持“专业的产品、创新的设计、生动的展现、灵活的应用”...",
				content : '<p>2018年12月22日，冬至时节，四时交换，阴阳轮转，在这个万物开始欣欣向荣，充满希望的日子，“中国人心理素质研究高端论坛”在重庆市北碚区海旭花园酒店隆重召开。</p>'
						+'	<img src="front/img_t/com/news_05_01.jpg" class="img-responsive center-block" />'
						+'  <p>中国人心理素质研究在经历了萌芽(1996 年之前)、接纳(1996-2000 年)、认同(2001-2003 年)、分化(2004-2010 年)和整合(2004 年至今)四个阶段之后，即将迈入蓬勃发展时期。为总结 2014 年 7 月中国人心理素质研究协作组成立以来的研究成果，规划协作组下一步研究的技术路线与合作机制，中国人心理素质研究协作组与陆军军医大学医学心理系、西南大学心理学部、西南大学心理健康教育中心、重庆社会心理学会联合举办了此届中国人心理素质研究高端论坛。</p>'
						+'	<img src="front/img_t/com/news_05_02.jpg" class="img-responsive center-block" />'
						+'	<p>来自全国各地从事心理素质和相关领域研究的学者、研究生，以及对心理素质感兴趣的各界人士近两百人参加了此次盛会。会议由西南大学心理学部副部长，教授陈旭主持，西南大学心理健康教育研究中心主任，教授，中国人心理素质研究协作组组长张大均做了《中国人心理素质研究回顾与展望》的报告，张大均教授领衔的心理素质研究团队，经过30多年的悉心探讨，其研究成果在国内外均取得了较好的学术影响及推广应用。陆军军医大学医学心理系主任，教授，中国人心理素质研究协作组副组长冯正直做了《军人心理素质研究发展与思考》的报告，会议还就“心理素质在中小学教育中的运用”、“青少年心理素质研究前沿与展望:基于研究方法与路径的探讨”、“小学生心理素质发展及教育促进”等专题进行了研讨。</p>'
						+'	<p>作为中国人心理素质研究协作组与北京心云天地科技有限公司在校企合作联合开发的中国第一套针对中小学心理素质教育的云平台产品——“Psycloud中小学心理健康教育平台”V1.0,在此次论坛上精彩亮相，来自于北京心云天地科技有限公司的副总经理李金明先生做了《大数据时代下的中小学心理素质教育》的报告，并由公司产品总监周倩女士现场演示了平台的功能应用。中小学心理素质教育云平台以中小学生为主体，建立学生、教师、家长、学校、科研机构、心理咨询专家及教育行政部门的网络机制，为不同服务对象创建了不同的服务端口，围绕中小学生心理素质教育为中心的各项教育、测评、建档、干预等开展工作，并建立家长、老师、专家、教育行政部门多维度的信息沟通渠道，搭建及时有效的心理预警和心理干预体系，督促心理健康教育工作进展，协助教育行政部门及时、全面了解其区域内中小学生和教师的心理健康水平和现状并形成专业评估、分析报告，为国家制定有关发展的宏观政策提供大量基础依据。指导和督察学校开展心理健康教育，防范应激事件、危机事件的发生。</p>'
						+'	<img src="front/img_t/com/news_05_03.jpg" class="img-responsive center-block" />'
						+'	<p>中小学心理素质教育云平台产品得到与会专家的高度评价，张大均教授指出，此次论坛专门展示此产品有几方面的目的：一是希望听到各方面的改进意见，进一步完善产品；二是希望大家都参与到产品的推广应用中，切实体验各项功能；三是专业人士可以充分利用平台的功能来收集数据、样本，有效帮助提高研究工作的效率。</p>'
						+'	<img src="front/img_t/com/news_05_04.jpg" class="img-responsive center-block" />'
						+'	<p>此次论坛在总结过去，谋划未来的基调下，紧凑务实地进行了各项工作的总结回顾，并对未来的发展前景进行分析预测。心理素质自身理论思想的不断完善是推动心理素质研究的基石，而心理素质相关模型的建构也是推动心理素质研究的重要组成部分，心理素质的“基础、衍生、发展和自组织”功能也有待更深入的挖掘。论坛将继续该领域研究的新成果，共同谋划中国人心理素质研究的未来方向! '
						+'	</p>'

			},{
				id : 6,
				title : "北京心云天地协办2018中国心理学会理论心理学年会",
				time : "2018-12-02",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_06_01.jpg",
				abstract : "北京心云天地科技有限公司于2016年创立至今，一直秉持“专业的产品、创新的设计、生动的展现、灵活的应用”...",
				content : '<p>2018年11月，一年一度的中国心理学会理论心理学与心理学史专业委员会学术年会，在湖南省衡阳师范学院隆重召开。本次年会由心理学产品服务领军品牌北京心云天地协办，年会对2018年理论心理学学术交流和研究的成果进行了展示，并进一步明确了国内理论心理学未来研究方向。</p>'
						+'	<img src="front/img_t/com/news_06_01.jpg" class="img-responsive center-block" />'
						+'  <p>大会围绕“改革开放与理论心理学的创新”主题展开，来自武汉大学、吉林大学、湖南师范大学、南京师范大学、广州大学等114名学者和专家到场与会，共收到全国各地的论文62篇，内容涵盖了改革开放与理论心理学的最新研究进展与相关应用。</p>'
						+'	<img src="front/img_t/com/news_06_02.jpg" class="img-responsive center-block" />'
						+'	<img src="front/img_t/com/news_06_03.jpg" class="img-responsive center-block" />'
						+'	<p>中国理论心理学与心理学史专业委员会副主任郭永玉教授，认为本次大会涉及到“改革开放与理论心理学的创新”的方方面面，同时希望理论心理学研究者联系中国实际，继续思考心理学如何促进生产力的高度发展和人的潜能的充分实现。</p>'
						+'	<img src="front/img_t/com/news_06_04.jpg" class="img-responsive center-block" />'
						+'	<p>理论心理学与心理学史前任主任、湖南省心理学会理事长彭运石教授，认为理论心理学工作者要坚持学科自信和行动定力，才能支撑起中国心理学知识体系大厦，并要求理论心理学研究者将心理学与社会需求、大众百姓建立实际联系，同时希望理论心理学研究者扎根中国大地，能够结合中国特色，建设中国特色的心理学体系。</p>'
						+'	<p>理论心理学与心理学史专业委员会候任主任高峰强教授也在开幕式上致辞，他表示理论心理学研究者要坚持学科自信，构建自身的学术话语体系。</p>'
						+'	<p>本次年会协办方北京心云天地科技有限公司表示，聆听了与会专家的报告，对公司2019年产品定位，内容研发都有积极的指导意义，企业做心理产品必须与时俱进适应国内教育和科研需要。目前心云天地已经建有学前心理教育、中小学心理教育到高校心理教育，一整套成熟的心理学产品和服务方案，希望能与更多高校专家合作，提供高质量的心理学教研产品服务。</p>'
						+'	<p>北京心云天地科技有限公司，是集研发、生产、销售于一体的专业心理学解决方案服务商，公司设计出国内第一套可移动的专业心理学实验平台及国内第一个科研级心理量表研发系统，填补了国内心理学相关领域的空白。作为高新技术型企业，北京心云天地依托北京师范大学、浙江大学、西南大学、南京大学等国家一流高校的科研力量，以“互联网+心理学”模式，集“研、产、销”于一体，为全国高校心理学专业、科研院所及心理健康服务单位提供全套专业实用的软硬件产品，并面向全国各行业、各企事业单位提供完整的心理学应用解决方案。</p>'

			},{
				id : 7,
				title : "北京心云天地与银川市签署战略合作  助力中小学心理健康建设",
				time : "2018-12-03",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_07_01.png",
				abstract : "北京心云天地科技有限公司于2016年创立至今，一直秉持“专业的产品、创新的设计、生动的展现、灵活的应用”...",
				content : '<p>2018年11月，2018全球（银川）智慧城市峰会政企对接洽谈会在银川国际交流中心多功能厅成功举办，在与会嘉宾和各级政府领导的共同见证下，北京心云天地科技有限公司等多家企业与银川市政府签署了战略合作协议，将先进的技术和理念与银川智慧城市、智慧产业发展紧密结合起来，共同推进“智慧银川”创新发展，实现互利共赢。</p>'
						+'	<img src="front/img_t/com/news_07_01.png" class="img-responsive center-block" />'
						+'  <p>本次会议是银川市基于“智慧银川”的城市发展战略规划搭建的政企合作交流沟通平台。签约企业代表之一北京心云天地科技有限公司副总经理李金明表示，“这次签约后，我们将充分利用公司在中小学心理健康领域的产品和资源优势， 助力银川市教育主管部门推进中小学生心理素质和健康水平工作，加强心理健康师资队伍建设，做好家校（园）共育，为培养身心健康的下一代共同努力。”</p>'
						+'	<img src="front/img_t/com/news_07_02.png" class="img-responsive center-block" />'
						+'	<p>本次洽谈会的成功举办，为政府与企业架起了一座桥梁，让政企之间有了更深入的双向沟通，加速了项目的落地进程。洽谈会当天，银川市公安局、卫计委、交通局、教育局、经合外侨局等市直有关部门、以及银川市经济技术开发区、银川滨河新区、银川丝路经济园、银川中关村创新创业科技园等负责人均在推进各领域，与到会企业就即将开展的广泛合作上进行深入对接。</p>'
						+'	<p>北京心云天地科技有限公司，是集研发、生产、销售于一体的专业心理学解决方案服务商，公司设计出国内第一套可移动的专业心理学实验平台及国内第一个科研级心理量表研发系统，填补了国内心理学相关领域的空白，现已建成从学前、中小学至高校各教育阶段的专业级心理健康素质解决方案。</p>'

			},{
				id : 8,
				title : "抗疫时期心云天地服务保障计划 专业的产品、创新的设计、生动的展现",
				time : "2020-3-10",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_08_001.png",
				abstract : "北京心云天地科技有限公司于2016年创立至今，一直秉持“专业的产品、创新的设计、生动的展现、灵活的应用”...",
				content : '<p>随着全国人民合力抗疫、复工复产工作的有序推进，作为国内领先的心理学解决方案服务商，心云天地也在继续全力以赴为客户提供更好的技术、产品和服务。在这样的时期，企业发展好自己、服务好客户，就是对社会最大的贡献！为此，心云天地推出产品免费开放服务！从现在起至疫情结束，心云天地为所有有需求的院校、合作伙伴，免费提供公司三大产品平台的使用权，全力助力老师们停课不停学，实现在线授课、在线资料发布、在线考核。</p>'
						+'  <p>免费开放三大产品平台</p>'
						+'<p>一、PsyCloud心理学空间实验室平台</p>'
						+'  <p>该平台是国内领先的心理学教学云平台，包括有心理实验教学系统、心理测量系统、CEDS心理实验设计系统、量表设计系统、心理实训系统、3D心理数字沙盘系统、眼动追踪系统、事件相关电位（ERPs)实验教学系统、虚拟现实心理探索系统、开放式心理实验室管理系统等，全面覆盖心理学教学需求。</p>'
                        +'  <img src="front/img_t/com/news_08_02.png" class="img-responsive center-block" />'
						+'<p>二、心理学网络课堂云平台</p>'
						+'  <p>该云平台包括直播课堂、录播课程、在线实验室、在线作业考核四大模块，除了强大的在线教学功能，平台还将心理学实验教学、心理测评教学、心理实验设计教学、心理沙盘教学、心理技能实训等线上系统全部搬迁到互联网上，让老师在电脑上就可以高效轻松完成绝大部分教学工作。</p>'
						+'  <img src="front/img_t/com/news_08_03.png" class="img-responsive center-block" />'
						+'  <img src="front/img_t/com/news_08_04.png" class="img-responsive center-block" />'
						+'<p>三、学前教育网络课堂平台</p>'
						+'  <p>该平台配置有教学课件制作、教学资料云播、课堂翻转互动、教育资源库构建、情景模拟训练、职业资格考证、实习实践跟踪管理等强大功能。从教学实训、能力评测到培训考核，是学前教育一站式学习的专业级平台。</p>'
						+'  <img src="front/img_t/com/news_08_05.png" class="img-responsive center-block" />'
						+'  <img src="front/img_t/com/news_08_06.png" class="img-responsive center-block" />'
						+'  <p style="font-size:35px;width:100%;text-align:center;">如何申请免费使用</p>'
						+'  <p>已签约客户：自动启动免费计划。</p>'
						+'  <p>未签约客户：提出使用申请，核准后即刻开通。（联系电话：023-68681786）</p>'
						+'  <p>如果您有关产品的其他需求，欢迎随时与我们联系，心云天地愿与您并肩奋战！</p>'

			}
			,{
				id : 9,
				title : "北京心云天地参加长沙职业技师学院早期教育专业教学资源库建设研讨会",
				time : "2020-5-20",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_09_01.png",
				abstract : "北京心云天地参加长沙职业技术学院早期教育专业教学资源库建设研讨会",
				content :' <p>4月27日，长沙职业技术学院早期教育专业教学资源库建设研讨会在学前教育学院成功举办，北京心云天地科技有限公司和湖南万婴教育科技有限公司共同受邀参加会议。</p>'
						+'  <img src="front/img_t/com/news_09_02.png" class="img-responsive center-block" />'
						+'  <p>会议旨在贯彻落实“职教20条”精神，加强校企合作，发挥各自优势，推进学院早期教育专业教学资源库（以下简称“资源库”）的建设。</p>'
					    +'  <p>会议邀请湖南万婴教育集团党委书记张红专教授、董事长黄平,北京心云天地科技有限公司副总经理李金明、华南大区经理陈鹏作现场交流，长沙职业技术学院校长喻友军教授、副校长罗慧玲教授、质控办处长张良教授以及学前教育学院领导班子和早期教育专业教师等出席会议，会议由副校长罗慧玲教授主持。</p>'
					    +'  <p>会上，学前教育学院院长黄锦玲作了《早期教育专业教学资源库申报及建设工作》的情况汇报，介绍了资源库前期所做工作及后段建设思路。万婴教育董事长黄平对早期教育专业课程体系的构建提出了宝贵的建设性意见。胡慧敏老师现场展示“雷锋精神传承与创新”资源库建设案例。北京心云天地陈鹏经理展示了心云天地学前教育虚实一体化实训平台，得到了与会各方的高度认可。</p>'
					    +'  <p>最后，校长喻友军对资源库建设提出重要建议：确定长沙职业技术学院与湖南万婴教育集团为“早期教育专业教学资源库申报及建设”主持单位、共建单位，北京心云天地科技有限公司为协办单位，确保资源库如期高质量完成，以期研制出专业教学标准、优化专业人才培养方案、设置更合理的课程体系。</p>'
					    +'  <img src="front/img_t/com/news_09_03.png" class="img-responsive center-block" />'
						+'  <p>本次研讨会将有力推进长沙职业技术学院早期教育专业教学资源库的建设。同时，也让心云天地对校方的学前教育需求有了更深刻的了解，将有力促进心云天地学前教育虚实一体化实训平台的建设，为全国各大高校学前教育专业提供更优质、更专业的服务。</p>'
                     	+'  <img src="front/img_t/com/news_09_04.png" class="img-responsive center-block" />'


			}
		]
	},
	{
		type : 'ind',
		title : '行业资讯',
		url : "news.html?type=ind",
		items : [
			{
				id : 0,
				title : "留守儿童心理危机亟须国家干预",
				time : "2017-02-14",
				author : "admin",
				resource : "中国心理学家网",
				cover : "front/img_t/ind/news_02_05.jpg",
				abstract : "毕节4名自杀儿童平时的行为，揭示出他们可能存在严重心理疾患，但是似乎没有人意识到问题的严重性...",
				content : '<p>毕节4名自杀儿童平时的行为，揭示出他们可能存在严重心理疾患，但是似乎没有人意识到问题的严重性，更没有专业心理辅导人员的介入。眼下最为急迫的要务，其实是对各地留守儿童进行一次专门的心理健康普查。</p>'
						+ '<p>贵州省毕节市4名儿童服农药自杀令舆论震撼，6月12日，警方披露了自杀者中最大的孩子张启刚留下的遗书。遗书大概内容是：'
						+ '谢谢你们的好意，我知道你们对我的好，但是我该走了。我曾经发誓活不过15岁，死亡是我多年的梦想，今天清零了！”'
						+ '张启刚的同学称，张启刚平时虽然话很少，但同学如果惹急了他，他发起怒来挺厉害。平时他都有钱给妹妹们买零食吃，但妹妹们好像还是比较怕他。</p>'
						+ '<p>从目前披露的信息看，张启刚很有可能是这起自杀事件的始作俑者。这个14岁的男孩为何把死亡当成“梦想”，把自己连同三个妹妹都推向生命末路，目前还是个谜。但从张启刚的怪异想法，以及他在生活中暴露出孤僻、固执的性格看，这个孩子或许早已陷入了严重的心理危机。</p>'
						+ '<p>张启刚的例子并非个案，近些年来，留守儿童自杀事件屡有发生，2014年，安徽省望江县就发生了9岁留守儿童上吊自杀的悲剧；2013年，江苏盱眙县两留守儿童因缺乏父母关爱相约服药自杀；2012年，浙江省玉环县6岁留守女童看电影触景生情欲跳海自杀；2011年，西安蓝田县10岁留守儿童喝农药自杀；2010年陕西扶风县5名留守儿童相约自杀的悲剧更是震惊国人。</p>'
						+ '<p>这些还只是少数见诸媒体的案例，现实中，究竟有多少留守儿童曾有过自杀的想法和行为，恐怕难以估计。留守儿童自杀现象的背后，暴露出这个群体存在突出的心理健康问题，这样的心理疾患，轻则只是孤独、自责、过敏等，'
						+ '重则表现出自残、自杀乃至暴力等倾向。学者邵福泉、苏虹曾以安徽某农村地区的2230名农村中学的留守儿童为对象的调查发现，留守儿童自杀意念发生率为20%，在有自杀意念的人中有5%发生自杀行为。按此推算，全国6000万留守儿童中有数十万人曾经有过自杀的意念。</p>'
						+ '<p>而对于留守儿童，政府和社会之前更多强调的是物质上的帮助，生活上的照料，在心理层面的解决办法并不多。尤其是，对于那些已经陷入严重心理危机的留守儿童，我们并没有强有力的干预措施，甚至连基本的认识都非常缺乏，以毕节4名自杀儿童为例，尽管他们平时的行为，如不愿与外界接触，经常闭门不出，亲属、老师也叫不开门，揭示出他们可能存在严重心理疾患，但是似乎没有人意识到问题的严重性，更没有专业心理辅导人员的介入。</p>'
						+ '<p>毕节这次悲剧后，加速户籍改革，完善公共服务，让留守儿童能与父母在城市共同生活，正在成为社会上下的共识。不过这仍是长远之计，短期内也难以变成现实。眼下最为急迫的要务，其实是对各地留守儿童进行一次专门的心理健康普查。对于查出存在心理危机和疾患的留守儿童，政府制定专门的心理援助计划，投入专门资金和专业人员，对他们进行心理干预和治疗。留守儿童的心理创伤一日不能抚平，“自杀”的阴影恐怕将难以远离这群孩子。</p>'
			},
			{
				id : 1,
				title : "歌手本兮疑患抑郁症跳楼身亡",
				time : "2017-02-17",
				author : "admin",
				resource : "大学生心理关爱网",
				cover : "front/img_t/ind/news_01_01.png",
				abstract : "据中国青年网报道，12月27日，本兮工作室发讣告，表示本兮于2016年12月24日因故离世。...",
				content : '<p>据中国青年网报道，12月27日，本兮工作室发讣告，表示本兮于2016年12月24日因故离世。</p>'
						+ '<p>讣告原文如下：我们最亲爱的本兮于2016年12月24日因故离世，享年22岁。谨此讣告。本兮是90后创作才女，'
						+ '包揽词曲唱的很多歌曲都倍受好评。本兮在工作和生活中都非常积极乐观、阳光向上。她热爱音乐，是快乐的音乐精灵，'
						+ '通过歌声传递爱和温暖。她的才华、她的歌声都是独一无二的存在，会永远让喜爱她的家人、朋友和歌迷铭记、思念。</p>'
						+ '<p><img src="front/img_t/ind/news_01_02.png" class="img-responsive center-block"></p>'
						+ '<p><img src="front/img_t/ind/news_01_03.jpg" class="img-responsive center-block"></p>'
						+ '<p>继知名歌手乔任梁抑郁症自杀后，本兮也被爆出死因是因为抑郁症困扰。27日中午，名侦探赵五儿发表一张微信聊天图片，'
						+ '曝出本兮于平安夜从13跳下去，死于跳楼自杀，疑受抑郁症困扰，至于消息是否属实，只有知情人才清楚了。光鲜的外表下总有许多不'
						+ '为人知的苦楚。这种事情不是第一次发生了，乔任梁也是死于抑郁症，希望天堂能给予他们快乐，没有压力。</p>'
						+ '<p>如今，人们对抑郁症这一名词已经不再陌生，也深刻知晓抑郁症对患者有着极大的危害。在生活中，'
						+ '若是发现身边的人患有抑郁症，我们应该给予更多的包容和爱，帮助他们走出抑郁症这一噩梦。那么，怎么样才算是抑郁症呢？'
						+ '家庭医生在线编辑采访了暨南大学第一附属医院精神科主任潘集阳。</p>'
						+ '<p>随着生活的压力不断增大，总有一些人心情不佳，甚至变得孤僻，不爱说话，那么这样就算是得了抑郁症了吗？'
						+ '潘集阳主任告诉家庭医生在线编辑，抑郁障碍主要有以下表现：</p>'
						+ '<p>1、一天大部分时间里都觉得不开心，儿童或青少年可能表现为易激惹；</p>'
						+ '<p>2、对几乎所有的活动失去兴趣或愉悦感；</p>'
						+ '<p>3、觉得非常疲倦，做事提不起劲；</p>'
						+ '<p>4、对生活失去信心，感觉自己毫无价值或过分的、不适当的感到内疚；</p>'
						+ '<p>5、反应迟钝，自觉“脑子好像是生了锈一样”，“脑子像涂了一层糨糊一样”；</p>'
						+ '<p>6、在未节食的情况下体重明显减轻或体重增加，儿童可表现为未能达到应增体重；</p>'
						+ '<p>7、睡眠差，出现早醒或难以入睡等睡眠问题；</p>'
						+ '<p>8、反复出现死亡的想法，反复出现自杀观念或自杀行为。</p>'
						+ '<p>如果您在最近2周内几乎每天面临上述问题，已严重影响生活，导致学习、工作、人际交往等方面受影响，提示您的精神状态需要专科医生协助，请及时就医。</p>'
						+ '<p><b>躯体疾病可能伴随着抑郁产生</b></p>'
						+ '<p>在现实生活中，大部分抑郁症患者的病征表现往往是情绪不佳、不喜欢与人交流、世界封闭等等。潘集阳教授告诉家庭医生在线编辑，'
						+ '抑郁症的严重情绪低落症状会触发其他疾病和精神障碍，而后者会反过来加重抑郁症症状的治疗及预后复杂化。'
						+ '产生抑郁症的原因有很多，其中包括遗传因素、生化因素、神经内分泌功能失调、心理社会环境因素等，而往往人们最容易忽略的是躯体因素。'
						+ '躯体因素特别是中枢神经系统疾病或其他慢性躯体疾病，比如恶性肿瘤、糖尿病、心血管疾病等，都可以成为抑郁症发生的重要危险因素。”</p>'
						+ '<p>“哪里有病治哪里”、“得什么病吃什么药”等这已成为了人们对疾病的习惯性处理。当人们的躯体产生疾病，往往会到相应的科室挂号治疗，极少会觉察到抑郁症的产生。'
						+ '潘教授表示，抑郁症患者在警惕躯体疾病的侵扰的同时，还要注意是否会产生抑郁症，一经发现应立即对症治疗，以防长期拖延导致酿成悲剧。</p>'
						+ '<p><b>服用药物要警惕自杀的风险</b></p>'
						+ '<p>躯体疾病会催生抑郁，生活环境同样会对人的精神进行打击，患者一般会对生活感到失望、无助，对事物冷淡、兴趣减退，低估自己的价值等等。'
						+ '“一般我们治疗抑郁症会使用药物治疗。国外也可以让患者接受心理治疗。心理治疗是根据患者在吃药的基础上，对一些事物进行重新认识，'
						+ '并给予患者支持、鼓励、疏导等，把悲观的负能量的情绪转化为正能量，以减少复发。此外，家人与朋友的关爱对抑郁症患者的恢复也是至关重要的。”</p>'
						+ '<p>不管在欧美还是国内，药物治疗也是必不可少的。据潘教授介绍，目前国内有13种抗郁药物，不同抑郁患者可能服用的药物不同，'
						+ '但疗效基本接近。由于抗郁的药物效果比较慢，要坚持服用两周才会有效果。潘教授建议，抑郁症患者应做好长期服药的准备。而提到长期服药，'
						+ '很多人往往担心药物的并发症，毕竟“是药三分毒”，对于这番质疑，潘教授表示，药物是有一定的微小副作用，但是不会威胁生命安全的，在医师指导下可放心服药。</p>'
						+ '<p>“在美国，其生产的治疗抑郁症的药物盒子上会有警告，即服用药物时候，患者可能警惕有自杀风险，这与人的年龄段有极大的关系。'
						+ '一般建议24岁以下的患者在服用抗抑郁药物时，要警惕自杀风险；而25-65岁的成年人，服用药物不会增加有自杀的风险；'
						+ '65岁以上老人服用抗抑郁药物，大大降低自杀风险，因此建议老年人情绪不佳时，可服用少剂量抗抑郁药物，'
						+ '对身心健康和家庭和谐皆有好处。”潘集阳教授如是说。</p>'
			},{
				id : 2,
				title : "公安部宣传局孙洁副局长到中科院心理所考察交流",
				time : "2017-03-15",
				author : "admin",
				resource : "中国科学院心理研究所",
				cover : "front/img_t/ind/news_00_01.png",
				abstract : "3月10日下午，公安部宣传局副局长孙洁、思想政治工作处副处长方玉杰一行到心理所国家公务员心理健康应用研...",
				content : '<p>3月10日下午，公安部宣传局副局长孙洁、思想政治工作处副处长方玉杰一行到心理所国家公务员心理健康应用研究中心、中央国家机关职工心理健康咨询中心参观考察。'
						+ '心理所党委副书记、纪委书记、副所长陈雪峰，国家公务员心理健康应用研究中心及中央国家机关职工心理健康咨询中心主任祝卓宏教授接待了考察组一行。</p>'
						+ '<p>来访干部通过体验“心理梦工厂”科普仪器、参观虚拟现实技术实验室、与专家教授交流等环节，了解了心理学的研究内容，体验了高新科技在心理研究中的应用。</p>'
						+ '<p><img src="front/img_t/ind/news_00_02.png" class="img-responsive center-block"></p>'
						+ '<p class="text-center">图1 体验“心理梦工厂”</p>'
						+ '<div class="space"></div>'
						+ '<p>在座谈中，孙洁指出，随着当前社会节奏日益加快，公安民警的工作强度和压力不断提升，部分民警出现心理不适，需要合理调节和化解。如何将心理健康保护举措与思想政治工作进行有机结合，'
						+ '是对传统思想政治工作的创新，也将极大丰富思想政治工作的内涵和工作方法。通过交谈，了解到心理所和中央国家机关职工心理健康咨询中心在促进群众心理健康方面做了很多有意义的工作，希望双方能加深沟通，加强合作，共同推动公安民警心理健康工作的发展。 </p>'
						+ '<p>心理所作为我国唯一的国家级心理学研究机构，有强大的科研力量。在以科技咨询为主要形式的外向型成果转化和技术转移工作方面，心理所国家公务员心理健康应用研究中心专门面向公务员开展心理健康研究和促进工作，'
						+ '紧密结合公务员的工作实际，开展多层次、全方位、高品质的心理健康服务。以心理所国家公务员心理健康应用研究中心为依托的中央国家机关职工心理健康咨询中心，近年来在“科普、心检、咨询、培训”四个体系的建设和试点部委定制服务方面进行了系列的深入探索，'
						+ '工作步入常态化、系统化、规范化。中央国家机关职工心理健康促进工作的成功服务体系和模式，得到了中央国家机关和地方单位的肯定和采纳，为公务员队伍的心理健康服务提供了样板。</p>'
						+ '<p>未来，心理所国家公务员心理健康应用研究中心将不断努力和探索，边实践边总结边提高，不断增强服务公安实战的能力水平，将心理所成熟的科研成果转化为科技服务，'
						+ '继续发展和完善公安民警心理健康服务体系和模式，发挥心理所的学科优势，更好地服务民警、服务社会、服务民生。</p>'
						+ '<p><img src="front/img_t/ind/news_00_03.png" class="img-responsive center-block"></p>'
						+ '<p class="text-center">图2 座谈会现场</p>'
						+ '<div class="space"></div>'
						+ '<p><img src="front/img_t/ind/news_00_04.png" class="img-responsive center-block"></p>'
						+ '<p class="text-center">图3 座谈会现场</p>'
						+ '<div class="space"></div>'
						+ '<p><img src="front/img_t/ind/news_00_05.png" class="img-responsive center-block"></p>'
						+ '<p class="text-center">图4 合影留念</p>'
						+ '<div class="space"></div>'
			},{
				id : 3,
				title : "国家卫计委“共同面对抑郁，共促心理健康”主题发布会",
				time : "2017-04-13",
				author: "admin",
				resource : "半月谈网",
				cover : "front/img_t/ind/news_02_01.jpg",
				abstract : "4月7日是世界卫生日，今年关注的是抑郁症，国家卫生计生委将中国区主题确定为“共同面对抑郁，共促心理健康”...",
				content : "<p>4月7日是世界卫生日，今年关注的是抑郁症，国家卫生计生委将中国区主题确定为“共同面对抑郁，共促心理健康”。"
						+ '结合世界卫生日的主题，国家卫生计生委于4月7日上午10:00在西直门办公区(西城区北礼士路甲38号)1层新闻发布厅召开4月例行新闻发布会，'
						+ '介绍我国心理健康工作相关情况。出席发布会的嘉宾，有国家卫生计生委疾控局王斌副局长，北京安定医院王刚院长，中央国家机关职工心理健康咨询中心祝卓宏主任。</p>'
						+ '<p><img src="front/img_t/ind/news_02_02.png" class="img-responsive center-block" ></p>'
						+ '<h4><b>一、精神卫生工作进展</b></h4>'
						+ '<p>党中央、国务院高度重视精神卫生工作。习近平总书记在2016年全国卫生与健康大会提出提出，要做好心理健康知识和心理疾病的科普工作，'
						+ '规范发展心理治疗、咨询等心理健康服务。做好精神疾病综合管理工作，重点加强严重精神障碍患者登记报告和救治救助。'
						+ '2016年底，国家卫生计生委、中宣部等22个部门印发《关于加强心理健康服务的指导意见》，'
						+ '首次全面、系统地提出了加强心理健康服务的具体政策措施。近年来，在有关部门的支持和配合下，各级卫生计生部门积极开展精神卫生工作。</p>'
						+ '<p class="blue">1、逐步建立精神卫生服务体系。</p>'
						+ '<p>近年来，各地加大精神专科医院、综合医院精神(心理)科建设和专业人员培养培训。截至2015年底，全国共有精神卫生服务机构2936家，开设床位数43.3万张，'
						+ '比2010年(1650家机构、22.8万张)有较大幅度增长。全国有精神科执业(助理)医师27733人，'
						+ '精神科护士57591人，心理治疗师5000余人。有90余万人次获得心理咨询师职业资格证书。精神卫生专业人员呈多元化发展，服务质量逐步提高。</p>'
						+ '<p class="blue">2、逐步拓展精神卫生工作内容。</p>'
						+ '<p>医疗机构积极探索开展心理健康服务。随着群众健康意识提高，因常见精神障碍到专业机构就诊患者的比例显著增加。专业机构适应患者就诊需求，'
						+ '原来是以严重精神障碍诊治为主，逐步加强心理科、心身医学科建设，增加为抑郁症、焦虑症等常见精神障碍服务的数量和质量。医院和医务人员更加关注抑郁、焦虑、失眠等心理问题的识别诊断。</p>'
						+ '<p class="blue">3、加强严重精神障碍救治服务。</p>'
						+ '<p>目前，国家将精神分裂症等6种严重精神障碍纳入重点管理，开展患者信息登记、救治救助、随访管理等一系列服务。截至2016年底，全国在册严重精神障碍患者540万例，管理率达到88.7%。'
						+ '其中精神分裂症患者数约占在册患者总数的3/4。刚才提到的是6种疾病，还有一部分是除了精神分裂症以外的其他的严重精神障碍。</p>'
						+ '<p class="blue">4、开展精神卫生科普宣传。</p>'
						+ '<p>近年来，各级卫生计生部门会同有关部门，以“心理健康 社会和谐”为主题，广泛开展科普宣传活动。随着宣传活动的不断深入，越来越多的公众人士、专业人员、患者也都参加到我们的宣传活动中来。'
						+ '各地电视媒体制作了多种题材、形式多样的电视节目，也包括网络媒体，制作了各种各样、形式多样的视频节目，来传播心理健康的理念，讲解心理健康精神卫生知识。</p>'
						+ '<h4><b>二、近年精神障碍主要趋势</b></h4>'
						+ '<p>2012至2014年，在国家科技部的支持下，40余家精神专科医疗机构和高校专业人员，开展了中国精神障碍疾病负担及卫生服务利用研究。这项研究覆盖了全国31个省市、自治区，分析和描述了我国主要精神障碍现状及流行趋势。</p>'
						+ '<p class="blue">1、以抑郁障碍为主的心境障碍和焦虑障碍患病率总体上呈上升趋势。</p>'
						+ '<p>精神障碍是个相对来说比较宽泛的概念，按照世界卫生组织推荐的分类标准，精神障碍不等同于我们通常理解的精神病，对于大家来说，精神病相对来说是比较窄的，实际上精神障碍是个宽泛的概念。在世界卫生组织的分类里，'
						+ '包括十大类近400余种疾病。研究结果显示，我国心境障碍患病率为4.06%。在我们调查里，心境障碍实际主要包括四大类疾病，这里面有抑郁障碍、双相情感障碍，躯体疾病所致的心境障碍、物质所致的疾病障碍。</p>'
						+ '<p>在这里面，抑郁障碍里又包含了抑郁症、抑郁障碍未特定、心境恶劣。这就说明精神障碍这一大类疾病的复杂性，这也给了我们很大的提示，媒体做相关报道的时候，一定要聚焦。精神障碍是有特'
						+ '定内涵和外延的一类疾病，并不等同于大家常规想到的精神病，同时精神病还包括很多小类、亚小类。</p>'
						+ '<p>通过这次的调查，心境障碍患病率是4.06%，其中抑郁障碍3.59%，焦虑障碍患病率是4.98%。焦虑障碍在这次调查里包括了8到9种疾病，包括特殊恐惧症、强迫障碍、社交恐惧等等。这样一个结果，'
						+ '应该说高于我国上世纪八十年代、九十年代部分调查的结果。专家分析认为，随着我国经济社会的高速发展，生活和工作的节奏显著的加快，公众的心理压力普遍的增加同时，导致了患病的风险也相应的增加。</p>'
						+ '<p class="blue">2、老年痴呆患病率呈上升趋势。</p>'
						+ '<p>随着我国人口老龄化加剧，老年期痴呆患病率总体呈上升趋势。研究结果显示，在65岁及以上人群中，老年期痴呆患病率为5.56%，高于我国1987年以来部分地区调查结果。与人均期望寿命较高的其他国家比较，我们低于美国、日本、韩国等国家水平。</p>'
						+ '<p class="blue">3、男性酒精使用障碍需引起关注。</p>'
						+ '<p>受各地饮酒习俗、居民饮酒习惯等方面影响，国内各地既往调查结果显示，不同地区酒精使用障碍的患病率差异较大。研究结果显示，我国酒精使用障碍患病率为1.84%，男性患病率明显高于女性。与近年来国际权威期刊发表的部分经济发达国家和中等收入水平国家调查结果比较，我国酒精使用障碍患病率处于中等水平。</p>'
						+ '<h4><b>三、下一步工作打算</b></h4>'
						+ '<p class="blue">1、进一步加大精神卫生科普宣传。</p>'
						+ '<p>研究提示，公众对精神疾病的认识仍有待提高。公众普遍缺乏精神障碍防治知识，更缺乏主动就医意识。部分居民对精神障碍仍然还有病耻感，担心被周围人群歧视而不愿意求助一些专业的机构和专业的人员。所以，'
						+ '要跟媒体加强交流和合作，一起动脑筋，想办法，多方位、多渠道、多种形式开展精神卫生科普宣传，提高公众的健康意识，呼吁全社会广泛关注抑郁症等相关心理健康的问题，同时关注自身的心理健康。</p>'
						+ '<p class="blue">2、加强重点精神障碍防治。</p>'
						+ '<p>▲一是重视抑郁症等心境障碍防治。世界卫生组织研究结果显示，由抑郁症等心境障碍造成的疾病负担高于其他精神障碍导致的疾病负担。在我们研究筛查出来的心境障碍的患者中，我国心境障碍患病率是4.06%。'
						+ '其中有1/3的患者虽不完全符合抑郁障碍诊断标准，也就是抑郁障碍未特定，但实际上这些患者自我感觉明显痛苦，且影响到了他的社交、就业等社会功能。但是按照抑郁症的诊断标准还够不上抑郁症，'
						+ '但实际上他们已经有了持续性的抑郁前期问题。所以，在这个阶段就应该非常非常重视，采取一些专业的帮助，以免发生到抑郁症的阶段。</p>'
						+ '<p>▲二是引导公众科学对待焦虑障碍。焦虑障碍患病率较高，但易被忽视。也就是说我们面对压力的时候，大家总会产生一些焦虑的问题，但是这些焦虑的问题如果不缓解，我们常常也意识不到它，可能会滑向焦虑障碍这样一个疾病的状态中去，所以常常被忽视。</p>'
						+ '<p>▲三是要加强精神分裂症等严重精神障碍管理服务。以精神分裂症为主的严重精神障碍患者病程多迁延呈慢性化表现，需长期服药治疗。今后一段时间要继续加强严重精神障碍登记报告、救治救助等管理服务，提高患者的报告率、治疗率。</p>'
						+ '<p>▲四是要关注老年痴呆症防治。考虑到老年痴呆症患病率不断升高的现状，这是一个社会化的问题，随着我们国家老龄化的持续进程，关注老年人，从个人、从家庭、从社会的角度，'
						+ '来完善各项健康老龄化的政策，通过采取一些综合性干预，来延缓老年痴呆症病情的发展，仍然还是要做到早期发现、早期干预。</p>'
						+ '<p>▲五是针对男性青壮年酒精使用障碍患者患病率高的情况，加强科普宣传，倡导限制饮酒等健康生活方式，这也是对社会和对个人负责的表现。在这几方面，也结合现在精神障碍患病的趋势，要采取这些针对性的措施。</p>'
						+ '<p class="blue">3、积极开展心理健康服务。</p>'
						+ '<p>去年年底印发了《关于加强心理健康服务的指导意见》，提出了各项措施。</p>'
						+ '<p>▲一是健全心理健康服务网络。这样的网络是覆盖到全社会的，各级机关、企事业单位要建立心理健康辅导室，当然这需要时间、需要一个过程。各级各类学校建立心理咨询(辅导)室，这都是针对上班、上学的。在社区里面，还有很多居民，要依托社区综合服务设施来设立心理咨询室。</p>'
						+ '<p>▲二是要加强心理健康人才培养，鼓励有条件的高等院校开设临床与咨询心理学相关专业，加快专业人才的培养。同时还要完善心理咨询师培训内容和考核方式，加强实践技能操作的考核，进一步提升他们进行心理咨询的实操技能。</p>'
						+ '<p>▲三是规范心理健康服务的机构和人员。要考虑组建跨专业、跨部门心理健康服务的专家组，为各地各部门开展心理健康服务提供技术支持和指导，同时要依靠专家组和行业组织，建立行规行约和行业自律制度，共同促进心理健康服务规范发展。</p>'
						

			},{
				id : 4,
				title : "2017年第二十届全国心理学学术会议将在西南大学举办",
				time : "2017-7-10",
				author: "admin",
				resource : "中国心理培训网",
				cover : "front/img_t/ind/news_03_01.png",
				abstract : "",
				content : '<p><img src="front/img_t/ind/news_03_02.png" class="img-responsive center-block" ></p>'
						+ '<p>2016年10月14日，中国心理学会第十一届十三次常务理事会在陕西西安曲江宾馆召开。会议由游旭群理事长主持，共26位常务理事出席了会议。'
						+ '<p>会上，西南大学心理学部部长陈红教授报告了2017年第二十届全国心理学学术会议承办申请。经过认真和充分的研讨，'
						+ '与会常务理事同意决定西南大学心理学部承办2017年第二十届全国心理学学术会议。</p>'
						+ '<p>延伸阅读：</p>'
						+ '<p>西南大学心理学部源起于20世纪50年代建立的原西南师范学院教育系心理学教研室，1986年建设心理学专业，'
						+ '1988独立为心理科学研究所，1994年改建为心理学系，2003 年学科调整后设立心理学院，2011年12月，'
						+ '学校将西南大学心理学院、认知与人格教育部重点实验室、教育科学研究所、重庆市心理健康教育研究中心、重庆市心理学与社会发展研究中心、'
						+ '重庆市基础心理学重点实验室的教学科研人员合并组建成立了心理学部，成为西南大学重点培育的研究型学部。</p>'
						+ '<p>心理学部拥有基础心理学国家级重点学科，心理学博士后科研流动站，心理学一级学科博士学位授权点，涵盖基础心理学、'
						+ '发展与教育心理学、应用心理学的博士授权点和硕士授权点，同时拥有心理健康教育教育硕士、应用心理学专业硕士的授予权。'
						+ '设有心理学(非师范)、心理学(师范)、应用心理学3个本科专业。心理学部现有国家精品课程1门，国家级教学团队1个，'
						+ '教育部特色专业1个。2011年中国研究生教育排行榜中，排名全国第二。2013年国务院学位办公布的学科排名中，排名全国第三（并列）。</p>'
						+ '<p>学部现拥有认知与人格教育部重点实验室，重庆市心理学一级学科重点学科，两个重庆市重点文科基地即重庆市心理健康'
						+ '教育研究中心和重庆市心理学与社会发展研究中心，重庆市基础心理学重点实验室，中国-加拿大联合儿童心理研究中心等科研平台。'
						+ '学部拥有一万余平米的办公和实验用房，实验室包括fMRI脑成像研究中心、ERP实验室、虚拟现实实验室、'
						+ '眼动实验室、生物反馈实验室、痛觉实验室、行为观察室、心理健康实验室等。</p>'
						+ '<p>截止2016年10月，学部教职工85人，其中教授22人，副教授 35人，讲师14 人，行政及其他专业技术人员14人。共有17名博士生导师、36名硕士生导师。'
						+ '具有博士学位的63人，占教职员工总人数的75%。现有资深教授1人，国务院学科评议组成员1人，长江学者讲座教授2人，'
						+ '万人计划青年拔尖人才1人，享受国务院特殊津贴者5人，教育部新世纪优秀人才3人，重庆市百人计划1人，重庆市巴渝学者1人，'
						+ '重庆市青年拔尖人才1人，中科院百人计划1人，重庆市科学技术带头人9人，有出国留学经历的青年教师39人。'
						+ '学部在读全日制本科生586人，研究生601人(含学术型研究生、专业学位、教育硕士)，博士生66名，博士后15名。</p>'
						+ '<p>学部十分重视在合作与交流的背景下加强师资与学科建设。先后与中科院心理所、北京大学、北京师范大学等多所国内科研机构和大学建立了'
						+ '长期稳定的科研和教学合作关系；与美国、英国、加拿大、日本等国家进行教学科研合作与交流。'
						+ '同时我部还接收留学生，2015年起，与澳大利亚国立大学心理学系联合招收本科学生。</p>'
						+ '<p>心理学部将秉承“勤奋、严谨、创新、求实”的办学理念，瞄准学科前沿和国家重大需求，大力加强科研平台建设，突出创新人才和队伍建设，'
						+ '着力提高人才培养质量，努力造就一批学术领军人物，以社会服务、文化传承为宗旨，走内涵式发展道路，'
						+ '努力将学部建设成为国内一流、在国际上具有一定知名度和影响力的研究型学部。</p>'
			},{
				id : 5,
				title : "心云天地参加第21届全国心理学学术会议  关注高校心理健康教育",
				time : "2018-12-09",
				author: "心云天地",
				resource : "北京心云天地科技有限公司",
				cover : "front/img_t/ind/news_04_01.png",
				abstract : "",
				content : '<p>2018年11月，第21届全国心理学大会在北京国际会议中心隆重召开，北京心云天地作为高校心理健康服务领域的中坚力量，已经是连续3年参加。'
						+ '<p><img src="front/img_t/ind/news_04_01.png" class="img-responsive center-block" ></p>'
						+ '<p>“参加心理学大会不但可以了解国内心理学发展的最新成果，行业关注的热点，也是一次同高校老师、同行切磋交流的难得机会。”心云天地负责人表示。“高校心理健康教育解决方案我们公司的拳头产品，本次大会这方面的内容是我们最关心的。”</p>'
						+ '<p><img src="front/img_t/ind/news_04_02.jpg" class="img-responsive center-block" ></p>'
						+ '<p><img src="front/img_t/ind/news_04_03.jpg" class="img-responsive center-block" ></p>'
						+ '<p>在大会80多场专题报告中，和高校心理教育最直接相关的即校园心理健康教育专题，报告从影响大学生心理健康和生命安全最严重的抑郁症入手，分别通过叙事团体辅导、自我控制训练、生命教育与接触等方法对抑郁学生进行干预并且进行效果评价，得出有意义的结论并进行推广。“我们非常欢迎这样的专题报告，对于校园的心理危机干预和预防具有重要的指导意义，可以启发我们不断优化产品方案，落地转化的可能性很强。”</p>'
						+ '<p>十九大提出“加强社会心理服务体系建设“，要求高等院校普遍设立心理健康教育与咨询中心（室）。面对国内近3000所高校的心理健康教育市场，巨大的需求对心云天地和同行们都是发展机遇和挑战并存。</p>'
						+ '<p>“过硬的产品和服务是长远发展的基础，心云天地对自身解决方案的专业性、服务提出了更高的要求。”心云天地负责人介绍说，目前心云天地高校心理学产品PsyCloud心理教学云平台共上线了15个类别的教学系统，是国内最完整的基于云平台的心理教学体系，早在去年，就和中国心理学研究的翘楚西南大学国家重点示范实验室现合作，西南大学引入PsyCloud全线产品各100套投入使用。</p>'
						+ '<p>据了解，本届全国心理学大会规模空前盛大，来自各高等院校、科研院所共计超过2000人参会。“新时代·心理学”的大会主题寓意心理学发展要紧跟时代步伐，投身新时代的心理学研究，寻求更大发展和科研进步。大会共包括6场特邀报告、80多场专题报告以及四场张贴展示。大会内容涉及认知心理学、实验心理学、心理测量学、社会心理学、心理健康教育等多个领域。</p>'
			}, {
				id : 6,
			 	title : "习主席：发挥心理学在健康中国建设中的作用",
			 	time : "2020-03-12",
			 	author: "",
			 	resource : "人民网",
				cover : "",
			 	abstract : "",
				content : '<p style="text-indent:2em;">习近平总书记在全国卫生与健康大会上强调，要“将健康融入所有政策”。在这一精神指导下，服务健康中国建设成为所有学科共同承担的时代使命，心理学也应积极拓展参与健康中国建设的着力点与关注面，更为全面有效地助推健康中国战略的实施。当前，一场突如其来的新型冠状病毒感染的肺炎疫情蔓延全国，对健康中国建设提出了新的紧迫要求，心理学更应及时发挥其多面手角色，全面参与健康治理，助力疫情防控。</p>'
				        +'<p><h2>一、心理学发挥健康助推作用不能只关注“心理病人”与“心理健康”</h2></p>'
				        +  '<p>一提到心理学，人们往往首先联想到心理健康。在《“健康中国2030”规划纲要》中，也明确提出要“促进心理健康”，其工作要点主要体现在针对所有人群的心理健康素养提升和针对重点人群的心理行为干预与服务上。但促进心理健康只是促进全民健康、提高生活质量的一个方面，心理学界如果只将视野局限于此，必将导致学科产出落后于时代需求。其实，心理学的健康助推作用，应当摆脱“以心理疾病患者作为主要工作对象”和“把心理健康作为主要结果变量”的思维定式。实际上，健康不仅指整体性的身心健康，还包括超越个体健康层面的组织健康和社会健康；与之对应，健康中国建设不仅针对少数心理疾病患者的心理健康促进或针对所有人的心理健康素质提升，还包括针对所有社会成员生活行为方式、生产生活环境以及医疗卫生服务等所有健康影响因素的改进。其中涉及的每一项工作和每一个过程，都需要超越传统心理健康服务的其他心理学知识与技术的参与。</p>'
				        +  '<p>以健康扶贫为例加以说明。健康扶贫的工作对象，本身不是心理疾病患者，而是社会弱势群体；健康扶贫的结果变量，主要是经济学或社会学变量，如“两不愁三保障”，尤其是基本医疗保障。表面上看，这些都与心理学无关，但要想达到这一目标，却离不开心理学。习近平总书记指出，扶贫工作要“注重激发内生动力”“治贫先治愚”“扶贫先扶志”“扶贫必扶智”，这里的“内生动力”“愚”“志”“智”等，无一不是心理学变量，它们都是包括健康扶贫在内的所有脱贫攻坚工作的重要初始变量和中间变量。那么，怎么提高所有社会成员对健康的“内生动力”、怎么根治特定群体在健康方面的“愚”、如何增强大众在健康方面的“志”与“智”？这无一不需要心理学深度参与。</p>'
				        +  '<p>再以当下的疫情防控为例。疫情防控本身是公共卫生领域的问题，其主要结果指标是医学指标，如感染率、死亡率、治愈率等。但从社会治理角度看，每一次的突发公共卫生事件都伴随着心理“疫情”，是相关谣言和阴谋论泛滥的高峰时期。相较于病毒感染人群，谣言“感染”具有人群基数更大、覆盖面更广、传播速率更快的特征。如何让个体戴上“心理口罩”，提高心理免疫力，从而稳定未感染人群的心理情绪、提升其疫情防范意识、减轻其对感染者及其家属的污名化认知、提升其对各类虚假不实信息的敏感性和抵抗力等，都涉及诸多心理学内容，也是健康治理中不可或缺的一个关键环节。</p>'
				        +  '<p>总之，类似上述的健康治理主题，只要抓住其中一些侧面，就会让心理学的健康助推工作迅速找到抓手，从而有效地开展工作。为此，心理学工作者必须摆脱思维定式，主动寻求更广大的服务人群和更广阔的服务空间，使心理学的健康助推工作一开始就着眼于大健康领域而不是狭义的心理健康领域，从而深度参与健康中国建设的全过程，彰显新时代中国心理学的学科价值和社会使命。</p>'
				        +'<p><h2>二、心理学助推健康中国建设的可能路径</h2></p>'
				        +  '<p>1、是推动健康治理评价指标不断完善。《健康中国行动（2019—2030年）》制订了较为完善的结果性指标、个人和社会倡导性指标和政府工作性指标三大类指标，并在每个大类下对健康知识普及等15项行动提出了明确要求。但这些指标中，许多指标都是刚性的、客观的、可明确量化的，如每万人营养指导员人数、中医医院设置治未病科室比例、婴幼儿死亡率等，其考核内容是健康领域的客观投入和客观产出。这体现了决策者对可操作性的追求，值得肯定。但另一方面，实践证明，衡量一项公共政策的执行效果，不仅需要纯客观指标，还需要一些有效的社会心理指标，如健康服务获得感、医疗改革满意度等。实践中，客观投入并不必然产生对等的获得感和满意度，其中还存在某些社会心理方面的制约因素，说明某些健康政策存在社会效应不足的问题。如何加强对这些直接反映人民群众对健康中国建设满意度的社会心理指标的科学研究，并将之引入今后的指标体系，使之成为考核政府工作绩效的有机成分，还需要心理学家、公共管理专家和决策者的进一步探索。</p>'
			            +  '<p>2、是降低健康政策推行的认知成本和情感成本。公共政策有时会出现“政策失灵”的情形，这往往与政策执行的社会成本过高有关。一些公共政策的设计与执行，过于强调专家视角，在一定程度上忽视了公众参与，就可能导致民众在理解这些政策时容易产生较高认知负荷和负面情绪感受，表现为看不懂复杂的表格设计与程序步骤、无法理解相关术语、不能有效唤起公众对健康建议的注意力、无法直观感受医保政策的好处与初衷等，从而降低大众对健康公共政策的参与度与获得感，甚至由此产生抵触心理，使得好的政策设想无法有效落地。例如家庭医生签约制度、“三减三健”工作、无偿献血工作等，在宣传和推行过程中都发现存在各式各样的认知阻力与情感障碍。如何利用心理学的理论、方法和技术，推出更具吸引力的健康宣教形式、设计更具用户体验感的健康App与健康网站、探索更具现实说服力的政策引导策略，是认知心理学家和社会心理学家应着重努力的方向。</p>'
			            +  '<p>3、是积极助推网络空间健康治理工作。健康医疗领域一直是流言的“重灾区”，网络空间中的失实健康信息正日益成为威胁人民群众身心健康的重要风险源。在中国科学技术协会公布的2019年十大“科学”流言榜中，就有7条流言集中在健康领域。像孕妇接种流感疫苗会影响胎儿健康、近视可以治愈等流言，或是虚构了疫苗的副作用，或是夸大了当下医学的治愈能力，两者都会塑造民众的不健康认知。在当下疫情防控过程中，更是产生了各种不实流言，在大众普遍不出门的情况下，此类流言多以网络流言形式进行流传，这更加剧了它们的传播速率和覆盖范围，造成了不必要的社会恐慌，妨碍防疫救治工作的顺利开展。为此，如何加强对失实健康信息的传播规律与干预策略研究，以及加强对网络空间中的涉医舆情治理研究，都需要心理学家结合大数据技术提出专业化的对策。</p>'
			            +  '<p>4、是建立突发公共卫生事件的心理危机干预的常态化工作机制。目前心理学对相关事件的参与仍较多停留于事后弥补的应急性自发参与阶段，尚未形成预防为主的常态化工作机制，体系化的心理免疫机制还落后于防控此类事件的实战需求。就其工作形式而言，仍较多停留于对相关群体或个体进行个体化心理援助的传统模式，对如何促进特殊时期主流权威信息的有效传播、提高公众对医嘱行为的有效遵从、提升处理相关事件政府官员的媒介素养与沟通能力等可有效化解公众情绪恐慌的政策性和过程性策略仍贡献较少。为此，应当集中心理学界力量，与公共卫生和公共管理领域的专家一道，对可能发生的各类公共卫生突发事件设计出科学的心理干预方案及具体步骤，并将之作为系统性应对预案的常态性组成部分，丰富突发公共卫生事件的治理策略与政策工具。</p>'
			            +  '<p>总之，面对健康中国战略这一全局性、系统性的重大社会工程，心理学界应更为积极地参与相关政策的制定、执行与评估过程，全方位、多角度地参与健康治理，从而使学科建设与学术研究更好地服务于时代与人民。</p>'
			            +  '<p>此篇文章转载于人民网</p>'
			  },
			  {
				id : 7,
				title : "心云天地与您和衷共济 疫情期间三大产品免费开放",
				time : "2020-3-10",
				author : "admin",
				resource : "",
				cover : "front/img_t/com/news_08_01.png",
				abstract : "",
				content : '<p>为阻断疫情向校园蔓延，全国多地已经发布了停课通知。为响应教育部“停课不停教、不停学”的要求，北京心云天地疫情期间全员在岗，凝心聚力，全力保障产品平台稳定运行</p>'
						+'  <p>同时我们制定了服务保障计划和产品免费开放计划，保障疫情期间所有合作伙伴教育工作的顺利开展，实现“学习不延期  业务不中断”，与您共克时艰！</p>'
						+'<p>我们承诺并推出：</p>'
						+'  <p>一、疫情期间全员在岗，随时响应您的任何需求。</p>'
						+'  <p>二、全力保障产品稳定运行，请您安心使用。</p>'
						+'  <p>三、推出主产品线产品免费使用计划，在疫情期间向有需求的学校免费开放。</p>'
						+'  <p>用责任感让客户放心，用服务让用户安心，心云天地在行动！这场疫情防控战，我们定能取胜!</p>'
                        +'  <p>服务热线：  023-68681786</p>'
                        +'  <p>了解更多产品信息，请登陆http://www.psycloud.com.cn</p>'
			}
			  
			
		]
	},
	{
		type:"ann",
		title:'公告栏',
		url:'news.html?type=ann',
		items:[
			// {
			// 	id:0,
			// 	title:'实验教学系统E-prime管理操作方法',
			// 	time:'2020-5-14',
			// 	author : "admin",
			// 	resource : "",
			// 	cover : "front/img_t/ann/ann_01.png",
			// 	abstract : "实验教学系统E-prime管理操作方法",
			// 	content:`
					
			// 		<p>1、首先用户需要使用本地E-prime程序编辑实验。（本功能仅是提供运行eprime程序并将本地实验数据上传。方便远程实验加查看数据）</p>
			// 		<p>2、运行实验端（被试端）必须安装E-prime程序，且程序版本不低于编辑此实验时使用的版本，同时下载实验教学系统中提示的插件ERunAuto才能运行实验。</p>
			// 		<p>首先用管理员账号或者教师账号登录教学系统</p>
			// 		<img src="front/img_t/ann/ann_02.png" />
			// 	`
			// },
			// {
			// 	id:1,
			// 	title:'实验测评系统新增用户分组功能',
			// 	time:'2020-5-14',
			// 	author : "admin",
			// 	resource : "",
			// 	cover : "front/img_t/ann/ann_01.png",
			// 	abstract : "实验教学系统E-prime管理操作方法",
			// 	content:`
			// 	<p>1、输入网址<a href="http://syjx.psycloud.com.cn:8080/syjx">http://syjx.psycloud.com.cn:8080/syjx</a>，登录自己的账号，进入系统。如下图所示;</p>	
				
			// 	`
			// },
			 {
				id:2,
				title:'实验教学系统：学生提交报告手册',
				time:'2020-5-14',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/stu_00.png",
				abstract : "实验教学系统：学生提交报告手册",
				content:`
					<p>1、输入网址<a href="http://syjx.psycloud.com.cn:8080/syjx">http://syjx.psycloud.com.cn:8080/syjx</a>，登录自己的账号，进入系统。如下图所示;</p>	
					<p><img src="front/img_t/ann/stu_01.jpg" class="img-responsive center-block"></p>
					<p>2、点击“实验报告”进入界面。如下图所示</p>
					<p><img src="front/img_t/ann/stu_02.jpg" class="img-responsive center-block"></p>
					<h3>提交报告方法一：</h3>
					<p>2.1点击“写报告”的操作方式。</p>
					<p><img src="front/img_t/ann/stu_03.jpg" class="img-responsive center-block"></p>
					<p>2.1.1点击“填写完成，查看预览”进入之后。学生需要点击“提交报告”按钮才算是真正的提交任务，如果不点击“提交报告”按钮，老师端是不能够对学生的报告进行批阅的，如下图所示</p>
					<p><img src="front/img_t/ann/stu_04.jpg" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/stu_05.jpg" class="img-responsive center-block"></p>
					<p>2.1.2，点击“确定”之后，返回界面</p>
					<p><img src="front/img_t/ann/stu_06.jpg" class="img-responsive center-block"></p>
					<h3>提交报告方法二：</h3>
					<p>2.2点击“上传文件”的方式</p>
					<p><img src="front/img_t/ann/stu_07.jpg" class="img-responsive center-block"></p>
					<p>2.2.1 将报告在电脑上面保存好路径之后,点击“打开”即可上传成功。上传成功之后显示如图2待批阅状态</p>
					<p><img src="front/img_t/ann/stu_08.jpg" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/stu_09.jpg" class="img-responsive center-block"></p>

				`
			},
			{
				id:3,
				title:'心理学教学系统 Android 手机 APP 可做实验列表',
				time:'2020-5-14',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/app_00.png",
				abstract : "心理学教学系统 android 手机 APP 可做实验列表",
				content:`
				<p>APP 下载地址：<a href="http://232g3567n6.51mypc.cn:81/psycloud_syjx_v1.apk">http://232g3567n6.51mypc.cn:81/psycloud_syjx_v1.apk（注：不支持苹果手机）</a></p>
				<p> 手机实验操作方式：首先将手机横屏</p>
				<p><span>1、键盘要求点击空格键的时候 </span><span style="margin-left:50px"> 点击手机点屏幕中间</span></p>
				<p><span>2、键盘要求点击F和J 键的时候</span><span style="margin-left:50px"> 点击手机左右两边</span></p>
				<p><span>3、实验需要输入字体点击enter键的时候 </span><span style="margin-left:50px">  点击输入框输入之后点击“前往”即可</span></p>
				`
			},
			{
				id:4,
				title:'关于心理学实验教学系统新增用户分组功能的详细操作说明',
				time:'2020-5-14',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/update_00.png",
				abstract : "关于心理教学系统更新功能（2020年3月24号）",
				content:`
				<p><strong>公司名称:</strong>北京心云天地科技有限公司</p>
				<p><strong>更新时间:</strong>2020年3月24日</p>
				<p><strong>功能介绍:</strong>这个功能主要为了实现一个学生选修多个教师的课程，多名教师在分组中对学生进行管理，指定不同的实验任务，学生可以登录账号之后可以接收到不同教师指定的实验任务。</p>
				<p><b>使用方法：</b></p>
				<p>1、点击用户管理--用户分组--添加，添加分组标题点击确定。</p>
				<p><img src="front/img_t/ann/update_01.png" class="img-responsive center-block"></p>
				<p><img src="front/img_t/ann/update_02.png" class="img-responsive center-block"></p>
				<p>1.1添加分组标题成功之后，点击“添加学生”，这里只能够添加自己管理班级里面的学生。</p>
				<p><img src="front/img_t/ann/update_03.png" class="img-responsive center-block"></p>
				<p>1.2“导入”导入学生可以添加系统学院里面的任意学生，其他教师管理的班级的学生依然可以添加到自己添加的分组中。（注：可以多次添加到分组）</p>
				<p><img src="front/img_t/ann/update_04.png" class="img-responsive center-block"></p>
				<p>2、添加分组完成之后，点击实验管理--列表自定义--指定实验--添加批次名称，添加成功之后，填写实验基本信息、 选择被试用户可以从班级中选择也可以从分组中选择，选择指定
				之后学生登录账号之后看到教师指定的实验了。
				</p>
				<p><img src="front/img_t/ann/update_05.png" class="img-responsive center-block"></p>

				`
			},
			{
				id:5,
				title:'关于心理学实验测评系统新增用户分组功能的详细操作说明',
				time:'2020-5-14',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/add_00.png",
				abstract : "关于心理学实验测评系统新增用户分组功能的详细描述",
				content:`
					<p><strong>功能介绍</strong>：这个功能主要为了实现一个学生选择多个教师的课程，可以添加到不同的分组中去。不限制添加次数</p>
					<p>1、点击用户管理--用户分组--添加成功之后，点击学生列表</p>
					<p><img src="front/img_t/ann/add_01.png" class="img-responsive center-block"></p>
					<p>1.1  学生列表里面主要有：添加学生、导入学生、导入模板下载、删除选中的学生。</p>
					<p><img src="front/img_t/ann/add_02.png" class="img-responsive center-block"></p>
					<p>1.1.1添加学生：添加学生主要是根据老师自己管理的班级里面去选择学生。可以一个班级里面的学生都选择到分组中也可以添加个别几个学生到分组里面。（注：点击勾选序号前面的小方框就可以全部选择。）</p>
					<p><img src="front/img_t/ann/add_03.jpg" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/add_04.jpg" class="img-responsive center-block"></p>
					<p>1.1.2导入学生：导入学生之前需要先下载导入模板，导入学生可以批量完成（注：1、导入学生必须是已注册到该学院下面的学生，如果没有注册到学院下面的学生无法导入到分组里面。）</p>
					<p>导入学生的作用比如：该学院下面有3个班级，分别为：计算机1班、计算机2班、计算机3班。假如这三个班级里面都有学生选择了XX老师的课。但是该名老师只管理了计算机1班，添加学生也只能添加计算机1班里面学生进入到分组，其他两个班级的学生无法添加进分组里面，故此需要教师将选择自己课程的学生导入到分组里面，这样即使学生是其他班级其他老师管理的自己也可以对学生进行指定实验。</p>
					<p><img src="front/img_t/ann/add_05.png" class="img-responsive center-block"></p>
					<p>2、当分组建立添加学生完成之后，就可以去指定实验了。</p>
					<p>   首先点击测验管理--指定测验--添加测试批次标题之后，对实验批次进行编辑，填写基本信息--选择被试用户（注：1、添加学生分组     2、添加班级   如图2.3）---选择量表之后，点击基本信息点击确定即可。学生登录账号之后就可以看到教师指定的量表，如果是多个老师指定实验学生端就会出现多个教师指定的量表信息。</p>
					
					<p><img src="front/img_t/ann/add_07.png" class="img-responsive center-block"></p>
					<p>被试用户可以选择学生分组或者班级</p>
					<p><img src="front/img_t/ann/add_08.png" class="img-responsive center-block"></p>
					`
			},
			{
				id:6,
				title:'关于心理实验教学系统E-prime管理操作方法的详细说明',
				time:'2020-5-14',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/tea_00.png",
				abstract :"关于心理实验教学系统E-prime管理操作方法的详细说明",
				content:`
					<p>1、首先用户需要使用本地E-prime程序编辑实验。（本功能仅是提供运行eprime程序并将本地实验数据上传。方便远程实验加查看数据）</p>
					<p>2、运行实验端（被试端）必须安装E-prime程序，且程序版本不低于编辑此实验时使用的版本，同时下载实验教学系统中提示的插件ERunAuto才能运行实验。</p>
					<p>首先用管理员账号或者教师账号登录教学系统</p>
					<p><img src="front/img_t/ann/tea_01.png" class="img-responsive center-block"></p>
					<h4>一、实验管理</h4>
					<p>
						1、点击“eprime管理”---“实验列表”----“添加实验”选择文件名以及输入实验名称
					</p>
					<p><img src="front/img_t/ann/tea_02.png" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/tea_03.png" class="img-responsive center-block"></p>
					<p>（1）添加实验名称之后点击“实验程序”按钮，选择多文件上传或者文件夹上传。选择之后点击“开始上传”传输成功之后就可以返回界面。（注：实验运行程序.esb2文件，只能选择多文件上传，必须保证.esb2文件当前直接目录下，实验程序所需要的资源 可以按照实验程序的编码规范进行多文件上传，或者文件夹上传，其上传完成后，实验程序.esb2文件所在目录应该与试验程序所需要的资源结果目录相一致；上传文件可以是图片，音频）</p>
					<p><img src="front/img_t/ann/tea_04.png" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/tea_05.png" class="img-responsive center-block"></p>
					<p>2、点击下载插件，点击保存之后，打开安装包，点击下一步直到安装完成。</p>
					<p><img src="front/img_t/ann/tea_06.png" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/tea_07.jpg" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/tea_08.jpg" class="img-responsive center-block"></p>
					<p>插件下载安装完成之后即可。</p>
					<p>3、插件下载安装完成，点击实验后面“开始”按钮。如果eprime目录非以上默认目录，则请您重新选择eprime启动程序所在目录</p>
					<p><img src="front/img_t/ann/tea_09.png" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/tea_10.jpg" class="img-responsive center-block"></p>
					<p>注：如果eprime目录没有在安装目录，点击“浏览”按钮，选择路径即可开始实验。</p>
					<p><img src="front/img_t/ann/tea_11.jpg" class="img-responsive center-block"></p>
					<p>直到实验结束的提示为止。如下图：</p>
					<p><img src="front/img_t/ann/tea_12.jpg" class="img-responsive center-block"></p>
					<p>4、实验结束之后查看实验数据，点击“结果列表”“下载”即可查看被试者的行为数据。</p>
					<p><img src="front/img_t/ann/tea_13.png" class="img-responsive center-block"></p>
					<p><img src="front/img_t/ann/tea_14.jpg" class="img-responsive center-block"></p>

					`
			},
			{
				id: 7,
				title:'北京心云天地科技有限公司，升级部署新服务器集群已完成',
				time:'2020-5-14',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/ann_01.png",
				abstract : "北京心云天地科技有限公司，升级部署新服务器集群已完成",
				content:`
				<p>北京心云天地科技有限公司,升级部署新服务器集群已完成。</p>
				<p>以下为公司各个心理学产品新的链接地址，原有连接地址依然有效，新地址比原有地址更加简洁，更流畅。</p>
				<p>PsyCloud实验室管理系统：<a href="http://laboa.psycloud.com.cn">http://laboa.psycloud.com.cn</a></p>
				<p>PsyCloud实验教学系统： <a href="http://syjx.psycloud.com.cn">http://syjx.psycloud.com.cn</a></p>
				<p>PsyCloud实验设计系统： <a href="http://ceds.psycloud.com.cn">http://ceds.psycloud.com.cn</a></p>
				<p>PsyCloud心理测评系统： <a href="http://xyjx.psycloud.com.cn">http://xyjx.psycloud.com.cn</a></p>
				<p>PsyCloud脑电教学系统： <a href=http://eeg.psycloud.com.cn">http://eeg.psycloud.com.cn</a></p>
				<p>PsyCloud眼动追踪系统： <a href="http://eye.psycloud.com.cn">http://eye.psycloud.com.cn</a></p>
				<p>PsyCloud量表设计系统： <a href="http://scale.psycloud.com.cn">http://scale.psycloud.com.cn</a></p>
				<p>PsyCloud心理实训系统： <a href="http://xlsx.psycloud.com.cn">http://xlsx.psycloud.com.cn</a></p>
				<p>PsyCloud3D数字沙盘系统 <a href="http://sand.psycloud.com.cn">http://sand.psycloud.com.cn</a></p>
				`
			},
			{
				id:8 ,
				title:'《关 于 增 加 试 用 心 理 系 统 范 围 的 通 知》',
				time:'2020-5-15',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/ann_008.png",
				abstract : "《关于增加试用系统范围的通知》",
				content:`
				<p>亲爱的老师，您们好！感谢您们长期以来对心云天地的支持</p>
				<p>最近，有很多学校的老师提出，希望可以试用尚未开通的其他产品。公司积极响应老师们的关切，决定只要是老师们想用的，我们都可以为老师们开通试用。已购买我们部分产品的学校，也可试用其他尚未购买的产品</p>
				<p>我们的心理学教学系统共有8个，分别是：</p>
				<p>心理实验教学系统、心理实验设计系统、心理测评系统、量表设计系统、3D心理数字沙盘系统、心理实训系统、眼动追踪系统、脑电教学系统。</p>
				<p>如果老师们想要开通试用，或是了解这些系统的其他信息，欢迎随时联系我们。</p>
				`
			},			
			{
				id:9 ,
				title:'《关 于 免 费 开 展 心 理 云 平 台 操 作 培 训 的 公 告》',
				time:'2020-5-22',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/ann_009.png",
				abstract : "《关于免费开展心理云平台操作培训的公告》",
				content:`
				<p>尊敬的各位老师，您们好！最近，我们接到不少老师反馈，因不熟悉各个系统的操作，影响了正常的教学</p>
				<p>为了更好的支持老师们的教学工作，公司可以免费为各院校提供远程在线培训服务，培训内容为各个系统的操作方法。我们有专业的技术人员为老师介绍系统的操作，培训过程中，老师们不清楚的地方可以实时提问，我们力图让每位老师、学生都可以轻松、便捷的使用我们的各个产品，减轻老师们的教学负担。</p>
				<p>如果老师们有培训需求，随时可以和我们联系，协商培训时间、具体培训内容等事项</p>
				<p>敬祈各位老师身体健康、工作愉快！</p>	
				`
			},
			{
				id:10 ,
				title:'《北 京 心 云 天 地 微 信 服 务 群 介 绍》',
				time:'2020-5-29',
				author : "admin",
				resource : "",
				cover : "front/img_t/ann/Bulletin_board_001.png",
				abstract : "《北 京 心 云 天 地 微 信 服 务 群 介 绍》",
				content:`
				<p>不知道您是否有过疑惑，为什么群里有那么多部门呢？今天，我就为您简单介绍一下他们的职能：</p>
                <p>粉红色，看起来很贴心的是市场部，他们负责为您提供产品扩容、增开系统的服务；</p>
                <p>天蓝色，看起来很舒畅的是售后部，您在使用过程中遇到任何的操作问题，都由他来为您悉心培训；</p>
                <p>深蓝色，黑图标的是技术部，里面都是技术大牛，您遇到的系统功能BUG或有特殊改进需求，由他们负责修复或提供定制化升级；</p>
                <p>浅蓝色，白图标的是产品部，成员都具备心理学专业背景，系统内所有涉及专业知识的问题，都有他们为您提供咨询与支持；</p>
               <div class="row" >
							<div class="col-xs-12">
								<p class="com-cul-t"></p><p class="com-cul-c"></p>
							<div class="row">
							<div class="col-xs-1">
							</div>
							<div class="col-lg-2">
								<img src="front/img_t/ann/cor_001.png" class="img-responsive" data-src="front/img_t/ann/cor_001.png">
							</div>
							<div class="col-lg-2">
								<img src="front/img_t/ann/safira_001.png" class="img-responsive" data-src="front/img_t/safira_001.png">
							</div>
							<div class="col-lg-2">
								<img src="front/img_t/ann/Azul_escuro_001.png" class="img-responsive" data-src="front/img_t/ann/Azul_escuro_001.png">
							</div>
							<div class="col-lg-2">
								<img src="front/img_t/ann/Azul_escuro_002.png" class="img-responsive" data-src="front/img_t/Azul_escuro_002.png">
							</div>
							<div class="col-xs-3">
							</div>
							</div>
                <p>其实，这个服务群，就像是把咱们心云天地公司搬到了您的手机里一样，把所有的职能部门集合在一起，只为了可以为您提供全方位、一站式的服务，让您的每一个需求，都可以得到及时、有效的回复！</p>
                <p></p>
				<p>敬祈各位老师身体健康、工作愉快！</p>	
				`
			}
		]
	}
];

//心期刊
var issues = [
	{
		id : 0,
		title : '北京心云天地公司简介',
		cover : 'front/img/temp1.jpg',
		url : 'http://www.psycloud.com.cn/issue/1/psy-issue1.html',
		issue : '第一期',
		if_new : false
	},{
		id : 1,
		title : 'PsyCloud 心理实验教学系统(CETS)',
		cover : 'front/img/temp2.jpg',
		url : 'http://www.psycloud.com.cn/issue/2/psy-issue2.html',
		issue : '第二期',
		if_new : false
	},{
		id : 2,
		title : 'PsyCloud 心理实验设计系统(CEDS)',
		cover : 'front/img/temp3.jpg',
		url : 'http://www.psycloud.com.cn/issue/3/psy-issue3.html',
		issue : '第三期',
		if_new : false
	},{
		id : 3,
		title : 'PsyCloud眼动教学系统',
		cover : 'front/img/temp4.jpg',
		url : 'http://www.psycloud.com.cn/issue/4/psy-issue4.html',
		issue : '第四期',
		if_new : false
	},{
		id : 4,
		title : 'PsyCloud脑电教学系统',
		cover : 'front/img/temp5.jpg',
		url : 'http://www.psycloud.com.cn/issue/5/psy-issue5.html',
		issue : '第五期',
		if_new : false
	},{
		id : 5,
		title : 'PsyCloud心理测评系统',
		cover : 'front/img/temp6.jpg',
		url : 'http://www.psycloud.com.cn/issue/6/psy-issue6.html',
		issue : '第六期',
		if_new : false
	},{
		id : 6,
		title : 'PsyCloud心理量表设计系统',
		cover : 'front/img/temp7.jpg',
		url : 'http://www.psycloud.com.cn/issue/7/psy-issue7.html',
		issue : '第七期',
		if_new : false
	},{
		id : 7,
		title : 'PsyCloud 3D心理数字沙盘系统',
		cover : 'front/img/temp8.jpg',
		url : 'http://www.psycloud.com.cn/issue/8/psy-issue8.html',
		issue : '第八期',
		if_new : false
	},{
		id : 8,
		title : 'PsyCloud 心理实训系统',
		cover : 'front/img/temp9.jpg',
		url : 'http://www.psycloud.com.cn/issue/9/psy-issue9.html',
		issue : '第九期',
		if_new : false
	},{
		id : 9,
		title : 'PsyCloud 综合心理实验台',
		cover : 'front/img/temp10.jpg',
		url : 'http://www.psycloud.com.cn/issue/10/psy-issue10.html',
		issue : '第十期',
		if_new : false
	},{
		id : 10,
		title : 'EV-PP2便携眼动仪',
		cover : 'front/img/temp11.jpg',
		url : 'http://www.psycloud.com.cn/issue/11/psy-issue11.html',
		issue : '第十一期',
		if_new : false
	},{
		id : 11,
		title : 'PsyCloud心理实训台',
		cover : 'front/img/temp12.jpg',
		url : 'http://www.psycloud.com.cn/issue/12/psy-issue12.html',
		issue : '第十二期',
		if_new : false
	},{
		id : 12,
		title : '心理学在线课堂教育平台',
		cover : 'front/img/temp13.jpg',
		url : 'http://www.psycloud.com.cn/issue/13/psy-issue13.html',
		issue : '第十三期',
		if_new : false
	},{
		id : 13,
		title : '心理学VR虚拟仿真实验室',
		cover : 'front/img/temp14.jpg',
		url : 'http://www.psycloud.com.cn/issue/14/psy-issue14.html',
		issue : '第十四期',
		if_new : false
	},{
		id : 14,
		title : '学前教育网络课堂云平台',
		cover : 'front/img/temp15.jpg',
		url : 'http://www.psycloud.com.cn/issue/15/psy-issue15.html',
		issue : '第十五期',
		if_new : false
	},{
		id : 15,
		title : 'Pre_Edu幼儿园岗前实训虚拟仿真系统',
		cover : 'front/img/temp16.jpg',
		url : 'http://www.psycloud.com.cn/issue/16/psy-issue16.html',
		issue : '第十六期',
		if_new : false
	},{
		id : 16,
		title : 'Pre_Edu环境创设仿真系统',
		cover : 'front/img/temp17.jpg',
		url : 'http://www.psycloud.com.cn/issue/17/psy-issue17.html',
		issue : '第十七期',
		if_new : false
	},{
		id : 17,
		title : 'Pre_Edu幼师资格证培训考试系统',
		cover : 'front/img/temp18.jpg',
		url : 'http://www.psycloud.com.cn/issue/18/psy-issue18.html',
		issue : '第十八期',
		if_new : true
	}
];

//菜单
var menus = [
	{
		id : 0,
		name : "&nbsp;首&nbsp;页&nbsp;",
		type : 0,//0只有一级，1具有下拉一级菜单，2具有二级下拉菜单
		url : "index.html"
	},
	{
		id : 1,
		name : "产品中心 ",
		type : 2,
		url : "#",
		list : product
	},
	{
		id : 2,
		name : "解决方案 ",
		type : 1,
		url : "#",
		list : solution
	},
	{
		id : 3,
		name : "技术服务 ",
		type : 1,
		url : "#",
		list : service
	},
	// {
	// 	id : 4,
	// 	name : "在线课堂",
	// 	type : 0,
	// 	url : "http://139.224.244.220:8180/admin",
	// },
	{
		id : 5,
		name : "新闻资讯",
		type : 1,
		url : "#",
		list : news
	},
	{
		id : 6,
		name : "心期刊",
		type : 0,
		url : "heartJournal.html",
	},
	{
		id : 7,
		name : "关于我们",
		type : 0,
		url : "about.html"
	},
	// {
	// 	id : 2,
	// 	name : "战略合作",
	// 	type : 0,
	// 	url : "cooperation.html"
	// },
	// {
	// 	id : 8,
	// 	name : "联系我们",
	// 	type : 0,
	// 	url : "contact.html",
	// }

];

