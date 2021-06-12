import { Component, OnInit } from '@angular/core';

import { TopStoryDto } from '../../models/top-story-dto.interface';
import {HomeNewsService} from '../../services/home-news.service';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {

  public stories: TopStoryDto[];
  isDataLoad:boolean = false;

  constructor(private topStoriesService: HomeNewsService) { }

  ngOnInit(): void {
    this.getHomeTopStories();
  }

  getHomeTopStories(): void {
      this.isDataLoad = true;
      // console.log(1);
      this.topStoriesService.getHomeNews().subscribe(
          // the first argument is a function which runs on success
          (data: TopStoryDto[]) => {
              this.stories = data;
              // debugger;
              this.isDataLoad = false;
          },
      );
  }


}
