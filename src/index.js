const Utils = require('./utils');

const Users = require('./users'),
      Campuses = require('./campuses'),
      Categories = require('./categories');

class ChurchMetrics {
	constructor(credentials) {
		console.log(`Email is: ${credentials.email}`);
		this.credentials = credentials;
		this.utils = new Utils(this.credentials, true);

		this.users = new Users(this.utils);
    this.campuses = new Campuses(this.utils);
    this.categories = new Categories(this.utils);
	}
}

module.exports = ChurchMetrics;