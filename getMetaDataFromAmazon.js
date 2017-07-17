
$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("demo_ajax_json.js", function(result){
            
        });
    });
});

$("button").click(function(){
    $.getJSON("demo_ajax_json.js", function(result){
    	var testAmazonUrl = "https://www.amazon.com/Tahiti-Ora-English-Tumata-Robinson/dp/1519274629/ref=sr_1_2?s=books&ie=UTF8&qid=1500229654&sr=1-2&refinements=p_27%3AAPI";
        var regex = '<li><b>Publisher:</b>'(.*?)'milk</li>';
		var publisherString = data.match(regex)[1];
		var datePublished = publisherString.split('(')[1];
		var publisher = publisherString.split('(')[0];

		var titleRegex = '<title>'(.*?)'Amazon.com: Books</title>';
		var title = data.match(titleRegex)[1];

    });
});

/*$.ajax({ 
		url: testAmazonUrl, dataType: 'JSONP',
        jsonpCallback: 'callbackFnc',
        type: 'GET',
        async: false,
        crossDomain: true,
        success: function(data) { 
		alert(data); 
		
} });*/

