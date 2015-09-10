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
	label: '',
	allowBlank: true,
	allowAdditions: false,
	search: 'search',
	placeHolder: '',
	valuePath: 'value',
	namePath: 'name',
	options: [],
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
		this.setupOptions();
	}.on('didInsertElement'),

	/**
	 * Class bindings for the button component
	 *
	 * @property {Ember.Array} classNameBindings
	*/
	setupOptions: function(){
	 	let options = this.get('options'), 
	 		valuePath = this.get('valuePath'),
	 		namePath = this.get('namePath'),
	 		selectedVal = this.get('value'),
	 		label = this.get('label'),
	 		allowBlank = this.get('allowBlank'),
	 		placeHolder = this.get('placeHolder'),
	 		search = this.get('search');

	 	this.$().empty();
	 	
	 	// init select option
	 	let selectDom = '';
	 	if(label){
	 		selectDom += '<label>'+label+'</label>';
	 	}
		selectDom += '<select class="ui dropdown '+search+'">';
		if (allowBlank){
			selectDom += '<option value="">'+placeHolder+'</option>';
		}

		if (options) {
			options.forEach(function(item){
				let selected = '';
				if(selectedVal===item[valuePath]){
					selected = 'selected="selected"';
				}
				let	option = '<option value="'+item[valuePath]+'"'+selected+'>'+item[namePath]+'</option>';
				selectDom += option;
			});
		}
		selectDom += '</select>';
		this.$().append(selectDom);

		let that = this;
    	this.$('select').dropdown({
    		maxSelections: that.get('maxSelections') || 5,
			allowAdditions: that.get('allowAdditions'),
    		onChange: function(value, text, $choice){
    			that.set('value', value);
    		}
    	});
	 }.observes('options')
});
