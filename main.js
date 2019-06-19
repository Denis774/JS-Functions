/*Number Guessing Game*/
var i = Math.floor((Math.random() * 100) + 1); // Means that random numbers are generated and stored it in i
var randomNumber = () => {
    var i = Math.floor((Math.random() * 100) + 1); 
    var j=i%2; //gets the modulus and stores the result in j
    if (j==0) {//
        alert ( "Number is Even"); }
    else {
        alert  ("Number is odd");
    }
}
var enterNumber = () => {
    for(var count=1;count<=10;count++)
    {
        let num = prompt ("Please enter a number:"); // This is the user input
        if (num<1 || num>100)
        {
            alert ("Out of range");
        }

        if (num==i){
            alert ("You WIN!");
            break;
        }
        if (num<i){
            alert ("Number is lower, make another guess");
        }
        if (num>i){
            alert ("Number is higher,make another guess");
                }
        if (count==10){ 
            alert ("You LOSE!");}
    }
}
randomNumber();
enterNumber();
