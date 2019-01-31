const ChurchMetrics = require('../../src/index'),
      credentials = require('../../credentials.json');

const churchMetrics = new ChurchMetrics(credentials);

let category;

describe("Categories Specs", function() {
  it("should have some categories", async function() {
    let categories = await churchMetrics.categories.getAll();
    category = categories[0];
    expect(categories.length).toBeGreaterThan(0);
  });

  it("should return a specific category", async function() {
    let firstCategory = await churchMetrics.categories.get(category.id);
    expect(firstCategory).toBeDefined();
    expect(firstCategory.id).toBe(category.id);
  });

  it("should create a new category", async function() {
    try {
      category = await churchMetrics.categories.create({
        'name': 'Adam Test',
        'format': 'number',
        'kind': 'Attendance'
      });
    } catch(e) {
      fail(e);
    }

    expect(category).toBeDefined();
  });

  it("should edit the new category", async function() {
    try {
      let newName = 'Adam Test ?';
      await churchMetrics.categories.edit(category.id, {
        'name': newName
      });
      let editedCategory = await churchMetrics.categories.get(category.id);
      expect(editedCategory.name).toEqual(newName);
    } catch(e) {
     fail(e);
    }
  });

  it("should delete the new category", async function() {
    try {
      await churchMetrics.categories.delete(category.id);
    } catch(e) {
      console.error(e);
    }
    try {
      await churchMetrics.categories.get(category.id);
    } catch(e) {
      expect(e).toBeDefined();
    }
  });
});