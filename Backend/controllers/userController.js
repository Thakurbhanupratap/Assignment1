const User = require("../Model/user");
const bcrypt = require("bcryptjs");

module.exports.userRegisteration = async (req, res) => {
  const { name, email, phone, username, password } = req.body;
  if (!name || !email || !phone || !username || !password) {
    res
      .status(522)
      .json({ msg: "Please fill all the mentioned fields carefully." });
  } else {
    let result = await User.findOne({ email });
    let userNameCheck = await User.findOne({ username });
    if (result) {
      res.status(522).json({ msg: "Email is already registered." });
    } else if (userNameCheck) {
      res.status(522).json({ msg: "This username is already registered." });
    } else {
      try {
        const newUser = new User({
          name,
          email,
          phone,
          username,
          password,
        });

        await newUser.save();

        res
          .status(201)
          .json({ msg: "User registered successfully.", data: req.body });
      } catch (e) {
        res.status(500).json({ msg: e.message });
      }
    }
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json({ data: users });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ username });
    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        res.status(201).json({ msg: "User login successfully.", data: user });
      } else {
        res.status(400).json({ msg: "Username or password is wrong." });
      }
    } else {
      res.status(522).json({ msg: "Account doesn't exist." });
    }
  } catch (error) {
    res.status(522).json({ msg: error.message });
  }
};

module.exports.editUserName = async (req, res) => {
  try {
    const id = req.params.userId;
    const { username } = req.body;
    console.log(id);
    console.log(username);
    const isUserNameExist = await User.findOne({ username });
    if (isUserNameExist) {
      res.status(400).json({ msg: "This username already exists." });
    } else {
      const user = await User.findByIdAndUpdate(
        id,
        { username: username },
        { new: true }
      );

      res
        .status(201)
        .json({ msg: "Username changed successfully.", data: user });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports.findUserById = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await User.findById(id);
    console.log(user);
    res.status(201).json({ data: user });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
