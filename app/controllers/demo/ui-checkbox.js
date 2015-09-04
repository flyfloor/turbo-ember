import Ember from 'ember';

export default Ember.Controller.extend({
    checkboxValue: 'on',
    checkboxValueObserver: Ember.observer('checkboxValue', function() {
        // body...
        console.log(this.get('checkboxValue'));
    }),
    google: 'on',
    apple: 'on',
    dropBox: 'on'
});
