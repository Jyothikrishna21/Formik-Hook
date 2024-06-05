import React from 'react'
import './Signup.css'
import { useFormik } from "formik"
import { basicSchema } from '../schemas';

const onSubmit = async(values, actions)=>{
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve,1000));
  actions.resetForm();
}

function SignUp() {

  const {values,errors, 
    touched,
    isSubmitting,
    handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: '',
      password: "",
      confirmPassword: "",

    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <>
    <form  onSubmit={handleSubmit}autoComplete="off">
        <label htmlFor="email">Email</label>
        <input 
          value={values.email}
          onChange={handleChange}
          id="email" type="text"
          placeholder="Enter your email" 
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && <p className="error">{errors.email}</p>}


        <label htmlFor="age">Age</label>
        <input 
          value={values.age}
          onChange={handleChange}
          id="age" type="number"
          placeholder="Enter your Age"
          onBlur={handleBlur}
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}

        <label htmlFor="password">Password</label>
        <input 
        value={values.password}
        onChange={handleChange}
        id="password" type="password"
        placeholder="Enter your password" 
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && <p className="error">{errors.password}</p>}

        <label htmlFor="confirmPassword">ConfirmPassword</label>
        <input 
        value={values.confirmPassword}
        onChange={handleChange}
        id="confirmPassword" type="password" placeholder="Confirm Password"
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}/>
        
        {errors.confirmPassword && touched.confirmPassword  && <p className="error">{errors.confirmPassword}</p>}
        
        <button disabled={isSubmitting}  type="submit">Submit</button>
    </form>
    </>
  )
}

export default SignUp;