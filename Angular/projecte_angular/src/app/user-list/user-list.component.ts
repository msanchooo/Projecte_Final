import { Component } from '@angular/core';
import { DadesUsersService } from '../datos/dades-users.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(private userService: DadesUsersService) { }

  ngOnInit(): void {
    //fem servir event de creacio
    console.log("Listat de clients inicialitzat");
    this.userService.getDades().subscribe(resp => {
      // accedim al body de la resposta HTTP.
      if(resp.body) this.users = resp.body;
    });
  }

  titolLlistat = 'Llistat de users';
  users:IUser[] = [];
}
