import { IClient } from "./IClient";
import { IServei } from "./IServei";
import { IVehicle } from "./IVehicle";

export interface IFactura {
        mostrarContrasenya: false;
        id:number;
        data:string;
        numero:string;
        total:number;
        total_con_iva:number;
        serveis:IServei;
        client:IClient;
        vehicle:IVehicle;
}
