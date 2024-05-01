import {
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import { _initialValues, _validation } from "./utils";

export default function MuiFormValidation3() {
  const examMedium = [
    { id: 1, name: "Hindi" },
    { id: 2, name: "English" },
  ];

  const onSubmit = async (values) => {
    console.log("values....", values);
  };

  const formik = useFormik({
    initialValues: _initialValues,
    onSubmit,
    validationSchema: _validation,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>Full Name</Typography>
            <TextField
              name="fullname"
              {...formik.getFieldProps("fullname")}
              onChange={formik.handleChange}
              error={formik.touched.fullname && formik.errors.fullname}
              inputProps={{ style: { height: "10px" } }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>Father Name</Typography>
            <TextField
              name="fathername"
              {...formik.getFieldProps("fathername")}
              onChange={formik.handleChange}
              error={formik.touched.fathername && formik.errors.fathername}
              inputProps={{ style: { height: "10px" } }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>Date of Birth</Typography>
            <TextField
              InputLabelProps={{ shrink: true }}
              type="date"
              name="dob"
              fullWidth
              inputProps={{
                max: new Date().toISOString().split("T")[0],
                style: { height: "10px" },
              }}
              {...formik.getFieldProps("dob")}
              onChange={formik.handleChange}
              error={formik.touched.dob && formik.errors.dob}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>Gender</Typography>
            <RadioGroup>
              <Box sx={{ display: "flex" }}>
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      checked={formik.values.gender === "female"}
                      sx={{
                        color:
                          formik.touched.gender && formik.errors.gender
                            ? "red"
                            : "",
                      }}
                    />
                  }
                  label="Female"
                  name="gender"
                  onChange={formik.handleChange}
                  sx={{
                    color:
                      formik.touched.gender && formik.errors.gender
                        ? "red"
                        : "",
                  }}
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      checked={formik.values.gender === "male"}
                      sx={{
                        color:
                          formik.touched.gender && formik.errors.gender
                            ? "red"
                            : "",
                      }}
                    />
                  }
                  label="Male"
                  name="gender"
                  onChange={formik.handleChange}
                  sx={{
                    color:
                      formik.touched.gender && formik.errors.gender
                        ? "red"
                        : "",
                  }}
                />
              </Box>
              {/*formik.touched.gender && formik.errors.gender ? (
                    <p>Please sleect</p>
                  ) : (
                    ""
                  ) */}
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>Mobile No</Typography>
            <TextField
              name="phone"
              type="number"
              minLength={10}
              inputProps={{ maxLength: 10, style: { height: "10px" } }}
              // disabled={Boolean(id) && studentById?.phone}
              {...formik.getFieldProps("phone")}
              onChange={(e) => {
                if (String(e.target.value).length <= 10) {
                  formik.handleChange(e);
                }
              }}
              error={Boolean(formik.touched.phone && formik.errors.phone)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>Aadhar No</Typography>
            <TextField
              name="aadharno"
              {...formik.getFieldProps("aadharno")}
              onChange={formik.handleChange}
              error={formik.touched.aadharno && formik.errors.aadharno}
              inputProps={{ style: { height: "10px" } }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>Address</Typography>
            <TextField
              name="address"
              multiline
              rows={2}
              {...formik.getFieldProps("address")}
              onChange={formik.handleChange}
              error={formik.touched.address && formik.errors.address}
              inputProps={{ style: { height: "10px" } }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>Block No</Typography>
            <TextField
              name="blockno"
              {...formik.getFieldProps("blockno")}
              onChange={formik.handleChange}
              error={formik.touched.blockno && formik.errors.blockno}
              inputProps={{ style: { height: "10px" } }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl sx={{ width: "92%", ml: 2, mb: 2 }}>
            <Typography>School Name</Typography>
            <TextField
              name="schoolname"
              {...formik.getFieldProps("schoolname")}
              onChange={formik.handleChange}
              error={formik.touched.schoolname && formik.errors.schoolname}
              inputProps={{ style: { height: "10px" } }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl
            sx={{ width: "92%", ml: 2, mb: 2 }}
            error={Boolean(
              formik.touched.examMedium && formik.errors.examMedium
            )}
          >
            <Typography>Exam Medium</Typography>
            <Select
              // label="Course"
              name="examMedium"
              {...formik.getFieldProps("examMedium")}
              onChange={formik.handleChange}
              inputProps={{ style: { height: "40px !important" } }}
              sx={{ height: 43 }}
            >
              <MenuItem defaultValue value="">
                Select Medium
              </MenuItem>
              {examMedium?.map((ev, index) => {
                return (
                  <MenuItem value={ev.id} key={index}>
                    {ev.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#008035",
              color: "#fff",
              width: { xs: "50%", sm: "25%" },
              mb: 2,
              "&:hover": {
                border: "1px solid #008035",
                background: "#fff",
                color: "#008035",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </form>
  );
}
