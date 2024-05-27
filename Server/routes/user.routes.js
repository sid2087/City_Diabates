const {signupUser}=require("../controllers/user.controller.js")
const {
    Router
}= require("express")
const router= Router()
router.post('/signup', signupUser);

module.exports = router