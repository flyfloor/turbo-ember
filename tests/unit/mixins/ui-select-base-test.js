import Ember from 'ember';
import UiSelectBaseMixin from '../../../mixins/ui-select-base';
import { module, test } from 'qunit';

module('Unit | Mixin | ui select base');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiSelectBaseObject = Ember.Object.extend(UiSelectBaseMixin);
  var subject = UiSelectBaseObject.create();
  assert.ok(subject);
});
