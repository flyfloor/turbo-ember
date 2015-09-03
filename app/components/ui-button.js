import Ember from 'ember';

export default Ember.Component.extend({
    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "button"
     */
    tagName: 'button',
    
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'ui', 'button'],

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
    classNameBindings: ['theme', 'color', 'size'],
    theme: '',
    color: '',
    size: '',

    /**
     * Attribute bindings for the button component
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: ['href']
});
