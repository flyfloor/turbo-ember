import Ember from 'ember';

export default Ember.Controller.extend({
    checkvalue: [],
    checkvalue2: ['google', 'apple'],
    checkvalueObserver: Ember.observer('checkvalue', function() {
        // body...
    }),
    options: [
        {'name':'google', 'value':'google'},
        {'name':'apple', 'value':'apple'},
        {'name':'dropbox', 'value':'dropbox'},
    ],
});
