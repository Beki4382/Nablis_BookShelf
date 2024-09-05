import { Request, Response} from "express"
import { UserProfileService } from "../services/user";


export class UserProfileController {

    static async getProfile(req: Request, res: Response) {
        try {
            const user =  await UserProfileService.getProfile(req, res);
            res.status(200).send(user)
        } catch (err) {
    res.status(500).send({ message: "Error while getting user profile" });
        }
    }
        
    static async createProfile (req:Request, res:Response) {
        try {
            const user =  await UserProfileService.createProfile(req,res);
            res.status(200).send(user);
        }catch(err){
            res.status(500).send({ message: "Error while getting user profile" });
        }

    };
    static async updateProfile(req:Request, res:Response) {
        try {
            const user = await UserProfileService.updateProfile(req, res);
            res.status(200).send(user);
        } catch (err) {
    res.status(500).send({ message: "Error while getting user profile" });
        }

    };
    static async deleteProfile (req:Request, res:Response) {
        try {
            const user = await UserProfileService.deleteProfile(req, res);
            res.status(200).send(user);
        } catch (err) {
            res.status(500).send({ message: "Error while getting user profile" });
    
        }

    }
}
