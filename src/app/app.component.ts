import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CustData} from './CustomerDataInterface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'customer-details';
  displayedColumns: string[] = ['name', 'email', 'phone', 'country','action'];

  todoValue:string="";
    tag:string="";
    list: CustData[]=[];
    /*list: CustData[]=[{
      name:"Demo",
      email:"demo@example.com",
      phone:"9999999999",
      country:"Demo Address"
    }];*/



    
  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get<any>('https://randomuser.me/api/').subscribe(data => {

    if(data.info && data.info.results>0){
      data.results.forEach((element: { name: { first: any; }; email: any; phone: any; location: { country: any; }; }) => {
        this.list.push({name:element.name.first,email:element.email,phone:element.phone,country:element.location.country})
      });
      console.log("created data",this.list);
    }
      console.log(data);
  })    
  }
}
