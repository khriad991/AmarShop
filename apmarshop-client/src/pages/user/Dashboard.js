import React from 'react';
import Layout from "../../componets/layout/Layout";
import UserMenu from "../../componets/layout/UserMenu";
import {useAuth} from "../../context/Auth";

const Dashboard = () => {
    const [auth] = useAuth()
    return (
        <Layout title={"Dashboard -AmarShop"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu/>
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <div className="card-header"><h3>Your Detaild</h3></div>
                            <div className="card-body">
                                <h4>Your Name is : {auth?.user?.name}</h4>
                                <h4>Your Email iss : {auth?.user?.email} </h4>
                                <h4>Your Phone Number is : {auth?.user?.phone}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;