import { IClient } from "./IClient";

export interface IVehicle {
        
        id:number;
        matricula:string;
        marca:string;
        model:string;
        client:IClient;    
}
