var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (done) {
	new User.model({
		name: { first: 'Peter', last: 'Lehto' },
		email: 'peterlehto@gmail.com',
		password: 'password',
		canAccessKeystone: true,
	}).save(done);

};
