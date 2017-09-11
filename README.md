# demo-eleminatecode

This is a simple demo project that shows how dead code elemination and conditional compilation works in a webpack setup.

This repository holds the code examples that are used in the Blog post [Conditional compilation and dead code elimination with webpack](https://www.thomann.io/blog/post/webpack_conditional_compilation_dead_code_elimination) on [thomann.io](https://www.thomann.io).

Clone this repository, and install the dependencies (assuming you have already installed node and npm):
````bash
$ git clone git@github.com:thomn/demo-eleminatecode.git && npm i
````

Run the following command to create a dev build:
````bash
$ npm run dev
````

A development build has been created and can be viewed at build/index.js. The dev build is very cluttered and verbose, it is not minified, retains all comments and a huge amount of code that is not actually used at all.

````bash
$ npm run prod
````
Under build/index.js now the production build can be found. The output is completely minified and a lot smaller as a huge portion of the original code has been removed. The webpack setup with UglifyJS is able to determine which part of the code is needed and which part of the code can be savely thrown away.
