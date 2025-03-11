"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../../controller/userController/authController");
const profileController_1 = require("../../controller/userController/profileController");
const authenticater_1 = __importDefault(require("../../middlewares/authenticater"));
const profileController_2 = require("../../controller/userController/profileController");
const articleController_1 = require("../../controller/userController/articleController");
const multer_1 = require("../../config/multer");
const profileController_3 = require("../../controller/userController/profileController");
const articleController_2 = require("../../controller/userController/articleController");
const articleController_3 = require("../../controller/userController/articleController");
const articleController_4 = require("../../controller/userController/articleController");
const router = express_1.default.Router();
router.post("/signup", authController_1.signup);
router.post("/signin", authController_1.signin);
router.post("/get-profile-info", authenticater_1.default, profileController_1.getprofileInfo);
router.get("/get-all-categories", profileController_2.getAllCategories);
router.post("/create-article", multer_1.upload.single("image"), articleController_1.creteArticle);
router.patch("/edit-profile", profileController_3.editProfile);
router.patch("/edit-article", articleController_2.editArticle);
router.get("/get-all-articles", articleController_3.getAllArticles);
router.delete("/delete-article", articleController_4.deleteArticle);
exports.default = router;
