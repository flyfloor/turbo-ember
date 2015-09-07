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
    value: '',

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    name: null,

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    style: '',

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    inlineDisplay: false,

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: ['style'],

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
    classNameBindings: ['inlineDisplayClass', 'theme'],
    theme: '',

    /**
     * Class string for the internal input element
     *
     * @function inputClass
     * @returns  {string}
     */
    inlineDisplayClass: function (argument) {
        if(this.get('inlineDisplay')){
            return 'inline fields';
        }else {
            return '';
        }
    }.property(),

    /**
     * Class bindings for the checkbox component
     *
     * @property {Ember.Array} classNameBindings
     */
    options: [],
    initialize: function (argument) {
        var name = this.get('name');
        this.$('input').change(Ember.run.bind(this, function() {
            this.set('value', this.$('input:checked').val());
        }));

        var that = this;
        this.$('input').each(function(index, item){
            if(that.get('value') && that.get('value')===$(item).val()){
                $(item).prop('checked', true);
            }
            $(item).attr('name', name);
        });

    }.on('didInsertElement')
});
