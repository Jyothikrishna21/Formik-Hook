import * as yup from "yup";

const passwordRule = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5).matches(passwordRule, {message: "Please create a strong password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null],'Password must be match ').required("Required")

})