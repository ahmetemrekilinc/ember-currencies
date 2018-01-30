# ember-currencies-and-format-money

This README outlines the details of collaborating on this ember-currencies-and-format-money addon.

## Installation

```bash
cd your-project-directory
ember install ember-currencies-and-format-money
```

## Usage
import and usage of formatMoney

```js
import { formatMoneyAmountByCurrency } from 'ember-currencies-and-format-money/format-amount';
...
let amountFormatted = formatMoneyAmountByCurrency(amount, currencyValue, currencyHidden);
```
