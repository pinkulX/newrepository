import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  public userList : [];

    constructor(
        //private $modal: $ModalManagerService,
        private http: HttpClient

    ){}
    

    ngOnInit() {
      //   this.http.get('http://localhost:3000/listUser',{responseType:"json"}).subscribe(
      //   response => {

      //       this.data = response as string[];
      //       console.log(this.data);
      //       //var sample = JSON.stringify(response);
      //  });



      this.http.get('http://localhost:3000/listUser').subscribe(function(response){
        
        if(response){
          console.log('  list data  >>>>>', response);

          this.userList = response;  // [ {},{},{} ]
         

        }else{
          // if array is blank array

              console.log('No data available.');
        }

      });
     
    }

  }