// Write code that will go through each number from 1 to 100 and:

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally




for(var i=1; i<=100; i++){
    if (i % 15 == 0) {
        console.log("Fizzbuzz");
    } else if (i % 5 == 0) {
        console.log("Bizz");
    } else if(i % 3 == 0){
        console.log("Fizz");
    } else {
    console.log(i);
    }
}

// when writing if else staments, we need the most specific statment first.  If we put i % 3 before i % 15 it will never print "Fizzbuzz"  
// because the first if statment is true so the program doesnt continue the if else statments. 