## Node-Demo

Git clone the code on your local machine.
Enter the root directory of the project, install required packages:

```sh
npm install
```

Run the app:

```sh
npm start
```

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
