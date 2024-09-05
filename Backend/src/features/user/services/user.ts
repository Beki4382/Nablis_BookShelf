import { Request, Response} from "express"
import UserProfileRepository from "../repository/user";


export class UserProfileService {

    static async getProfile(req: Request, res: Response) {
           return await UserProfileRepository.getProfile();
           
    }
        
    static async createProfile (req:Request, res:Response) {
            const profile = req.body;
           return await UserProfileRepository.createProfile(profile);
           
        
    };
    static async updateProfile(req:Request, res:Response) {
       
            const id = req.params.id;
            const newProfile = req.body;
            return await UserProfileRepository.updateProfile(id, newProfile);
            

    };
    static async deleteProfile (req:Request, res:Response) {
        
            const id = req.params.id;
            return await UserProfileRepository.deleteProfile(id);
            
        

    }
}
