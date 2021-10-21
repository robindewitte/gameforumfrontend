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
    console.log(new Date().getTime() + "cqrs1send");
    this.authenticationService.testCQRS1(dto).subscribe(
      data => {
        if(data.response != null ){
          console.log(new Date().getTime() + "cqrs1recieve");
          console.log(data);
        }else{
          console.log("cqrs1niks");
        }   
      },
      error => {
        console.log("cqrs1fout");
      });
  }

  testCQRS2(){
    console.log(new Date().getTime() + "cqrs2send");
    this.authenticationService.testCQRS2("mock").subscribe(
      data => {
        if(data != null ){
          console.log(new Date().getTime() + "cqrs2recieve");
          console.log(data);
        }else{
          console.log("cqrs2niks");
          console.log(data);
        }   
      },
      error => {
        console.log("cqrs2fout");
      });
  }

  testCQRS3(){
    console.log(new Date().getTime() + "cqrs3send")
    let dto = new TopicDTO("mocklord", "zijn er nog frikandellen?" , new Date());
    this.authenticationService.testCQRS3(dto).subscribe(
      data => {
        if(data.response != null ){
          console.log(new Date().getTime() + "cqrs3recieve");
          console.log(data);
        }else{
          console.log("cqrs3niks");
        }   
      },
      error => {
        console.log("cqrs3fout");
      });
  }
  testCQRS4(){
    this.testCQRS2();
    this.testCQRS2();
    this.testCQRS1();
    this.testCQRS2();
    this.testCQRS2();
    this.testCQRS2();
    this.testCQRS1();
    this.testCQRS2();
    this.testCQRS2();
    this.testCQRS2();
    this.testCQRS1();
    this.testCQRS1();
    this.testCQRS2();
    this.testCQRS2();
  }

}
