import * as yup from "yup";

export const _initialValues = {
  fullname: "",
  fathername: "",
  dob: "",
  gender: "",
  phone: "",
  aadharno: "",
  address: "",
  blockno: "",
  schoolname: "",
  examMedium: "",
};

export const _validation = yup.object().shape({
  fullname: yup.string().required("Field is required"),
  fathername: yup.string().required("Field is required"),
  dob: yup.string().required("Field is required"),
    gender: yup.string().required("Field is required"),
//   gender: yup
//     .string()
//     .required("Please select your gender")
//     .oneOf(["male", "female"], "Invalid gender selection"),
  phone: yup.string().required("Field is required"),
  aadharno: yup.string().required("Field is required"),
  address: yup.string().required("Field is required"),
  blockno: yup.string().required("Field is required"),
  schoolname: yup.string().required("Field is required"),
  examMedium: yup.string().required("Field is required"),
});
