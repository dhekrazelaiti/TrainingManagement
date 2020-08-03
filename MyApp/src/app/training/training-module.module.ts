import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TrainingListComponent } from './training-list.component';
import { UppercaseFirstWord } from '../shared/uppercase-first-word.pipe';
import { StarComponent } from '../starComponent/star.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { TrainingGuardGuard } from './training-guard.guard';
import { TrainingEditComponent } from './training-edit/training-edit.component';
import { TrainingDeleteComponent } from './training-delete/training-delete.component';





@NgModule({
  declarations: [
    TrainingListComponent,
    UppercaseFirstWord,
    StarComponent,
    TrainingDetailComponent,
    TrainingEditComponent,
    TrainingDeleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
{path: 'trainings', component: TrainingListComponent },
{path: 'trainings/:id',
      canActivate : [TrainingGuardGuard],
      component: TrainingDetailComponent
},
{path: 'trainings-edit/:id', component: TrainingEditComponent }
    ])
  ],
})
export class TrainingModuleModule { }
