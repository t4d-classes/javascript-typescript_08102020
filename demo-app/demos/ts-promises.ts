
console.log('starting...');

const p = new Promise<string>((resolve, reject): void => {

  console.log('running function passed into promise');

  setTimeout((): void => {
    console.log('calling reject');
    reject('done');
  }, 2000);

});

p
  .then((result): void => {
    console.log(result);
  })
  .catch((result): void => {
    console.log('rejected: ', result);
  });

console.log('made it here...');
