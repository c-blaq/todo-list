import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export const UpcomingList = ({ text, handleFinish, lists, onDelete }) => {
  return (
    <div>
      <h2 className="list-title">Upcoming</h2>
      <p className="para">{text}</p>
      <ul>
        {lists.map(({ todo, id }) => (
          <li key={id} className="list-items upcoming-list-items">
            {todo}

            <span className="icons">
              <button className="btn">
                <FaCheck onClick={() => handleFinish(id)} />
              </button>
              <button className="btn">
                <FaTimes onClick={() => onDelete(id)} />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
