 eventManger.addHandler("test", function (res) {
	    console.log("先订阅，后发布1", res);
	})
	eventManger.addHandler("test", function (res) {
	    console.log("先订阅，后发布2", res);
	});
	eventManger.trigger("test", 2);
	
	
	eventManger.addHandler("test", function (res) {
	    console.log("先发布，后订阅2", res);
	})
	
	eventManger.addHandler("test", function (res) {
	    console.log("先发布，后订阅3", res);
	})