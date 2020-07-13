import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
