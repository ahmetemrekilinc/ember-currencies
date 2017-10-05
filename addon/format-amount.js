import {currenciesObject} from './currencies';
import Ember from 'ember';

export function formatMoneyAmount(amount, digitSeparator, decimalSeparator, currencyPlacement, symbol, smallestUnitRatio, currencyHidden){

  let amountFinal = amount / smallestUnitRatio;
  let powerOfTen = Math.log(smallestUnitRatio) * Math.LOG10E;

  amountFinal = amountFinal.toLocaleString("en-US", {minimumFractionDigits: powerOfTen});
  amountFinal = amountFinal.replace(".", "_");
  amountFinal = amountFinal.replace(",", digitSeparator);
  amountFinal = amountFinal.replace("_", decimalSeparator);
  let result = "";

  if(currencyHidden){
    result = amountFinal;
  }
  else if(currencyPlacement === 's'){
    result = amountFinal + symbol;
  }
  else{
    result = symbol + amountFinal;
  }
  return result;
}

export function formatMoneyAmountByCurrency(amount, currencyValue, currencyHidden){

  let currency = currenciesObject[currencyValue];

  if(Ember.isBlank(currency)){
      Ember.assert("undefined currency : " + currencyValue);
  }

  let currencyPlacement = currency.currencyPlacement;
  let digitSeparator = currency.digitSeparator;
  let decimalSeparator = currency.decimalSeparator;
  let symbol = currency.symbol;
  let smallestUnitRatio = currency.smallestUnitRatio;

  return formatMoneyAmount(amount, digitSeparator, decimalSeparator, currencyPlacement, symbol, smallestUnitRatio, currencyHidden);
}
