# node-todo-api
REST API and Authetication for todo applicati made with NodeJS during The Complete Node.js Developer Course.

## API
### POST
* POST '/users', to register your email and password and get token
* POST '/users/login', to login for getting token
* POST '/todos', to add todo object to account
### GET
* GET '/todos', to get all todos list in account
* GET '/todos/:id', to get object by Id
* GET '/users/me', to get email
### PATCH
* PATCH '/todos/:id', to update todo object
### DELETE
* DELETE '/todos/:id', to delete todo object
* DELETE '/users/me/token', to remove token

# Demo

https://young-plains-28021.herokuapp.com
