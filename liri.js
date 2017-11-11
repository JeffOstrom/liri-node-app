//npm key list
var keysModule = require("./keys.js");
var Twitter = require('twitter');
var fs = require("fs");

//Variable commands
var command = process.argv[2]; 
var argument = process.argv[3];

runLiri();


//If the function is called using switch method 
function runLiri(){
	switch(command){
		case "my-tweets":
			twitterCode();
			break;

		case "spotify-this-song":
			spotifyCode();
			break;

		case "movie-this":
			movieCode()
			break;

		case "do-what-it-says":
			doWhat();
			break;

		default:
			console.log("please enter a Valid Command")
		}
	}//end of function

//If the "twitterCode function is called"
function twitterCode(){

	console.log("this is working");

	var client = new Twitter({
	  consumer_key: keysModule.consumer_key,
	  consumer_secret: keysModule.consumer_secret,
	  access_token_key: keysModule.access_token_key,
	  access_token_secret: keysModule.access_token_secret
	});

	client.get("statuses/mentions_timeline",{count: 20}, function(err, tweets, response){
		console.log(tweets);
		//console.log(JSON.stringify(response));
	})

	}

// 	function spotifyCode(){

// 	// 	if(argument === undefined)
// 	// 	{
// 	// 		argument = "The Sign";
// 	// 	}

// 	// 	console.log("running spot code");


// 	// }

// 	// function movieCode(){
// 	// 	if(argument === undefined)
// 	// 	{
// 	// 		argument = "Mr. Nobody";
// 	// 	}

// 	// 	console.log("running movie code", " movie:", argument);

// 	// }

// 	// function doWhat(){

// 	// 	fs.readFile("random.txt", "utf8", function(err, data){
// 	// 		console.log(data);

// 	// 		var data = "spotify-this-song,I Want it That Way";

// 	// 		var arr = data.split(",");


// 	// 		command = arr[0];
// 	// 		arrgument = arr[1];

// 	// 		runLiri();

// 	// });

// }


