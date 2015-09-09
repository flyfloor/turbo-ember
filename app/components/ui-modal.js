import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	display: false,
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 */
	classNames: ['ui', 'modal'],

	// -------------------------------------------------------------------------
	// Actions

	// -------------------------------------------------------------------------
	// Events
	
	classNameBindings: [],
	/**
	 * Alert external code about the click
	 *
	 * @function click
	 * @returns  {void}
	 */

	/**
	 * Class bindings for the button component
	 *
	 * @property {Ember.Array} classNameBindings
	 */

	/**
	 * Attribute bindings for the button component
	 *
	 * @property {Ember.Array} attributeBindings
	 */
	initialize: function(argument) {
		let display = this.get('display');
		if (display) {
			this.$('').modal('show');
		} else {
			this.$('').modal('hide');
		}
	}.on('didInsertElement'),
});
