import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoList from "./components/TodoList";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-md mb-8">
            <div className="max-w-4xl mx-auto px-4">
              <ul className="flex space-x-8 h-16 items-center">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200"
                  >
                    Todo List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/employees"
                    className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200"
                  >
                    Employee List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/employees" element={<EmployeeList />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};
export default App;
