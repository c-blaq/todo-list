import React, { Component } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export class UpcomingList extends Component {
  render() {
    const { handleFinish, lists, onDelete } = this.props;

    return (
      <div>
        <h2 className="list-title">Upcoming</h2>
        <DragDropContext>
          <Droppable droppableId="droppable-1">
            {(provided) => {
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {lists.map(({ todo, id, counter }, index) => (
                  <Draggable
                    key={id}
                    index={index}
                    draggableId={`draggable${id}`}
                  >
                    {(provided) => {
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
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
                      </li>;
                    }}
                  </Draggable>
                ))}
              </ul>;
            }}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}
