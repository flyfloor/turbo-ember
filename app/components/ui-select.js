import Ember from 'ember';

export default Ember.Component.extend({
	/**
	 * The root component element
	 *
	 * @property {Ember.String} tagName
	 * @default  "button"
	 */
	tagName: 'select',
	allowAdditions: false,
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 */
	classNames: [ 'ui', 'search dropdown'],

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
	// classNameBindings: ['theme', 'color', 'size'],
	// theme: '',
	// color: '',
	// size: '',

	/**
	 * Attribute bindings for the button component
	 *
	 * @property {Ember.Array} attributeBindings
	 */

	initialize: function (argument) {
	    $('.ui.search.dropdown')
	      .dropdown({
	        maxSelections: 5,
	        allowAdditions: this.get('allowAdditions'),
	      })

	}.on('didInsertElement')
});
