import React, { useEffect, useState } from "react";
import DesktopFolder from "./DesktopFolder";
import { styled } from "@mui/system";
import "./fonts.css";
import CustomCursorImage from "./assets/cursor.png";
import testImage from "./assets/ads/test1.jpg";
import testImage2 from "./assets/ads/test2.jpg";
import testGif from "./assets/ads/testgif1.gif";
import testGif2 from "./assets/ads/testgif2.gif";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

const IMAGES = [testImage, testImage2, testGif, testGif2];

const AppContainer = styled("div")({
  backgroundColor: "#148484",
  minHeight: "100vh",
  color: "#ffff",
  display: "flex", // Make children flex items
  flexDirection: "column", // Align children in a column
  alignItems: "center", // Center items horizontally
  justifyContent: "center", // Center items vertically
  fontFamily: "WindowsFont",
  fontSize: "1.5em",
  cursor: `url(${CustomCursorImage}), pointer`,
});

const Desktop = styled("div")({
  display: "flex",
  gap: "400px", // Add space between DesktopFolder components
  margin: "50px",
});

const ImageContainer = styled("div")({
  height: "400px",
});

const StyledImage = styled("img")({
  height: "350px",
});

const App = () => {
  const [droppedImage, setDroppedImage] = useState(null);
  const [currImageIdx, setCurrImageIdx] = useState(0);
  const [currAnimateFolder, setCurrAnimateFolder] = useState(null);

  useEffect(() => {}, [currImageIdx]);

  // const handleMouseMove = (event) => {
  //   const cursorType = event.target.style.cursor;
  //   console.log("Cursor type:", cursorType);
  // };

  // useEffect(() => {
  //   // Add event listener for mousemove
  //   document.addEventListener("mousemove", handleMouseMove);

  //   // Cleanup function to remove event listener when component unmounts
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []); // Empty dependency array ensures that the effect runs only once

  const handleDrop = (imageId, folderName) => {
    console.log(`Image ${imageId} dropped into folder ${folderName}`);
    setCurrImageIdx(currImageIdx + 1);
    setCurrAnimateFolder(folderName);
  };

  return (
    // <DndProvider backend={TouchBackend}>
    <AppContainer>
      <Desktop>
        <DropTarget
          id="art_target"
          targetKey="foo"
          onHit={function (e) {
            console.log(`Dropped Image ${currImageIdx} into Art folder!`);
            setCurrImageIdx(currImageIdx + 1);
          }}
        >
          <DesktopFolder
            folderName="Art"
            handleDrop={handleDrop}
            isOpen={currAnimateFolder === "Art"}
          />
        </DropTarget>
        <DropTarget
          id="terror_target"
          targetKey="foo"
          onHit={function (e) {
            console.log(`Dropped Image ${currImageIdx} into Terror folder!`);
            setCurrImageIdx(currImageIdx + 1);
          }}
        >
          <DesktopFolder
            folderName="Terror"
            handleDrop={handleDrop}
            isOpen={currAnimateFolder === "Terror"}
          />
        </DropTarget>
      </Desktop>
      <ImageContainer>
        {/* <DraggableImage
            image={IMAGES[currImageIdx]}
            currImageIdx={currImageIdx}
            setCurrImageIdx={setCurrImageIdx}
          /> */}
        {IMAGES.map((image, idx) => (
          <DragDropContainer
            targetKey="foo"
            style={{ display: "block" }}
            dropData={{ type: "Orange" }}
          >
            <StyledImage
              src={image}
              alt=""
              style={{ display: idx === currImageIdx ? "inherit" : "none" }}
            />
          </DragDropContainer>
        ))}
      </ImageContainer>
    </AppContainer>
    // </DndProvider>
  );
  // return (
  //   <AppContainer>
  //     <Desktop />
  //   </AppContainer>
  // );
};

export default App;
