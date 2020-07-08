import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingListComponent} from './training/training-list.component';
import { UppercaseFirstWord } from './shared/uppercase-first-word.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TrainingListComponent,
    UppercaseFirstWord
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
