const accountId = 151351
let accounEmail ="amit@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState

//  accountId = 2 // not allowed

accounEmail = "am@am.com"
accountPassword = "432322"
accountCity = "Lucknow"

/*

Prefer not to ue var 
because of issue in block scope and functional scope

*/


console.table([accounEmail , accountId , accountPassword, accountCity, accountState]);
