import React from 'react';
import Layout from "../componets/layout/Layout";
import {useAuth} from "../context/Auth";

const HomePage = () => {
    const [auth, setAuth] = useAuth()

    return (
        <Layout title={"Best Offers"}>
            <h1>home page</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre>
        </Layout>
    );
};

export default HomePage;