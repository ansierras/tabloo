import { Component } from '@angular/core';
import { BggService } from 'src/services/bgg.service';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  templateUrl: './create-offer.component.html'
})
export class CreateOfferComponent {
  searchString: string;
  constructor(
    private bggService: BggService,
    private xml2jsonService: NgxXml2jsonService) { }

  onSearch(): void {
    this.bggService.searchBgg(this.searchString).subscribe(xmlresult => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlresult, 'text/xml');
      const obj = this.xml2jsonService.xmlToJson(xml);
      console.log(obj);
    });
  }
}
