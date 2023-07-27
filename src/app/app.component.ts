import {Component} from '@angular/core';
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'jwt-decode';

  token_decode: string | undefined;

  jwt = {
    token: ''
  }

  constructor() {
  }

  decoder(){

    try {

      this.token_decode = jwtDecode(this.jwt.token);

    } catch {

      this.token_decode = 'Enter a valid token';
    }

  }

}
