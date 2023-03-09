import React from 'react';
import Layout from "../../componets/layout/Layout";
import AdminMenu from "../../componets/layout/AdminMenu";

const User = () => {

    return (
        <Layout title={"Dashboard All Users"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3"><AdminMenu/></div>
                    <div className="col-md-3">
                        <h1>All Users</h1>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default User;