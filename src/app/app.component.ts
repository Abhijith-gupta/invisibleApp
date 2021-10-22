import { Component, OnInit } from '@angular/core';
import * as Handsontable from 'handsontable';
import { movie } from './interface/movie';
import { MovieServiceService } from './movie-service.service';
// @import '~handsontable/dist/handsontable.full.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{


  constructor(public movieService:MovieServiceService){
    // this.movieService.getMovies().subscribe(res =>{
    //   console.log(res);
    // })
  }

  dataset: any[] = [];
  // id = 'my-custom-id';
  // let data:movie[] = movieService.getMovies().su
  // ngOnInInt(){
    
  // }
  ngOnInit(){
    this.movieService.getMovies().subscribe(res =>{
      console.log(res);
      this.dataset = res;
    })
  }
}
