import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BggService {
  constructor(private httpClient: HttpClient) {}
  searchBgg(searchString: string): Observable<any> {
    return this.httpClient.get(`https://www.boardgamegeek.com/xmlapi2/search?type=boardgame&query=${searchString}`,
    { responseType: 'text' });
  }
}
