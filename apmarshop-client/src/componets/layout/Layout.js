import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Helmet} from "react-helmet";
import {ToastContainer} from 'react-toastify';


const Layout = ({children, title, author, keywords, description}) => {
    return (
        <div>
            <Helmet>
                <meta name="decription " content={description}/>
                <meta name="keywords " content={keywords}/>
                <meta name="author" content={author}/>
                <title>{title}</title>
            </Helmet>
            <Header/>
            <main style={{minHeight: "70vh"}}>
                <ToastContainer/>
                {children}
            </main>
            <Footer/>
        </div>
    );
};
Layout.defaultProps = {
    title: "AmarShop - Shop Now",
    description: ' MERN Project',
    keywords: "Nodejs, Express, MongoDB, React ",
    author: "Kamrul Hasan"
}

export default Layout;