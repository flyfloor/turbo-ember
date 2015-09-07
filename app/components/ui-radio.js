import Ember from 'ember';

export default Ember.Component.extend({

    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "input"
     */
    tagName: 'div',
    
    /**
     * Class names to apply to the checkbox
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'ui', 'radio', 'checkbox'],

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
     * Class bindings for the checkbox component
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: ['theme'],
    theme: '',

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    value: null,

    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    checked: false,
    /**
     * Attribute bindings for the checkbox component
     *
     * @property {Ember.String} attributeBindings
     */
    name: null,

    initialize: function(argument) {
        this.$().checkbox();
        var name = this.get('name'), 
            input = this.$('input'),
            value = this.get('value'),
            checked = this.get('checked');
            
        input.prop('checked', checked);
        input.attr('name', name);
        input.val(value);
        this.$('input').change(Ember.run.bind(this, function() {
            this.set('checked', this.$('input').is(':checked'));
        }));

    }.on('didInsertElement')

});
