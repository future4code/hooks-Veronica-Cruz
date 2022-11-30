import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userBusiness = new UserBusiness(
  new IdGenerator(),
  new TokenGenerator(),
  new HashManager(),
  new UserDatabase()
);

const userController = new UserController(userBusiness);

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.put("/edit/:id", userController.editUser);