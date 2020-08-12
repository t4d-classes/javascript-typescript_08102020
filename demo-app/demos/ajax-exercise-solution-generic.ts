
type Car = {
  id: number,
  make: string,
  model: string,
  year: number,
  color: string,
  price: number,
};

function myFetch<T>(url: string): Promise<T> {

  return new Promise<T>((resolve): void => {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', (): void => {

      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText));
      }

    });

    xhr.open('GET', url);
    xhr.send();

  });

}


// Write the code needed to implement the "myFetch" function described below. Your
// implementation should include any types and generics which are necessary

void myFetch<Car[]>('http://localhost:3060/cars')
  .then((cars: Car[]): void => console.log(cars));