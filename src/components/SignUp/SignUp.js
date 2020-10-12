import React from "react";
import "./siginUp.css"
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";

import {firebaseDB} from "../firebase";

function SignUp(props) {
    const formik = useFormik({
        initialValues : {
            Email:"",
            Password:"",
            confirmpassword:"",
        },
        validationSchema:yup.object({
      
            Email: yup.string()
            .email()
            .required("Email is required"),
          
            Password: yup.string()
            .required("password is required"),
            
            confirmpassword: yup.string()
            .oneOf([yup.ref("Password"), null], "confirm password and password must me same")
            .required("password is required"),


        }),
        onSubmit: (userInputData)=>{
            firebaseDB.auth()
            .createUserWithEmailAndPassword(userInputData.Email, userInputData.Password)
            .then(() => {
            toast.success("successfully register")
            props.onchange()
        })
            .catch((err) => toast.error(err.message));
        }
    } )

   

  
        return (
            <div>
            <div className ="signUp-div-background"> 
            
            <form className="signUp-div" autoComplete="off" onSubmit = {formik.handleSubmit}>
                <ToastContainer />
               
                <h3 className="text-center">SIGN UP</h3>
              


                <div className="form-group">
                    <label>Email</label>
                    <input 
                    className="form-control"
                    type="text"  
                    name="Email"
                    onChange={formik.handleChange}
                    value={formik.values.Email}  
                    placeholder="email" />
                </div>
                {formik.errors.Email ? (<div className="text-danger">
                        {formik.errors.Email}
                </div>): null }

                <div className="form-group">
                    <label >Password</label>
                    <input 
                    className="form-control"
                    type="password"  
                    name="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}  
                    placeholder="Password" />
                </div>

                {formik.errors.Password ? (<div className="text-danger">
                        {formik.errors.Password}
                </div>): null }

                <div className="form-group">
                    <label >confirm Password</label>
                    <input 
                    className="form-control"
                    type="password"  
                    name="confirmpassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmpassword}  
                    placeholder="confirm Password" />
                </div>

                {formik.errors.confirmpassword ? (<div className="text-danger">
                        {formik.errors.confirmpassword}
                </div>): null }

                <button type="submit" className="btn btn-info btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered!! Click <a href="#Login" onClick={() => props.onchange()}>Login</a>
                </p>
            </form>
            </div>
            </div>
        
        );
    }


export default SignUp;