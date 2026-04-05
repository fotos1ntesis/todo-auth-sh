import React from 'react';

import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import { useTasks } from '../../hooks/useTasks.js';

import Input from '../../components/input/index.jsx';
import BtnSlepoy from '../../components/btnSlepoy/index.jsx';

export default function HomePage() {
  const { isAuth } = useAuth();
  const { tasks, maxTask, deleteTask } = useTasks();

  const [size, setSize] = React.useState('base');
  const [italic, setItalic] = React.useState(false);

  const sizeClass = {
    base: 'text-base',
    large: 'text-[21px]',
    xlarge: 'text-[32px]',
  }[size];

  const handleDeleteTask = (index) => {
    deleteTask(index);
  };

  return isAuth ? (
    <div className="flex flex-col gap-y-4 text-center w-165 h-100dvh">
      <h1 className="font-semibold text-2xl absolute top-15 left-[50%] -translate-x-1/2">
        To do list {tasks.length}/{maxTask}
      </h1>

      {/*Список тасков*/}
      <div className="flex flex-col gap-y-8 h-90 wrap-break-word hyphens-auto">
        {tasks.length > 0 ? (
          tasks.slice(0, maxTask).map((task, index) => (
            <span
              key={index}
              onClick={() => handleDeleteTask(index)}
              className={`${size === 'base' ? 'text-[16px]' : sizeClass} ${italic && 'italic'} "max-w-full first-letter:uppercase text-white transition-all duration-300 hover:text-red cursor-pointer w-140"`}
            >
              {task}
            </span>
          ))
        ) : (
          <p className="text-white mt-[25%]">Нет задач</p>
        )}
      </div>

      <div className="w-165 absolute bottom-5 left-[50%] -translate-x-1/2 flex flex-col gap-y-2">
        <Input />
        <div className="flex items-center justify-center gap-x-2 text-white/80">
          <span className="text-[13px]">Для слабовидящих:</span>
          <BtnSlepoy size={size} setSize={setSize} />
          <button
            className="cursor-pointer text-[13px] hover:text-white transition-all duration-300"
            onClick={() => setItalic((prev) => !prev)}
          >
            Курсив
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
