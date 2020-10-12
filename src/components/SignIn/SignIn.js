import React from "react";
import "./signIn.css";
import {  ToastContainer , toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";

import {firebaseDB} from "../firebase";

function Login(props) {
    const formik = useFormik({
        initialValues : {
            Email:"",
            Password:""
        },
        validationSchema:yup.object({
           
            Email: yup.string()
            .email()
            .required("Email is required"),
          
            Password: yup.string()
            .required("password is required"),
            
        }),
        onSubmit: (userInputData)=>{

            firebaseDB.auth()
                     .signInWithEmailAndPassword(userInputData.Email, userInputData.Password)
                     .then(() => props.onLogin())
                     .catch((err) => toast.error(err.message))
        
                      
        }
        
    } )


        return (
            <div>
            <div className ="signIn-div-background" >
             <ToastContainer /> 
             
            <form className="signIn-div"  autoComplete="off" onSubmit = {formik.handleSubmit}>
                <h3 className="text-center">SIGN IN</h3>


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

                <button type="submit"   className="btn btn-info btn-block">Submit</button>
                <p className="forgot-password text-center">
                New ? Click <a href="#Register" onClick={() => props.onchange()}>Register</a>
                </p>
            </form>

        </div>
        </div>
        );
    }



export default Login;