import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Droppable, Draggable } from "react-beautiful-dnd";

export const UpcomingList = ({ handleFinish, lists, onDelete }) => {
  return (
    <div>
      <h2 className="list-title">Upcoming</h2>
      <Droppable droppableId="droppable-1">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map(({ todo, id, counter }, index) => (
              <Draggable key={id} index={index} draggableId={`draggable${id}`}>
                {(provided) => (
                  <li
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className="list-items upcoming-list-items"
                  >
                    {counter}. {todo}
                    <span className="icons">
                      <button className="btn">
                        <FaCheck onClick={() => handleFinish(id)} />
                      </button>
                      <button className="btn">
                        <FaTimes onClick={() => onDelete(id)} />
                      </button>
                    </span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};
