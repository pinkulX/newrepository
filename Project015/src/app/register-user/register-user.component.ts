import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  
  title = 'Project015';

  registerForm : FormGroup;
  submitted=false;

  constructor(
              private FormBuilder: FormBuilder,
              private HttpClient: HttpClient,
              private router: Router
              ) { }







onSubmit(registerForm : FormGroup) {
    
  let formDataReg = this.registerForm.value;

  console.log('data to save ----->>>>', formDataReg);
  //  this.HttpClient.post('http://localhost:3000/todos',data) .subscribe(    
  //        (data => {

  //         if(data){
  //           console.log('data from rest after saving----',data);
  //          console.log("data posted succesfully");
  //          alert('success');


  //         }
           
           
          
  //        }
  //        )
  //    )

  // JAVAscript  Async activity 

    // 1 - Network call
     // 2 -  DataBase call
     // 3 - File read and write (local file reading and writing)

    /**
     * 
     *  If any js activity is async , then it must accepts a callback .(callback function to this async activity 
     *  is mandatory.)
     * 
     * Callback is good. Promise is better. Observable is best.
     * 
     * Promise  = then() , catch()
     * Observable = subscribe()
     * 
     */


   this.HttpClient.post('http://localhost:3000/registerUser', formDataReg).subscribe((result)=>{

   if(result){
     console.log('data saved successfully--->', result);
     alert('You have successfully registered.');
     this.router.navigate(['/list-user']);

   }

   });
     
   // navigate(){
      //this.router.navigate(['/list-user']);
      // this.router.navigateByUrl('list-user');

      //this.router.navigate(['/list-user']);
   }

   ngOnInit() {
    this.registerForm = this.FormBuilder.group({
        // firstname: '', 
        firstname : new FormControl(''),
        lastname: new FormControl(''), 
        email: new FormControl(''), 
        password: new FormControl('') 
    });
}



}
