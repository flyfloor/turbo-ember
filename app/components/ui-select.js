import Ember from 'ember';

export default Ember.Component.extend({
	/**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * value  for the checkbox radio group component
     *
     * @property {Ember.String} value
     */
    value: '',

    /**
     * name for the checkbox radio group component
     *
     * @property {Ember.String} name
     */
    name: '',

    /**
     *  label for the checkbox radio group component
     *
     * @property {Ember.String} label
     */
    label: '',

    /**
     * name key for option
     *
     * @property {Ember.String} namePath
     */
    namePath: 'name',

    /**
     * value key for option
     *
     * @property {Ember.String} valuePath
     */
    valuePath: 'value',
	
	/**
     * if allow empty option
     *
     * @property {Ember.String} allowBlank
     */
	allowBlank: true,

	/**
     * placeHolder for blank option
     *
     * @property {Ember.String} placeHolder
     */
	placeHolder: '',
	
	/**
     * if allow search option
     *
     * @property {Ember.String} allowSearch
     */
	allowSearch: true,
	
	/**
     * options for the checkbox component
     *
     * @property {Ember.Array} options
     */
	options: [],

	/**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
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
	 		allowSearch = this.get('allowSearch'),
	 		placeHolder = this.get('placeHolder');

	 	this.$().empty();
	 	// init select option
	 	let selectDom = '';
	 	let search = allowSearch ? 'search' : '';
	 	// init lable
	 	if(label){
	 		selectDom += '<label>'+label+'</label>';
	 	}
	 	// init select
		selectDom += '<select class="ui '+ search +' dropdown ">';
		// init blank
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
    		onChange: function(value, text, $choice){
    			that.set('value', value);
    		}
    	});
	 }.observes('options')
});
