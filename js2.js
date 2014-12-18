$(document).ready(function () {
    var ans = prompt("Put in a number");

for (var n = 1; n <= +ans; n++) {
    var mesg = n;
    if (n % 15 == 0) {
        mesg = "fizzbuzz";
    }
    else if (n % 3 == 0) {
        mesg = "fizz";
    }
    else if (n % 5 == 0) {
        mesg = "buzz";
    }
    
    $("ul").append("<li>" + mesg + "</li>");
}
});