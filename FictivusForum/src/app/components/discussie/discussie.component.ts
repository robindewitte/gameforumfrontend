import { Component, OnInit } from '@angular/core';
import { TopicDTO } from 'src/app/helpers/dto/topicDTO';
import { Readservice } from 'src/app/services/read.service';

@Component({
  selector: 'app-discussie',
  templateUrl: './discussie.component.html',
  styleUrls: ['./discussie.component.css']
})
export class DiscussieComponent implements OnInit {
  called: boolean = false;
  topics: Array<TopicDTO> = [];
  ErrorMessage = "";

  constructor(private readService: Readservice) { }

  ngOnInit(): void {
    this.readService.GetAllDiscussionTopics().subscribe(
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
    if(localStorage.getItem("username") != null && localStorage.getItem("token") != null){
      this.called = true;
    }
    else{
      this.ErrorMessage = "U moet ingelogd zijn om te posten";
    }
  }

}
