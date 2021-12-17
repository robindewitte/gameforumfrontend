import { Component, OnInit } from '@angular/core';
import { RegisterDTO } from "src/app/helpers/dto/registerDTO";
import { Router } from '@angular/router';
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

   //variables
   public formContent: any = {};
   ErrorMessage: string[] = [];
   private resultMsg: string = "";
   private loading = false;
 
   constructor(   private router: Router,
     private authenticationService: AuthenticationService,) { }
 
   ngOnInit(): void {
   }
 
   register() {
     this.loading = true;
     let dto = new RegisterDTO(this.formContent.username, this.formContent.email, this.formContent.password, this.formContent.passwordConfirm);
     this.authenticationService.register(dto)
       .subscribe(
         data => {
           if(data == "FOUT! De ingevoerde gegevens voldoen niet aan de eisen."){
             alert(data);
           }
           else{
             this.loading = false;
             this.resultMsg = data;
             this.router.navigateByUrl("home");
           }
           
         },
         error => {
           this.ErrorMessage.push(error);
           console.log(error);
           this.loading = false;
         });
   }
 

}
