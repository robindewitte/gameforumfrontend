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
    console.log(new Date() + "cqrs1send");
    this.authenticationService.testCQRS1(dto).subscribe(
      data => {
        if(data.response != null ){
          console.log(new Date() + "cqrs1recieve");
          console.log(data);
        }else{
          console.log("niks");
        }   
      },
      error => {
        console.log("fout");
      });
  }

  testCQRS2(){
    console.log(new Date() + "cqrs2send");
    this.authenticationService.testCQRS2("mock").subscribe(
      data => {
        if(data.response != null ){
          console.log(new Date() + "cqrs2recieve");
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
    console.log(new Date() + "cqrs3send")
    let dto = new TopicDTO("mocklord", "zijn er nog frikandellen?" , new Date());
    this.authenticationService.testCQRS3(dto).subscribe(
      data => {
        if(data.response != null ){
          console.log(new Date() + "cqrs3recieve");
          console.log(data);
        }else{
          console.log("niks");
        }   
      },
      error => {
        console.log("fout");
      });
  }

}
