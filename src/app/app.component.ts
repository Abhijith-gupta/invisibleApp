import { Component, OnInit } from '@angular/core';
import { movie } from './interface/movie';
import { MovieServiceService } from './movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{


  constructor(public movieService:MovieServiceService){  }

  dataset: movie[] = [];
  ngOnInit(){
    this.movieService.getMovies().subscribe(res =>{
      console.log(res);
      this.dataset = res;
    })
  }
}
