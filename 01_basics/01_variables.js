const accountId = 12369
let accountEmail = "sopnobaz2023@gmail.com"
var accountPassword = "12467"
accountCity = "kashimpur"
let accountState

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "rajshahi"

console.log('accountId');

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])