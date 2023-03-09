import React from 'react';
import Layout from "../../componets/layout/Layout";
import AdminMenu from "../../componets/layout/AdminMenu";
import {useAuth} from "../../context/Auth";

const AdminDashboard = () => {
    const [auth] = useAuth()
    return (
        <Layout title={"Admin Dashboard"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3 ">
                        <AdminMenu/>
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3  ">
                            <div className="card-header"><h1 className={"text-center"}>User Details</h1></div>
                            <h3>User Name is :"{auth?.user?.name}"</h3>
                            <h3>User Email is :"{auth?.user?.email}"</h3>
                            <h3>User Number is :"{auth?.user?.phone}"</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
