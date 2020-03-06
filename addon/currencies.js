let TRY = {name: 'lira', acronym:'TRY', symbol: '₺', digitSeparator: '.', decimalSeparator: ',', currencyPlacement: 's', smallestUnitRatio: 100};
let USD = {name: 'dollar', acronym: 'USD', symbol: '$', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let AUD = {name: 'dollar', acronym: 'AUD', symbol: 'A$', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let DKK = {name: 'krone', acronym: 'DKK', symbol: 'Dkr', digitSeparator: '.', decimalSeparator: ',', currencyPlacement: 'p', smallestUnitRatio: 100};
let EUR = {name: 'euro', acronym: 'EUR', symbol: '€', digitSeparator: '.', decimalSeparator: ',', currencyPlacement: 's', smallestUnitRatio: 100};
let GBP = {name: 'pound', acronym: 'GBP', symbol: '£', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let CHF = {name: 'swiss franc', acronym: 'CHF', symbol: 'Fr.', digitSeparator: `'`, decimalSeparator: '.', currencyPlacement: 's', smallestUnitRatio: 100};
let SEK = {name: 'krona', acronym: 'SEK', symbol: 'Skr', digitSeparator: ' ', decimalSeparator: '.', currencyPlacement: 's', smallestUnitRatio: 100};
let CAD = {name: 'dollar', acronym: 'CAD', symbol: 'C$', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let KWD = {name: 'dinar', acronym: 'KWD', symbol: 'KWD', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 1000};
let NOK = {name: 'krone', acronym: 'NOK', symbol: 'Nkr', digitSeparator: '.', decimalSeparator: ',', currencyPlacement: 'p', smallestUnitRatio: 100};
let SAR = {name: 'riyal', acronym: 'SAR', symbol: '﷼', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let BGN = {name: 'lev', acronym: 'BGN', symbol: 'лв', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let RON = {name: 'leu', acronym: 'RON',  symbol: 'lei', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let RUB = {name: 'ruble', acronym: 'RUB',  symbol: '₽', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 's', smallestUnitRatio: 100};
let IRR = {name: 'rial', acronym: 'IRR',  symbol: '﷼', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let CNY = {name: 'yuan', acronym: 'CNY',  symbol: 'C¥', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let PKR = {name: 'rupee', acronym: 'PKR',  symbol: '₨', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let JPY = {name: 'yen', acronym: 'JPY',  symbol: 'J¥', digitSeparator: ',', decimalSeparator: '.', currencyPlacement: 'p', smallestUnitRatio: 100};
let IDR = {name: 'rupiah', acronym: 'IDR',  symbol: 'Rp', digitSeparator: '.', decimalSeparator: ',', currencyPlacement: 'p', smallestUnitRatio: 1};

let currenciesObject = {TRY: TRY, USD: USD, AUD: AUD, DKK: DKK, EUR: EUR, GBP: GBP, CHF: CHF, SEK: SEK, CAD: CAD, KWD: KWD,
  NOK: NOK, SAR: SAR, BGN: BGN, RON: RON, RUB: RUB, IRR: IRR, CNY: CNY, PKR: PKR, JPY: JPY, IDR: IDR};

let currenciesArray = Object.keys(currenciesObject).map(function(k) { return currenciesObject[k]; });

export {currenciesObject, currenciesArray};
