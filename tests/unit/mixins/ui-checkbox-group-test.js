import Ember from 'ember';
import UiCheckboxGroupMixin from '../../../mixins/ui-checkbox-group';
import { module, test } from 'qunit';

module('Unit | Mixin | ui checkbox group');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiCheckboxGroupObject = Ember.Object.extend(UiCheckboxGroupMixin);
  var subject = UiCheckboxGroupObject.create();
  assert.ok(subject);
});
