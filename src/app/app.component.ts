import { Component, OnInit } from '@angular/core';
import { movie } from './interface/movie';
import { MovieServiceService } from './movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tempMovie: movie = {
    budget: '2000000',
    createdAt: '2021-10-12T04:26:42.248Z',
    deletedAt: '',
    id: 2,
    originalLang: 'en',
    originalTitle: 'The Bens:',
    overview: 'This is a scary movie that will get your adrenalin pumping',
    popularity: '233.11',
    releaseDate: '2021-10-11T10:12:58.957Z',
    revenue: '',
    runtime: '',
    status: 'ongoing',
    tagline: '',
    title: 'The Bens',
    updatedAt: '',
    voteAverage: '',
    voteCount: 5,
  };
  constructor(public movieService: MovieServiceService) {}

  dataset: any[] = [];
  ngOnInit() {
    this.movieService.getMovies().subscribe((res) => {
      // console.log(res);
      this.dataset = res;
    });

    // These are the CRUD operations for the movie url

    // this method shows the movie by ID with getMovieById method
    // this.movieService.getMovieById(this.tempMovie.id).subscribe((res) => {
    //   console.log(`movie with id${this.tempMovie.id} is`, res);
    // });


    // this method shows the movie creation by tempMpvie obj with insertMovie method
    // this.movieService.createMovie(this.tempMovie).subscribe(res =>{
    //   console.log("Created a movie obj",res);
    // })


    // this method shows the movie upadate by ID with updateMovie method
    // this.movieService.updateMovie(this.tempMovie,this.tempMovie.id).subscribe(res =>{
    //   console.log("updated the movie",res);
    // })


    // this method delets the movie by ID with deleteMovie method
    // this.movieService.deleteMovie(this.tempMovie.id).subscribe(res =>{
    //   console.log("deleted the movie with id"+this.tempMovie.id);
    // })
  }
}
