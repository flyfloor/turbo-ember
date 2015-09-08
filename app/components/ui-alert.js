import Ember from 'ember';

export default Ember.Component.extend({
	/**
	 * The root component element
	 *
	 * @property {Ember.String} tagName
	 * @default  "button"
	 */
	tagName: 'div',
	type: 'info',
	theme: '',
	color: '',
	size: '',
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 */
	classNames: ['ui', 'message'],

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
	click: function() {
	    this.sendAction();
	},

	/**
	 * Class bindings for the button component
	 *
	 * @property {Ember.Array} classNameBindings
	 */
	classNameBindings: ['theme', 'color', 'size', 'type'],

	/**
	 * Attribute bindings for the button component
	 *
	 * @property {Ember.Array} attributeBindings
	 */
	initialize: function(argument) {
		this.$('.close').on('click', function() {
		    $(this).closest('.message').transition('fade');
		})
	}.on('didInsertElement')
});
