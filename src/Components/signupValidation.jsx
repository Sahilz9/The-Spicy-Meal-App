import * as Yup from "yup";

export const signupValidation = Yup.object({
  name: Yup.string().min(3).required(""),
  email: Yup.string()
    .email("Enter your valid email")
    .required(""),
  message: Yup.string().min(5).max(500).required(""),
});
