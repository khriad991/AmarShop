import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
// export const requireSignIn = async (req, res, next) => {
//     try {
//         const decode =await JWT.verify(req.headers.token, process.env.JWT_SECRET,);
//         req.user = decode;
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// };


//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,//postman harders variable is Authorization [A is capital use ] ///  || ror   req.headers.Authorization /token
            process.env.JWT_SECRET,
        );
        req.user = decode;
        next();
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            error,
            massage: 'erro in isAdmin middleware '
        })
    }
};


/// isAdmin Middlewate ------------>>
export const isAddmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            res.status(401).send({
                success: false,
                massage: "Unauthorized Access"
            })
        } else {
            next();
        }
    } catch (err) {
        console.log(err)
    }
}