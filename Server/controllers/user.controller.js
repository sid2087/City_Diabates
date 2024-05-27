const User = require("../models/user.model");

const signupUser = async (req, res) => {
  try {
    const { firstName, lastName, email, gender, mobileNo, password } = req.body;
    console.log(req.body)
    if (
      !firstName ||
      !lastName ||
      !email ||
      !gender ||
      !mobileNo ||
      !password
    ) {
      return res.status(400).json({ message: "All the fields required" });
    }
    const exixtsUser = await User.findOne({ email });
    if (exixtsUser) {
      return res.status(400).json({ message: "User already exists please" });
    }
const user = await User.create({
    firstName,
    lastName,
    email,
    gender,
    mobileNo,
    password
})
const createdUser=(await User.findById(user._id).select("-password")).toObject()
if (!createdUser){
    return res.status(400).json({ message: "User not created Something went wrong" });
}
return res.status(201).json({
    message: "User Created",
    user: createdUser
})
  } catch (error) {
    console.log(error);
  }
};

module.exports = {signupUser}