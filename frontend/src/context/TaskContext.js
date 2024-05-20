import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('​http://localhost:5000/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const createTask = async (task) => {
    const token = localStorage.getItem('token');
    const response = await axios.post('​http://localhost:5000/api/tasks', task, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (id, updatedTask) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`​http://localhost:5000/api/tasks/${id}`, updatedTask, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setTasks(tasks.map(task => (task._id === id ? response.data : task)));
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`​http://localhost:5000/api/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
