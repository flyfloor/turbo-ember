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
	label: 'single select',
	allowBlank: true,
	allowAdditions: false,
	search: 'search',
	placeHolder: 'type something...',
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
		this.$('select').change(Ember.run.bind(this, function() {
			this.set('value', this.$('select').val() || '');
		}));

		// dropdown init
    this.$('select').dropdown(config)

	}.on('didInsertElement')
});
