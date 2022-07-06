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
  showDetails=false;
  displayedColumns: string[] = ['name', 'email', 'phone', 'country','action'];

  todoValue:string="";
    tag:string="";
    data!: CustData;
    /*list: CustData[]=[{
      name:"Demo",
      email:"demo@example.com",
      phone:"9999999999",
      country:"Demo Address"
    }];*/



    
  constructor(private http: HttpClient){}
  ngOnInit(){
   this.getData();
  }

  getData(){
    this.http.get<any>('https://randomuser.me/api/').subscribe(data => {

      if(data.info && data.info.results>0){
        data.results.forEach((element:CustData ) => {
          this.data=element;
        });
        console.log("created data",this.data);
      }
        console.log(data);
    })    
  }
  showDetailsNow(){
    this.showDetails=true;
  }
  Refresh(){
    
    this.getData();
    this.showDetails=false;
  }
  ShowLessDetailsNow(){
    this.showDetails=false;
  }
}
