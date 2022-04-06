import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export const FinishedLists = ({ lists }) => {
  return (
    <div className="finished-lists-wrapper">
      <h2 className="list-title">Finished</h2>
      <ul>
        {lists.map((list, index) => (
          <li key={index} className="list-items finished-list-items">
            {list}
            {console.log(list)}
            <span className="icons">
              <button className="btn">
                <FaCheck />
              </button>
              <button className="btn">
                <FaTimes />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
