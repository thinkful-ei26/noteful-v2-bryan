// 'use strict';

// // const knex = require('../knex');

// let searchTerm = 'gaga';
// let id = '1';
// let updateObj = {title: 'New Title', content: 'New Content'}
// let newItem = {title: 'That New New', content: 'That New Content'}

// // knex('notes')
// //   .select('notes.id', 'title', 'content')
// //   .modify(function() {
// //     if (searchTerm) {
// //       this.where('title', 'like', `%${searchTerm}%`);
// //     }
// //   })
// //   .orderBy('notes.id')
// //   .then(results => {
// //     console.log(JSON.stringify(results, null, 2));
// //   })
// //   .catch(err => {
// //     console.error(err);
// //   });

// // knex('notes')
// //   .select('notes.id', 'title', 'content')
// //   .where('notes.id', `${id}`)
// //   .then(results => {console.log(results);})
// //   .catch(err => {
// //     console.error(err);
// //   })
  
// // knex('notes')
// //   .select('notes.id', 'title', 'content')
// //   .where('notes.id', `${id}`)
// //   .update(ubdateObj, ['notes.id', 'title', 'content'])
// //   .then(results => {
// //     console.log(results);
// //   })
// //   .catch(error => {
// //     console.log(error)
// //   })

// // knex('notes')
// // .insert(newItem, ['notes.id', 'title', 'content'])
// // .then(results => {
// //   console.log(results);
// // })
// // .catch(error => {
// //   console.error(error);
// // })

knex('notes')
.where('notes.id', `${id}`)
.del()
.then(results => {
  console.log(results);
})
.catch(error => {
  console.log(error);
});