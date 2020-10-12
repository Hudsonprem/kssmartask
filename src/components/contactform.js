import React,{useEffect, useState} from 'react'

function Contactform(props) {

    const initialValues = {
        name: "",
        mobile : "",
        address: "",
        email: ""
    }

    var [values, setValues] = useState(initialValues);

    useEffect(() => {       
        if(props.postId === '')
            setValues({
                ...initialValues
            })
        else  
            setValues({
                ...props.post[props.postId]
            })
         },[props.postId, props.post])


    const onChangeValue = (e) => {
        var {name ,value} = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleOnchange = (e) => {
        e.preventDefault();
        props.AddorChange(values);
    } 

    return (
        <form autoComplete="off" onSubmit={handleOnchange}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="far fa-user"></i>
                    </div>
               </div>
               <input className="form-control" placeholder="Full Name" name="name" value={values.name}  onChange={onChangeValue}/>
             </div>

                <div className="form-group input-group ">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i className="far fa-envelope"></i>
                        </div>
                </div>
                <input className="form-control" placeholder="Email" name="email" value={values.email} onChange={onChangeValue}/>
                </div>

                <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        <i className="fas fa-mobile-alt"></i>
                        </div>
                </div>
                <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile} onChange={onChangeValue}/>
                </div>

                 <div className="form-group">
                  <textarea className="form-control" placeholder="Address" name="address" value={values.address}  onChange={onChangeValue}/>
                </div>
                
                <div className="form-group">
                  <input type="submit" value = {props.postId === ''  ? "submit" : "Update"} className="btn btn-primary btn-block"/>
                </div>
        </form>
    )
}

export default Contactform
