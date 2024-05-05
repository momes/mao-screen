import React, { useState, useEffect } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";

const DraggableImage = ({ image, currImageIdx, setCurrImageIdx }) => {
  console.log(image, currImageIdx, setCurrImageIdx);
  const drag = (e, imageId) => {
    e.dataTransfer.setData("text", imageId);
  };

  const drop = (e) => {
    e.preventDefault();
    // const imageId = e.dataTransfer.getData("text");
    setCurrImageIdx(currImageIdx + 1);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* <div
        className="draggable-image"
        onDrop={drop}
        onDragOver={allowDrop}
        style={{ border: "2px dashed gray", marginBottom: "20px" }}
      > */}
      {/* <div
        className="draggable-image"
        onDrop={drop}
        onDragOver={allowDrop}
        style={{ border: "2px dashed gray", marginBottom: "20px" }}
      > */}
      <DragDropContainer
        targetKey="bar"
        style={{ display: "block" }}
        dropData={{ type: "Apple" }}
      >
        <img
          key={currImageIdx}
          src={image}
          alt={`Draggable Image ${currImageIdx}`}
          draggable="true"
          onDragStart={(e) => drag(e, currImageIdx)}
          style={{ width: "200px", height: "200px", marginRight: "10px" }}
        />
      </DragDropContainer>
      {/* <img
          key={currImageIdx}
          src={image}
          alt={`Draggable Image ${currImageIdx}`}
          draggable="true"
          onDragStart={(e) => drag(e, currImageIdx)}
          style={{ width: "200px", height: "200px", marginRight: "10px" }}
        /> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default DraggableImage;
