import React, { useEffect, useState} from 'react';
import Contactform from "./contactform";
import FirebaseDb from "./firebase";
import "./contact.css";

function Contacts() {
       
     var [post, setPost] = useState({});
     var [postId, setPostId] = useState("");

     //fetch data from database
     useEffect(() => {               
        FirebaseDb.child('posts').on("value",e => {     
        if(e.val() != null)
          setPost({
              ...e.val()
          })
          else 
          setPost({})
        })
     },[])



    const AddorChange = obj => {
        if(postId === "")
        {
            FirebaseDb.child('posts').push(
                obj,
                err => { 
                    if(err)
                      console.log(err)
                }
            )
        }
        else{
            FirebaseDb.child(`posts/${postId}`).set(
                obj,
                err => { 
                    if(err)
                      console.log(err)
                    else
                    setPostId("");
                }
            )
        }
       
    }

    const onDelete = key => {
        if(window.confirm("want to delete this record? "))
        {
        FirebaseDb.child(`posts/${key}`).remove(
            err => { 
                if(err)
                  console.log(err)
                else
                  setPostId('');
            })
        }
    }

    return (
    <>
        <div className="jumbotron jumbotron-fluid main">
            <div className="container">
                <h1 className="display-4 text-center">KS SMART Task </h1>
            </div>   
        </div>
        
        <div className="row div2 w-auto">
             
            <div className="col-md-auto" style={{overflowX:"auto"}}>
                <table className="table table-hover table-striped" >
                   <thead className="thead-dark">
                       <tr>
                       <th>Name</th>
                       <th>Mobile</th>
                       <th className="w-25">Email</th>
                       <th >Edit/Remove</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           Object.keys(post).map(id => {
                               return <tr key={id}>
                                 <td>{post[id].name}</td>
                                 <td>{post[id].mobile}</td>
                                 <td>{post[id].email}</td>
                                 <td>
                                     <a className="btn text-primary" onClick = {() => { setPostId(id)}}>
                                         <i class="fas fa-user-edit"></i>
                                     </a>
                                     <a className="btn text-danger">
                                     <i class="fas fa-user-times" onClick = {() => {onDelete(id)}}></i>
                                     </a>
                                 </td>
                              </tr>}
                           )
                       }
                   </tbody>
                </table>
            </div>  
           
            <div className="col-md-4">
                <Contactform {...({AddorChange,postId,post})}/>
            </div>  
        </div>
    </>
    )
}

export default Contacts