import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TopStoryDto} from '../models/top-story-dto.interface';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsNewsService {

  constructor(private httpClient: HttpClient) { }

  getUsNews(): Observable<TopStoryDto[]> {
    return this.httpClient.get('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=BrzL2PZKeyoI03tjZFEYqyOUwbVRYlmI').pipe(
      map((value: any) => value.results)
    );
  }

}
