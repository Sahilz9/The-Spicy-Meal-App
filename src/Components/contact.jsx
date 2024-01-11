import { useFormik } from "formik";
import { signupValidation } from "./signupValidation";
import logoImg from "../assets/img/the spicy meal.jpg";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: signupValidation,
    onSubmit: (values) => {
      // console.log(values);
    },
  });
  return (
    <>
      {/* <h1 className="contact-header pt-10">Contact Me</h1> */}

      <div className="main-form-container">
        <img className="contact-img" src={logoImg} alt="img" />

        <form onSubmit={handleSubmit} className="form-container" action="">
          <input
            className="form-name bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-700 border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id=""
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />{" "}
          {errors.name && <small>{errors.name}</small>} <br />
          <input
            className="form-email bg-gray-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-700 border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-black-500"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />{" "}
          {errors.email && <small>{errors.email}</small>}
          <br />
          <textarea
            className="text-area bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white-700 border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your message......."
            name="message"
            id=""
            cols="30"
            rows="10"
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
          ></textarea>{" "}
          {errors.message && <small>{errors.message}</small>} <br />
          <button
            className="form-submit-btn text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
