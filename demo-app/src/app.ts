

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', (): void => {

  if (xhr.status === 200 && xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }

});

xhr.open('GET', 'http://localhost:3060/cars');
xhr.send();


// Write the code needed to implement the "myFetch" function described below. Your
// implementation should include any types and generics which are necessary

// myFetch('http://localhost:3060/cars').then((cars: Car[]): void => console.log(cars));