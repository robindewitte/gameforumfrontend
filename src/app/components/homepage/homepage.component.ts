import { Component, OnInit } from '@angular/core';
//remove this import later
import { AuthenticationService } from "src/app/services/authentication.service";
import { ActivatedRoute, Router } from '@angular/router';
import { TopicDTO } from 'src/app/helpers/dto/topicDTO';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }


  GoToModRelease(){
    this.router.navigateByUrl("modreleases");
  }
  GoToDiscussie(){
    this.router.navigateByUrl("discussies");
  }
  GoToMemes(){
    this.router.navigateByUrl("memes");
  }

}
