const ChurchMetrics = require('./src/index'),
      credentials = require('./credentials.json');

// const utils = new Utils(credentials);
const churchMetrics = new ChurchMetrics(credentials);

async function main() {
  // users();
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

main();