import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['ui left slidebar inverted vertical menu'],
	classNameBindings: ['_uiClass', 'theme'],
	_uiClass: 'ui',

	initialize: function(argument){
		this.$().sidebar('toggle');
	}.on('didInsertElement')
});
