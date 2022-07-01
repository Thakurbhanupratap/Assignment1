const router = require("express").Router();
const {
  userRegisteration,
  getAllUsers,
  login,
  editUserName,
  findUserById,
} = require("../controllers/userController");

router.post("/register", userRegisteration);

router.get("/getAllUsers", getAllUsers);

router.post("/login", login);

router.post("/editusername/:userId", editUserName);

router.get("/findUser/:userId", findUserById);

module.exports = router;
