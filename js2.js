$(document).ready(function () {
for (var n = 1; n <= 100; n++) {
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
    
    $("p").append("<p>" + mesg + "</p>");
}
});