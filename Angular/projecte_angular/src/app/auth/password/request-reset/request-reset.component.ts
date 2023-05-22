import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form =  {
    email : null
  };

  constructor() {}
  
  ngOnInit(): void {
  }


  onSubmit() {
    
  }
}
