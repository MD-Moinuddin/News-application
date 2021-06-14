import { Component, OnInit } from '@angular/core';
import {TopStoryDto} from '../../models/top-story-dto.interface';
import {WorldNewsService} from '../../services/world-news.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.scss']
})
export class WorldNewsComponent implements OnInit {

  public stories: TopStoryDto[];
  isDataLoad:boolean = false;

  constructor(private topStoriesService: WorldNewsService) { }

  ngOnInit(): void {
    this.getWorldTopStories();
  }

  getWorldTopStories(): void {
    this.isDataLoad = true;
    this.topStoriesService.getWorldNews().subscribe(
      (data: TopStoryDto[]) => {
        this.stories = data;
        console.log(this.stories);
        this.isDataLoad = false;
      },
    );
  }

}
