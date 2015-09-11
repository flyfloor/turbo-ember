import Ember from 'ember';
import UiCheckboxBaseMixin from '../../../mixins/ui-checkbox-base';
import { module, test } from 'qunit';

module('Unit | Mixin | ui checkbox base');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiCheckboxBaseObject = Ember.Object.extend(UiCheckboxBaseMixin);
  var subject = UiCheckboxBaseObject.create();
  assert.ok(subject);
});
