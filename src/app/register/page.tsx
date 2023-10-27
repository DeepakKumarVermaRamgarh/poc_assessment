"use client";
import { useFormik } from "formik";
import { styles } from "../styles";
import * as Yup from "yup";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Please provide full name")
      .required("Please enter your name"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email!"),
    password: Yup.string()
      .required("Please enter your password")
      .min(6, "Use strong password"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: registerSchema,
    onSubmit: async ({ name, email, password }) => {
      console.log(name, email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="grid place-items-center w-full h-screen bg-blue-900 ">
      <form
        className="flex flex-col p-8 min-w-max bg-white text-blue-900 rounded-xl gap-5"
        onSubmit={handleSubmit}
      >
        <h3 className={styles.title}>Create Account</h3>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className={`${styles.input} ${
              errors.name && touched.name && "border-red-600"
            } `}
            value={values.name}
            onChange={handleChange}
            required
          />
          {errors.name && touched.name && (
            <span className={`${styles.errorMsg}`}>{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            inputMode="email"
            placeholder="abc@email.com"
            className={`${styles.input} ${
              errors.email && touched.email && "border-red-600"
            } `}
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && touched.email && (
            <span className={`${styles.errorMsg}`}>{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*************"
            className={`${styles.input} ${
              errors.password && touched.password && "border-red-600"
            } `}
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && touched.password && (
            <span className={`${styles.errorMsg}`}>{errors.password}</span>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Sign Up
        </button>

        <p className="text-center text-[14px]" >
          Already have an account ? <Link href="/login" className="font-semibold hover:underline" >Login</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Page;
