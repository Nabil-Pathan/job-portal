import express from "express"
import { GoogleAuthController, Signincontroller, Signupcontroller } from "../controllers/authControllers"

const router = express.Router()

router.post('/signup',Signupcontroller)
router.post('/signin',Signincontroller)
router.post('/google',GoogleAuthController)

export default router
