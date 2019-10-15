//restrict-possible-usernames

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; // Change this line
let result = userCheck.test(username);