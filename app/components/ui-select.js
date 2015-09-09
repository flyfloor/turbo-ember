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
	valuePath: 'value',
	namePath: 'name',
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

		// console.log(`old value ${this.get('value')}`)

		let [optionsVal, selectedVal, $select, namePath, valuePath] = [
			this.get('options'), 
			this.get('value'),
			this.$('select'),
			this.get('namePath'),
			this.get('valuePath'),
		];

		// if remote
		if (this.get('api')) config.apiSettings = { url: this.get('api') };
		
		// init select option
		if (optionsVal) {
			let optionsDom = '';
			Ember.$.each(optionsVal, function(_, item) {
				let selected = '';
				let	option = '<option value="'+item[valuePath]+'" selected="'+selected+'" >'+item[namePath]+'</option>';
				if(selectedVal===item[valuePath]){
					selected = 'selected';
				}

				optionsDom += option;
			});

			$select.append(optionsDom);
		}

		
		// expose value
		$select.change(Ember.run.bind(this, function() {
			this.set('value', $select.val() || '');
		}));

		// dropdown init
    	$select.dropdown(config);

	}.on('didInsertElement')
});
