import React from "react";
import { FaTimes } from "react-icons/fa";
import { Droppable, Draggable } from "react-beautiful-dnd";

export const FinishedLists = ({ lists, onRemove, text }) => {
  return (
    <div className="finished-lists-wrapper">
      <h2 className="list-title">Finished</h2>
      <p className="para">{text}</p>
      <Droppable droppableId="droppable-2">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map(({ todo, id, counter }, index) => (
              <Draggable key={id} draggableId={`draggable${id}`} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="list-items finished-list-items"
                  >
                    {counter}. {todo}
                    <span className="icons">
                      <button className="btn"></button>
                      <button className="btn">
                        <FaTimes onClick={() => onRemove(id)} />
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
