
var request = require('request');

$.ajax({
  url:'https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyAp1Fy5P0dV-AQFOr0_AmRtsSCkYAkmyXo',
  success: function(json){

			var htmlcontent = "";
			//for (i = 0; i < json.items.length; i++) 		
      		//{
      		var bookJSONData = {
			    "key": "AIzaSyAp1Fy5P0dV-AQFOr0_AmRtsSCkYAkmyXo",
			    "source": "book",
			    "style": "mla7",
			    "book": {
			    },
			    "pubtype": {
			        "main": "pubnonperiodical"
			    },
			    "pubnonperiodical": {
			        "title": json.volumeInfo.title,
			        "publisher": json.volumeInfo.publisher,
			       // "city": "Boston",
			        "year": json.volumeInfo.publishedDate
			    },
			    "contributors": [
			        {
			            "function": "author",
			            "first": json.volumeInfo.authors[0].split(" ")[0],
			            //"middle": json.volumeInfo.authors[0].split(" ")[0],
			            "last": json.volumeInfo.authors[0].split(" ")[1]
			        }
			    ]
			}
			console.log('' + JSON.stringify(bookJSONData) + '');
			console.log('https://api.citation-api.com/2.1/rest/cite --request POST --data \'' + JSON.stringify(bookJSONData) + '\'');
			console.log(getJSONData('https://api.citation-api.com/2.1/rest/cite --request POST --data ' + JSON.stringify(bookJSONData) + ''));
       			


			var dataString = '{"key":"AIzaSyAp1Fy5P0dV-AQFOr0_AmRtsSCkYAkmyXo","source":"book","style":"mla7","book":{},"pubtype":{"main":"pubnonperiodical"},"pubnonperiodical":{"title":"The Google Story","publisher":"Random House Publishing Group","year":"2005-11-15"},"contributors":[{"function":"author","first":"David","last":"A."}]}';

			var options = {
			    url: 'https://api.citation-api.com/2.1/rest/cite',
			    method: 'POST',
			    body: dataString
			};

			function callback(error, response, body) {
			    if (!error && response.statusCode == 200) {
			        console.log(body);
			    }
			}

			request(options, callback);

       		htmlcontent += "<li>Title: " + json.volumeInfo.title + "&nbsp Author: " + json.volumeInfo.authors[0] + "&nbsp Publisher:" + json.volumeInfo.publisher +  "&nbsp Published Date:" + json.volumeInfo.publishedDate +  "<br>" ;
      		
      		//}
			document.getElementById("books").innerHTML = "<ul>" + htmlcontent + "</ul><br>";
  
		
       
		}
  
});

function getJSONData(url) {
	$.getJSON(url, function(data) {
		return data;
	});
}