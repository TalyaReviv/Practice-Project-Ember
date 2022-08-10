import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-routes/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import {formatDate} from 'test-routes/helpers/format-date';

module('Integration | Helper | formatDate', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{format-date this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });

  test('formatDate works', function(assert) {
    // const date = new Date(1660107600 * 1000);
    // let formattedDate = date.toLocaleDateString().split(',');
    const resultFormatDate=formatDate([1660107600]);
    assert.equal(resultFormatDate, '8/10/2022');
  });

});
