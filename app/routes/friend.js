import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){

		// friends
		var friend1= Ember.Object.create({
			imgSrc:"life3.png",
			name:"服务窗",
			lasttime:"09:25",
			detail:"服务推荐:窝窝团，招商银行信用卡"
		});


		var localData = Ember.Object.create({
			friends:[friend1,friend1,friend1,friend1,friend1,friend1,friend1,friend1,friend1,friend1,friend1,friend1,friend1]
		});

		return localData;
	}
});
