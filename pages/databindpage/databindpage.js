var param = {
	data : {
		message: '微信小程序',
		array: [1, 2, 3, 4, 'hello', 'molly'],
		view: 'APP',
		staffA: {firstName: 'Hulk', lastName: 'Hu'},
    	staffB: {firstName: 'Shang', lastName: 'You'},
    	staffC: {firstName: 'Gideon', lastName: 'Lin'},
    	count : 0,
    	length: 1,
    	items: [
    		{message: 'view0'},
    		{message: 'view1'},
    		{message: 'view2'},
    		{message: 'view3'}
    	]
	},
	doloading : function(e) {
		console.log("loading: ");
		console.log(e);
		//param.data.clickMsg = 'show click content' + 'view0: ' + (cnt0++) + ' times';
		//this.setData(param.data);
	},
	add : function(e) {
		this.setData({
			count : this.data.count + 1
		})
	}
};

Page(param);