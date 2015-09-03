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
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'disabled' ],
    checked: false,

    /**
     * Class bindings for the button component
     *
     * @property {Ember.Array} classNameBindings
     */
    initialize: function(argument) {
        this.$().checkbox();
        var checked = this.get('checked');
        if(checked===true){
            this.$().find("input").attr("checked", "checked");
        }else {
            this.$().find("input").removeAttr("checked", "");
        }
    }.on('didInsertElement')
});
