import React from 'react';
import AdminMenu from "../../componets/layout/AdminMenu";
import Layout from "../../componets/layout/Layout";


const CreateCategory = () => {
    return (
        <Layout title={'Dashboard Create Category'}>
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

export default CreateCategory;