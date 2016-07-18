import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){

		var fastFunc1 = Ember.Object.create({
			name :"扫一扫",
			icon:"icon-saoyisao",
			route:"independence.saoma"
		});
		var fastFunc2 = Ember.Object.create({
			name :"付款",
			icon:"icon-fukuanma",
			route:"independence.fukuanma"
		});
		var fastFunc3 = Ember.Object.create({
			name :"卡券",
			icon:"icon-huankuan",
			route:"independence.kabao"
		});
		var fastFunc4 = Ember.Object.create({
			name :"咻一咻",
			icon:"icon-gengduo",
			route:"independence.xiuyixiu"
		});

		// table1内容
		var topTbItem1 =Ember.Object.create({
			name :"蚂蚁聚宝",
			color:"blue",
			icon:"icon-zhaocaibao",
			route:"independence.saoma"
		});

		var topTbItem2 =Ember.Object.create({
			name :"余额宝",
			color:"red",
			icon:"icon-icon",
			route:"independence.saoma"
		});
		
		var topTbItem3 =Ember.Object.create({
			name :"我的快递",
			color:"yellow",
			icon:"icon-kuaidi",
			route:"independence.saoma"
		});
		
		var topTbItem4 =Ember.Object.create({
			name :"转账",
			color:"blue",
			icon:"icon-zhuanzhang",
			route:"independence.saoma"
		});
		
		var topTbItem5 =Ember.Object.create({
			name :"亲密付",
			color:"red",
			icon:"icon-qinmifu",
			route:"independence.saoma"
		});
		
		var topTbItem6 =Ember.Object.create({
			name :"信用卡还款",
			color:"yellow",
			icon:"icon-xinyongqiahuankuan",
			route:"independence.saoma"
		});
		
		var topTbItem7 =Ember.Object.create({
			name :"服务窗",
			color:"green",
			icon:"icon-fuwuchuangb",
			route:"independence.saoma"
		});
		
		var topTbItem8 =Ember.Object.create({
			name :"亲情账户",
			color:"red",
			icon:"icon-chengshifuwu",
			route:"independence.saoma"
		});
		
		var topTbItem9 =Ember.Object.create({
			name :"手机充值",
			color:"blue",
			icon:"icon-shoujichongzhi",
			route:"independence.saoma"
		});
		
		var topTbItem10=Ember.Object.create({
			name :"股票",
			color:"red",
			icon:"icon-gupiao",
			route:"independence.saoma"
		});
		
		var topTbItem11 =Ember.Object.create({
			name :"淘票票",
			color:"red",
			icon:"icon-diandian",
			route:"independence.saoma"
		});
		
		var topTbItem12 =Ember.Object.create({
			name :"红包",
			color:"red",
			icon:"icon-icon",
			route:"independence.saoma"
		});

		var localData = Ember.Object.create({
			fastFuncs:[fastFunc1,fastFunc2,fastFunc3,fastFunc4],
			topTbItems:[topTbItem1,topTbItem2,topTbItem3,topTbItem4,topTbItem5,topTbItem6,topTbItem7,topTbItem8,topTbItem9,topTbItem10,topTbItem11,topTbItem12]

		});

		return localData;
	}
});