import { equal } from "assert";
import { Form, Formik, FormikHelpers, Field, FieldProps } from "formik";
import * as yup from "yup";
// import styles from "../styles.module.css";

interface IProps {}

function SignUp(props: IProps) {
  interface ILogin {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const initialValue: ILogin = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword:"",
  };

  const loginSchema = yup.object().shape({
    fullName: yup.string().required("Required*"),
    email: yup.string().email("Invalid email format").required("Required*"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(30, "Password must be at least 30 characters")
      .required("Required*"),
    confirmPassword: yup.string()
     .test("equalToPassword", "password mismatching", (value, context) => {
        return value === context.parent.password;
     })
     .required("Required*"),

  });

  const onSubmit = (values: ILogin, helpers: FormikHelpers<ILogin>) => {
    console.log(values);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <img src="/images/Group 4.png" alt=" " />

        <Formik
          onSubmit={onSubmit}
          validationSchema={loginSchema}
          initialValues={initialValue}
          enableReinitialize
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Field name="fullName">
                {({ field, meta }: FieldProps) => (
                  <div>
                    <input
                      type="text"
                      className="inputField"
                      placeholder="FullName"
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <p className="text">{meta.error as string}</p>
                    ) : null}
                  </div>
                )}
              </Field>

              <Field name="email">
                {({ field, meta }: FieldProps) => (
                  <div>
                    <input 
                    type="email" 
                    placeholder="Email" 
                    className="inputField"
                    {...field} />
                    {meta.touched && meta.error ? (
                      <p className="text">{meta.error as string}</p>
                    ) : null}
                  </div>
                )}
              </Field>

              <Field name="password">
                {({ field, meta }: FieldProps) => (
                  <div>
                    <input 
                    type="password" 
                    placeholder="Password"
                    className="inputField" 
                    {...field} 
                    />
                    {meta.touched && meta.error ? (
                      <p className="text">{meta.error as string}</p>
                    ) : null}
                  </div>
                )}
              </Field>

              <Field name="confairmPassword">
                {({ field, meta }: FieldProps) => (
                  <div>
                    <input 
                    type="text" 
                    placeholder="Confairm Password" 
                    className="inputField"
                    {...field} />
                    {meta.touched && meta.error ? (
                      <p className="text">{meta.error as string}</p>
                    ) : null}
                  </div>
                )}
              </Field>


              <div>
                <button className="btn" type="submit" aria-label="">
                    Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="wrapp">
            <img src="/images/animation 2.png" alt=" "/>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
