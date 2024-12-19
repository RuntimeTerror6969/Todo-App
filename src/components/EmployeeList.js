import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setEmployees } from "../store/todoSlice";

const EmployeeList = () => {
  const employees = useSelector((state) => state.todos.employees);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        // Using JSONPlaceholder API as an alternative that supports CORS
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch(setEmployees(response.data));
      } catch (error) {
        setError("Error fetching employees. Please try again later.");
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, [dispatch]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Employee List</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <ul className="space-y-2">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="font-semibold text-lg text-gray-800">
              {employee.name}
            </h3>
            <p className="text-gray-600">{employee.email}</p>
            <p className="text-gray-600">{employee.company?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
