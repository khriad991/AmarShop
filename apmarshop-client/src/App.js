import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./componets/Routes/Private";
import AdminRoute from "./componets/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import User from "./pages/Admin/User";
import CreateProduct from "./pages/Admin/CreateProduct";
import ProfilePage from "./pages/user/ProfilePage";
import OrderPage from "./pages/user/OrderPage";


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path="/dashboard" element={<PrivateRoute/>}>
                    <Route path='user' element={<Dashboard/>}/>
                    <Route path='user/Profile' element={<ProfilePage/>}/>
                    <Route path='user/orders' element={<OrderPage/>}/>
                </Route>

                <Route path='/dashboard' element={<AdminRoute/>}>
                    <Route path='admin' element={<AdminDashboard/>}/>
                    <Route path='admin/create-category' element={<CreateCategory/>}/>
                    <Route path='admin/create-product' element={<CreateProduct/>}/>
                    <Route path='admin/users' element={<User/>}/>
                </Route>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/policy' element={<Policy/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>

        </>
    );
}

export default App;
