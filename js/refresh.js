mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			callback: pulldownRefresh
		},
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0008 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

function pulldownRefresh() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
	}, 3000)
}

function pullupRefresh() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
	}, 3000)
}
document.addEventListener('plusready', function() {
	mui(".mui-content").on('tap', '.type-delete', function(e) {
		var type_div = this.parentNode.parentNode;
		type_div.style.display = "none";
		e.stopPropagation();
	}, false);
	mui(".mui-content").on('tap', '.type', function() {
		var content = plus.webview.getWebviewById('content.html');
		if(content == undefined) {
			content = plus.webview.create('content.html', 'content.html');
			content.show();
		}
	}, false);
}, false);