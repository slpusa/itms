import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphqlService } from '../graphql/graphql.service';

const LOGIN_MUTATION = `
  mutation AuthResolver ($userData : LoginInput!){
    login(loginInput	: $userData){
      userId
      firstName
      email
    }
  }
  `;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private graphql : GraphqlService) { }

  login():void{
    let variabales = {
      userData : {
        username : "udarap@gmail.com",
        password : "1234"
      }
    };
  
    let query = {
      query : LOGIN_MUTATION,
      variables : variabales
    }
    this.graphql.execute(query).subscribe(data => {
      console.log(data);
    });
    
  } 

}
