import { Component, OnInit } from '@angular/core';

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
 returnUrl: string;
 userLoggedIn: string;
 userLoggedInId: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
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
    localStorage.setItem('token', data);
    localStorage.setItem('username', this.model.username);
    this.router.navigateByUrl('/dashboard');
  }

}
