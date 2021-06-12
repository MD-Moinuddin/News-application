import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TopStoryDto} from '../models/top-story-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtsNewsService {

  constructor(private httpClient: HttpClient) { }

  getArtsNews(): Observable<TopStoryDto[]> {
    return this.httpClient.get('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=BrzL2PZKeyoI03tjZFEYqyOUwbVRYlmI').pipe(
      map((value: any) => value.results)
    );
  }
}
