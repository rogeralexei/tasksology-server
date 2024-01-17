# Getting Started with Tasksology

Tasksology-Server is a server that will give you access to a TODOS API.

## No need to run it locally

You don't need to run the app locally. You can point to [https://vine-goldenrod-sombrero.glitch.me/](https://vine-goldenrod-sombrero.glitch.me/) to test it out on my the API. You can use INSOMNIA REST or POSTMAN to test it out.
If instead, you prefere to run the app locally follow the next steps.

## Install depencies

### `npm install`

Remember to install all the dependencies before running the app.

## How to run the Server

### `npm run serve`

Runs the app in the development mode.\
Point to [http://localhost:3000](http://localhost:3000) everytime you want to perform a request. This will be your base url.

## Endpoints

### Get all tasks

GET request to `<baseUrl>/tasks`

### Create a task

POST request to `<baseUrl>/tasks`

### Get a task by id

GET request to `<baseUrl>/tasks/<task_id>`

### Edit a task

PUT request to `<baseUrl>/tasks/<task_id>`

### Delete a task

DELETE request to `<baseUrl>/tasks/<task_id>`

#### Payload format example
```
{
	"title": "Read a book",
	"description": "I need to read a book asap",
	"status": "Pending",
	"priority": "Low"
}
```

## Demo

You don't need to run the app locally. You can access [https://tasksology.vercel.app/](https://tasksology.vercel.app/) to test it out on my Vercel platform. This app is connected to this API.
