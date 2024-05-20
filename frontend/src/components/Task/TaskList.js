import React, { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [taskFormVisible, setTaskFormVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setTaskFormVisible(true);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button
          onClick={() => {
            setSelectedTask(null);
            setTaskFormVisible(true);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Create Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map(task => (
            <TaskItem key={task._id} task={task} onEdit={handleEdit} />
          ))}
        </div>
      )}
      {taskFormVisible && (
        <TaskForm task={selectedTask} setTaskFormVisible={setTaskFormVisible} />
      )}
    </div>
  );
};

export default TaskList;
