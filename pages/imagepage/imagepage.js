var cnt = 0;
var cnt0 = 0;
var cnt1 = 0;
var param = {
	data : {
		clickMsg: 'show clickMsg'
	},
	doloading : function(e) {
		console.log("loading: ");
		console.log(e);
		//param.data.clickMsg = 'show click content' + 'view0: ' + (cnt0++) + ' times';
		//this.setData(param.data);
	}
};

Page(param);