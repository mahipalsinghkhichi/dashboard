// import React, { useState } from 'react';
// import '../css/form.css';
// import database from '../firebase';
// import { v4 as uuid } from 'uuid';

// const Form = () => {
//     const initialdata = {
//         Name: "",
//         userid:"",
//         Email: "",
//         Password: "",
//         Confirm_password: ""
//     }
//     const [state, setState] = useState(initialdata);
//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setState({...state,[name]:value});
//     }

//     const handleSubmit=(e)=>{
//         const unqid = uuid();
//         const slicid = unqid.slice(0, 8);
//         state.userid = slicid;
//         e.preventDefault();
//         database.ref("form_table").push(state,(err)=>{
//             if (err) {
//                 alert("record is not inserted");
//             }
//             else{
//                 alert("record is  inserted");

//             }
//         });
//     }


//     return (
//         <>
//             <div className="form">

//                 <span className="form__title">Sign up</span>

//                 <form
//                     onSubmit={handleSubmit}
//                     action="/actuion">

//                     <div className="form__input">

//                         <i className="ri-user-line"></i>

//                         <input type="text" 
//                         name='Name'
//                         placeholder="Name" />
//                         onChange={handleChange}
//                         <span className="bar"></span>

//                     </div>

//                     <div className="form__input">

//                         <i className="ri-mail-line"></i>

//                         <input type="text"
//                         name='Email'
//                         placeholder="Email" />
//                         onChange={handleChange}
//                         <span className="bar"></span>

//                     </div>

//                     <div className="form__input">

//                         <i className="ri-lock-line"></i>

//                         <input type="text" 
//                         name="Password"
//                         placeholder="Password" />
//                         onChange={handleChange}
//                         <span className="bar"></span>

//                     </div>

//                     <div className="form__input">
//                         <i className="ri-lock-line"></i>
//                         <input
//                             type="text"
//                             name='Confirm password'
//                             placeholder="Confirm password" />
//                             onChange={handleChange}
//                         <span className="bar">

//                         </span>

//                     </div>
//                     <button
//                         type="submit"
//                         className="form__button">
//                         Sign up
//                     </button>

//                     <span className="form__switch">

//                         Already have an account? 
//                         <a href="loginPage">Login</a> 
//                     </span>
                  

//                 </form>

//             </div>
//         </>


//     );
// }

// export default Form;