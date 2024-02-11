## Local Setup Instructions
I've developed a set of four APIs using NodeJS, ExpressJS, MongoDB, and Mongoose. These APIs empower task management, allowing users to create, edit, delete, and find tasks seamlessly. The architecture ensures efficient interaction with the MongoDB database. To deploy locally, specific configurations in the 'nv' file are necessary, and comprehensive instructions can be found in the `.envdemo` file. These APIs serve as a robust foundation for task-related functionalities, promoting a streamlined and organized workflow.


## API Reference

#### Get all Tasks

```http
  GET http://localhost:3000/tasks/
```

#### Get Specific Task by ID

```http
  GET http://localhost:3000/tasks/taskId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskId`      | `string` | **Required**. taskId of Task to fetch |


#### Post Task

```http
  POST http://localhost:3000/tasks/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`      | `object` | **Required**. title, description of Task |


#### Update Task

```http
  PUT http://localhost:3000/tasks/taskId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskId`      | `string` | **Required**. taskId of Task |


#### Delete Task

```http
  Delete http://localhost:3000/tasks/taskId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskId`      | `string` | **Required**. taskId of Task |

