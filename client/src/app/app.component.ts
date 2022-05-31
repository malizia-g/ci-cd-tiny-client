import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  //Declare the ninjaTurtles variable
  ninjaTurtles : any;
  //Copy here your server URL
  tmp_server_url = process.env.NG_APP_GITPOD_WORKSPACE_URL;
  port = 5000
  api_url = `${this.tmp_server_url.substring(0,8)}${this.port}-${this.tmp_server_url.substring(8)}`;
  
  constructor(private http: HttpClient) {
    console.log(this.api_url);
    //Request the ninjaTurtles list
    //Update the variable ninjaTurtles with new data
    this.http.get(`${this.api_url}/api/ninjaTurtles`).
    subscribe(data => this.ninjaTurtles = data);  
  }
}

/*
let server_url = process.env.NG_APP_GITPOD_WORKSPACE_URL
this.ninjaTurtles = process.env;*/