import React from 'react';
import classes from './HeaderBottom.module.css';

const HeaderBottom = () => {
  const data = [
    'commercial vehicle',
    'private vehicle',
    'motor servicing',
    'garage equipment',
    'spare parts',
    'electric motorcycle',
    'forklit/stacker',
    'construction machinary',
    'special vehicle',
  ];

  return (
    <div className="w-full text-white bg-gradient-to-br from-akij-blue to-akij-lblue">
      <div className="container flex justify-between mx-auto">
        <div className="flex w-1/5 py-1">
          <div className="text-xl">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="48"
                d="M88 152h336M88 256h336M88 360h336"
              ></path>
            </svg>
          </div>
          <p className="px-5 text-sm font-bold uppercase">Categories</p>
        </div>
        <div
          className={`${classes.visibility} flex items-center justify-between w-4/5 py-1 font-bold`}
        >
          {data.map((item, i) => (
            <a
              key={i}
              className="px-2 font-medium uppercase cursor-pointer sub-button hover:text-akij-red"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .sub-button {
          font-size: 10px;
        }
      `}</style>
    </div>
  );
};

export default HeaderBottom;
