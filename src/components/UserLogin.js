import React from "react";
import {useRef, useEffect} from "react";
import {Formik} from "formik";
import {Link, useNavigate} from 'react-router-dom';
import * as Yup from "yup";


function UserLogin(props) {

  const [loggedInButton, setLoggedInButton] = React.useState("Login");
  const inputRef = useRef();
  const nav = useNavigate();

  // Autofocusing on the input field.
  useEffect(() => {
      inputRef.current.focus();
  }, []);

  let loginButtonText = "Login";

  console.log(`LogedinButton ${loggedInButton}`);
  console.log(`props.loggedIn ${props.loggedIn}`);


  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character'),
  });



  const SignupForm = () => (
      <div>
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={LoginSchema}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
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
              <form onSubmit={handleSubmit}>
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
                         ref={inputRef}
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
                </div>
                {errors.password ? <div className={"login-error-text"}> { errors.password} </div> : null}
                <div>
                  <button className={"login-text-button"} type="submit" disabled={isSubmitting} onClick={login}>
                    Login
                  </button>
                </div>
                <div>
                  <div className="register-message">
                    <span>Dont have an account? </span>
                    <span className="login-text" onClick={() => nav(`/register`)} disabled={isSubmitting}>Register</span>
                  </div>
                </div>
              </form>
          )}
        </Formik>
      </div>
  );


  //Set the toggle variable to indicate if the user loggedin or not
  function login() {
    let userName = inputRef.current.value;

    if (!userName) {
      alert("Please enter your username");
    } else {

      // If user is already logged in then set the loggedin to false
      if (props.loggedIn) {
        loginButtonText = "Login";
        setLoggedInButton(loginButtonText);
      } else {
        //Set the name and pass it back to the main homepage
        loginButtonText = "Logout";
        setLoggedInButton(loginButtonText);

      }

      props.updateLoggedInVariables(!props.loggedIn, userName);

    }
  }


  return (
      <div>
        <SignupForm/>
      </div>
  );
}

export default UserLogin;


/*
//Input field
<input
    type="text"
    placeholder="Enter your User name"
    ref={inputRef}
/>
//Button to search based on the input
<button onClick={login}>{loggedInButton}</button>
 */