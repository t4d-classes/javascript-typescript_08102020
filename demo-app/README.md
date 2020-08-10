# Introduction to JavaScript and TypeScript

This is the class starter project for learn JavaScript and TypeScript. We will use this project to explore JavaScript and TypeScript.

## Instructions

1. Open a termina window, and clone this repository to the folder of your choice. Specify whatever FOLDER_NAME you would like.

```bash
git clone https://github.com/ericwgreene/js-ts-starter-app.git FOLDER_NAME
```

2. Change into the folder.

```bash
cd FOLDER_NAME
```

3. Install the NPM Packages.

```bash
npm install
```

4. For your editor, please install the TSLint extension.

5. To run the application, you will need two terminal sessions. In the first terminal session, run the following command:

```bash
npm start
```

This first terminal session will run the web server, but TypeScript type checking is not occuring.

6. In the second terminal window, run the following command:

```bash
npm run typecheck
```

This second terminal will run in "watch" mode and report TypeScript compilation errors. These errors along with the errors and warnings reported by TSLint in your editor will help you resolve strong typing issues.

## Configuration

The application comes with basic TypeScript and TSLint configuration. The file `tsconfig.json` contains the TypeScript compiler options. The file `tslint.json` contains the TypeScript linter options. A program can compile while failing the linter rules. In general the linter rules are more restrictive than the compiler. The compiler is used to produce running JavaScript code, the linter is used to ensure good coding practices.

While there are many excellent editors available to programmers, [Visual Studio Code](https://code.visualstudio.com/) is recommended for JavaScript and TypeScript programming.

To explore compiler configuration options: [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

To explore linter configuration options: [https://palantir.github.io/tslint/rules/](https://palantir.github.io/tslint/rules/)

## Resources

To learn more about Parcel: [https://parceljs.org/](https://parceljs.org/)

To learn more about JavaScript: [https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md)

To learn more about TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

To learn more about TS Lint: [https://palantir.github.io/tslint/](https://palantir.github.io/tslint/)

TSLint was deprecated in 2019, and much work has been done to migrate from TSLint to TypeScript ESLint:

To learn more about TypeScript ESLint: [https://github.com/typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

To learn more about ESLint rules: [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)

To learn about the rules which can be configured for TypeScript ESLint: [https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)