import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  load10Movies()
  {
    this.obs = this.http.get("https://3000-cf0666e5-0c11-4612-af62-697e74198fa2.ws-eu01.gitpod.io/users");
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }

  photoURL(urltoSanitize) {
    if(urltoSanitize == undefined){
      return false;
    }
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);
    }

    horrorMovies()
    {
      this.obs = this.http.get("https://3000-cf0666e5-0c11-4612-af62-697e74198fa2.ws-eu01.gitpod.io/movies/genre/Horror");
      this.obs.subscribe(this.getData);
    }

    comedyMovies()
    {
      this.obs = this.http.get("https://3000-cf0666e5-0c11-4612-af62-697e74198fa2.ws-eu01.gitpod.io/movies/genre/Comedy");
      this.obs.subscribe(this.getData);
    }

    dramaMovies()
    {
      this.obs = this.http.get("https://3000-cf0666e5-0c11-4612-af62-697e74198fa2.ws-eu01.gitpod.io/movies/genre/Drama");
      this.obs.subscribe(this.getData);
    }

}
