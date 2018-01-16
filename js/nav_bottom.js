mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
var hot, user, column;
var isHome = true;
document.addEventListener('plusready', function() {
	var home = plus.webview.getWebviewById('home');
	if(home == undefined) {
		home = plus.webview.open('html/home.html', 'home', {
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
	
	mui("#nav-bottom").on("tap", "#home", function() { //点击触发   
		home.show();
	});
	mui("#nav-bottom").on("tap", "#hot", function() { //点击触发  
		hot.show();
	});
	mui("#nav-bottom").on("tap", "#column", function() { //点击触发  
		column.show();
	});
	mui("#nav-bottom").on("tap", "#user", function() { //点击触发
		user.show();
	});
}, false);