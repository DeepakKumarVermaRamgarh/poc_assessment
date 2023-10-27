"use client";
import { useFormik } from "formik";
import { styles } from "../styles";
import * as Yup from "yup";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email!"),
    password: Yup.string()
      .required("Please enter your password")
      .min(6, "Use strong password"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="grid place-items-center w-full h-screen bg-blue-900 ">
      <form
        className="flex flex-col p-8 min-w-max bg-white text-blue-900 rounded-xl gap-5"
        onSubmit={handleSubmit}
      >
        <h3 className={styles.title}>Login to your account</h3>

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

        <div className="flex gap-2 align-baseline ">
          <input type="checkbox" name="remember" id="remember" /> Remember me
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
        <p className="text-center text-[14px]">
          Already have an account ?{" "}
          <Link href="/register" className="font-semibold hover:underline">
            Sign Up
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Page;
