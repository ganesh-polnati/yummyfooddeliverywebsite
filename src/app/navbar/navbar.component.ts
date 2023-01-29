
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private http:HttpClient){

  }
  data = null ;
  getData(){
    this.http.get('https://fakestoreapi.com/products?limit=5')
    .subscribe((data)=>{
     
  console.log(data);

    })
  }
}
