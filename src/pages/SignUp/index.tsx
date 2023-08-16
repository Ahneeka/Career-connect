
import { Form, Formik, FormikHelpers, Field, FieldProps } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
// import styles from "../styles.module.css";

interface IProps {}

function SignUp(props: IProps) {
  interface ISignup {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    rememberme: boolean;
  }

  const initialValue: ISignup = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword:"",
    rememberme: false
  };

  const signupSchema = yup.object().shape({
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

  const navigate = useNavigate();

  const onSubmit = (values: ISignup, helpers: FormikHelpers<ISignup>) => {
    console.log(values);
    navigate("/welcome");
  };
  return (
    <div className="wrapper">
      <div className="container">
        <img src="/images/Group 4.png" alt=" " />

        <Formik
          onSubmit={onSubmit}
          validationSchema={signupSchema}
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
                    type="password" 
                    placeholder="Confairm Password" 
                    className="inputField"
                    {...field} />
                    {meta.touched && meta.error ? (
                      <p className="text">{meta.error as string}</p>
                    ) : null}
                  </div>
                )}
              </Field>

              <Field name='remember me'>
                {({field,meta}: FieldProps<ISignup['rememberme']>) => (
                    <div className='flex' >
                    <input 
                    type='checkbox' 
                    name='remember me'
                    /> I agree to the <span>terms of service</span> and <span>privacy policy</span> guiding this platform
                    {meta.touched && meta.error ? <div>meta.error</div> : null}
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
