//Once you complete a problem, open up Chrome and check the answer in the console.



//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
var name = 'Ryan';
var isRyan = function(name){
	if(name === 'Ryan'){
		return true;
	} else {
		return false;
	}
}
console.log(isRyan(name));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
var name = prompt("what is your name bitc?");
var getName = function(){
	return name; 
}
console.log(name);


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function(){
	alert('Welcome ' + getName(name));
}
welcome(getName);


//Next problem




//What is the difference between arguments and parameters?

 // the parameters are the aliases for the values of that will be passed to the function. The arguments are the actual values. 
var foo = function( a, b, c ) {

}; // a, b, and c are the parameters

foo( 1, 2, 3 ); 

// 1, 2, and 3 are the arguments


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here



//Next Problem



//Create a function called myName that returns your name

  //Code Here

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
