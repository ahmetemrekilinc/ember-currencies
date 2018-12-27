ember-currencies-and-format-money
==============================================================================

ember-currencies-and-format-money is an addon that enables you format money amounts in your Ember.js application.

Installation
------------------------------------------------------------------------------

```
cd your-project-directory
ember install ember-currencies-and-format-money
```

Usage
------------------------------------------------------------------------------

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
