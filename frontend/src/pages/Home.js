import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 shadow-2xl">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center"> Wll come to  Task Management App</h1>
        <div className="flex justify-around">
          <Link to="/login" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
