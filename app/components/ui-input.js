import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	type: 'text',
	fluid: 'fluid',
	label: 'text input',
	icon: '',
	size: '',
	theme: '',
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 */
	classNames: ['ui', 'field'],

	// -------------------------------------------------------------------------
	// Actions

	// -------------------------------------------------------------------------
	// Events

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
	classNameBindings: ['theme'],

	/**
	 * Attribute bindings for the button component
	 *
	 * @property {Ember.Array} attributeBindings
	 */
	initialize: function(argument) {
		
	}.on('didInsertElement'),
});
