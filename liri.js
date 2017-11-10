//make sure to save npm --save 
var keysModule = require("./keys.js");
// npm keys
var Twitter = require('twitter');
var fs = require("fs");

// variable commands
var command = process.argv[2]; 
var argument = process.argv[3];

runLiri();



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
}

	function twitterCode(){
		console.log("running twitter code");

	}

	function spotifyCode(){

		if(argument === undefined)
		{
			argument = "The Sign";
		}

		console.log("running spot code");


	}

	function movieCode(){
		if(argument === undefined)
		{
			argument = "Mr. Nobody";
		}

		console.log("running movie code", " movie:", argument);

	}

	function doWhat(){

		fs.readFile("random.txt", "utf8", function(err, data){
			console.log(data);

			var data = "spotify-this-song,I Want it That Way";

			var arr = data.split(",");


			command = arr[0];
			arrgument = arr[1];

			runLiri();

	});

}


