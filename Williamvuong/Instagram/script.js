var instagramUrl ='';
var loading = false;

function successCallback(response) {
	var photosElement = document.getElementById('photos');
	console.log('loaded');
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

	instagramUrl= response.pagination.next_url;
	loading=false;

}

$(document).ready(function() {
	instagramUrl = 'https://api.instagram.com/v1/tags/hashtag/media/recent?client_id=bac7c8429bc540dca017e5701cc600aa';
	$('#next-page').click(function() {
		console.log('loading');
		if (loading) return;
		loading = true;
		
		var options = {
			type: 'GET',
			dataType:'jsonp',
			url:instagramUrl,
			success: successCallback,
		}

		$.ajax(options);

		return false;

	});

	$('#next-page').trigger('click');
});

$(window).scroll(function() {
	var windowY = window.innerHeight + document.body.scrollTop;
	var contentY = $('photos').height() + $('#photos').offset().top;
	var threshold =100;
	if (windowY >contentY - threshold) {
		$('#next-page').trigger('click');
	}	

})
