import Ember from 'ember';

export default Ember.Component.extend({
	/**
	 * The root component element
	 *
	 * @property {Ember.String} tagName
	 * @default  "button"
	 */
	tagName: 'div',
	value: '',
	label: '下拉选择',
	allowBlank: true,
	allowAdditions: false,
	placeHolder: '下拉选择...',
	/**
	 * Class names to apply to the button
	 *
	 * @property {Ember.Array} classNames
	 */
	classNames: ['field'],

	// -------------------------------------------------------------------------
	// Actions

	// -------------------------------------------------------------------------
	// Events

	/**
	 * Class bindings for the button component
	 *
	 * @property {Ember.Array} classNameBindings
	 */
	// classNameBindings: ['theme', 'color', 'size'],
	// theme: '',
	// color: '',

	/**
	 * Attribute bindings for the button component
	 *
	 * @property {Ember.Array} attributeBindings
	 */

	initialize: function (argument) {
		let config = {
			maxSelections: this.get('maxSelections') || 5,
			allowAdditions: this.get('allowAdditions'),
		}

		console.log(`old value ${this.get('value')}`)

		let [optionsVal, selectedVal] = [this.get('options'), this.get('value')];
		
		// if remote
		if (this.get('api')) config.apiSettings = { url: this.get('api') };
		
		// init select option
		if (optionsVal) {
			let $optionsDom = this.$('option');
			for (let i = 0; i < $optionsDom.length; i ++) 
				if (selectedVal === this.$('option').eq(i).val()) {
					this.$('option').eq(i).attr('selected', 'selected');
					break;
				}
		}

		
		// expose value
		this.$().change(Ember.run.bind(this, function() {
		  this.set('value', this.$().val());
		  console.log(`new value ${this.get('value')}`)
		}));

		// dropdown init
    $('select.ui.search.dropdown').dropdown(config)

	}.on('didInsertElement')
});
