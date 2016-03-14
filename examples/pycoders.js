var casper = require('casper').create({
	verbose: true,
	logLevel: 'debug', 
	pageSettings: {
		loadImages: false,
		loadPlugins: false, 
		userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36',		
	},
	clientScripts: ['../vendor/jquery.js', '../vendor/lodash.js'];
});

var fs = require('fs'); 
var url = 'http://pycoders.com/archive';

var link = [];
var title = [];
var date = []; 

function getLink (){
	var link = $('campaign a'); 
	return _.map(link, function(e){
		return e.getAttribute('href'); 
	});	
}


casper.then(function(){
	link = this.evaluate(getLink);

	this.fill('form[action="/search"]', { 
		q: 'republican primary 2016'
	}, true);
}); 

casper.then(function(){
	links = links.concat(this.evaluate(getTitle));
}); 

casper.then(function(){
	links = links.concat(this.evaluate(getDate));
}); 

casper.run(function(){
		this.echo(link.length + 'links total found:');
		this.echo('-' + link.join('\n - '));
		this.echo('-' + title.join('\n - '));
		this.echo('-' + date).exit(); 

});