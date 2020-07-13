import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingListComponent} from './training/training-list.component';
import { UppercaseFirstWord } from './shared/uppercase-first-word.pipe';
import { StarComponent } from './starComponent/star.component';
import { TrainingDetailComponent } from './training/training-detail/training-detail.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    TrainingListComponent,
    UppercaseFirstWord,
    StarComponent,
    TrainingDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'trainings', component: TrainingListComponent },
      {path: 'trainings/:id', component: TrainingDetailComponent },
      {path: 'welcome', component: HomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
