import React, {useState} from 'react';
import "../../styles/AuthStyles.css"
import Layout from "../../componets/layout/Layout";
import axios from "axios";
import {useLocation, useNavigate,} from "react-router-dom";
import {useAuth} from "../../context/Auth";
import cogoToast from "cogo-toast";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let URL = "http://localhost:5000/api/v1/auth/login"
            const res = await axios.post(URL, {email, password});
            let msg = res.data.message

            if (res && res.data.success) {
                cogoToast.success(msg)
                setAuth({
                    ...auth,
                    auth: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem("auth", JSON.stringify(res.data))
                navigate(location.state || "/")
                window.location.reload();// it's for me
            } else {
                cogoToast.error(msg);
            }
        } catch (error) {
            console.log(error);
            cogoToast.error("Something went wrong", {position: "top-right"});
        }
    };

    return (
        <Layout title="Register - Ecommer App">
            <div className="form-container" style={{minHeight: "90vh"}}>
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>

                    <div className="mb-3">
                        <input type="email" value={email} className="form-control"
                               onChange={(e) => setEmail(e.target.value)}
                               placeholder="Email "
                               required/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control"
                               placeholder="Password"
                               onChange={(e) => setPassword(e.target.value)}
                               value={password} required/>
                    </div>
                    <button type="submit" className="btn btn-primary ">
                        LOGIN
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;