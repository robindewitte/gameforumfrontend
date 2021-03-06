import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDTO } from 'src/app/helpers/dto/loginDTO';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 //variables
 model: any = {};
 ErrorMessage = "";
 loading = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("username") != null){
      this.ErrorMessage = "U bent ingelogd als "+sessionStorage.getItem("username")+""
    }
  }


  login() {
    let dto = new LoginDTO();
    dto.setUsername(this.model.username);
    dto.setPassword(this.model.password);
    this.authenticationService.login(dto)
      .subscribe(
        data => {
          if(data != "Verkeerd"){
            this.setStorageData(data);
            this.ErrorMessage = "U bent ingelogd als "+this.model.username+""
          }else{
            this.ErrorMessage = "Something went wrong! Did you enter the correct credentials?";
          }   
        },
        error => {
          this.ErrorMessage = "Something went wrong! Did you enter the correct credentials?";
          this.loading = false;
        });
  }
  ToRegister(){
    this.router.navigateByUrl("registration");
  }

  setStorageData(data: any){
    sessionStorage.setItem('token', data);
    sessionStorage.setItem('username', this.model.username);
    this.router.navigateByUrl('/home');
  }

}
