import React from 'react';

export default function Form({ title, handleClick }) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <>
      {/*Ввод данный Email*/}
      <div className="flex justify-between items-center h-15 bg-input rounded-[25px] px-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-white outline-0 w-[90%]"
          placeholder="Email"
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_474_132)">
            <path
              d="M19.9617 4.61816L12.9467 11.6332C12.1645 12.4134 11.1048 12.8515 10 12.8515C8.89521 12.8515 7.83552 12.4134 7.05333 11.6332L0.0383333 4.61816C0.0266667 4.74983 0 4.869 0 4.99983V14.9998C0.00132321 16.1045 0.440735 17.1635 1.22185 17.9446C2.00296 18.7258 3.062 19.1652 4.16667 19.1665H15.8333C16.938 19.1652 17.997 18.7258 18.7782 17.9446C19.5593 17.1635 19.9987 16.1045 20 14.9998V4.99983C20 4.869 19.9733 4.74983 19.9617 4.61816Z"
              fill="#FEFCFC"
            />
            <path
              d="M11.7685 10.4549L19.3801 2.84242C19.0114 2.23102 18.4913 1.72495 17.8701 1.37303C17.2489 1.0211 16.5474 0.835203 15.8335 0.833252H4.16678C3.4528 0.835203 2.75137 1.0211 2.13014 1.37303C1.50891 1.72495 0.988849 2.23102 0.620117 2.84242L8.23179 10.4549C8.70143 10.9227 9.33727 11.1853 10.0001 11.1853C10.663 11.1853 11.2988 10.9227 11.7685 10.4549V10.4549Z"
              fill="#FEFCFC"
            />
          </g>
          <defs>
            <clipPath id="clip0_474_132">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/*Ввод данный Пароль*/}
      <div className="flex justify-between items-center h-15 bg-input rounded-[25px] px-5">
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="text-white outline-0 w-[90%]"
          placeholder="Пароль"
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8336 7.02V5.83332C15.8336 2.61168 13.222 0 10.0003 0C6.77863 0 4.16699 2.61168 4.16699 5.83332V7.02C2.65035 7.68191 1.66918 9.17856 1.66699 10.8333V15.8333C1.66973 18.1334 3.53359 19.9973 5.83363 20H14.167C16.467 19.9973 18.3309 18.1334 18.3336 15.8333V10.8333C18.3315 9.17856 17.3503 7.68191 15.8336 7.02ZM10.8336 14.1667C10.8336 14.6269 10.4605 15 10.0003 15C9.54008 15 9.16699 14.6269 9.16699 14.1667V12.5C9.16699 12.0398 9.54008 11.6667 10.0003 11.6667C10.4605 11.6667 10.8336 12.0398 10.8336 12.5V14.1667V14.1667ZM14.167 6.66668H5.83363V5.83336C5.83363 3.53219 7.6991 1.66668 10.0003 1.66668C12.3015 1.66668 14.167 3.53215 14.167 5.83336V6.66668V6.66668Z"
            fill="#FEFCFC"
          />
        </svg>
      </div>

      <button
        onClick={() => handleClick(email, pass)}
        className="h-15 bg-blue font-medium rounded-[25px] text-white cursor-pointer transition-all duration-300 active:scale-95"
      >
        {title}
      </button>
    </>
  );
}
