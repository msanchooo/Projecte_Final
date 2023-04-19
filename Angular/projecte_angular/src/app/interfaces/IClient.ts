import { IUser } from "./IUser";

export interface IClient {

        id:number;
        nom:string;
        cognoms:string;
        nif:string;
        user_id:number;
        tipu_id:number;
        user:IUser; 
}
