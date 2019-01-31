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
		console.error('create');
		return await this.utils.httpPOST(`/api/v1/campuses.json`, data);
	}

	async edit(id, data) {
		console.log('edit');
		return await this.utils.httpPUT(`/api/v1/campuses/${id}.json`, data);
	}

	async delete(id) {
    console.log('delete');
    return await this.utils.httpDELETE(`/api/v1/campuses/${id}.json`);
	}
}

module.exports = Campuses;