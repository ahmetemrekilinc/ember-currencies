import { helper } from '@ember/component/helper';
import { isBlank } from '@ember/utils';
import { formatMoneyAmountByCurrency } from 'ember-currencies-and-format-money/format-amount';

const DEFAULT_CURRENCY = 'TRY';

export function formatMoney(params, namedArgs) {
  let moneyValue = params[0];

  if(isBlank(moneyValue)){
    return undefined;
  }

  let currencyHidden = null;
  if(namedArgs){
    currencyHidden = namedArgs.currencyHidden;
  }

  let amount = moneyValue.amount;
  let currencyValue = moneyValue.currency;

  if(isBlank(currencyValue)){
    currencyValue = DEFAULT_CURRENCY;
  }

  let amountFormatted = formatMoneyAmountByCurrency(amount, currencyValue, currencyHidden);

  return amountFormatted;
}

export default helper(formatMoney);
