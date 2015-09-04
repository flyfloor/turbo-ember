import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path:'/'});
  this.route('demo', function(){
    this.route('ui-button');
    this.route('ui-checkbox');
    this.route('ui-multi-checkbox');
  });
});

export default Router;
