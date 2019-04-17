# BSTU MEAN Notes

This project is a simple application for notes managing. Built with MEAN stack.

## Getting started

Clone project to your computer.

```
$ git clone https://github.com/GitStearis/bstu-mean-notes.git
```

### Prerequisites

To start with this project, you should have [Node](https://nodejs.org/en/download/package-manager/) installed. If you want to run your database locally, install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).

### Installing

Install all dependencies in a root folder and in a `./server` folder.

```
$ npm install
$ cd ./server && npm install
```

### Configuring

To launch server you should create `.env` file in a `./server` directory. File should contain:

```
PORT = 3000
MONGODB_CONNECTION = "mongodb://localhost:27017/bstu-mean"
```

* `PORT` - Port for the development needs. Use `3000` if you are not sure about this;
* `MONGODB_CONNECTION` - a MongoDB [connection string](https://docs.mongodb.com/manual/reference/connection-string/);

Client configuration could be found here: `./src/environments/environment.ts`. Nowit contains only API path. Replace it if you use deployed development server build.


### Launching

To run client & server on localhost type `npm start` in a root folder.

```
$ npm start
```

`npm start` script launches client and server at the same time using `concurrently` npm package. Discover `package.json` for more details.

## Built With

- [Node.js](https://github.com/nodejs/node) - JavaScript runtime for server;
- [npm](https://github.com/npm/npm) - Package manager for JavaScript;
- [Express.js](https://github.com/expressjs/express) - Framework for Node.js;
- [Angular CLI](https://github.com/angular/angular-cli) - CLI for Angular application & components generating;
- [MongoDB](https://www.mongodb.com/) - NoSQL Database;
- [Mongoose](http://mongoosejs.com/) - ODM for MongoDB.

## Developed by

* **George Puisha** - [GitStearis](https://github.com/GitStearis).

