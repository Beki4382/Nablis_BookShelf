import { Response, Request } from "express";
import { User } from "../model/user";



export default class UserProfileRepository{
    static async getProfile(){
        return await User.find({});
        
    };
    static async createProfile(profile: any){
        const user = await User.create(profile);
        return user
       
    }
    static async updateProfile(id:string, newProfile:any ){
        const updatedUser = await User.findByIdAndUpdate(id, newProfile, { new: true });
        return updatedUser;
        
    }
    static async deleteProfile(id:string){
        return await User.findByIdAndDelete(id);
        
    
      
        
    }
}