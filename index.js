const ChurchMetrics = require('./src/index'),
      credentials = require('./credentials.json');

// const utils = new Utils(credentials);
const churchMetrics = new ChurchMetrics(credentials);

async function main() {
  // users();
  campuses();
}

async function users() {
  let user;

  console.dir(await churchMetrics.users.getAll());
  console.dir(await churchMetrics.users.get('114118'));

  try {
    user = await churchMetrics.users.create({
      'email': 'cheezy@sli-systems.com',
      'name': 'Adam 2',
      'locale': 'en',
      'role': 'volunteer',
      'campus': {
        'id': 93044
      }
    });
    console.dir(user);
  } catch(e) {
    console.error(e);
  }
  console.dir(await churchMetrics.users.get(user.id));
  console.dir(await churchMetrics.users.edit('77463', {
    'role': 'staff'
  }));
}

async function campuses() {
  let campus;

  console.dir(await churchMetrics.campuses.getAll());

  console.dir(await churchMetrics.campuses.get('93044'));

  try {
    campus = await churchMetrics.campuses.create({
      'slug': 'Campus 2',
      'timezone': 'Wellington'
    });
    console.dir(campus);  
  } catch(e) {
    console.error(e);
  }

  try {
    console.dir(await churchMetrics.campuses.edit(campus.id, {
      'slug': 'Campus 3',
      'description': 'Second one ?'
    }));
  } catch(e) {
    console.error(e);
  }

  console.dir(await churchMetrics.campuses.delete(campus.id));

  console.dir(await churchMetrics.campuses.getAll());
}

main();