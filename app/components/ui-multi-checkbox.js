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

});
