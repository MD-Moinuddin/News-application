import { Component, OnInit } from '@angular/core';
import {ArtsNewsService} from '../../services/arts-news.service';
import {ScienceNewsService} from '../../services/science-news.service';
import {TopStoryDto} from '../../models/top-story-dto.interface';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.scss']
})
export class ScienceNewsComponent implements OnInit {

  public stories: TopStoryDto[];
  isDataLoad:boolean = false;

  constructor(private topStoriesService: ScienceNewsService) { }

  ngOnInit(): void {
    this.getArtsTopStories();
  }

  getArtsTopStories(): void {
    this.isDataLoad = true;
    this.topStoriesService.getScienceNews().subscribe(
      (data: TopStoryDto[]) => {
        this.stories = data;
        this.isDataLoad = false;
      },
    );
  }

}
