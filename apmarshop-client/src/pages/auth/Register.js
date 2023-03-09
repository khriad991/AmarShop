import React, {useState} from 'react';
import "../../styles/AuthStyles.css"
import Layout from "../../componets/layout/Layout";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import cogoToast from "cogo-toast";


const Register = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState('')
    let [phone, setPhone] = useState('')
    let [address, setAddress] = useState("");

    let navigate = useNavigate()

    const heandleSubmit = async (e) => {
        e.preventDefault();
        try {
            let URL = "http://localhost:5000/api/v1/auth/register"
            const res = await axios.post(URL, {name, email, password, phone, address})
            let msg = await res.data.massage
            if (res && res.data.success) {
                cogoToast.success(msg)
                navigate('/login')
            } else {
                cogoToast.error(msg);
            }
        } catch (err) {
            console.log(err)
            cogoToast.error('Something Went Wrong')
        }
    }
    return (
        <Layout title="Register - Ecommer App">
            <div className="form-container" style={{minHeight: "90vh"}}>
                <form onSubmit={heandleSubmit}>
                    <h4 className="title">REGISTER FORM</h4>
                    <div className="mb-3">
                        <input type="text"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               className="form-control"
                               placeholder="Full Name"
                               required/>
                    </div>
                    <div className="mb-3">
                        <input type="email" value={email} className="form-control"
                               onChange={(e) => setEmail(e.target.value)}
                               placeholder="Email "
                               required/>
                    </div>
                    <div className="mb-3">
                        <input type="number"
                               onChange={(e) => setPhone(e.target.value)}
                               value={phone} className="form-control"
                               placeholder="Phone"
                               required/>
                    </div>
                    <div className="mb-3">
                        <input type="text"
                               onChange={(e) => setAddress(e.target.value)}
                               value={address} className="form-control"
                               placeholder="Address"
                               required/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control"
                               placeholder="Password"
                               onChange={(e) => setPassword(e.target.value)}
                               value={password} required/>
                    </div>
                    <button type="submit" className="btn btn-primary ">
                        REGISTER
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Register;