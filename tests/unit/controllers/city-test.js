import { module, test } from 'qunit';
import { setupTest } from 'test-routes/tests/helpers';

module('Unit | Controller | city', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:city');
    assert.ok(controller);
  });
});
