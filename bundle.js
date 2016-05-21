(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//the about and contact model content
var aboutContent = require('./models/about');
var contactContent = require('./models/contact');

//the home view
var Home = require('./views/homeView');

//the post view
var Post = require('./views/postView');

//the sidebar view
var Sidebar = require('./views/sidebarView');
//render the about sidebar
var about = new Sidebar({el: '#about'});
about.render(aboutContent);
//render the contact sidebar
var contact = new Sidebar({el: '#contact'});
contact.render(contactContent);

//the routes
var Routes = require('./routes/routes');
//init the routes
var router = new Routes();
Backbone.history.start();


},{"./models/about":2,"./models/contact":3,"./routes/routes":5,"./views/homeView":6,"./views/postView":7,"./views/sidebarView":8}],2:[function(require,module,exports){


module.exports = "<h1>About</h1><p><img src='public/images/franco-finn.jpg' alt='Franco Finn'>Franco has been captivating audiences of all ages at many live events and concerts. His off-the wall character brings him lots of attention everywhere he goes. He can improvise like no other and anything goes. The nickname <b><i>'Freestyle' Franco</i></b> fits him appropriately. His carefree, can-do attitude and electric charm are what people are most drawn to. His energy is outrageous. His out-going personality and positive attitude are contagious!</p><h3 class='h4'>HOSTING</h3><div><h4>Networks</h4><p>Franco is currently the host for his own segment called The FINN Zone on The Raiders Report show seen on the NFL Network / ComcastSportsnet Network. Franco was also the host for the nationally syndicated magazine-style show STIR-TV (International Channel Network / AZN Network- StirTV.com).<h4>Radio</h4><p>On the Radio, he\'s the host for KidTalk as Radio Disney\'s on-air personality <b><i>'Freestyle Franco'</i></b>.</p><p>Franco\'s other radio hostings include:</p><ul><li>fill-in sports anchor for KGO Newstalk AM 810.<li>In 2004 was the weekend on-air DJ at Hot 98.7 FM in the North Bay.</ul></div><h3 class='h4'>GOLDEN STATE WARRIORS HYPE-MAN</h3><div><p>In front of 25,000+ fans at the Oracle Arena in Oakland, Franco is the announcer, hype-man, MC and personality at all the Golden State Warriors\' home games throughout the NBA season.</p></div><h3 class='h4'>ON THE GO WITH FRANCO</h3><div><p>During his 'On the Go with Franco' segments on STIR-TV, Franco has covered many unique events including:</p><ul><li>the World Cyber Games<li>NBA All-Star Game<li>NextFest<li>the International Dragon Boat Races.</ul><p>As STIR-TV\'s 'Man on the Street'and Mr. Involvement, he has the opportunity to do what he loves the most - to travel and to learn about interesting people and places.</p><p>He has a refreshing way of delivering these stories and people always wonder what he\'ll do next.</p></div><h3 class='h4'>INTERVIEWS</h3><div><p>Franco Finn has interviewed many athletes and celebrities like:</p><ul><li>Will Ferrell<li>Dennis Quaid<li>George Lopez<li>Jerry Bruckheimer<li>John Woo<li>Hilary Duff<li>Mandy Moore</ul><h4>Emcee</h4><p>Franco has emceed at most of the venues in and around the Bay Area from the Shoreline Amphitheater, the Concord Pavillion to the Fillmore in San Francisco. Franco has opened the show for some of the best performers in the music industry like:</p><ul><li>Britney Spears<li>Jessica Simpson<li>Hilary Duff.</ul><h4>Events</h4><p>Some of his events include:</p><ul> <li>Bay to Breakers<li>Half Moon Bay Pumpkin Festival<li>The Salinas Air Show<li>San Jose America Festival<li>Disney\'s Wiggles in the USA Concert Tour<li>The Shoreline Amphitheater\'s 'An Evening of Magic &amp; Music'</ul><p>Franco was on the red carpet at the El Capitan Theater in Hollywood for the 40th Anniversary of Disney\'s Mary Poppins, rubbing elbows with Julie Andrews and Dick Van Dyke and also covered the Lion King video release with special guest Elton John.</div><h3 class='h4'>APPEARANCES</h3><div><h4>Television</h4><p>Franco\'s other credits include appearances on television:</p><ul><li>History Channel<li>MTV2<li>KRON\'s Bay Area Backroads<li>ABC-7 / KGO-TV<li>KTSF<li>International Channel Network<li>AZN Network<li>ABS-CBN</ul><h4>Voice Talent</h4><p>His other credits include being the voice talent for hundreds of radio commercials for companies like:</p><ul><li>Disney<li>The San Jose Mercury News<li>McDonalds<li>Paramount<li>Sony<li>Coca-Cola<li>Any Mountain</ul></div><h3 class='h4'>BEGINNINGS</h3><div><p>At an early age, Franco discovered the spotlight as he held the microphone at family reunions, performing impromptu shows and enjoying being in front of the cameras and audiences.</p><p>At the age of 4, Franco was chosen from a group of a thousand kids and offered the role of one of Yul Brenner\'s sons in the traveling theatrical production of The King and I.</p> <p>Although, his mother decided on a different path for him at the time, he found himself coming back to the media / entertainment world by studying television broadcasting &amp; journalism at Santa Clara University.</p><p>His passion for television and entertainment was made very clear the moment he stepped on to his first studio set. Little did he know that an internship in San Francisco at NBC &amp; ABC back in 1998 would lead him back towards the spotlight as a television, radio and live PERSONALITY.</p><p>In essence, Franco Finn\'s diverse background and professional experience, combined with his energetic and charismatic personality, redefines the meaning of the word <b>TALENT</b>.</p></div>";
},{}],3:[function(require,module,exports){
module.exports = '<h2>CONTACT</h2><form action="" method="POST" id="contact-form"><label>Name</label><input id="name" type="text" name="name" required placeholder="name" autofocus><label>Email</label><input id="email" type="email" name="from" required placeholder="Email"><label>Subject</label><input id="name" type="text" name="subject" required placeholder="Subject"><label>Message</label><textarea id="message" required placeholder="Message" name="text"></textarea><button id="send">Send <i class="fa fa-envelope-o fa-2x"></i></button><input type="hidden" name="to" value="davidthanphilom@msn.com" hidden></form>';
},{}],4:[function(require,module,exports){

module.exports = Backbone.Model.extend({
	url:'https://api.instagram.com/v1/users/263705258/media/recent?access_token=3187374881.526fc9f.451aa6c0691d4c128ae4d46bc5b54b17',
	defaults: {
		data: ''
	},
	getContent: function(callback){
		this.fetch({
			dataType: 'jsonp',
			success: function(obj){
				// console.log('all done from server');
				callback(obj.toJSON());
			}
		});
	}	
});


},{}],5:[function(require,module,exports){

var Home = require('../views/homeView');
var Post = require('../views/postView');
var Sidebar = require('../views/sidebarView');
var aboutContent = require('../models/about');
var contactContent = require('../models/contact');

module.exports = Backbone.Router.extend({
	
	routes: {
		'': 'home',
		'about': 'about',
		'contact': 'contact',
		'post/:num': 'post'
	},
	home: function(){
		// console.log('this is the home page');
		var home = new Home();
		home.render();
	},
	about: function(){
		// console.log('this is the about page');
		var about = new Sidebar({
			// el: '.main-content',
			tagName:'div', 
			id: 'about'
		});
		about.render(aboutContent);
		$('.main-content').html('<div class="bg"></div>');
		$('.bg').html(about.$el);

	},
	contact: function(){
		// console.log('this is the contact page');
		var contact = new Sidebar({
			tagName: 'div',
			id: 'contact'
		});
		contact.render(contactContent);
		$('.main-content').html('<div class="bg"></div>');
		$('.bg').html(contact.$el);
	},
	post: function(num){
		// console.log('this is the ' + num + ' post');
		var post = new Post(num);
	}
});
},{"../models/about":2,"../models/contact":3,"../views/homeView":6,"../views/postView":7,"../views/sidebarView":8}],6:[function(require,module,exports){
var Page = require('../models/models');
var page = new Page();

module.exports = Backbone.View.extend({

	initialize:function(){
	
		var self = this;
		
		page.getContent(function(obj){
			self.render(obj.data);
			// console.log(obj.data);
		});
	},
	el: '.main-content',
	template: Handlebars.compile($('#homeTemplate').html()),
	render:function(data){
		this.$el.html(this.template({data:data}));
	}
});
},{"../models/models":4}],7:[function(require,module,exports){
var Page = require('../models/models');
var page = new Page();

module.exports = Backbone.View.extend({
	initialize:function(num){

		var self = this;

		page.getContent(function(obj){
			self.render(obj.data[num], num, obj);

		});

		$('html, body').scrollTop(0);	

		
	},
	addClass: function(){
		//function to add the class .active to the pagination at the bottom
		var url = window.location.hash;
		var thisPage = Number(url.substr(url.lastIndexOf('/') + 1));
		// console.log(thisPage);

		$('.pagination li').eq(thisPage).addClass('active');
	},
	initMap: function(lat, lng){
		var map;
		map = new google.maps.Map(document.getElementById('map'), {
			center: {
 				lat:lat,
 				lng: lng
			},
   			zoom: 15,
   			disableDefaultUI: true,
   			draggable: false,
   			scrollwheel: false
		});

		var marker = new google.maps.Marker({
			position: {
    			lat: lat,
    			lng: lng
    		},
    		map: map,
    		animation: google.maps.Animation.DROP,
    			// icon: '/assets/images/logo.png'
    	});
	
	},
	el: '.main-content',
	template: Handlebars.compile($('#postTemplate').html()),
	render: function(data, num, obj){
		var date = new Date(data.created_time*1000).toDateString();
		var isImage;
		var isVideo;
		var videoUrl;
		var isMap;
		var location;
		var lat;
		var lng;
		var prevPost = Number(num) - 1;
		var nextPost = Number(num) + 1;
		var isFirst;
		var isLast;
		var lastPost = obj.data.length - 1;
		var objs = obj.data;
		
		// console.log(objs);
		if (num == 0) {
			isFirst = false;
		} else {
			isFirst = true;
		}

		if(lastPost == num) {
			isLast = false;
		} else {
			isLast = true;
		}

		if(data.type == 'image'){
			isImage = true;
		}

		if(data.type == 'video') {
			isVideo = true;
			videoUrl = data.videos.standard_resolution.url;
		}
		var imageUrl = data.images.standard_resolution.url;
		var title = data.caption.text;
		if(data.location != null){
			isMap = true;
			location = data.location.name;
			lat = data.location.latitude;
			lng = data.location.longitude;
		}
		this.$el.html(this.template({
			date: date,
			isImage: isImage,
			isVideo: isVideo,
			videoUrl: videoUrl,
			imageUrl: imageUrl,
			title: title,
			isMap: isMap,
			location: location,
			lat: lat,
			lng: lng,
			prevPost: prevPost,
			nextPost: nextPost,
			isFirst: isFirst,
			isLast: isLast,
			objs: objs,
			
		}));

		this.addClass();
		this.initMap(lat,lng);

	}
});
},{"../models/models":4}],8:[function(require,module,exports){
module.exports = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: Handlebars.compile($('#mobileTemplate').html()),
	render: function(theContent){
		this.$el.html(this.template({
			Content: theContent
		}));
		return this;
	}
});
},{}]},{},[1]);
