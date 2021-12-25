import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory();
    const handleSubmit = async (e) => {
        console.log("handle submit");
        e.preventDefault();
        const response = await fetch("http://localhost:6969/Login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log("json", json);
        if (json.success) {
            //save auth token and redirect
            localStorage.setItem('cToken', json.token);
            localStorage.setItem('username', json.user.username);
            localStorage.setItem('email', json.user.email);
            history.push("/");
        }
        else {
            alert("Invalid credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="bmiCard">
                <Container className=' d-flex justify-content-center '>
                    <div>
                        <h1 className="text-center">Sign In</h1>

                        <div className="card mx-3 " style={{ width: "18rem" }}>
                            <div className="card-body ">

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" aria-describedby="emailHelp" name="email" placeholder="Enter email" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary" >Submit</button>
                                    <p className="forgot-password text-right">
                                        <a href="/signup">Sign Up</a>
                                    </p>
                                </form>
                                {/* ---- */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>

    );
}
export default Login