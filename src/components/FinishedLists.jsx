import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export const FinishedLists = ({ lists, onRemove, text }) => {
  return (
    <div className="finished-lists-wrapper">
      <h2 className="list-title">Finished</h2>
      <p className="para">{text}</p>
      <ul>
        {lists.map(({ todo, id }) => (
          <li key={id} className="list-items finished-list-items">
            {todo}
            <span className="icons">
              <button className="btn">
                <FaCheck />
              </button>
              <button className="btn">
                <FaTimes onClick={() => onRemove(id)} />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
