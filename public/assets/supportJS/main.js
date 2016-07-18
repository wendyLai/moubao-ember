$(document).ready(function() {
	init();

	// page1
	// banner图滑动切换
	bannerToggle();

	// page2
	// 列表选择滑动切换
	classifyTogggle();

	//页面
	//底部导航栏切换
	bottomNavbarClick();
})

function init() {
	//默认显示第一个页面，第一个页面的nav加上active
	$("#my-navbar .col-xs-3").eq(0).addClass("active");

}


function bannerToggle() {
	$("#main-carousel").on("swipeleft", function() {
		$(".right.carousel-control").click();
	}).on('swiperight', function() {
		$(".left.carousel-control").click();
	});;
}

function classifyTogggle() {
	$("#praise-classify .js-classify-toggle").on("swipe", function() {
		var pre_index = $(this).index();
		$(this).removeClass("activity").siblings(".js-classify-toggle").addClass("activity");
		$(this).siblings(".toggle-circle-list").children(".toggle-circle-item").eq(pre_index).removeClass("activity").siblings(".toggle-circle-item").addClass("activity");
	});
}

function bottomNavbarClick() {

	$("#my-navbar li a").click(function() {
		//每次点击将滚动条设置在顶端
		$(document).scrollTop(0);
	})
}

function whichPage(){
	//当前是页面index，是第几个页面index+1
	var page_index = $("#my-mainbody>.tab-pane.active").index();
	return page_index;
}