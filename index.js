var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port:8000});
server.start(console.log('server started'));

server.register(require('vision'), (err) => {
	server.views({
		engines: {
			html: require('handlebars')
		},
		path: 'views',
		layout: true,
		layoutPath: 'layout',
		isCached: true
	});
});

server.register(require('inert'), (err)=> {
	server.route({
		method: 'GET',
		path: '/assets/{param*}',
		handler: {
			directory: {
				path: 'public'
			}
		}
	});
});


var routes = require('./routes/routes');
server.route(routes);

