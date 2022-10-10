import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import moviesCategories from '../moviesCategories.json'
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any= []
  public form: FormGroup;
  fiveRatings:boolean=false;
  count:number=0;
  weightedMoviesArray:any=[];
  recomendation:boolean=false;
  moviesNotRated:any=[]
  moviesRecommended:any=[]

  @ViewChild('widgetsContent', { read: ElementRef }) widgetsContent: ElementRef<any>;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.movies=moviesCategories
    // console.log(this.movies)
  }

  AddRatings(rating:number, mov:any){

    this.movies.forEach((x:any)=>{

      if(x.movieId==mov.movieId){
        x.ratings=rating;
      }
    })
    const result = this.movies.filter((word:any) => word.ratings>0);
   if(result.length>=5){
    this.fiveRatings=true;

   }

  }
  weightedMoviesMovies(){
    this.movies.forEach((x:any)=>{
      if(x.ratings >0){
        this.weightedMoviesArray.push(x)
      }else{
  this.moviesNotRated.push(x)
      }
    })
  }
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }
  getrecommendations(){
  this.recomendation=true;
 this.weightedMoviesMovies()
  this.weightedMoviesArray.forEach((x:any) => {
          x.Adventure = x.ratings*x.Adventure
          x.Animation= x.ratings*x.Animation
          x.Comedy=x.ratings*x.Comedy
          x.Fantasy=x.ratings*x.Fantasy
          x.Romance=x.ratings*x.Romance
          x.Drama=x.ratings*x.Drama
          x.Action=x.ratings*x.Action
          x.Crime=x.ratings*x.Crime
          x.Thriller=x.ratings*x.Thriller
          x.Horror=x.ratings*x.Horror
          x.Mystery=x.ratings*x.Mystery
          x.SciFi=x.ratings*x.SciFi
          x.Documentary=x.ratings*x.Documentary
          x.Musical=x.ratings* x.Musical
    });
  var Adventure = this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Adventure; }, 0);
   var Animation =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Animation; }, 0);
   var Comedy =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Comedy; }, 0);
   var Fantasy =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Fantasy; }, 0);
   var Romance =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Romance; }, 0);
   var Drama =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Drama; }, 0);
   var Action =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Action; }, 0);
   var Crime =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Crime; }, 0);
   var Thriller =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Thriller; }, 0);
   var Horror =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Horror; }, 0);
   var Mystery =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Mystery; }, 0);
   var SciFi =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.SciFi; }, 0);
   var Documentary =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Documentary; }, 0);
   var Musical =this.weightedMoviesArray.reduce(function (acc:any, obj:any) { return acc + obj.Musical; }, 0);

  //  console.log(this.weightedMoviesArray)
  //   console.log(Romance)
 var userProfile={"Adventure":Adventure, "Animation": Animation, "Comedy":Comedy, "Fantasy":Fantasy,"Romance":Romance,"Drama":Drama,"Action":Action,"Crime":Crime, "Thriller":Thriller, "Horror":Horror, "Mystery":Mystery, "SciFi":SciFi, "Documentary":Documentary, "Musical":Musical }
// console.log(userProfile)

 this.moviesNotRated.forEach((x:any)=>{
          x.Adventure = x.Adventure*userProfile.Adventure
          x.Animation= x.Animation*userProfile.Animation
          x.Comedy=x.Comedy*userProfile.Comedy
          x.Fantasy=x.Fantasy*userProfile.Fantasy
          x.Romance=x.Romance*userProfile.Romance
          x.Drama=x.Drama*userProfile.Drama
          x.Action=x.Action*userProfile.Action
          x.Crime=x.Crime*userProfile.Crime
          x.Thriller=x.Thriller*userProfile.Thriller
          x.Horror=x.Horror*userProfile.Horror
          x.Mystery=x.Mystery*userProfile.Mystery
          x.SciFi=x.SciFi*userProfile.SciFi
          x.Documentary=x.Documentary*userProfile.Documentary
          x.Musical=x.Musical* userProfile.Musical
          let categories = Object.keys(x);
          var categoryList: string[]=[]
          categories.forEach((cat:any) => {
            if(x[cat]>0){
              categoryList.push(`${cat}`)
              // console.log(`There are ${x[cat]} ${cat}`);
            }

          })
          this.moviesRecommended.push({"title":x.title, "sum":x.Adventure+ x.Animation+x.Comedy+ x.Fantasy+ x.Romance+x.Drama+x.Action+ x.Crime+x.Thriller+ x.Horror+ x.Mystery+x.SciFi+x.Documentary+ x.Musical+x.Adventure, "categoryList":categoryList})

 })
//  console.log(this.moviesRecommended)

  }
}
