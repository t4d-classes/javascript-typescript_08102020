'use strict';

// keyword-style functions use call-site this
function doIt() {
  console.log(this);

  // const that = this;

  // function inner() {
  //   console.log(that);
  // }

  // arrow functions use lexical this
  const inner = () => {
    console.log(this);
  };

  inner();
}

// doIt();

// window.doIt();

const o = {
  id: 2,
  doIt: doIt,
};

o.doIt();

// console.log(window.doIt === o.doIt);
