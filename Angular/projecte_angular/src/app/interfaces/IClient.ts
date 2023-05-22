import { IUser } from "./IUser";

export interface IClient {
        id:number;
        nom:string;
        cognoms:string;
        nif:string;
        user:IUser;    
        direccio:String;
        movil:number;
}
