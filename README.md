# React Native Todo App

A simple Todo application built with React Native that allows users to manage their tasks.

## Features

- Display a list of predefined tasks
- Add new tasks through a form interface
- Clean and intuitive user interface
- Safe area handling for different device sizes

## Project Structure

The application consists of three main components:

- `index.jsx`: Main application component that manages state and component composition
- `ToDoList.jsx`: Displays the list of tasks
- `ToDoForm.jsx`: Handles the addition of new tasks

## Implementation Details

### State Management

- Uses React's useState hook for managing the task list
- Tasks are stored as an array in the application's state
- Each task contains text and completion status

### Components

#### App Component (index.jsx)

- Serves as the main container component
- Manages the task list state
- Handles the addition of new tasks
- Composes the ToDoList and ToDoForm components

#### ToDoList Component

- Receives tasks as props
- Renders tasks in a scrollable list
- Each task is displayed with appropriate styling

#### ToDoForm Component

- Provides input field for new tasks
- Handles task submission
- Clears input after task addition

## Setup and Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm start
```

## Technologies Used

- React Native
- React Hooks (useState)
- JavaScript/JSX
- React Native StyleSheet for styling
