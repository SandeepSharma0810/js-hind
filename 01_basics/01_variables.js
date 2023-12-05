const accountId = 144553
let accountEmail = "sandeep@google.com"
var accountpassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed
/* Prefer not to use var because of issue in block scope and functional scope
*/
accountEmail = "ss@ss.com"
accountpassword = "12345"
accountCity = "Bengaluru"
console.log(accountEmail);
console.table([accountId, accountEmail, accountpassword, accountCity, accountState])
