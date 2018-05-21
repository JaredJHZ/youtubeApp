import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class YoutubeappserviceService {
  private nextPageToken:string;
  private url:string = `https://www.googleapis.com/youtube/v3`;
  private lista:string = 'UUuaPTYj15JSkETGnEseaFFg';
  private api:string = `AIzaSyAisOmdA--nPWQSqX7wmMur7mPQCdwyXjQ`;
  videos:any[];
  
  constructor(private _httpClient:HttpClient) {
    this.videos = [];
   }
  
  getVideos(){
    let url = this.url+'/playlistItems';
    if(this.nextPageToken){
      let params = {
        part:'snippet',
        maxResults:'10',
        playlistId :this.lista,
        key:this.api,
        pageToken:this.nextPageToken
        
      };
      return this._httpClient.get(url,{params}).map(
        (result)=>{
          let i=0;
          this.nextPageToken = result.nextPageToken;
          for(let video of result.items){
            if(video!=undefined && i!=9){
            let snippet = video.snippet;
            this.videos.push(snippet);  
            i++;
          }
          }
          return this.videos;
        }
      )
    }else{   let params = {
        part:'snippet',
        maxResults:'10',
        playlistId :this.lista,
        key:this.api
      };
      return this._httpClient.get(url,{params}).map(
        (result)=>{
          let i=0;
          this.nextPageToken = result.nextPageToken;
          for(let video of result.items){
            if(video!=undefined && i!=9){
            let snippet = video.snippet;
            this.videos.push(snippet);  
            i++;
          }
          }
          return this.videos;
        }
      )
    }
  
  }
 
}