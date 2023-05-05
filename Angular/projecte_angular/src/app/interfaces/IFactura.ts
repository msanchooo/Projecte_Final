import { IClient } from "./IClient";
import { IVehicle } from "./IVehicle";

export interface IFactura {
        mostrarContrasenya: false;
        id:number;
        numero:string;
        total:number;
        total_con_iva:number;
        client:IClient;
        vehicle:IVehicle;
}
