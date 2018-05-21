import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';

//services
import {YoutubeappserviceService} from './services/youtubeappservice.service';
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YoutubeappserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
