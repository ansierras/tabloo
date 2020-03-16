import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { BggGame } from 'src/models/interfaces';

@Injectable()
export class BggService {
  constructor(
    private httpClient: HttpClient,
    private xml2jsonService: NgxXml2jsonService
  ) { }

  searchBgg(searchString: string): Promise<BggGame[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`https://www.boardgamegeek.com/xmlapi2/search?type=boardgame&query=${searchString}`,
        { responseType: 'text' }).subscribe(xmlresult => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlresult, 'text/xml');
          const obj: any = this.xml2jsonService.xmlToJson(xml);
          console.log(obj.items.item);
          if (obj.items.item) {
            const xmlItems = Array.isArray(obj.items.item) ? obj.items.item : [obj.items.item];
            const gameIds = this.mapJsonToIds(xmlItems);
            console.log(gameIds);
            this.searchForGames(gameIds).subscribe(gameResultsXml => {
              const xml2 = parser.parseFromString(gameResultsXml, 'text/xml');
              const obj2: any = this.xml2jsonService.xmlToJson(xml2);
              const parsed = Array.isArray(obj2.items.item) ? obj2.items.item : [obj2.items.item];
              const gameResults = parsed.map(g => {
                const id = Number(g['@attributes'].id);
                const name = Array.isArray(g.name) ? g.name[0]['@attributes'].value : g.name['@attributes'].value;
                const imgUrl = g.image;
                const thumbnailUrl = g.thumbnail;
                const yearPublished = Number(g.yearpublished['@attributes'].value);
                return {
                  id,
                  name,
                  imgUrl,
                  yearPublished,
                  thumbnailUrl
                };
              });
              resolve(gameResults);
            });
          } else {
            reject('No se encontraron resultados');
          }
        });
    });

  }

  mapJsonToIds(itemsJson: any[]): any[] {
    return itemsJson.map((item) => {
      return item['@attributes'].id;
    });
  }

  searchForGames(ids: string[]): Observable<any> {
    return this.httpClient.get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${ids.join(',')}`, { responseType: 'text' });
  }


}
