var options = {
	type: 'GET',
	dataType:'jsonp',
	url:'https://api.instagram.com/v1/tags/pizza/media/recent?access_token=1406234490.f59def8.4a32b6d055a64549984b1c817ab90c51',
	success: successCallback,
}

function runmsg(msg){
	alert(msg);
}

function successCallback(response) {
	var photosElement = document.getElementById('photos');
	console.log(response);
	response.data.forEach(function(photo) {
		console.log(photo);
		var html ='';
		html += '<a class="col-md-3 photo" href="' + photo.link + '">';
		html +='<img src="';
		html += photo.images.standard_resolution.url;
		html += '">';
		html += '</a>';
		photosElement.innerHTML +=html;
	});
}

$.ajax(options);
runmsg('hello');
