import express from "express"
import {registerController, loginController, testController} from "../controllers/authController.js";
import {isAddmin, requireSignIn} from "../middleWares/authMiddleware.js";

//router object --->>
const router = express.Router();

// register post
router.post("/register", registerController)

// login post ------>>>
router.post("/login", loginController)

// protected route for middleware
router.get('/test', requireSignIn, isAddmin, testController)

// protect route user -------- true for user auth ------>>
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ok: true})
})

//protected routed - for admin dashboard ----------------->>>
router.get('/admin-auth', requireSignIn, isAddmin, (req, res) => {
    res.status(200).send({ok: true})
})


export default router