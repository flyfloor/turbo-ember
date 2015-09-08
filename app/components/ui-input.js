import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	type: 'text',
	fluid: '',
	label: 'text input',
	icon: '',
	theme: '',
	color: '',
	size: '',
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
	classNameBindings: ['theme', 'color', 'size'],

	/**
	 * Attribute bindings for the button component
	 *
	 * @property {Ember.Array} attributeBindings
	 */
	initialize: function(argument) {
		
	}.on('didInsertElement'),
});
