# demo-eleminatecode

This is a simple demo project that shows how dead code elemination and conditional compilation works in a webpack setup.

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
Under build/index.js now the production build can be found. The output is completely minified and a lot smaller as a huge portion of the original code has been removed.