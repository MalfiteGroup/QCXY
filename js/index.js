mui.init();
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
var hot, user, column;
var isindex = true;

document.addEventListener('plusready', function() {
	var index = plus.webview.getWebviewById('index');
	if(index == undefined) {
		index = plus.webview.open('html/index.html', 'index', {
			top: '0px',
			bottom: '50px'
		}, 'none', 200, createweb);
	} else {
		createweb();
	}

	function createweb() {
		hot = plus.webview.create('html/hot.html', 'hot', {
			top: '0px',
			bottom: '50px'
		});
		column = plus.webview.create('html/column.html', 'column', {
			top: '0px',
			bottom: '50px'
		});
		user = plus.webview.create('html/user.html', 'user', {
			top: '0px',
			bottom: '50px'
		});
	}

	function isindexweb() {
		if(isindex) {
			plus.navigator.setStatusBarBackground('#FF5A05');
		} else {
			plus.navigator.setStatusBarBackground('rgb(247,247,247)');
		}
	}
	isindexweb();
	mui("#nav-bottom").on("tap", "#index", function() { //点击触发   
		isindex = true;
		isindexweb();
		index.show();
	});
	mui("#nav-bottom").on("tap", "#hot", function() { //点击触发  
		isindex = false;
		isindexweb();
		hot.show();
	});
	mui("#nav-bottom").on("tap", "#column", function() { //点击触发  
		isindex = false;
		isindexweb();
		column.show();
	});
	mui("#nav-bottom").on("tap", "#user", function() { //点击触发
		user.show();
		isindex = false;
		isindexweb();
		user.show();
	});
}, false);