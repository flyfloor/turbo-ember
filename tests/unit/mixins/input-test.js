import Ember from 'ember';
import InputMixin from '../../../mixins/input';
import { module, test } from 'qunit';

module('Unit | Mixin | input');

// Replace this with your real tests.
test('it works', function(assert) {
  var InputObject = Ember.Object.extend(InputMixin);
  var subject = InputObject.create();
  assert.ok(subject);
});
