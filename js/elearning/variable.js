const accountId = "tc@tc.com"
let accountEmail = "trupti@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

accountEmail = "tr@tr.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in bock scope and functional scope 
*/

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);