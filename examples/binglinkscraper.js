var casper = require('casper').create({
	verbose: true,
	logLevel: 'error'
})

var links = []; 

function getLinks(){
	var links = document.querySelectorAll('.b_algo a')
	  
	return Array.protoype.map.call(links, function(e){
	  return e.getAttribute('href'); 
	});
}


casper.start('http://bing.com', function(){
	this.fill('form[action="/search"]', {
		q: 'democratic primary 2016'
	}, true);
}); 

casper.then(function(){
	links = this.evaluate(getLinks);

	this.fill('form[action="/search"]', { 
		q: 'republican primary 2016'
	}, true);
}); 

casper.then(function(){
	links = links.concat(this.evaluate(getLinks));
}); 

casper.run(function(){
		this.echo(links.length + 'links total found:')
});