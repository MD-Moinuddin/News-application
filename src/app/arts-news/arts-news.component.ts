import { Component, OnInit } from '@angular/core';
import {TopStoryDto} from '../../models/top-story-dto.interface';
import {ArtsNewsService} from '../../services/arts-news.service';

@Component({
  selector: 'app-arts-news',
  templateUrl: './arts-news.component.html',
  styleUrls: ['./arts-news.component.scss']
})
export class ArtsNewsComponent implements OnInit {

  public stories: TopStoryDto[];
  isDataLoad:boolean = false;

  constructor(private topStoriesService: ArtsNewsService) { }

  ngOnInit(): void {
    this.getArtsTopStories();
  }

  getArtsTopStories(): void {
    this.isDataLoad = true;
    this.topStoriesService.getArtsNews().subscribe(
      // the first argument is a function which runs on success
      (data: TopStoryDto[]) => {
        this.stories = data;
        this.isDataLoad = false;
        // debugger;
      },
    );
  }

}
