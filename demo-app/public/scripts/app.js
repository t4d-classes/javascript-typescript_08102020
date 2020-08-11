'use strict';

// setTimeout(() => {
//     console.log('a');

//     setTimeout(() => {
//         console.log('b');

//         setTimeout(() => {
//             console.log('c');
//         }, 500);
      
//     }, 1000);

// }, 2000);

function allDone() {
  console.log('all done');
}

setTimeout(() => {
  console.log('a');
}, 1000);

setTimeout(() => {
  console.log('b');
}, 500);

setTimeout(() => {
  console.log('c');
}, 2000);

