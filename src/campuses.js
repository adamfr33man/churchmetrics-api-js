class Campuses {
	constructor(utils) {
		this.utils = utils;
	}

	async getAll() {
		console.log('getAll');
		return await this.utils.httpGET('/api/v1/campuses.json');
 	}

	async get(id) {
		console.log('get');
		return await this.utils.httpGET(`/api/v1/campuses/${id}.json`);
	}

	async create(data) {
		console.error('Seems like Create doesn\'t work');
		return await this.utils.httpPOST(`/api/v1/campuses.json`, data);
	}

	async edit(id, data) {
		console.log('edit');
		return await this.utils.httpPUT(`/api/v1/campuses/${id}.json`, data);
	}

	async delete() {
		console.log('delete');
	}
}

module.exports = Campuses;