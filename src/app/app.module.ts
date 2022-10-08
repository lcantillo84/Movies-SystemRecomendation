import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes, RouterModule} from '@angular/router';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes : Routes =[
  { path:"", component:MovieComponent
  }

    ]
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
