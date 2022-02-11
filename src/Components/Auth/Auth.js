import React, { Component } from "react";
import { Formik } from "formik";

class Auth extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            passwordConfirm: ""
                        }

                    }
                    onSubmit={
                        (values) => {
                            console.log(values);
                        }
                    }
                >
                    {({ values, handleChange,handleSubmit }) => (<div>
                        <form onSubmit={handleSubmit}>
                            <input name="email"
                                placeholder="Enter your email" className="form-control" value={values.email} onChange={handleChange} />
                            <br />
                            <input name="password" placeholder="Enter your password" className="form-control" value={values.password} onChange={handleChange} />
                            <br />
                            <input name="passwordConfirm" placeholder="Enter your password Again" className="form-control" value={values.passwordConfirm} onChange={handleChange} />

                            <br />
                            <button type="submit" className="btn btn-success">Sign Up</button>
                        </form>
                    </div>)}
                </Formik>
            </div>
        )
    }
}

export default Auth;