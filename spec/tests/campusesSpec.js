const ChurchMetrics = require('../../src/index'),
      credentials = require('../../credentials.json');

const churchMetrics = new ChurchMetrics(credentials);

let campus;

describe("Campuses Specs", function() {
  it("should have some campuses", async function() {
    let campuses = await churchMetrics.campuses.getAll();
    campus = campuses[0];
    expect(campuses.length).toBeGreaterThan(0);
  });

  it("should return a specific campus", async function() {
    let firstcampus = await churchMetrics.campuses.get(campus.id);
    expect(firstcampus).toBeDefined();
    expect(firstcampus.id).toBe(campus.id);
  });

  it("should create a new campus", async function() {
    try {
      campus = await churchMetrics.campuses.create({
        'slug': 'Campus 2',
        'timezone': 'Wellington'
      });
    } catch(e) {
      fail(e);
    }

    expect(campus).toBeDefined();
  });

  it("should edit the new campus", async function() {
    try {
      let newName = 'Campus 2 ?';
      await churchMetrics.campuses.edit(campus.id, {
        'slug': newName
      });
    } catch(e) {
      fail(e);
    }

    try {
      let editedcampus = await churchMetrics.campuses.get(campus.id);
      expect(editedcampus.slug).toEqual(newName);
    } catch(e) {
      expect(e).toBeDefined();
    }
  });

  it("should delete the new campus", async function() {
    try {
      await churchMetrics.campuses.delete(campus.id);
    } catch(e) {
      fail(e);
    }
    try {
      await churchMetrics.campuses.get(campus.id);
    } catch(e) {
      expect(e).toBeDefined();
    }
  });
});