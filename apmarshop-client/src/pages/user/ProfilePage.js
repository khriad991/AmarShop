import React from 'react';
import Layout from "../../componets/layout/Layout";
import UserMenu from "../../componets/layout/UserMenu";

const ProfilePage = () => {

    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu/>
                    </div>
                    <div className="col-md-9">
                        <h1>Profile Pgae </h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfilePage;