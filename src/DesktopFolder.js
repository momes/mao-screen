import React from "react";
import FolderIcon from "./assets/folder-icon.png";
import OpenFolderIcon from "./assets/folder-icon-open.png";
import { styled } from "@mui/system";

const DesktopFolderContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

const DesktopFolderImg = styled("img")({
  width: "100px",
  height: "100px",
});

const DesktopFolder = ({ folderName, handleDrop, allowDrop, isOpen }) => {
  console.log("IsOpen");
  const drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    handleDrop(data, folderName);
  };

  const allowDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="desktop-folder"
      onDrop={drop}
      onDragOver={allowDragOver}
      style={{ border: allowDrop ? "2px dashed gray" : "none" }}
    >
      <DesktopFolderContainer>
        {isOpen ? (
          <DesktopFolderImg src={OpenFolderIcon} alt="Folder Icon" />
        ) : (
          <DesktopFolderImg src={FolderIcon} alt="Folder Icon" />
        )}
        <div>{folderName}</div>
      </DesktopFolderContainer>
    </div>
  );
};

export default DesktopFolder;
