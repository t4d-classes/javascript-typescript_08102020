'use strict';

const outer = () => {

  let t = 2;

  setTimeout(() => {
    t = 4;
  }, 2000);

  return () => {
    console.log(t);
  };

};

const inner = outer();

inner();

setTimeout(() => {

  inner();

}, 4000);

//console.dir(inner);