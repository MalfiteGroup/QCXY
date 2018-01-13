			mui.init();
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0008 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
			document.addEventListener('plusready', function() {
				//设置状态栏颜色
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