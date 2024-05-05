import React, { useState } from "react";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import { styled } from "@mui/system";
import "./fonts.css";
import DesktopFolder from "./DesktopFolder";
import CustomCursorImage from "./assets/cursor.png";
import Ad1 from "./assets/ads/gobad1.gif";
import Ad2 from "./assets/ads/gobad2.gif";
import Ad3 from "./assets/ads/gobad3.gif";
import Ad4 from "./assets/ads/gobad4.gif";
import Ad5 from "./assets/ads/gobad5.gif";
import Ad6 from "./assets/ads/gobad6.gif";
import Ad7 from "./assets/ads/gobad7.gif";
import Ad8 from "./assets/ads/gobad8.gif";
import Ad9 from "./assets/ads/gobad9.gif";
import Ad10 from "./assets/ads/gobad10.gif";
import Ad11 from "./assets/ads/gobad11.gif";
import Ad12 from "./assets/ads/gobad12.gif";
import Ad13 from "./assets/ads/gobad13.gif";
import Ad14 from "./assets/ads/gobad14.gif";
import Ad15 from "./assets/ads/gobad15.gif";
import Ad16 from "./assets/ads/gobad16.gif";
import Ad17 from "./assets/ads/gobad17.gif";
import Ad18 from "./assets/ads/gobad18.gif";
const IMAGES = [
  Ad1,
  Ad2,
  Ad3,
  Ad4,
  Ad5,
  Ad6,
  Ad7,
  Ad8,
  Ad9,
  Ad10,
  Ad11,
  Ad12,
  Ad13,
  Ad14,
  Ad15,
  Ad16,
  Ad17,
  Ad18,
];

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
