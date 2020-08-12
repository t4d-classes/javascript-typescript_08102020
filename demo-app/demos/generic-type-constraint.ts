interface Resource {
  id: number;
}

interface Car extends Resource {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

function myFetch<T extends Resource>(url: string): Promise<T[]> {

  return new Promise<T[]>((resolve): void => {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', (): void => {

      if (xhr.status === 200 && xhr.readyState === 4) {

        // const resources = JSON.parse(xhr.responseText) as T[];
        // resources[0].

        resolve(JSON.parse(xhr.responseText));
      }

    });

    xhr.open('GET', url);
    xhr.send();
  });

}

void myFetch<Car>('http://localhost:3060/cars').then((cars): void => console.log(cars));


// Write the code needed to implement the "myFetch" function described below. Your
// implementation should include any types and generics which are necessary


// Bonus use a generic function

// myFetch<Car[]>('http://localhost:3060/cars').then((cars: Car[]): void => console.log(cars));