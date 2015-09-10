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
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    value: [],

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    name: null,

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [],

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    label: '',

    /**
     * Class names to apply to the checkbox
     *
     * @property {Ember.Array} classNames
     */
    classNames: [],

    /**
     * Class bindings for the checkbox component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: ['theme'],
    theme: 'grouped fields',
    
    /**
     * options for the checkbox component
     *
     * @property {Ember.Array} options
     */
    options: [],

    /**
     * options for the checkbox component
     *
     * @property {Ember.Array} options
     */
    _options: [],

    /**
     * label key for option
     *
     * @property {Ember.String} labelPath
     */
    labelPath: 'label',

    /**
     * value key for option
     *
     * @property {Ember.String} valuePath
     */
    valuePath: 'value',

    /**
     * value key for option
     *
     * @property {Ember.String} valuePath
     */
    optionTag: 'div',

    /**
     * value key for option
     *
     * @property {Ember.String} valuePath
     */
    optionTheme: 'field',

    init: function(){
        this._super();
        let _options = [];
        this.get('options').forEach(Ember.run.bind(this, function(item){
            _options.push({
                'label': item[this.get('labelPath')],
                'value': item[this.get('valuePath')],
            });
        }));
        this.set('_options', _options);
    },
    initialize: function (argument) {
        this.$('input').change(Ember.run.bind(this, function() {
            var newValue = this.$('input:checked').map(function(index, item){
                return $(item).val();
            });
            this.set('value', newValue.toArray());
        }));
        var that = this;
        this.$('input').each(function(index, item){
            if(that.get('value').indexOf($(item).val())>=0){
                $(item).prop('checked', true);
            }
        });

    }.on('didInsertElement')
});
