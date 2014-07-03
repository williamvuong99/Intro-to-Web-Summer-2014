var wonders = [
	{name:'Great Pyramid of Giza', img:'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/1280px-Kheops-Pyramid.jpg'},
	{name:'Hanging Gardens of Babylon',img:'http://upload.wikimedia.org/wikipedia/commons/a/ae/Hanging_Gardens_of_Babylon.jpg'},
	{name:'Temple of Artemis at Ephesus', img:'http://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miniaturk_009.jpg/800px-Miniaturk_009.jpg'},
	{name:'Statue of Zeus at Olympia'},
	{name:'Mausoleum at Halicarnassus'},
	{name:'Colossus of Rhodes'},
	{name:'Lighthouse of Alexandria'},
];

wonders.forEach(function(wonder) {
	document.body.innerHTML += '<h2>'+ wonder.name + '</h2>' + '<img src="' + wonder.img + '"/>'
});
