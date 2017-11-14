//npm key list
var keysModule = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var movie = require('request');
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

	client.get("statuses/user_timeline",{count: 20}, function(err, tweets, response){
		//For loop with display the 20 tweets in order. 
		for(var i = 0; i < tweets.length; i++){
			console.log(tweets[i].text);
			//Display tweet creation time. Used API reference data documentation developer.twitter.com
			console.log(tweets[i].created_at);
		}
		
		//console.log(JSON.stringify(response));
	})

	}

	//Spotify section
function spotifyCode(){
	//Spotify client ID
	var spotify = new Spotify({
  		id: 'cd9c9a827c754023bd878687a142f873',
 		secret: 'b001ac02fe7541a9851819b2fe3db4da'
	});

		spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);

		    console.log("items");
		  }
 			//print to the screen
			console.log(JSON.stringify(data.tracks.items[0],null,4)); 

			console.log("artist:", data.tracks.items[0].artists[0].name);
	});

	}

	function movieCode(){

		var endPoint = "http://www.omdbapi.com/?apikey=3a5bd76c&type=movie&s="+ argument;


	
		movie(endPoint, function (err, response, body) {
	  		if (err) {
		    	return console.log('Error occurred: ' + err);
		}
	
	  
	  var movieData = JSON.parse(body);
	  console.log(movieData);
	  console.log(movieData.Search[0]);
	  //console.log('body:', body); // Print the HTML for the Google homepage.
	});
	}

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


