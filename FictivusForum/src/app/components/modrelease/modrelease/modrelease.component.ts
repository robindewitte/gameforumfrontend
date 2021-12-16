import { Component, OnInit } from '@angular/core';
import { TopicDTO } from 'src/app/helpers/dto/topicDTO';
import { Readservice } from 'src/app/services/read.service';


@Component({
  selector: 'app-modrelease',
  templateUrl: './modrelease.component.html',
  styleUrls: ['./modrelease.component.css']
})
export class ModreleaseComponent implements OnInit {
  called: boolean = false;
  topics: Array<TopicDTO> = [];
  ErrorMessage = "";
  constructor(private readService: Readservice) { }

  ngOnInit(): void {
    this.readService.GetAllModReleaseTopics().subscribe(
      data => {
        if(data != null ){
          this.topics = data;         
        }else{
          this.ErrorMessage = "geen berichten gevonden";
        }   
      },
      error => {
        this.ErrorMessage = "Something went wrong! Check your internet connection";
      });
  }

  PostTopic(){
    if(sessionStorage.getItem("username") != null && sessionStorage.getItem("token") != null){
      this.called = true;
    }
    else{
      this.ErrorMessage = "U moet ingelogd zijn om te posten";
    }
  }

  GoToTopic(topicTitleChosen: string){
    
  }

}
