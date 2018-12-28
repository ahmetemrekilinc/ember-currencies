ember-currencies-and-format-money
==============================================================================

[![npm version](https://badge.fury.io/js/ember-currencies-and-format-money.svg)](https://badge.fury.io/js/ember-currencies-and-format-money.svg)
[![Build Status](https://travis-ci.org/ahmetemrekilinc/ember-currencies.svg?branch=master)](https://travis-ci.org/ahmetemrekilinc/ember-currencies.svg?branch=master)
[![Ember Observer Score](https://emberobserver.com/badges/ember-currencies-and-format-money.svg)](https://emberobserver.com/badges/ember-currencies-and-format-money.svg)
[![Dependency Status](https://david-dm.org/ahmetemrekilinc/ember-currencies.svg)](https://david-dm.org/ahmetemrekilinc/ember-currencies.svg)
[![devDependency Status](https://david-dm.org/ahmetemrekilinc/ember-currencies/dev-status.svg)](https://david-dm.org/ahmetemrekilinc/ember-currencies/dev-status.svg)
[![Code Climate](https://codeclimate.com/github/ahmetemrekilinc/ember-currencies/badges/gpa.svg)](https://codeclimate.com/github/ahmetemrekilinc/ember-currencies/badges/gpa.svg)

ember-currencies-and-format-money is an addon that enables you format money amounts in your Ember.js application.

Installation
------------------------------------------------------------------------------

```
cd your-project-directory
ember install ember-currencies-and-format-money
```

Usage
------------------------------------------------------------------------------
You can use `format-money` helper in your `hbs` files by passing a parameter money object with attributes `amount` and `currency`. If `currency` is not set, then `TRY` is default currency.
```hbs
{{format-money (hash amount=1000 currency='USD') }}
```

By default currency is visible. If you want to hide currency, you can set `currencyHidden=true` parameter.
```hbs
{{format-money (hash amount=1000 currency='USD') currencyHidden=true }}
```

You can import `formatMoneyAmountByCurrency` function and use it by passing `amount`, `currencyValue` and `currencyHidden` parameters.
```js
import { formatMoneyAmountByCurrency } from 'ember-currencies-and-format-money/format-amount';

let amount = 1550;
let currencyValue = 'USD';
let currencyHidden = false;
let result = formatMoneyAmountByCurrency(amount, currencyValue, currencyHidden);
console.log(result); // $15.50
```

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
