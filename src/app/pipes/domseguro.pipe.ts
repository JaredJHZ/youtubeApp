import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(
    private _domsanitizer:DomSanitizer
  ){

  }
  transform(id: string, url: string): any {
    console.log(url+id);
    return this._domsanitizer.bypassSecurityTrustResourceUrl(url+id);  
  }

}
