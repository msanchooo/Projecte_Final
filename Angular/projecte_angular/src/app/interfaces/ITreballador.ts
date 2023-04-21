import { IUser } from "./IUser";

export interface ITreballador {
        mostrarContrasenya: false;
        id:number;
        nom:string;
        cognoms:string;
        nif:string;
        sou:number;
        carrec:string;
        user:IUser;    

}
