import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useAuth} from "../context/Auth";
import cogoToast from "cogo-toast";

const Header = () => {
    const [auth, setAuth] = useAuth()

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: '',
        })
        localStorage.removeItem("auth")
        cogoToast.success("logout success")
        // window.location.reload()
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/"> AmarShop</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cetagory">Cetagory</NavLink>
                            </li>
                            {
                                !auth?.user ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/register">Sing Up</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/login">LogIn</NavLink>
                                        </li>

                                    </>) : (<>

                                    <li className="nav-item dropdown">
                                        <NavLink to='#' className="nav-link dropdown-toggle" role="button"
                                                 data-bs-toggle="dropdown" style={{border: "none"}}>
                                            {auth?.user?.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink
                                                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                                    className="dropdown-item"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    onClick={handleLogout}
                                                    to="/login"
                                                    className="dropdown-item"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>)
                            }
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/addToCard">Cart(0)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;