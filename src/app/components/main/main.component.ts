import { Component, OnInit } from '@angular/core';
import {YoutubeappserviceService} from '../../services/youtubeappservice.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  videos:any[];
  selectedVideo:any;

  constructor(private _youtubeService:YoutubeappserviceService) { 
    
    this.videos = [];
    this._youtubeService.getVideos().subscribe(
      (videos)=>{
        this.videos = videos;
        console.log(this.videos); 
      }
    );
  }

  ngOnInit() {
  }

  verVideo(video:any){
    declare var $;
    this.selectedVideo = video;
    this.selectedVideo.resourceId.videoId += '?autoplay=1';
    $("#modal").modal();
  }
  cerrarModal(){
    declare var $;
    this.selectedVideo = null;
    $("#modal").modal('hide');
  }

  verMas(){
    this._youtubeService.getVideos().subscribe(
      (videos)=>{
        this.videos.push.apply(this.videos,videos);
      }
    );
  }

}
