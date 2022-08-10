import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-routes/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { temperature} from 'test-routes/helpers/temperature';

module('Integration | Helper | temperature', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{temperature this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });

  test('temperature works', function(assert) {
    const resultTemperature = temperature([48, 64]);

    assert.equal(resultTemperature, ` 8° - 17°`);
    });
    
});
