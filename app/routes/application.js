import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		var pageNav1 = Ember.Object.create({
			name :"某宝",
			icon:"icon-zhifubaoa",
			route:"home"
		});
		var pageNav2 = Ember.Object.create({
			name :"口碑",
			icon:"icon-canyin",
			route:"praise"
		});
		var pageNav3 = Ember.Object.create({
			name :"朋友",
			icon:"icon-shejiao",
			route:"friend"
		});
		var pageNav4 = Ember.Object.create({
			name :"我的",
			icon:"icon-qitashouru",
			route:"self"
		});

		return [pageNav1,pageNav2,pageNav3,pageNav4];
	},

	afterModel:function () {
		this.transitionTo("home");
	}
});