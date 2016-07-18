import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){

		// table1内容
		var classifyItem1 =Ember.Object.create({
			name :"蚂蚁聚宝",
			color:"blue",
			icon:"icon-zhaocaibao",
			route:"independence.saoma"
		});

		var classifyItem2 =Ember.Object.create({
			name :"余额宝",
			color:"red",
			icon:"icon-icon",
			route:"independence.saoma"
		});
		
		var classifyItem3 =Ember.Object.create({
			name :"我的快递",
			color:"yellow",
			icon:"icon-kuaidi",
			route:"independence.saoma"
		});
		
		var classifyItem4 =Ember.Object.create({
			name :"转账",
			color:"blue",
			icon:"icon-zhuanzhang",
			route:"independence.saoma"
		});
		
		var classifyItem5 =Ember.Object.create({
			name :"亲密付",
			color:"red",
			icon:"icon-qinmifu",
			route:"independence.saoma"
		});
		
		var classifyItem6 =Ember.Object.create({
			name :"信用卡还款",
			color:"yellow",
			icon:"icon-xinyongqiahuankuan",
			route:"independence.saoma"
		});
		
		var classifyItem7 =Ember.Object.create({
			name :"服务窗",
			color:"green",
			icon:"icon-fuwuchuangb",
			route:"independence.saoma"
		});
		
		var classifyItem8 =Ember.Object.create({
			name :"亲情账户",
			color:"red",
			icon:"icon-chengshifuwu",
			route:"independence.saoma"
		});

		// listItems
		var listItem1= Ember.Object.create({
			imgSrc:"shop1.png",
			title:"老李米线",
			stars:[1,1,1,1,0],
			address:"上地",
			distance:"<400m"
		});


		var localData = Ember.Object.create({
			classifyItems:[classifyItem1,classifyItem2,classifyItem3,classifyItem4,classifyItem5,classifyItem6,classifyItem7,classifyItem8],
			listItems:[listItem1,listItem1,listItem1,listItem1,listItem1,listItem1,listItem1,listItem1,listItem1,listItem1,listItem1,listItem1,listItem1]
		});

		return localData;
	}
});