//specify-only-the-lower-number-of-matches

let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Change this line
let result = haRegex.test(haStr);