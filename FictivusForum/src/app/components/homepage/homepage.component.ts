import { Component, OnInit } from '@angular/core';
//remove this import later
import { AuthenticationService } from "src/app/services/authentication.service";
import { TopicDTO } from 'src/app/helpers/dto/topicDTO';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  testCQRS1(){
    let dto = new TopicDTO("mocklord", "zijn er nog frikandellen?" , new Date());
    this.authenticationService.testCQRS1(dto);
  }

  testCQRS2(){
    this.authenticationService.testCQRS2("mock").subscribe(
      data => {
        if(data.response != null ){
          console.log(new Date());
          console.log(data);
        }else{
          console.log("niks");
        }   
      },
      error => {
        console.log("fout");
      });
  }
  testCQRS3(){
    let dto = new TopicDTO("mocklord", "zijn er nog frikandellen?" , new Date());
    this.authenticationService.testCQRS3(dto);
  }

}
