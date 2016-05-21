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

