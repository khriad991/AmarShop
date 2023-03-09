import UserModel from '../models/userModel.js'
import {comparePassword, hashPassword} from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'

export const registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address} = req.body
        if (!name) {
            return res.send({massage: 'name is Requrid'})
        }
        if (!email) {
            return res.send({massage: "email is Required"})
        }
        if (!password) {
            return res.send({massage: 'password is Requried '})
        }
        if (!phone) {
            return res.send({massage: 'phone Number is Requried '})
        }
        if (!address) {
            return res.send({massage: 'address is Requriedc'})
        }
        // check user ------
        const exitingUser = await UserModel.findOne({email})
        if (exitingUser) {
            return res.status(200).send({
                success: false,
                massage: "already Register Please login"
            })
        }
        const hashedPassword = await hashPassword(password);
        const user = await new UserModel({name, email, phone, address, password: hashedPassword}).save();

        res.status(201).send({
            success: true,
            massage: 'Registetion Successfull',
            user,
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            massage: 'error in Ragistetion ',
            error: "error while calling registetion api"
        })
    }
};


//POST LOGIN
export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }
        //check user
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }
        //token
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
};


// text router for middlewqre
export const testController = (req, res) => {
    res.send("protected route")
}