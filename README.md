# React Redux Todo Application

A modern Todo application built with React and Redux, featuring employee management and a clean, responsive UI using Tailwind CSS.

## Features

- ✨ Todo List Management
  - Create new todos
  - Edit existing todos
  - Delete todos
  - View all todos

- 👥 Employee List
  - Fetch and display employee data from external API
  - Responsive employee cards with contact information

- 🎨 Modern UI
  - Clean, responsive design using Tailwind CSS
  - Smooth transitions and hover effects
  - Mobile-friendly interface

## Technology Stack

- React 18
- Redux Toolkit for state management
- React Router v6 for navigation
- Tailwind CSS for styling
- Axios for API requests

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
```bash
git clone https://github.com/RuntimeTerror6969/Todo-App.git
cd Todo-App
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure

```
src/
  ├── components/
  │   ├── TodoList.js      # Todo management component
  │   └── EmployeeList.js  # Employee list component
  ├── store/
  │   ├── store.js         # Redux store configuration
  │   └── todoSlice.js     # Redux slice for state management
  ├── App.js               # Main application component
  └── index.js             # Application entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Description of your changes'`)
4. Push to your branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Create React App](https://create-react-app.dev/) for project bootstrapping
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the fake REST API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
