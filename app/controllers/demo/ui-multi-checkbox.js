import Ember from 'ember';

export default Ember.Controller.extend({
     /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "input"
     */
    tagName: 'div',
    
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'ui', 'checkbox'],

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
    classNameBindings: ['theme'],
    theme: '',

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.String} attributeBindings
     */
    value: null,

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.String} attributeBindings
     */
    name: null,

    initialize: function(argument) {
        this.$().checkbox();
        var value = this.get('value');
        if(value){
            this.$().find("input").attr("checked", "checked");
        }else {
            this.$().find("input").removeAttr("checked", "");
        }

        this.$('input').change(Ember.run.bind(this, function() {
            this.set('value', this.$('input:checked').val());
        }));

    }.on('didInsertElement')
});
