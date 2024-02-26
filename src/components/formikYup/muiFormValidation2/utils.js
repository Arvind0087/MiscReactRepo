import * as yup from "yup";
export const _initial = {
  title: "",
  courseId: {},
  type: "",
  image: [],
  sourceFile: [],
  thumbnail:[]
};

export const _validate = yup.object().shape({
  //   name: yup.array().min(1, "required"),
  title: yup
    .string()
    .test("no-whitespace", "Whitespace only is not allowed", (value) =>
      value ? value.trim().length > 0 : true
    )
    .required(),

  courseId: yup.object({
    label: yup.string().required(),
  }),

  type: yup.string().required(),
  image: yup.array().min(1, "required"),
  sourceFile: yup.array().min(1, "required"),
  thumbnail: yup.array().min(1, "required"),
  // sourceFile: yup.array().when("source", {
  //   is: (ev) => ev === "upload",
  //   then: yup.array().min(1),
  //   otherwise: yup.array(),
  // }),
});

export const courseData = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
  { id: 4, name: "Course 4" },
  { id: 5, name: "Course 5" },
];

export const typeData = [{ value: "Primary" }, { value: "Secondary" }];
