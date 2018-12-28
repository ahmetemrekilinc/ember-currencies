import { module, test } from 'qunit';
import { formatMoney } from 'ember-currencies-and-format-money/helpers/format-money';

module('unit: helper: format-money');

test('it works on different currencies', function(assert) {
  let result = formatMoney([{amount: 100, currency: 'TRY'}]);
  assert.equal(result, '1,00₺');
  result = formatMoney([{amount: 142524, currency: 'TRY'}]);
  assert.equal(result, '1.425,24₺');
  result = formatMoney([{amount: 142524, currency: 'USD'}]);
  assert.equal(result, '$1,425.24');
});

test('defaultCurrency (TRY) works', function(assert) {
  let result = formatMoney([{amount: 21524}]);
  assert.equal(result, '215,24₺');
});

test('currencyHidden works', function(assert) {
  let result = formatMoney([{amount: 142524, currency: 'USD'}], {'currencyHidden':true});
  assert.equal(result, '1,425.24');
});
