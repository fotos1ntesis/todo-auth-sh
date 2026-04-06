import React from 'react';

import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/slices/userSlice.js';
import { useTasks } from '../../hooks/useTasks.js';

export default function Input() {
  const dispatch = useDispatch();

  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState(false);

  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleAddTaskOnKey = (e) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        addTask(input);
        setInput('');
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <div className=" bg-input h-18 rounded-[25px] flex justify-between px-5 ">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTaskOnKey}
        maxLength={50}
        className="text-white font-medium text-[18px] px-4 w-full"
        placeholder={
          error ? 'Введите текст в поле ввода' : 'Что сегодня делаем?'
        }
      />

      {/*Блок кнопак*/}
      <div className="flex justify-between items-center gap-x-2">
        {/*Кнопка отправки тасков*/}
        <div
          className="cursor-pointer transition-all duration-300 active:scale-95 hover:bg-[#343538] w-10 h-10 rounded-full items-center flex justify-center"
          onClick={handleAddTask}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_474_2)">
              <path
                d="M4.60059 16.5831H9.03559L11.9681 19.5122C12.1257 19.6707 12.3131 19.7965 12.5194 19.8823C12.7258 19.9681 12.9471 20.0122 13.1706 20.0122C13.3176 20.012 13.4641 19.9932 13.6064 19.9564C13.8941 19.8838 14.1576 19.7366 14.3703 19.5298C14.583 19.3229 14.7375 19.0636 14.8181 18.7781L19.9906 1.18726L4.60059 16.5831Z"
                fill="#FCFDFE"
              />
              <path
                d="M3.40619 15.4167L18.8104 0.0100098L1.23202 5.19418C0.945801 5.27557 0.685836 5.43039 0.477918 5.64327C0.269999 5.85615 0.121354 6.11969 0.0467279 6.40775C-0.027898 6.69581 -0.0259107 6.99837 0.0524927 7.28543C0.130896 7.57248 0.282991 7.83405 0.493687 8.04418L3.40619 10.9542V15.4167Z"
                fill="#FCFDFE"
              />
            </g>
            <defs>
              <clipPath id="clip0_474_2">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/*Кнопка выхода*/}
        <div
          className="cursor-pointer transition-all duration-300 active:scale-95 hover:bg-[#343538] w-10 h-10 rounded-full items-center flex justify-center"
          onClick={() => dispatch(removeUser())}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_474_38)">
              <path
                d="M18.9696 8.52588L14.8446 4.40088L13.6671 5.58255L17.2505 9.16588H5.51465V10.8325H17.2505L13.6671 14.4159L14.8455 15.5942L18.9705 11.4692C19.164 11.2758 19.3175 11.0461 19.4222 10.7933C19.527 10.5405 19.5809 10.2695 19.5809 9.99588C19.5809 9.72225 19.527 9.45129 19.4222 9.1985C19.3175 8.9457 19.164 8.71601 18.9705 8.52255L18.9696 8.52588Z"
                fill="#FEFCFC"
              />
              <path
                d="M8.73 17.5C8.73 17.721 8.6422 17.933 8.48592 18.0893C8.32964 18.2455 8.11768 18.3333 7.89667 18.3333H2.5C2.27899 18.3333 2.06702 18.2455 1.91074 18.0893C1.75446 17.933 1.66667 17.721 1.66667 17.5V2.5C1.66667 2.27899 1.75446 2.06702 1.91074 1.91074C2.06702 1.75446 2.27899 1.66667 2.5 1.66667H7.89667C8.11768 1.66667 8.32964 1.75446 8.48592 1.91074C8.6422 2.06702 8.73 2.27899 8.73 2.5V6.94417H10.3967V2.5C10.3967 1.83696 10.1333 1.20107 9.66443 0.732233C9.19559 0.263392 8.55971 0 7.89667 0L2.5 0C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H7.89667C8.55971 20 9.19559 19.7366 9.66443 19.2678C10.1333 18.7989 10.3967 18.163 10.3967 17.5V13.0558H8.73V17.5Z"
                fill="#FEFCFC"
              />
            </g>
            <defs>
              <clipPath id="clip0_474_38">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
