import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){

		var fastItem1 =Ember.Object.create({
			name :"相册",
			color:"blue",
			icon:"icon-shuma",
			route:"independence.saoma"
		});

		var fastItem2 =Ember.Object.create({
			name :"邮箱",
			color:"blue",
			icon:"icon-lijin",
			route:"independence.saoma"
		});

		var fastItem3 =Ember.Object.create({
			name :"会员中心",
			color:"blue",
			icon:"icon-liwu",
			route:"independence.saoma"
		});

		// fastItems
		var accountItem1= Ember.Object.create({
			name:"余额",
			icon:"icon-liwu",
			color:"blue",
			detail:"0.00"
		});


		var localData = Ember.Object.create({
			nickname:"昵称",
			usercode:"13146467879",
			fastItems:[fastItem1,fastItem2,fastItem3],
			accountItems:{
				tb1:[accountItem1,accountItem1,accountItem1,accountItem1],
				tb2:[accountItem1,accountItem1],
				tb3:[accountItem1,accountItem1,accountItem1,accountItem1,accountItem1,accountItem1]
			}
		});

		return localData;
	}
});
