'use client';
import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = async (title) => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    const newTask = await response.json();
    setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch(`/api/tasks?id=${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main className="container mx-auto p-4">
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </main>
  );
}