import React, { useCallback, useState } from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import "./App.css";
import fileUploadImg from "./assets/images/fileUpload.png";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("your-upload-endpoint", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("File uploaded successfully");
      })
      .catch((error) => {
        console.error("Error uploading file", error);
      });
  }, []);

  const removeFile = () => {
    setSelectedFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*,application/pdf",
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div>
          {selectedFile ? (
            <div className="preview-container">
              <img
                src={selectedFile}
                alt="preview"
                className="upload-preview"
              />
              <button onClick={removeFile} className="remove-button">
                <HighlightOffRoundedIcon />
              </button>
            </div>
          ) : (
            <div className="preview-container">
              <img
                src={fileUploadImg}
                alt="upload icon"
                className="upload-icon"
              />
            </div>
          )}
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
