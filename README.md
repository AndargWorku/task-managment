# Task Management Frontend

This is the frontend for the Task Management Application. It is built with React.js javascript and talwind css.

## Prerequisites

Before running this application locally, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- npm react-router-dom
- talwind css
- axios
- react js

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/task-management-frontend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd task-management-frontend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

    ```plaintext
    REACT_APP_API_URL=http://localhost:5000/api
    ```

   - Adjust the `REACT_APP_API_URL` to point to the backend server URL if it's different.

## Running the Application

1. Start the application:

    ```bash
    npm start
    ```

2. By default, the application will run on port 3000. You can change the port by setting the `PORT` environment variable in the `.env` file.

3. Open your browser and navigate to:

    ```
    http://localhost:3000
    ```

4. The frontend application should now be running and you should be able to interact with the backend server.

## Usage

- The frontend application interacts with the backend API to perform CRUD operations on tasks.
- Ensure the backend server is running before using the frontend application.

## Build for Production

To create a production build of the application, run:

```bash
npm run build
