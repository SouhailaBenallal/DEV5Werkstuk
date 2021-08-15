const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile.config);

async function initTables() {
    await db.raw('create extension if not exists "uuid-ossp"');
    await db.schema.hasTable('Categories').then(async (exists) => {
      if (!exists) {
        await db.schema
          .createTable('Categories', (t) => {
            t.uuid('UUID').unique().defaultTo(db.raw('uuid_generate_v4()'))
            t.string('Name', 50).notNullable();
          })
          .then(async () => {
            console.log('created table Categories');
          });
      }
   });

   await db.schema.hasTable('Logs').then(async (exists) => {
    if (!exists) {
      await db.schema
        .createTable('Logs', (t) => {
            t.uuid('UUID').unique().defaultTo(db.raw('uuid_generate_v4()'))
            t.text('Content');
            t.uuid('FK_Category').notNullable().references('UUID').inTable('Categories').onDelete('CASCADE');
        })
        .then(async () => {
          console.log('created table Logs');
        });
    }
 });
}
 
initTables();


module.exports = db;