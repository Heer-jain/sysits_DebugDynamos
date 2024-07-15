import React, { useState, useEffect } from 'react';
import Task1 from './Task1';
import Task2 from './Task2';
import Navbar from './Navbar';

const Puzzle = () => {
  const [tasks, setTasks] = useState([
    { id: 1, completed: false, available: true },
    { id: 2, completed: false, available: false },
  ]);
  const [unlockDates, setUnlockDates] = useState({});

  const descriptions = {
    1: <Task1/>,
    2: <Task2/>
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      const updatedTasks = storedTasks.map((task) => {
        const completed = JSON.parse(localStorage.getItem(`completed${task.id}`));
        if (completed !== null) {
          task.completed = completed;
        }
        return task;
      });
      setTasks(updatedTasks);
    }

    const loadedUnlockDates = {};
    tasks.forEach((task) => {
      const unlockDate = localStorage.getItem(`unlockDate${task.id}`);
      if (unlockDate) {
        loadedUnlockDates[task.id] = new Date(unlockDate);
      }
    });
    setUnlockDates(loadedUnlockDates);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    tasks.forEach((task) => {
      localStorage.setItem(`completed${task.id}`, JSON.stringify(task.completed));
    });
  }, [tasks]);

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          task.completed = true;
          const nextDay = new Date();
          nextDay.setDate(nextDay.getDate() + 1);
          localStorage.setItem(`unlockDate${task.id}`, nextDay);
          setUnlockDates((prevUnlockDates) => ({
            ...prevUnlockDates,
            [task.id]: nextDay,
          }));
        }
        return task;
      })
    );
  };

  useEffect(() => {
    const today = new Date();
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (!task.available) {
          const unlockDate = new Date(localStorage.getItem(`unlockDate${task.id}`));
          if (today >= unlockDate) {
            task.available = true;
          }
        }
        return task;
      })
    );
  }, []);

  const handleUnavailableClick = (taskId) => {
    const unlockDate = new Date(localStorage.getItem(`unlockDate${taskId}`));
    alert(`Task ${taskId} will be available on ${unlockDate.toLocaleDateString()} at ${unlockDate.toLocaleTimeString()}`);
  };

  return (
    <>
    <Navbar/>
    <h1 className='text-5xl font-bold m-5'>Daily Puzzles</h1>
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: '20px' }}>
          {task.available && <div>{descriptions[task.id]}</div>}
          <button className='mx-20 bg-red-300 rounded-full px-10 py-2'
            disabled={task.completed}
            onClick={() => {
              if (task.available) {
                completeTask(task.id);
              } else {
                handleUnavailableClick(task.id);
              }
            }}
            >
            Submit Task {task.id}
          </button>
          {task.completed && <span>Successful</span>}
        </div>
      ))}
    </div>
      </>
  );
};

export default Puzzle;
