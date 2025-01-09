import React from 'react';
import {useRef, useEffect} from "react";
import {Formik} from "formik";
import {Link, useNavigate} from 'react-router-dom';
import * as Yup from 'yup';


function RegisterPage() {

  const inputRef = useRef();
  const nav = useNavigate();

  // Autofocusing on the input field.
  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    surName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character'),
    confirmPassword: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });



  const RegistrationForm = () => (
      <div>
        <Formik
            //Specify the fields you will use in the form
            initialValues={{firstName: '',
                            surName: '',
                            email: '',
                            password: '',
                            confirmPassword: ''}}
            // Link the validation const object to the validation of the form with the help of YUP
            validationSchema={SignupSchema}
            onSubmit={values => {
              // The Alert is just there for debugging purpose
              //Display the values that was entered
              //alert(JSON.stringify(values, null, 2));
              alert("User is successfully registered, Please login to continue");
              // Navigate back to the login screen
              nav("/");
            }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
                // Create the form to display for the user.
              <form onSubmit={handleSubmit}>
                <div>
                  <h2 className={"register-heading"}>Register an account</h2>
                  </div>
                <div>
                  <label className={"login-text-label"}>First Name</label>
                </div>
                <div>
                  <input className={"login-text-input"}
                         type="text"
                         name="firstName"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.firstName}
                         ref={inputRef}
                  />
                  {errors.firstName ? <div className={"login-error-text"}> { errors.firstName} </div> : null}
                </div>
                <div>
                  <label className={"login-text-label"}>Surname</label>
                </div>
                <div>
                  <input className={"login-text-input"}
                         type="text"
                         name="surName"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.surName}
                  />
                  {errors.surName ? <div className={"login-error-text"}> { errors.surName} </div> : null}
                </div>
                <div>
                  <label className={"login-text-label"}>Email Address</label>
                </div>
                <div>
                  <input className={"login-text-input"}
                         type="email"
                         name="email"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.email}
                  />
                  {errors.email ? <div className={"login-error-text"}> { errors.email} </div> : null}
                </div>
                <div>
                  <label className={"login-text-label"}>Password</label>
                </div>
                <div>
                  <input className={"login-text-input"}
                         type="password"
                         name="password"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.password}
                  />
                  {errors.password ? <div className={"login-error-text"}> { errors.password} </div> : null}
                </div>

                <div>
                  <label className={"login-text-label"}>Confirm Password</label>
                </div>
                <div>
                  <input className={"login-text-input"}
                         type="password"
                         name="confirmPassword"
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.confirmPassword}
                  />
                  {errors.confirmPassword ? <div className={"login-error-text"}> { errors.confirmPassword} </div> : null}
                </div>
                <div>
                  <button className={"login-text-button"} type="submit"
                  >
                    Register
                  </button>
                </div>
                <div>
                  <div className="register-message">
                    <span>Already have an account? </span>
                    <span className="login-text" onClick={() => nav(`/`)}>Please login</span>
                  </div>
                </div>
              </form>
          )}
        </Formik>
      </div>
  );

  return (<div>
    <RegistrationForm/>
  </div>);
}

export default RegisterPage;