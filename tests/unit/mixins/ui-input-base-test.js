import Ember from 'ember';
import UiInputBaseMixin from '../../../mixins/ui-input-base';
import { module, test } from 'qunit';

module('Unit | Mixin | ui input base');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiInputBaseObject = Ember.Object.extend(UiInputBaseMixin);
  var subject = UiInputBaseObject.create();
  assert.ok(subject);
});
