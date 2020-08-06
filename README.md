# Welcome to the ES2020 JavaScript/TypeScript Course!

![DevelopIntelligence Logo](images/developintelligence-logo.jpg "DevelopIntelligence Logo")

Now more than ever, enterprise environments must support their tech & L&D priorities by delivering hyper-focused and targeted learning programs that work for each individual company, flawlessly.

The largest and most successful enterprise companies trust DevelopIntelligence to advance their tech learning environments. Let us show you what we can do for the success of your programs.

DevelopIntelligence Delivers.

## Class Information Page

[https://www.t4d.io/developintelligence-javascript-typescript-08102020](https://www.t4d.io/developintelligence-javascript-typescript-08102020)

## Other Resources

The instructor will distribute additional private links during class for downloading recordings...

All code in this repository is distributed under the [MIT license](license.txt).

## Configuration and Data for the REST API part of the class

To configure the REST API, two packages will need to installed into the project created by the Create React App generator.

1. To install those packages, run the following command from within the root folder of the project:

```bash
npm install -D json-server npm-run-all
```

2. Next, the `package.json` needs to be updated to easily run the REST API provides by the [JSON Server](https://github.com/typicode/json-server). Here is the `scripts` configuration which can be copied and pasted for the REST API. When asked by the instructor, replace the `scripts` section of the `package.json` file in the `demo-app` project with the `scripts` section below.

```json
"scripts": {
  "rest": "json-server --port 3060 ./db.json"
},
```

3. Finally, the REST API data file needs to be created. The data file should be named `db.json` and placed in the project root folder. 

**VERY IMPORTANT! The `db.json` file will be placed in the `demo-app` folder, the same folder as the `package.json` file. The `db.json` file should **NOT** be placed in the `src` folder.**

4. The JSON below should be copied and pasted into the file.

```json
{
  "colors": [
    { "id": 1, "name": "red", "hexcode": "#ff0000" },
    { "id": 2, "name": "green", "hexcode": "#00ff00" },
    { "id": 3, "name": "blue", "hexcode": "#0000ff" }
  ],
  "cars": [
    {"id":1,"make":"Ford","model":"Fusion Hybrid","year":2019,"color":"blue","price":45000},
    {"id":2,"make":"Tesla","model":"S","year":2018,"color":"red","price":100000}
  ]
}
```

5. To verify the REST API is working, run the `npm start` command and browse the following URL: [http://localhost:3060/cars](http://localhost:3060/cars).

<br><br>
All course content and teaching is provided by: [<img src="images/t4dio-logo.gif" alt="T4D.IO Logo">](http://www.t4d.io)


