
const doOne = (): Promise<string> =>
  new Promise((resolve, reject): void =>
    {
      setTimeout((): void => reject('a'), 2000);
    });

const doTwo = (): Promise<string> =>
  new Promise((resolve): void =>
    {
      setTimeout((): void => resolve('b'), 1000);
    });

const doThree = (): Promise<string> =>
  new Promise((resolve): void =>
    {
      setTimeout((): void => resolve('c'), 1000);
    });

// sequential operation
// void doOne()
//     .then((result): Promise<string> => {
//       console.log(result);
//       return doTwo();
//     })
//     .then((result): Promise<string> => {
//       console.log(result);
//       return doThree();
//     })
//     .then((result): void => {
//       console.log(result);
//     });

// group operation
// void Promise.all([
//   doOne(), doTwo(), doThree()
// ]).then((results): void => {
//   console.log(results);
//   console.log('all done');
// });

async function doOps(): Promise<void> {

  try {

    const res1 = await doOne();
    console.log(res1);
    const res2 = await doTwo();
    console.log(res2);
    const res3 = await doThree();
    console.log(res3);

  } catch (err) {
    console.log('error: ', err);
  }

}

void doOps();