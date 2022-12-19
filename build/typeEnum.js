"use strict";
// Enum
// Numeric Enum
// enum Month {
//     Jan = 1,
//     Feb,
//     Mar,
//     Apr,
//     May
// }
// console.log(Month)
// String Enum
var Month;
(function (Month) {
    Month["Jan"] = "Januari";
    Month["Feb"] = "Februari";
    Month["Mar"] = "Maret";
    Month["Apr"] = "April";
    Month["May"] = "Mei";
})(Month || (Month = {}));
console.log(Month.May);
