import Ember from 'ember';
import area from '../../mixins/area';
import province from '../../mixins/province';
import city from '../../mixins/city';


export default Ember.Controller.extend({
    value1: '',
    value2: '',
    value3: '',
    options1: province,
    options2: function (argument) {
        return []
    }.property('value1'),
    options3: function (argument) {
        return []
    }.property('value1')
});
