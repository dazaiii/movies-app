import { Component, Input, OnInit } from '@angular/core';
import { ActorHttpResponse } from '../../../../shared/response/credit.http-response';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss'],
})
export class ActorComponent implements OnInit {
  @Input() actor: ActorHttpResponse;

  imgSource: string;

  ngOnInit() {
    if (this.actor?.profile_path)
      this.imgSource = environment.posterPath + this.actor.profile_path;
  }
}
