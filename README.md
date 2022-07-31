## Node-Demo

Git clone the code on your local machine.
It requires [Node.js](https://nodejs.org/) to run.
Enter the root directory of the project, install required packages:

```sh
npm install
```

Run the app:

```sh
npm start
```

API Paths:

- Find all tasks: 'Get' '/api/items'
- Find one task by its ID: 'Get' '/api/item/:id'
- Create a new task: 'Post' '/api/item'
- Update a task: 'Put' '/api/item'
- Delete a task: 'Delete' '/api/item/:id'

A local Postgresql instance is rquired. A '.env' should be put under the root direcotry of the project.
A sample '.env' contains the following details:

```sh
DBHOST="localhost"
DBUSER="postgres"
PASSWORD="postgres"
DB="todo"
DIALECT="postgres"
PORT="5432"
```
