import React from 'react';
import {NavLink} from "react-router-dom";

const UserMenu = () => {

    return (
        <>
            <div className="text-center">
                <div className="list-group">
                    <h4>User Dashboard</h4>
                    {/*<NavLink to="/dashboard/user"*/}
                    {/*         className="list-group-item list-group-item-action">Your Dashboard*/}
                    {/*</NavLink>*/}
                    <NavLink to="/dashboard/user/profile"
                             className="list-group-item list-group-item-action">Usre Progile
                    </NavLink>
                    <NavLink to="/dashboard/user/orders"
                             className="list-group-item list-group-item-action">All Orders
                    </NavLink>
                </div>
            </div>


        </>
    );
};

export default UserMenu;