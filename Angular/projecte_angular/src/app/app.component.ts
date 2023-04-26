import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'projecte_angular';
  ismenurequired=false;
  constructor(private router:Router){}

  //Entiendo q esto es para hacer visible o no la navbar(menu), min49
  ngDoCheck(): void {
    // let currenturl=this.router.url;
    // if(currenturl=='/login-material' || currenturl=='/register'){
    //   this.ismenurequired=false;
    // } else {
    //   this.ismenurequired=true;
    // }
  }
}
