import { Component, Input, OnInit } from '@angular/core';
import { ResponseDTO } from 'src/app/helpers/dto/responseDTO';
import { TopicDTO } from 'src/app/helpers/dto/topicDTO';
import { Writeservice } from 'src/app/services/write.service';

@Component({
  selector: 'app-topicbuilder',
  templateUrl: './topicbuilder.component.html',
  styleUrls: ['./topicbuilder.component.css']
})
export class TopicbuilderComponent implements OnInit {

  @Input() public subject: string ="";



  model: any = {};
  ErrorMessage = "";
  constructor(private writeService: Writeservice) { }
  
  ngOnInit(): void {

  }

  postTopic(){
    let topicDTO = new TopicDTO();
    let responseDTO = new ResponseDTO();
    topicDTO.title = this.model.topicTitle;
    topicDTO.userName = sessionStorage.getItem("username") as string;
    topicDTO.timeOfPosting = new Date();
    topicDTO.subject = this.subject;
    responseDTO.userName = sessionStorage.getItem("username") as string;
    responseDTO.timeOfPosting =  new Date();
    responseDTO.topicTitle =  this.model.topicTitle;
    responseDTO.content = this.model.content;
    responseDTO.topicSubject = this.subject;
    this.writeService.PostTopic(topicDTO).subscribe(
      data => {
        if(data == false){
          alert(data);
        }else{
          this.ErrorMessage = "geplaatst";
        }   
      },
      error => {
        this.ErrorMessage = "Something went wrong! Check your internet connection";
     });
      this.writeService.PostResponse(responseDTO).subscribe(
        data => {
          if(data == false){
            alert(data);
          }else{
            this.ErrorMessage = "geplaatst";
          }   
        },
        error => {
          this.ErrorMessage = "Something went wrong! Check your internet connection";
      });
  }
}
