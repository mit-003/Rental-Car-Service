import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
import { useContext, useState } from "react";
import { json } from "react-router";
import {Link} from 'react-router-dom';

export default function Register(){
    const [account,setAccount] = useState("");

    const submitHandler = async(values, setSubmitting) => {
        console.log(account)
        const value = {...values,role:account}
        alert(JSON.stringify(value));
        await axios.post('http://localhost:8083/user',value).then((data) => data.json())
        .then((data) => console.log(data));
        alert(values);
      };
      const validator=(values)=>{
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
         values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
    };
    return <div>
        <section className="vh-60" style={{backgroundColor:"#9A616D"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius:"1rem"}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="pexels-zen-chung-5745171.jpg"
                            alt="login form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem"}}/>
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                        <div className="d-flex align-items-center mb-3 pb-1">
                                <i className="fas fa-cubes fa-2x me-3" style={{color:"#ff6219"}}></i>
                                <span className="h1 fw-bold mb-0">Signup</span>
                            </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>create your account</h5>
                        <Formik
                        onSubmit={submitHandler}
                        initialValues={{ email: "",password:"",uname:"" }}
                        validate={validator}
                        style={{margin:'0 auto'}}
                        >
                        {({ isSubmitting }) => (
                            <Form>

<div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >UserId</label>
                                <Field text="text" id="userId" className="form-control form-control-lg" name="userId" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="userId" id="userId" component="div" />
                            </div>

                            </div> 


                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >Name</label>
                                <Field text="text" id="name" class="form-control form-control-lg"  name="name" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="name" id="name" component="div" />
                            </div>

                            </div> 



                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >Email address</label>
                                <Field type="email" id="email" className="form-control form-control-lg" name="email" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="email" id="email" component="div" />
                                </div>
                            </div>
                            

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >Username</label>
                                <Field text="text" id="uname" className="form-control form-control-lg" name="uname" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="uname" id="uname" component="div" />
                                </div>
                            </div>

                            

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example27" >Password</label>
                                <Field type="password" id="password" className="form-control form-control-lg" name="password" placeholder=" "/>
                                <ErrorMessage class="form-text text-muted" name="password" id="password" component="div" />
                                </div>
                            </div>
                             

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >Role</label>
                                <Field type="text" id="role" className="form-control form-control-lg" name="role" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="role" id="role" component="div" />
                                </div>
                            </div>




                            {/* <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example27">Select Account Type</label> */}
                                {/* <Field as="select" name="accounttype" id="accounttype" style={{marginLeft:"20px",padding:"5px"}} onChange={(e)=>setAccount(e.target.option)} >
                                  <option value="Professional">Professional</option>
                                  <option value="Consumer">Consumer</option>
                                </Field> */}
                                {/* <select  style={{marginLeft:"20px",padding:"5px"}} onChange={(e)=>setAccount(e.target.value)}>
                                    <option value="Select-one">Select-one</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Consumer">Consumer</option>
                                </select> */}
                                {/* </div> */}
                                {/* <Field type="password" id="password" className="form-control form-control-lg" name="password" placeholder=" "/>
                                <ErrorMessage class="form-text text-muted" name="password" id="password" component="div" /> */}
                            {/* </div> */}

                            {/* <select name="pets" id="pet-select">
                                <option value="">--Please choose an option--</option>
                                <option value="dog">Dog</option>
                            </select> */}

                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={isSubmitting}>Signup</button>
                            </div>
                            <p className="mb-5 pb-lg-2" style={{color:"#393f81"}}>Already have an account? <button 
                                style={{color:"black",border:"none",backgroundColor:"white"}}><Link to='/Login' style={{textDecoration:"none",color:"black"}}>Login Here</Link></button></p>
                            </Form>
                        )}
                        </Formik>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
}