import React, { useContext } from 'react';
import TaskContext from '../../context/TaskContext';

const TaskItem = ({ task, onEdit }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>
      <p className="text-gray-500">Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
      <p className="text-gray-500">Priority: {task.priority}</p>
      <p className={`text-sm ${task.status === 'completed' ? 'text-green-500' : 'text-red-500'}`}>
        Status: {task.status}
      </p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onEdit(task)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task._id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
