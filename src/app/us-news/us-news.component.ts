import { Component, OnInit } from '@angular/core';
import { ArtsNewsService } from '../../services/arts-news.service';
import {TopStoryDto} from '../../models/top-story-dto.interface';
import {UsNewsService} from '../../services/us-news.service';

@Component({
  selector: 'app-us-news',
  templateUrl: './us-news.component.html',
  styleUrls: ['./us-news.component.scss']
})
export class UsNewsComponent implements OnInit {

  public stories: TopStoryDto[];
  isDataLoad:boolean = false;

  constructor( private topStoriesService: UsNewsService) { }

  ngOnInit(): void {
  this.getUsTopStories();
  }

  getUsTopStories(): void {
    this.isDataLoad = true;
    this.topStoriesService.getUsNews().subscribe(
      (data: TopStoryDto[]) => {
        this.stories = data;
        this.isDataLoad = false;
      },
    );
  }

}
