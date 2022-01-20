const express= require ("express");
const { getUsers, getUser, updateUser, createUser, deleteUser, deleteAllUsers } = require("../controllers/controller");
const userRouter = express.Router()


userRouter.get('/',getUsers);
userRouter.get('/:id',getUser );
userRouter.put('/:id', updateUser );
userRouter.post('/',createUser );
userRouter.delete('/:id',deleteUser);
userRouter.delete('/',deleteAllUsers);

module.exports = userRouter