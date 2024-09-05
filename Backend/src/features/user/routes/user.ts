import { Router } from "express";
import { UserProfileController } from "../controller/user";


const router = Router();

router.get("/", UserProfileController.getProfile);
router.post("/", UserProfileController.createProfile);
router.patch("/:id", UserProfileController.updateProfile);
router.delete("/:id", UserProfileController.deleteProfile);

export default router;