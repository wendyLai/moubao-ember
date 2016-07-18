import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('self');
  this.route('praise');
  this.route('friend', function() {
    this.route('all');
  });

  this.route('independence', function() {
    this.route('search');
    this.route('bill');
    this.route('saoma');
    this.route('fukuanma');
    this.route('kabao');
    this.route('xiuyixiu');
    this.route('choosecity');
    this.route('praisesearch');
  });
});

export default Router;
