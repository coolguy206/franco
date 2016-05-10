
module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: require('../handlers/home')
	},

	{
		method: 'GET',
		path: '/post/{num?}',
		handler: require('../handlers/posts')
	},

	{
		method: 'GET',
		path:'/about',
		handler: require('../handlers/about')
	},

	{
		method: 'GET',
		path:'/contact',
		handler: require('../handlers/contact')
	},

	{
		method: 'GET',
		path: '/success',
		handler: require('../handlers/success')
	},

	{
		method: 'POST',
		path:'/contact',
		handler: require('../handlers/postReq')
	},

	{
		method: 'POST',
		path:'/',
		handler: require('../handlers/postReq')
	},

	{
		method: 'POST',
		path: '/post/{num?}',
		handler: require('../handlers/postReq')
	},
];