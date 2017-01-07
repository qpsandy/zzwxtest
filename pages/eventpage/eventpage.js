var cnt = 0;
var cnt0 = 0;
var cnt1 = 0;
var param = {
	data : {
		clickMsg: 'show clickMsg'
	},
	clickV : function(e) {
		console.log(e);
		var id = e.currentTarget.id;
		param.data.clickMsg = 'show click content ' + id + ': ' + (++cnt) + ' times';
		//dataset存放私有数据
		console.log(e.currentTarget.dataset.hi);
		this.setData(param.data);
	}
};

Page(param);