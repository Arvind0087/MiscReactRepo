import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import {
  FormControl,
  Grid,
  Stack,
  TextField,
  Container,
  MenuItem,
  InputLabel,
  Select,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import { _initial, _validate } from "./utils";
import { courseData, typeData } from "./utils";
import AutoCompleteCustom from "../../common/AutoCompleteCustom";
import UploadBox from "../../common/CustomUploads/UploadBox";

import _ from "lodash";
import fileUploadImg from "../../../assets/images/fileUpload.png";
import "./fileUpload.css";

function MUIFormValidation2() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async (values) => {
    console.log("values....", values);
  };

  const formik = useFormik({
    initialValues: _initial,
    onSubmit,
    validationSchema: _validate,
  });

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (
      !["image/jpeg", "image/png", "image/gif", "application/pdf"].includes(
        file.type
      )
    ) {
      alert("Invalid file type. Please select an image or a PDF file.");
      return;
    }

    if (file?.path?.split(".").includes("pdf") === true) {
      setSelectedFile(file?.path);
    } else {
      setSelectedFile(URL.createObjectURL(file));
    }

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
  });

  const handleVideoDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const newFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });
    if (file) {
      formik.setFieldValue("sourceFile", [newFile]);
    }
  };

  const handleImageDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    const newFile = Object.assign(file, {
      preview: URL.createObjectURL(file),
    });

    if (file) {
      formik.setFieldValue("thumbnail", [newFile]);
    }
  };

  return (
    <Container maxWidth="xl">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={0} sx={{ mt: 4, mx: 3 }}>
          <Grid item xs={12} md={6}>
            <AutoCompleteCustom
              sx={{ mt: 2, mr: 3 }}
              name="courseId"
              //   loading={courseLoader}
              options={_.map(courseData, (ev) => {
                return { label: ev.name, value: ev.id };
              })}
              value={formik.values.courseId}
              onChange={(event, value) => {
                formik.setFieldValue("courseId", value);
              }}
              // label="Select Course"
              error={formik.touched.courseId && formik.errors.courseId}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "97%", mt: 2, mr: 3 }}>
              <TextField
                name="title"
                label="Title"
                {...formik.getFieldProps("title")}
                onChange={formik.handleChange}
                error={formik.touched.title && formik.errors.title}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "97%", mt: 2, mr: 3 }}>
              <InputLabel>User Type</InputLabel>
              <Select
                label="User Type"
                name="type"
                {...formik.getFieldProps("type")}
                onChange={formik.handleChange}
                error={formik.touched.type && formik.errors.type}
              >
                {typeData?.map((item, index) => {
                  return (
                    <MenuItem value={item?.value} key={`${index}type`}>
                      {item?.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "97%", mt: 2, mr: 3 }}>
              <UploadBox
                otherFile={true}
                height={58}
                name="sourceFile"
                accept={{
                  "video/*": [],
                }}
                label="Video"
                file={formik?.values?.sourceFile[0]}
                onDrop={handleVideoDrop}
                error={formik.touched.sourceFile && formik.errors.sourceFile}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "97%", mt: 2, mr: 3 }}>
              <UploadBox
                otherFile={true}
                height={58}
                name="thumbnail"
                accept={{
                  "image/*": [],
                }}
                label="Image"
                file={formik?.values?.thumbnail[0]}
                onDrop={handleImageDrop}
                error={formik.touched.thumbnail && formik.errors.thumbnail}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl sx={{ width: "97%", mt: 2, mr: 3 }}>
              <div {...getRootProps()} className="dropzone">
                <input
                  {...getInputProps()}
                  accept=".jpg, .png, .pdf"
                  // accept={{
                  //   "image/*": [],
                  // }}
                />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <div>
                    {selectedFile ? (
                      selectedFile?.split(".").includes("pdf") === true ? (
                        <p
                          style={{
                            fontSize: "11px",
                            marginBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {selectedFile}
                        </p>
                      ) : (
                        <div className="preview-container">
                          <img
                            src={selectedFile}
                            alt="preview"
                            className="upload-preview"
                          />
                          <button
                            onClick={removeFile}
                            className="remove-button"
                          >
                            <HighlightOffRoundedIcon />
                          </button>
                        </div>
                      )
                    ) : (
                      <div className="preview-container">
                        <img
                          src={fileUploadImg}
                          alt="upload icon"
                          className="upload-icon"
                        />
                      </div>
                    )}
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                )}
              </div>
            </FormControl>
          </Grid>

          <Stack sx={{ mt: 3, pb: 3 }}>
            <LoadingButton
              type="submit"
              variant="contained"
              // loading={bannerLoader}
            >
              {"Add Data"}
            </LoadingButton>
          </Stack>
        </Grid>
      </form>
    </Container>
  );
}

export default MUIFormValidation2;
