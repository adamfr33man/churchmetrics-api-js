const ChurchMetrics = require('./src/index'),
      credentials = require('./credentials.json');

// const utils = new Utils(credentials);
const churchMetrics = new ChurchMetrics(credentials);

async function main() {
  // users();
  campuses();
}

async function users() {
  console.dir(await churchMetrics.users.getAll());
  console.dir(await churchMetrics.users.get('114118'));
  // console.dir(await churchMetrics.users.create({
  //   'email': 'cheezy@sli-systems.com',
  //   'name': 'Adam 2',
  //   'locale': 'en',
  //   'role': 'volunteer',
  //   'campus': {
  //     'id': 93044
  //   }
  // }));
  console.dir(await churchMetrics.users.edit('77463', {
    'campus': '93045'
  }));
}

async function campuses() {
  console.dir(await churchMetrics.campuses.getAll());
  console.dir(await churchMetrics.campuses.get('93045'));
  console.dir(await churchMetrics.campuses.create({
    'slug': 'Campus 3',
    'timezone': 'Wellington'
  }));
  console.dir(await churchMetrics.campuses.edit('93045', {
    'slug': 'Campus 23',
    'description': 'Second one ?'
  }));
}

main();