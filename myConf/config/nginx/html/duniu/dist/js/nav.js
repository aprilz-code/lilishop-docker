$(function(){
	var li = $('.nav ul .m');
	li.eq(0).find('a').eq(0).hover(function(){
		$(this).html('HOME');
	},function(){
		$(this).html('首页');
	});

	li.eq(1).find('a').eq(0).hover(function(){
		$(this).html('WEBSITE');
	},function(){
		$(this).html('网站建设');
	});
	
	li.eq(2).find('a').eq(0).hover(function(){
		$(this).html('PRODUCT');
	},function(){
		$(this).html('产品服务');
	});
	
	li.eq(3).find('a').eq(0).hover(function(){
		$(this).html('CASE');
	},function(){
		$(this).html('成功案例');
	});
	
	li.eq(4).find('a').eq(0).hover(function(){
		$(this).html('SOLUTIONS');
	},function(){
		$(this).html('解决方案');
	});
	
	li.eq(5).find('a').eq(0).hover(function(){
		$(this).html('NEWS');
	},function(){
		$(this).html('新闻动态');
	});
	
	li.eq(6).find('a').eq(0).hover(function(){
		$(this).html('ABOUT');
	},function(){
		$(this).html('关于我们');
	});

	//li.eq(6).find('a').eq(0).hover(function(){
//		$(this).html('MOBILE');
//	},function(){
//		$(this).html('移动终端');
//	});

	li.eq(7).find('a').eq(0).hover(function(){
		$(this).html('CONTACT');
	},function(){
		$(this).html('联系我们');
	});
	
	$('.nav ul .m').hover(function(){
		var linum = $(this).index();
		if(linum!=0&&linum!=7)
		{$("#top_bg").show();}					   
	 },function(){
		 $("#top_bg").hide();	
	})
	
	var url = window.location.href.toLowerCase();
	//alert(url);
	if (url.indexOf("/website/case/") > -1) {
		$("#m4").addClass("on");
	} else if (url.indexOf("/news/") > -1||url.indexOf("/marketing/knowledge/") > -1||url.indexOf("/about/news/") > -1||url.indexOf("/website/newweb/") > -1||url.indexOf("/marketing/seo/") > -1) {
		$("#m5").addClass("on");
	} else if (url.indexOf("/service/contact.html") > -1) {
		$("#m7").addClass("on");
	} else if (url.indexOf("/about/") > -1||url.indexOf("/service/payment.html") > -1) {
		$("#m2").addClass("on");
	} else if (url.indexOf("/website/pinpai.html") > -1||url.indexOf("/website/yingxiao.html") > -1||url.indexOf("/website/dianshang.html") > -1||url.indexOf("/website/mobile.html") > -1) {
		$("#m3").addClass("on");
	} else if (url.indexOf("/mobile/") > -1||url.indexOf("/website/") > -1||url.indexOf("/eshop/") > -1||url.indexOf("/service/") > -1) {
		$("#m6").addClass("on");
	} else if (url.indexOf("/solutions/") > -1) {
		$("#m8").addClass("on");
	} else if (url.indexOf("www.yibaixun.com/") > -1) {
		$("#m1").addClass("on");
	} else {
		$("#m1").addClass("on");
	}	
	jQuery(".nav").slide({ type:"menu",  titCell:".m", targetCell:".sub", effect:"slideDown", delayTime:300, triggerTime:100,returnDefault:true});
	
});

//右边客服预约
$(".layui-layer-setwin").click(function(){
		$(".dialog-wrap").detach();

	})	
$(".layui-layer-setwin").click(function(){
		$(".yuyue_bgs").fadeOut();
		$(".layui-layer").animate({marginLeft:"0px",width:"0px",height:"0px",top:"300px"});

	})
function IsDigit(cCheck)  
{  
    return (('0'<=cCheck) && (cCheck<='9'));  
}	
function tianjia6(nForm)  
{

	if(nForm.names.value==""||nForm.names.value=="姓名")
	{
		alert("请留下您的姓名!");
		nForm.names.focus();
		return false;
	}	  
if(nForm.Tel.value==""||nForm.Tel.value=="电话"){
alert(" 请留下您的电话,以便我们与您联系!") ;
nForm.Tel.focus();
return false;
}  

if( IsDigit(nForm.Tel.value)==0)
{
alert("电话必须为数字!");
nForm.Tel.focus();
return false;
}

//if(nForm.company.value==""||nForm.company.value=="地址")
//	{
//		alert("请留下您的地址!");
//		nForm.company.focus();
//		return false;
//	}	
//	if(nForm.captchacode.value==""){
//	alert("请输入验证码!");
//	nForm.captchacode.focus();
//	return false;
//}  

}
function RefreshImage(valImageId) {
	var objImage = document.images[valImageId];
	if (objImage == undefined) {
		return;
	}
	var now = new Date();
	objImage.src = objImage.src.split('?')[0] + '?x=' + now.toUTCString();
}

$(document).on("mousewheel DOMMouseScroll", function (e) {
	// jq 获取dom 事件对象要通过originalEvent 
	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
		// chrome & ie
		(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
	if (delta > 0) {
		// 向上滚
		$('.top01').show();
		$('.top02').show();

	} else if (delta < 0) {
		// 向下滚
		$('.top01').hide();
		$('.top02').hide();

	}
});