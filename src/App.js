import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import { styled } from "@mui/system";
import "./fonts.css";
import DesktopFolder from "./DesktopFolder";
import CustomCursorImage from "./assets/cursor.png";
import testImage from "./assets/ads/test1.jpg";
import testImage2 from "./assets/ads/test2.jpg";
import testGif from "./assets/ads/testgif1.gif";
import testGif2 from "./assets/ads/testgif2.gif";

const IMAGES = [testImage, testImage2, testGif, testGif2];

const AppContainer = styled("div")({
  backgroundColor: "#148484",
  minHeight: "100vh",
  color: "#ffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "WindowsFont",
  fontSize: "1.5em",
  cursor: `url(${CustomCursorImage}), pointer`,
});

const Desktop = styled("div")({
  display: "flex",
  gap: "400px",
  margin: "50px",
});

const ImageContainer = styled("div")({
  height: "400px",
});

const StyledImage = styled("img")({
  height: "350px",
});

const App = () => {
  const [currImageIdx, setCurrImageIdx] = useState(0);
  const [currAnimateFolder, setCurrAnimateFolder] = useState(null);

  const handleDrop = (imageId, folderName) => {
    console.log(`Image ${imageId} dropped into folder ${folderName}`);
    setCurrImageIdx(currImageIdx + 1);
    setCurrAnimateFolder(folderName);
  };

  return (
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
  );
};

export default App;
