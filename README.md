# TodoApp

Todo application created in React, ExpressJS and mongoDB with CRUD(create, read, update, delete) functionality.

## Installation

Clone the repository:

```
https://github.com/vladimirmomiroski/todo_app.git
```

Install the dependencies: 

```
npm install --prefix ./backend
```
```
npm install --prefix ./frontend
```

## Setup

Create a .env.local file inside frontend directory:

```
REACT_APP_TODOS_URL=http://localhost:5000/todos
```

## Usage

Start the application with `local` environment:

```
npm run start:local --prefix ./backend
```

```
npm run start:local --prefix ./frontend
```

Browse your application on:

```
http://localhost:3000
```

Browse your backend api on:

```
http://localhost:5000/todos
```