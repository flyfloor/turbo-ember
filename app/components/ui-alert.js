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
	icon: 'info circle',
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 */
	classNames: ['ui', 'message', 'icon'],

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
	classNameBindings: ['theme', 'color', 'size', 'type'],

	init: function(){
		this._super();
		switch (this.get('type')) {
			case 'success':
				this.set('icon', 'check circle'); 
				break;
			case 'error':
				this.set('icon', 'bug'); 
				break;
			default:
				break;
		}
	},

	/**
	 * Attribute bindings for the button component
	 *
	 * @property {Ember.Array} attributeBindings
	 */
	eventHandlers: function(argument) {
		this.$('.close').on('click', function() {
		    $(this).closest('.message').transition('fade');
		})
		
	}.on('didInsertElement'),

});
