class Categories {
	constructor(utils) {
    this.utils = utils;
    
    this.getAll = async() =>
      await this.utils.httpGET('/api/v1/categories.json');

    this.get = async(id) =>
      await this.utils.httpGET(`/api/v1/categories/${id}.json`);

    this.create = async(data) =>
      await this.utils.httpPOST(`/api/v1/categories.json`, data);

    this.edit = async(id, data) =>
      await this.utils.httpPUT(`/api/v1/categories/${id}.json`, data);

    this.delete = async(id) =>
      await this.utils.httpDELETE(`/api/v1/categories/${id}.json`);
	}
}

module.exports = Categories;