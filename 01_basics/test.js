const accountId = 144553
let accountEmail = "gopal@google.com"
var accountPassword = "12345" 
accountCity = "Balasore"
let accountState;
// accountId = 2 // this type of writing without declaring not allowed.

/* 
Prefer not to use -- 'var'
bcz of issue in block scope and functional scope.
*/


accountEmail = "gm@gm.com"
accountPassword = "1122334455"
accountCity = "Bengaluru"



console.table( [accountId, accountEmail, accountPassword, accountCity, accountState] );





