
# DataNeuron Backend API 
## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Configure the MongoDB connection string in `index.js`.
4. Deploy the API to Firebase Functions using `firebase deploy`.

**Note:** Authentication logic is not covered in this document, as it likely resides in a separate module or API. You'll need to implement authentication for the API endpoints marked as requiring it.

## Overview

This is the backend API for the DataNeuron application. It provides functionalities to add, update, and retrieve data entries, along with keeping track of the number of times these operations are performed. 

## Features

* **CRUD operations for data entries:**
    * Create new data entries.
    * Update existing data entries.
* **API call counts:**
    * Tracks the number of times data is added and updated.

## Technologies Used

* Node.js
* Express.js
* Mongoose (ODM for MongoDB)
* Firebase Functions (for deployment)
* Cors

## API Endpoints

### POST /api/data (createData)

* Creates a new data entry. 
* Requires authentication (middleware).
* Request body should contain the data to be added.
* Response:
    * Status: 201 Created on success.
    * Body: The newly created data entry.
    * Execution time: Included in the response headers.

### PUT /api/data/:id (updateData)

* Updates an existing data entry.
* Requires authentication (middleware).
* Path parameter `:id` specifies the ID of the data entry to update.
* Request body should contain the updated data.
* Response:
    * Status: 200 OK on success.
    * Body: The updated data entry.
    * Execution time: Included in the response headers.

### GET /api/data/count (getDataCount)

* Retrieves the count of data addition and update operations.
* Requires authentication (middleware).
* Response:
    * Status: 200 OK on success.
    * Body: An object containing the count of 'add' and 'update' operations.
    * Execution time: Included in the response headers.

## Database

The API uses MongoDB as the database. Mongoose is used as an Object Data Modeling (ODM) layer to simplify interactions with MongoDB.
Absolutely! Here's the updated README with the folder structure, assuming you're referring to a typical Node.js/Express.js project with the files you provided.

# Table of Contents

## Code Structure

```
DataNeuronbackend/
├── Controllers/
│   ├── authController.js 
│   ├── dataController.js 
├── Middlewares/
│   ├── auth.middleware.js
│   ├── error.middleware.js
├── Models/  
│   └── Data.model.js  
├── Routes/
│   ├── authRoutes.js
│   ├── dataRoutes.js
├── utils/    
│   └── ... (any utility functions)
├── package.json
├── index.js 
```

**Explanation:**

* **Controllers:** Holds logic for handling API requests, processing data, and sending responses.
* **Middlewares:**  Reusable functions to modify requests/responses, such as authentication ( `auth.middleware.js`) and error handling (`error.middleware.js`).
* **Models:** Defines Mongoose schemas for storing data in the MongoDB database (e.g., `Data.model.js` for the Data collection).
* **Routes:** Specifies the URL endpoints and connects them to the relevant controller actions.
* **utils:** A place for any reusable helper functions.
* **index.js** The main entry point of the Node.js application.
* **package.json:** Contains project metadata, dependencies, and scripts.

**Important to Note:**

* Your project might have additional folders (like `config` or `test`) based on its complexity.
* File names and folder organization might vary slightly depending on project conventions.


## Deployment

The API can be deployed to Firebase Functions using the `firebase deploy` command.

## Code Structure

The codebase is organized into the following folders:

* **Controllers:** Contains controllers for handling API requests (e.g., `dataController.js`).
* **Middlewares:** Contains middleware functions for authentication and error handling (`auth.middleware.js`, `error.middleware.js`).
* **Models:** Contains Mongoose models for data representation (`Data.model.js`).
* **Routes:** Contains route definitions for the API endpoints (`authRoutes.js`, `dataRoutes.js`).
* **utils:** Contains utility functions (if any).
* **index.js:** The entry point of the application.
* **package.json:** The project configuration file.

## Error Handling

The API uses a central error handling middleware to handle and respond to errors consistently.



